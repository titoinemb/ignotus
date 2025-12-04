use actix_web::{web, HttpResponse, Responder,Result as ActixResult,error::ErrorInternalServerError,};
use mongodb::{options::ClientOptions,Client, Collection};
use mongodb::bson::{doc,Bson,Document};
use rand::{distributions::Alphanumeric,Rng,prelude::SliceRandom,thread_rng,};
use serde::Deserialize;
use serde_json::json;
use futures_util::stream::TryStreamExt;
use crate::functions::verifcrypt;
use crate::functions::encrypt;
use std::env;

#[derive(Deserialize)]
pub struct LoginInput {
  username: String,
  password: Vec<String>,
}

pub fn generate_token() -> String {
  rand::thread_rng()
    .sample_iter(&Alphanumeric)
    .take(50)
    .map(char::from)
    .collect()
}

static SESSION_NAME_LIST: &[&str] = &[
  "Rose", "Lily", "Daisy", "Tulip", "Iris", "Violet", "Poppy", "Orchid", "Marigold", "Peony",
  "Sunflower", "Hyacinth", "Carnation", "Bluebell", "Magnolia", "Azalea", "Begonia", "Chrysanthemum", "Lilac", "Camellia",
  "Heather", "Ranunculus", "Freesia", "Anemone", "Zinnia", "Aster", "Gladiolus", "Buttercup", " Dahlia", "Sweetpea",
  "Gardenia", "Primrose", "Foxglove", "Hibiscus", "Lotus", "Marigold", "Primula", "Snowdrop", "Verbena", "Wisteria",
  "Petunia", "Nerine", "Columbine", "Scilla", "Gazania", "Celandine", "Cleome", "Amaryllis", "Salvia", "Anthurium",
  "Fox", "Wolf", "Swan", "Otter", "Hawk", "Rabbit", "Bear", "Deer", "Eagle", "Fawn",
  "Badger", "Lynx", "Seal", "Puffin", "Heron", "Bison", "Ferret", "Cougar", "Mole", "Otter (duplicate)", "Beaver",
  "Weasel", "Stoat", "Badger", "Elk", "Moose", "Caribou", "Antelope", "Gazelle", "Kangaroo", "Wallaby",
  "Koala", "Platypus", "Wombat", "Dingo", "Coyote", "Jackal", "Hyena", "Vulture", "Falcon", "Kite",
  "Raven", "Crow", "Magpie", "Sparrow", "Finch", "Canary", "Pigeon", "Dove", "Parrot", "Macaw",
  "Toucan", "Kingfisher", "Pelican", "Albatross", "Seagull", "Orca", "Dolphin", "Whale", "Shark", "Ray",
  "Turtle", "Tortoise", "Iguana", "Chameleon", "Gecko", "Salamander", "Frog", "Toad", "Newt", "Salmon",
  "Trout", "Carp", "Pike", "Stingray", "Clownfish", "Seahorse", "Crab", "Lobster", "Shrimp", "Octopus",
  "Squid", "Hermit", "Moth", "Butterfly", "Beetle", "Ladybug", "Dragonfly", "Damselfly", "Ant", "Bee",
  "Wasp", "Hornet", "Grasshopper", "Locust", "Cricket", "PrayingMantis", "Spider", "Scorpion", "Centipede", "Millipede",
  "Sky", "Oak", "Stone", "Willow", "River", "Breeze", "Meadow", "Slate", "Ember", "Fern",
  "Cedar", "Glade", "Harbor", "Cliff", "Prairie", "Grove", "Tide", "Dune", "Brook", "Cove",
  "Lagoon", "Marsh", "Bog", "Fen", "Delta", "Estuary", "Rapids", "Cascade", "Waterfall", "Ridge",
  "Peak", "Summit", "Valley", "Plateau", "Canyon", "Gorge", "Hollow", "Thicket", "Foothill", "Highland",
  "Spark", "Echo", "Pulse", "Quest", "Nova", "Drift", "Glow", "Nimbus", "Hush", "Wander",
  "Glimmer", "Whisper", "Flare", "Zephyr", "Rift", "Quill", "Bolt", "Anchor", "Voyage", "Atlas",
  "Ember", "Glade", "Halo", "Prism", "Spectrum", "Aurora", "Comet", "Meteor", "Orbit", "Solstice",
  "Equinox", "Lumen", "Radiant", "Lucid", "Mistral", "Boreal", "Zenith", "Nadir", "Echoes", "Murmur",
  "Ripple", "Cascade", "Torrent", "Gale", "Tempest", "Sirocco", "Cyclone", "Vortex", "Maelstrom", "Zephyr",
  "Brisk", "Mellow", "Velvet", "Silk", "Quartz", "Onyx", "Granite", "Basalt", "Limestone", "Sandstone",
  "Pebble", "Meteor", "Asteroid", "Galaxy", "Nebula", "Stellar", "Cosmos", "Orbit", "Quasar", "Pulsar",
  "Comet", "Celeste", "Luna", "Sol", "Astra", "Novae", "Halo", "Eclipse", "Shadow", "Glimpse",
  "Fable", "Rune", "Sigil", "Glyph", "Charm", "Talisman", "Relic", "Myth", "Legend", "Saga",
  "Voyager", "Seeker", "Warden", "Keeper", "Guardian", "Sentinel", "Nomad", "Ranger", "Scout", "Pathfinder",
  "Harbinger", "Oracle", "Sage", "Seer", "Prophet", "Shaman", "Druid", "Bard", "Minstrel", "Pilgrim",
  "Mariner", "Skipper", "Corsair", "Buccaneer", "Voyageur", "Explorer", "Pioneer", "Trailblazer", "Advent", "Roamer",
  "Nomadic", "Drifter", "Rover", "Ranger", "Maverick", "Outrider", "Vagabond", "Wayfarer", "Globetrotter", "Wanderer",
  "Sparkle", "Shimmer", "Twilight", "Dawn", "Dusk", "Nocturne", "Midnight", "Starlight", "Moonbeam", "Sunrise",
  "Sunset", "Horizon", "Vista", "Panorama", "Outlook", "Beacon", "Lighthouse", "Lantern", "Candle", "Flame",
  "Kindle", "Blaze", "Inferno", "EmberGlow", "Smoulder", "Ash", "Char", "Cinder", "Soot", "Embersong",
  "Sylvan", "Verdant", "Viridian", "Moss", "Lichen", "Ivy", "Vine", "Bramble", "Thorn", "Briar",
  "Sable", "Ivory", "Cerulean", "Azure", "Cobalt", "Teal", "Turquoise", "Mint", "Olive", "Chartreuse",
  "Amber", "Ochre", "Saffron", "Crimson", "Scarlet", "Ruby", "Garnet", "Maroon", "Burgundy", "Roseate",
  "Pearl", "Opal", "Jade", "Emerald", "Topaz", "Sapphire", "Amethyst", "Onyx", "Obsidian", "Crystal",
  "Glacia", "Frost", "Snow", "Blizzard", "Hail", "Icicle", "Permafrost", "AuroraBorealis", "Polar", "Tundra",
  "Sirocco", "Monsoon", "Mistral", "TradeWind", "Tailwind", "Headwind", "Crosswind", "Breezelet", "Zephyrus", "Solace",
  "Serene", "Calm", "Tranquil", "Still", "Mute", "Quiet", "Soothe", "Lull", "Pause", "Repose",
  "Muse", "Muselet", "Inspire", "Kindred", "Affinity", "Kin", "Tribe", "Clan", "Quartet", "Duet",
  "Solo", "Encore", "Prelude", "Interlude", "Coda", "Cadence", "Tempo", "Rhythm", "Pulsebeat", "Heartbeat",
  "Sync", "Chord", "Harmonic", "Melody", "Aria", "Ballad", "Saga", "Tale", "Chronicle", "Ledger",
  "AtlasPeak", "AzureSky", "Birch", "Maple", "Spruce", "Pine", "Fir", "Hemlock", "Sequoia", "Redwood",
  "Acorn", "Seed", "Sapling", "Bough", "Branch", "Twig", "Leaf", "Blossom", "Petal", "Stamen",
  "Pistil", "Bud", "Bloom", "Florid", "Verdure", "Greenwood", "Underwood", "Deadwood", "Driftwood", "Barnacle",
  "Coral", "Reef", "Atoll", "Islet", "Isle", "Peninsula", "Cape", "Headland", "Archipelago", "Sound",
  "Fjord", "Strait", "Channel", "Mariner'sRest", "Anchorite", "Harborlight", "Beaconry", "Corsair'sCove", "Stormhold", "Safehaven",
  "Outpost", "Camp", "Haven", "Refuge", "Sanctum", "Sanctuary", "Asylum", "Bastion", "Citadel", "Fortress",
  "Keep", "Stronghold", "Watchtower", "Lookout", "Signal", "Semaphore", "Beacon", "Pharos", "Lanternlight", "Torch",
  "Emissary", "Envoy", "Herald", "Banner", "Pennant", "Standard", "Ensign", "Flag", "Blazon", "Crest",
  "Emblem", "Sigil", "Badge", "Token", "Mark", "Stamp", "Seal", "Warrant", "Credential", "Permit",
  "Ticket", "Pass", "Key", "Keystone", "Lock", "Latch", "BoltKey", "Cipher", "RuneKey", "Codeword",
  "Glyphic", "Runic", "Elder", "Ancient", "Prime", "Alpha", "Omega", "Apex", "Vertex", "Pivot",
  "Cornerstone", "Foundation", "Groundwork", "Bedrock", "Basal", "Core", "Kernel", "Nucleus", "Heart", "Soul",
  "Spirit", "Essence", "Quintessence", "Eidolon", "Phantom", "Specter", "Wraith", "Shade", "Gloom", "Glimmering",
  "Radiance", "Lustre", "Sheen", "Polish", "Gloss", "Matte", "Velour", "Suede", "Silken", "Saturn",
  "Jupiter", "Mercury", "Venus", "Mars", "Earth", "Neptune", "Uranus", "Pluto", "Ceres", "Eris",
  "Vesta", "Pallas", "AtlasStar", "CometTail", "StellarWind", "Solaris", "Lunaris", "Nebulae", "Interstellar", "DeepSky",
  "BlueMoon", "BlackHole", "EventHorizon", "Singularity", "CosmicDust", "Photon", "Neutrino", "Quanta", "Quantum", "Nano",
  "Micro", "Macro", "Giga", "Tera", "Peta", "Exa", "Zetta", "Yotta", "Byte", "Bit",
  "Pixel", "Vector", "Raster", "Glyph", "Font", "Typeface", "Kerning", "Leading", "Baseline", "Ascender",
  "Descender", "Script", "Cursive", "Italic", "Bold", "Regular", "Mono", "Sans", "Serif", "Display",
  "Panel", "Widget", "Node", "Edge", "Hub", "Spoke", "Mesh", "Grid", "Lattice", "Matrix",
  "Vectorfield", "Scalar", "Tensor", "Flux", "Flow", "Stream", "Current", "Driftwood", "Eddy", "Whirlpool",
  "Gyre", "Spiral", "Helix", "Strata", "Layer", "Sheet", "Plate", "Mantle", "Crust", "CoreStone",
  "Iron", "Steel", "Bronze", "Copper", "Brass", "Nickel", "Titanium", "Alloy", "Chrome", "Platinum",
  "Gold", "Silver", "MercuryMetal", "Lead", "Tin", "Zinc", "Cobalt", "Lithium", "Sodium", "Potassium",
  "Neon", "Argon", "Krypton", "Xenon", "Radon", "Beryl", "TopazStone", "OnyxStone", "Jasper", "ObsidianStone",
  "GalaxyGate", "Starfall", "Stardust", "Moonshadow", "Sunflare", "Skyward", "Seaward", "Landfall", "Highwater", "Lowtide",
  "Spring", "Summer", "Autumn", "Winter", "Equinoxes", "Solstices", "Harvest", "HarvestMoon", "BluebellWood", "QuietGlen",
  "Silverleaf", "Goldleaf", "Bronzeleaf", "Ironbark", "Ashwood", "Blackthorn", "Hawthorn", "Rowan", "Elder", "Yew",
  "Beech", "Hornbeam", "Chestnut", "Walnut", "Nutmeg", "Clove", "Cinnamon", "Ginger", "SaffronSpice", "Paprika",
  "Basil", "Thyme", "Rosemary", "Oregano", "MintHerb", "SageHerb", "Dill", "Fennel", "Coriander", "Cilantro",
  "Parsley", "Chive", "LavenderHerb", "Chamomile", "Lemongrass", "Bergamot", "Citronella", "VerbenaHerb", "Bayleaf", "Tarragon",
  "Odyssey", "Pilgrimage", "Questline", "Journey", "Expedition", "Escapade", "Venture", "Enterprise", "Undertaking", "Mission",
  "Crusade", "Campaign", "Operation", "Drive", "Push", "Sprint", "Marathon", "Relay", "Circuit", "Loop",
  "OrbitRun", "SkyTrail", "SeaPath", "LandRoad", "StoneWay", "RiverRun", "Feather", "QuillPen", "Ink", "Scroll",
  "Manuscript", "Scripture", "Codex", "LedgerBook", "Journal", "Diary", "ChronicleBook", "Archive", "Vault", "Repository",
  "Cache", "Stash", "Trove", "Hoards", "Chest", "Crate", "Box", "Bundle", "Pack", "Satchel",
  "Saddle", "Harness", "Bridle", "Reins", "Compass", "Map", "Chart", "Guide", "Manual", "Blueprint",
  "Draft", "Sketch", "Outline", "Plan", "Scheme", "Design", "Pattern", "Mosaic", "Patchwork", "Quilt",
  "Tapestry", "Weave", "Loom", "Spindle", "Reel", "Bobbin", "Fiber", "Thread", "Cord",
];

