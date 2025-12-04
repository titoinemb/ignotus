use actix_files::NamedFile;
use actix_web::{web, HttpRequest, HttpResponse, Result, Error,error::ErrorNotFound, http::header::{ContentDisposition,DispositionType,HeaderName,HeaderValue},};
use std::path::{PathBuf,Path};
use std::env;
use serde_json::json;

pub async fn file(
    req: HttpRequest,
    path: web::Path<(String,)>,
) -> Result<HttpResponse, Error> {
    let raw: String = path.into_inner().0;

    // reject absolute paths
    if raw.starts_with('/') {
        let err = json!({ "error": "absolute paths are not allowed" });
        return Err(ErrorNotFound(err));
    }

    // validate each component
    let valid: bool = raw
        .split('/')
        .all(|segment: &str| {
            !segment.is_empty()
                && segment
                    .chars()
                    .all(|c: char| c.is_ascii_alphanumeric() || c == '-' || c == '_' || c == '.')
        });

    if !valid {
        let err: serde_json::Value = json!({ "error": "invalid filename" });
        return Err(ErrorNotFound(err));
    }

    // locate the `files` directory
    let exe: PathBuf = env::current_exe()
        .map_err(|_| ErrorNotFound(json!({ "error": "cannot get executable path" })))?;
    let exe_dir: &Path = exe
        .parent()
        .ok_or_else(|| ErrorNotFound(json!({ "error": "cannot get executable directory" })))?;

    let candidates: [PathBuf; 4] = [
        exe_dir.join("..").join("..").join("files"),
        exe_dir.join("..").join("files"),
        exe_dir.join("files"),
        PathBuf::from("files"),
    ];

    let base: PathBuf = candidates
        .iter()
        .find_map(|c: &PathBuf| {
            if c.exists() {
                std::fs::canonicalize(c).ok()
            } else {
                None
            }
        })
        .ok_or_else(|| ErrorNotFound(json!({ "error": "files directory not found" })))?;

    let requested_path: &Path = Path::new(&raw);
    let full_path: PathBuf = base.join(requested_path);

    let canon: PathBuf = std::fs::canonicalize(&full_path)
        .map_err(|_| ErrorNotFound(json!({ "error": "file not found" })))?;

    if !canon.starts_with(&base) {
        let err: serde_json::Value = json!({ "error": "invalid path" });
        return Err(ErrorNotFound(err));
    }

    let disposition: ContentDisposition = ContentDisposition {
        disposition: DispositionType::Inline,
        parameters: vec![],
    };

    let file: NamedFile = NamedFile::open(canon)?;

    // Create a response with headers for streaming
    let mut response: HttpResponse = file.use_last_modified(true).into_response(&req);
    
    // Set the Accept-Ranges header for MP4 files
    if raw.ends_with(".mp4") {
        response.headers_mut().insert(
            HeaderName::from_static("accept-ranges"),
            HeaderValue::from_static("bytes"),
        );
    }

    // Set the Content-Disposition header
    response.headers_mut().insert(
        HeaderName::from_static("content-disposition"),
        HeaderValue::from_str(&disposition.to_string()).unwrap(),
    );

    Ok(response)
}