/**
 * Input:
 *  username = the username
 *  password = the list of password in [] (list)
 * Return:
 *  1 = loginned
 *  2 = password or username is not correct
 *  3 = error server
*/
pub async fn login(input: web::Json<LoginInput>) -> ActixResult<impl Responder> {
  let username: &String = &input.username;
  let password: &Vec<String> = &input.password;

  if username.is_empty() || password.is_empty() {
    return Ok(HttpResponse::BadRequest().json(json!({
      "message": "2"
    })));
  }

  let url: String = match env::var("MONGODB_URI") {
    Ok(value) => value,
    Err(_) => {
      return Ok(HttpResponse::InternalServerError().json(json!({
        "message": "2"
      })));
    },
  };

  let client_options: ClientOptions = ClientOptions::parse(&url)
    .await
    .map_err(|_| ErrorInternalServerError(json!({ "message": "3" })))?;

  let client: Client = Client::with_options(client_options)
    .map_err(|_| ErrorInternalServerError(json!({ "message": "3" })))?;

  let collection: Collection<Document> = client
    .database("ignotus")
    .collection("accounts");

  let filter: Document = doc! { "username": username };
  let mut cursor: mongodb::Cursor<Document> = collection
    .find(filter, None)
    .await
    .map_err(|_| ErrorInternalServerError(json!({ "message": "3" })))?;

  let mut keys: Vec<Bson> = Vec::new();
  while let Some(doc) = cursor
    .try_next()
    .await
    .map_err(|_| ErrorInternalServerError(json!({ "message": "3" })))? {
    if let Some(Bson::Array(arr)) = doc.get("password") {
      keys.extend(arr.clone());
    }
  }

  for (i, key) in keys.iter().enumerate() {
    let hash: &str = match key {
      Bson::String(s) => s.as_str(),
      _ => {
        return Ok(HttpResponse::BadRequest().json(json!({
          "message": "3"
        })));
      }
    };

    let pwd: &str = match password.get(i) {
      Some(p) => p.as_str(),
      None => {
        return Ok(HttpResponse::BadRequest().json(json!({
          "message": "2"
        })));
      }
    };

    match verifcrypt::decrypt(pwd, hash) {
      Ok(1) => continue,
      Ok(2) => {
        return Ok(HttpResponse::BadRequest().json(json!({
          "message": "2"
        })));
      }
      _ => {
        return Ok(HttpResponse::BadRequest().json(json!({
          "message": "3"
        })));
      }
    }
  }

  let token: String = generate_token();

  match encrypt::crypt(&token) {
    Ok(hashed) => {
      let random_name: &&str = SESSION_NAME_LIST
        .choose(&mut thread_rng())
        .unwrap_or(&"default");

      let new_session: Document = doc! {
        "token": hashed,
        "name": random_name,
      };

      let filter: Document = doc! { "username": &input.username };
      let update: Document = doc! { "$push": { "session": new_session } };

      collection
        .update_one(filter, update, None)
        .await
        .map_err(|_| {
          ErrorInternalServerError(json!({
            "message": "3"
          }))
        })?;

      Ok(HttpResponse::Ok().json(json!({
        "message": "1",
        "token": token,
        "username": username,
      })))
    }

    Err(_) => Ok(HttpResponse::BadRequest().json(json!({
      "message": "3"
    }))),
  }
}
