# api
## /ping
### use
```bash
curl -s -X POST http://localhost:8080/ping \
  -H "Content-Type: application/json" \
  -H "Accept: application/json"
```
eponse
```json
{
  "message": "pong"
}
```
## /account/create
### use
```bash
curl -s -X GET http://localhost:8080/account/create \
  -H "Content-Type: application/json" \
  -H "Accept: application/json"
```
### reponse
no error
```json
{
  "message": "1",
  "data": {
    "password": [
      "password1 (no crypted)",
      "password2 (no crypted)",
      "password3 (no crypted)",
      "password4 (no crypted)",
      "password5 (no crypted)",
      "password6 (no crypted)",
      "password7 (no crypted)",
      "password8 (no crypted)",
      "password9 (no crypted)",
      "password10 (no crypted)",
      "password11 (no crypted)",
      "password12 (no crypted)"
    ],
    "username": "username"
  }
}
```
error: **session or username is not valid**
```json
{
  "message": "2"
}
```
error: **server**
```json
{
  "message": "3"
}
```
## /account/login
### use
```bash
curl -s -X POST http://localhost:8080/account/login \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"username": "username", "password": [
      "password1 (no crypted)",
      "password2 (no crypted)",
      "password3 (no crypted)",
      "password4 (no crypted)",
      "password5 (no crypted)",
      "password6 (no crypted)",
      "password7 (no crypted)",
      "password8 (no crypted)",
      "password9 (no crypted)",
      "password10 (no crypted)",
      "password11 (no crypted)",
      "password12 (no crypted)"
    ]}'
```
### reponse
no error
```json
{
  "message": "1",
  "token": "connection token (no crypted)",
  "username": "username"
}
```
error: **password or username is not correct**
```json
{
  "message": "2"
}
```
error: **server**
```json
{
  "message": "3"
}
```
### /item
### use
```bash
curl -s -X GET http://localhost:8080/item \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"table": "movies", "id": "69309a79113af24d4bcb2381"}'
```
### reponse
no error
```json
{
  "message": "1",
  "data": {
    "_id": {
      "$oid": "69309a79113af24d4bcb2381"
    },
    "data": {
      "fr": {
        "title": "F1 le film",
        "description": "Sonny Hayes était le prodige de la F1 des années 90 jusqu’à son terrible accident. Trente ans plus tard, devenu un pilote indépendant, il est contacté par Ruben Cervantes, patron d’une écurie en faillite qui le convainc de revenir pour sauver l’équipe et prouver qu’il est toujours le meilleur. Aux côtés de Joshua Pearce, diamant brut prêt à devenir le numéro 1, Sonny réalise vite qu'en F1, son coéquipier est aussi son plus grand rival, que le danger est partout et qu'il risque de tout perdre.",
        "quality": {
          "p1080": "F1_movie/fr/1080p.mp4",
          "p720": "",
          "p480": ""
        },
        "cc": "F1_movie/fr/cc.srt"
      },
      "en": {
        "title": "F1 the movie",
        "description": "Sonny Hayes était le prodige de la F1 des années 90 jusqu’à son terrible accident. Trente ans plus tard, devenu un pilote indépendant, il est contacté par Ruben Cervantes, patron d’une écurie en faillite qui le convainc de revenir pour sauver l’équipe et prouver qu’il est toujours le meilleur. Aux côtés de Joshua Pearce, diamant brut prêt à devenir le numéro 1, Sonny réalise vite qu'en F1, son coéquipier est aussi son plus grand rival, que le danger est partout et qu'il risque de tout perdre.",
        "quality": {
          "p1080": "F1_movie/en/1080p.mp4",
          "p720": "F1_movie/en/720.mp4",
          "p480": ""
        },
        "cc": "F1_movie/en/cc.srt"
      },
      "es": {
        "title": "",
        "description": "",
        "quality": {
          "p1080": "",
          "p720": "",
          "p480": ""
        },
        "cc": "F1_movie/es/cc.srt"
      },
      "jp": {
        "title": "",
        "description": "",
        "quality": {
          "p1080": "",
          "p720": "",
          "p480": ""
        },
        "cc": "F1_movie/jp/cc.srt"
      },
      "de": {
        "title": "",
        "description": "",
        "quality": {
          "p1080": "",
          "p720": "",
          "p480": ""
        }
      },
      "it": {
        "title": "",
        "description": "",
        "quality": {
          "p1080": "",
          "p720": "",
          "p480": ""
        },
        "cc": "F1_movie/it/cc.srt"
      },
      "pt": {
        "title": "",
        "description": "",
        "quality": {
          "p1080": "",
          "p720": "",
          "p480": ""
        }
      },
      "ru": {
        "title": "",
        "description": "",
        "quality": {
          "p1080": "",
          "p720": "",
          "p480": ""
        }
      },
      "zh": {
        "title": "",
        "description": "",
        "quality": {
          "p1080": "",
          "p720": "",
          "p480": ""
        }
      },
      "ar": {
        "title": "",
        "description": "",
        "quality": {
          "p1080": "",
          "p720": "",
          "p480": ""
        }
      },
      "hi": {
        "title": "",
        "description": "",
        "quality": {
          "p1080": "",
          "p720": "",
          "p480": ""
        }
      },
      "ko": {
        "title": "",
        "description": "",
        "quality": {
          "p1080": "",
          "p720": "",
          "p480": ""
        }
      },
      "nl": {
        "title": "",
        "description": "",
        "quality": {
          "p1080": "",
          "p720": "",
          "p480": ""
        }
      },
      "sv": {
        "title": "",
        "description": "",
        "quality": {
          "p1080": "",
          "p720": "",
          "p480": ""
        }
      },
      "tr": {
        "title": "",
        "description": "",
        "quality": {
          "p1080": "",
          "p720": "",
          "p480": ""
        }
      }
    },
    "picture": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/9i5VlOVWAQ8yTyCLNNVXa7hozUu.jpg",
    "minipicture": "https://image.tmdb.org/t/p/original/wdCHRlwtYMD3EAIccknXQfuCTeD.png",
    "genres": [
      0,
      7,
      8
    ],
    "date": "2025-10-01",
    "note": 8,
    "time": "2h35",
    "person": [
      {
        "name": "",
        "picture": "",
        "link": ""
      }
    ]
  }
}
```
error: **item dont existe**
```json
{
  "message": "2"
}
```
error: **server**
```json
{
  "message": "3"
}
```
### /search
### use
```bash
curl -s -X GET http://localhost:8080/search \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"search": "F1"}'
```
### reponse
no error
```json
{
  "message": "1",
  "data": {
    "_id": {
      "$oid": "69309a79113af24d4bcb2381"
    },
    "data": {
      "fr": {
        "title": "F1 le film",
        "description": "Sonny Hayes était le prodige de la F1 des années 90 jusqu’à son terrible accident. Trente ans plus tard, devenu un pilote indépendant, il est contacté par Ruben Cervantes, patron d’une écurie en faillite qui le convainc de revenir pour sauver l’équipe et prouver qu’il est toujours le meilleur. Aux côtés de Joshua Pearce, diamant brut prêt à devenir le numéro 1, Sonny réalise vite qu'en F1, son coéquipier est aussi son plus grand rival, que le danger est partout et qu'il risque de tout perdre.",
        "quality": {
          "p1080": "F1_movie/fr/1080p.mp4",
          "p720": "",
          "p480": ""
        },
        "cc": "F1_movie/fr/cc.srt"
      },
      "en": {
        "title": "F1 the movie",
        "description": "Sonny Hayes était le prodige de la F1 des années 90 jusqu’à son terrible accident. Trente ans plus tard, devenu un pilote indépendant, il est contacté par Ruben Cervantes, patron d’une écurie en faillite qui le convainc de revenir pour sauver l’équipe et prouver qu’il est toujours le meilleur. Aux côtés de Joshua Pearce, diamant brut prêt à devenir le numéro 1, Sonny réalise vite qu'en F1, son coéquipier est aussi son plus grand rival, que le danger est partout et qu'il risque de tout perdre.",
        "quality": {
          "p1080": "F1_movie/en/1080p.mp4",
          "p720": "F1_movie/en/720.mp4",
          "p480": ""
        },
        "cc": "F1_movie/en/cc.srt"
      },
      "es": {
        "title": "",
        "description": "",
        "quality": {
          "p1080": "",
          "p720": "",
          "p480": ""
        },
        "cc": "F1_movie/es/cc.srt"
      },
      "jp": {
        "title": "",
        "description": "",
        "quality": {
          "p1080": "",
          "p720": "",
          "p480": ""
        },
        "cc": "F1_movie/jp/cc.srt"
      },
      "de": {
        "title": "",
        "description": "",
        "quality": {
          "p1080": "",
          "p720": "",
          "p480": ""
        }
      },
      "it": {
        "title": "",
        "description": "",
        "quality": {
          "p1080": "",
          "p720": "",
          "p480": ""
        },
        "cc": "F1_movie/it/cc.srt"
      },
      "pt": {
        "title": "",
        "description": "",
        "quality": {
          "p1080": "",
          "p720": "",
          "p480": ""
        }
      },
      "ru": {
        "title": "",
        "description": "",
        "quality": {
          "p1080": "",
          "p720": "",
          "p480": ""
        }
      },
      "zh": {
        "title": "",
        "description": "",
        "quality": {
          "p1080": "",
          "p720": "",
          "p480": ""
        }
      },
      "ar": {
        "title": "",
        "description": "",
        "quality": {
          "p1080": "",
          "p720": "",
          "p480": ""
        }
      },
      "hi": {
        "title": "",
        "description": "",
        "quality": {
          "p1080": "",
          "p720": "",
          "p480": ""
        }
      },
      "ko": {
        "title": "",
        "description": "",
        "quality": {
          "p1080": "",
          "p720": "",
          "p480": ""
        }
      },
      "nl": {
        "title": "",
        "description": "",
        "quality": {
          "p1080": "",
          "p720": "",
          "p480": ""
        }
      },
      "sv": {
        "title": "",
        "description": "",
        "quality": {
          "p1080": "",
          "p720": "",
          "p480": ""
        }
      },
      "tr": {
        "title": "",
        "description": "",
        "quality": {
          "p1080": "",
          "p720": "",
          "p480": ""
        }
      }
    },
    "picture": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/9i5VlOVWAQ8yTyCLNNVXa7hozUu.jpg",
    "minipicture": "https://image.tmdb.org/t/p/original/wdCHRlwtYMD3EAIccknXQfuCTeD.png",
    "genres": [
      0,
      7,
      8
    ],
    "date": "2025-10-01",
    "note": 8,
    "time": "2h35",
    "person": [
      {
        "name": "",
        "picture": "",
        "link": ""
      }
    ]
  }
}
```
error: **server**
```json
{
  "message": "2"
}
```
### /search
### use
```bash
curl -s -X GET http://localhost:8080/search \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"search": "F1"}'
```
### reponse
no error
```json
{
  "message": "1",
  "data1": [
    {
      "_id": {
        "$oid": "69309a82b7544c130eb84068"
      },
      "data": {
        "fr": {
          "title": "Movie_Title_fr_AfPy8",
          "description": "Movie_Description_fr_ni3McnxDRllapgQCY2RK",
          "quality": {
            "p1080": "link_1080p_Ep4dA",
            "p720": "link_720p_Lp84u",
            "p480": "link_480p_XHgdP"
          }
        },
        "en": {
          "title": "Movie_Title_en_8aUIp",
          "description": "Movie_Description_en_XvRf6FRhf4SDYpmL7YVC",
          "quality": {
            "p1080": "link_1080p_Q8aDO",
            "p720": "link_720p_vNSvI",
            "p480": "link_480p_0WRju"
          }
        },
        "es": {
          "title": "Movie_Title_es_zKmPk",
          "description": "Movie_Description_es_H4pYPTl6wP6yz81z8kfb",
          "quality": {
            "p1080": "link_1080p_qgdfB",
            "p720": "link_720p_G6Kn2",
            "p480": "link_480p_A3D5f"
          }
        },
        "jp": {
          "title": "Movie_Title_jp_QVvPK",
          "description": "Movie_Description_jp_oI5vioUHpuS0NkfaEfZt",
          "quality": {
            "p1080": "link_1080p_iumZ5",
            "p720": "link_720p_9bWoZ",
            "p480": "link_480p_sHemP"
          }
        },
        "de": {
          "title": "Movie_Title_de_EBfh2",
          "description": "Movie_Description_de_3xc6qa4C1oY2107HM8m1",
          "quality": {
            "p1080": "link_1080p_mtYT1",
            "p720": "link_720p_OCo9Z",
            "p480": "link_480p_x26Sm"
          }
        },
        "it": {
          "title": "Movie_Title_it_jalJE",
          "description": "Movie_Description_it_Hzxc0YC8NPWmumTfUe3g",
          "quality": {
            "p1080": "link_1080p_sU8m3",
            "p720": "link_720p_bajWG",
            "p480": "link_480p_NdfQj"
          }
        },
        "pt": {
          "title": "Movie_Title_pt_iSTDY",
          "description": "Movie_Description_pt_S40hYYXiL3iTtaAwzTwj",
          "quality": {
            "p1080": "link_1080p_bODkj",
            "p720": "link_720p_K7LWC",
            "p480": "link_480p_Lc4BP"
          }
        },
        "ru": {
          "title": "Movie_Title_ru_2X2xg",
          "description": "Movie_Description_ru_EdFYS8YSnOcHaUWb7NV8",
          "quality": {
            "p1080": "link_1080p_wPNzm",
            "p720": "link_720p_dR0yv",
            "p480": "link_480p_HIkgD"
          }
        },
        "zh": {
          "title": "Movie_Title_zh_tK6q1",
          "description": "Movie_Description_zh_H6pKJMotRtG2pCJfE3mX",
          "quality": {
            "p1080": "link_1080p_Cs9vk",
            "p720": "link_720p_85u2f",
            "p480": "link_480p_5gPll"
          }
        },
        "ar": {
          "title": "Movie_Title_ar_HQ8X2",
          "description": "Movie_Description_ar_zek3Q5hRBxEuq2H4ptWS",
          "quality": {
            "p1080": "link_1080p_mJDbA",
            "p720": "link_720p_iDMOC",
            "p480": "link_480p_m51Nw"
          }
        },
        "hi": {
          "title": "Movie_Title_hi_tQUll",
          "description": "Movie_Description_hi_IuGKpnbpbbUj17TwuIdv",
          "quality": {
            "p1080": "link_1080p_jjTZF",
            "p720": "link_720p_jjAAs",
            "p480": "link_480p_Ohw0m"
          }
        },
        "ko": {
          "title": "Movie_Title_ko_wWcUe",
          "description": "Movie_Description_ko_M1KLIZN7jNoRHvkcyFZn",
          "quality": {
            "p1080": "link_1080p_z89O8",
            "p720": "link_720p_bnmaf",
            "p480": "link_480p_uuiC9"
          }
        },
        "nl": {
          "title": "Movie_Title_nl_AqahW",
          "description": "Movie_Description_nl_JsaF5purU0thnXiNZWt5",
          "quality": {
            "p1080": "link_1080p_c7yA7",
            "p720": "link_720p_bpRrE",
            "p480": "link_480p_irVux"
          }
        },
        "sv": {
          "title": "Movie_Title_sv_zg4Yh",
          "description": "Movie_Description_sv_cXVr3RwYDu4jJfYSkyhG",
          "quality": {
            "p1080": "link_1080p_QQErx",
            "p720": "link_720p_1zgjR",
            "p480": "link_480p_Atxwq"
          }
        },
        "tr": {
          "title": "Movie_Title_tr_R6hWp",
          "description": "Movie_Description_tr_Ah6bLWf7Rx5kVPoW1G8D",
          "quality": {
            "p1080": "link_1080p_3j4I3",
            "p720": "link_720p_pLBtN",
            "p480": "link_480p_4c8cf"
          }
        }
      },
      "picture": "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/q3jHCb4dMfYF6ojikKuHd6LscxC.jpg",
      "minipicture": "https://image.tmdb.org/t/p/w500/7LKGXQKpuF4GPCsRxIgifdNs9vS.png",
      "genres": [
        20,
        0,
        8
      ],
      "time": "1h29",
      "date": "2020-01-01",
      "note": 2,
      "saisons": [
        {
          "name": "saison 1",
          "episode": [
            {
              "data": {
                "fr": {
                  "title": "Movie_Title_fr_AfPy8",
                  "description": "Movie_Description_fr_ni3McnxDRllapgQCY2RK",
                  "quality": {
                    "p1080": "link_1080p_Ep4dA",
                    "p720": "link_720p_Lp84u",
                    "p480": "link_480p_XHgdP"
                  }
                },
                "en": {
                  "title": "Movie_Title_en_8aUIp",
                  "description": "Movie_Description_en_XvRf6FRhf4SDYpmL7YVC",
                  "quality": {
                    "p1080": "link_1080p_Q8aDO",
                    "p720": "link_720p_vNSvI",
                    "p480": "link_480p_0WRju"
                  }
                },
                "es": {
                  "title": "Movie_Title_es_zKmPk",
                  "description": "Movie_Description_es_H4pYPTl6wP6yz81z8kfb",
                  "quality": {
                    "p1080": "link_1080p_qgdfB",
                    "p720": "link_720p_G6Kn2",
                    "p480": "link_480p_A3D5f"
                  }
                },
                "jp": {
                  "title": "Movie_Title_jp_QVvPK",
                  "description": "Movie_Description_jp_oI5vioUHpuS0NkfaEfZt",
                  "quality": {
                    "p1080": "link_1080p_iumZ5",
                    "p720": "link_720p_9bWoZ",
                    "p480": "link_480p_sHemP"
                  }
                },
                "de": {
                  "title": "Movie_Title_de_EBfh2",
                  "description": "Movie_Description_de_3xc6qa4C1oY2107HM8m1",
                  "quality": {
                    "p1080": "link_1080p_mtYT1",
                    "p720": "link_720p_OCo9Z",
                    "p480": "link_480p_x26Sm"
                  }
                },
                "it": {
                  "title": "Movie_Title_it_jalJE",
                  "description": "Movie_Description_it_Hzxc0YC8NPWmumTfUe3g",
                  "quality": {
                    "p1080": "link_1080p_sU8m3",
                    "p720": "link_720p_bajWG",
                    "p480": "link_480p_NdfQj"
                  }
                },
                "pt": {
                  "title": "Movie_Title_pt_iSTDY",
                  "description": "Movie_Description_pt_S40hYYXiL3iTtaAwzTwj",
                  "quality": {
                    "p1080": "link_1080p_bODkj",
                    "p720": "link_720p_K7LWC",
                    "p480": "link_480p_Lc4BP"
                  }
                },
                "ru": {
                  "title": "Movie_Title_ru_2X2xg",
                  "description": "Movie_Description_ru_EdFYS8YSnOcHaUWb7NV8",
                  "quality": {
                    "p1080": "link_1080p_wPNzm",
                    "p720": "link_720p_dR0yv",
                    "p480": "link_480p_HIkgD"
                  }
                },
                "zh": {
                  "title": "Movie_Title_zh_tK6q1",
                  "description": "Movie_Description_zh_H6pKJMotRtG2pCJfE3mX",
                  "quality": {
                    "p1080": "link_1080p_Cs9vk",
                    "p720": "link_720p_85u2f",
                    "p480": "link_480p_5gPll"
                  }
                },
                "ar": {
                  "title": "Movie_Title_ar_HQ8X2",
                  "description": "Movie_Description_ar_zek3Q5hRBxEuq2H4ptWS",
                  "quality": {
                    "p1080": "link_1080p_mJDbA",
                    "p720": "link_720p_iDMOC",
                    "p480": "link_480p_m51Nw"
                  }
                },
                "hi": {
                  "title": "Movie_Title_hi_tQUll",
                  "description": "Movie_Description_hi_IuGKpnbpbbUj17TwuIdv",
                  "quality": {
                    "p1080": "link_1080p_jjTZF",
                    "p720": "link_720p_jjAAs",
                    "p480": "link_480p_Ohw0m"
                  }
                },
                "ko": {
                  "title": "Movie_Title_ko_wWcUe",
                  "description": "Movie_Description_ko_M1KLIZN7jNoRHvkcyFZn",
                  "quality": {
                    "p1080": "link_1080p_z89O8",
                    "p720": "link_720p_bnmaf",
                    "p480": "link_480p_uuiC9"
                  }
                },
                "nl": {
                  "title": "Movie_Title_nl_AqahW",
                  "description": "Movie_Description_nl_JsaF5purU0thnXiNZWt5",
                  "quality": {
                    "p1080": "link_1080p_c7yA7",
                    "p720": "link_720p_bpRrE",
                    "p480": "link_480p_irVux"
                  }
                },
                "sv": {
                  "title": "Movie_Title_sv_zg4Yh",
                  "description": "Movie_Description_sv_cXVr3RwYDu4jJfYSkyhG",
                  "quality": {
                    "p1080": "link_1080p_QQErx",
                    "p720": "link_720p_1zgjR",
                    "p480": "link_480p_Atxwq"
                  }
                },
                "tr": {
                  "title": "Movie_Title_tr_R6hWp",
                  "description": "Movie_Description_tr_Ah6bLWf7Rx5kVPoW1G8D",
                  "quality": {
                    "p1080": "link_1080p_3j4I3",
                    "p720": "link_720p_pLBtN",
                    "p480": "link_480p_4c8cf"
                  }
                }
              },
              "picture": "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/q3jHCb4dMfYF6ojikKuHd6LscxC.jpg",
              "minipicture": "https://image.tmdb.org/t/p/w500/7LKGXQKpuF4GPCsRxIgifdNs9vS.png",
              "time": "1h29",
              "date": "2020-01-01"
            },
            {
              "data": {
                "fr": {
                  "title": "Movie_Title_fr_AfPy8",
                  "description": "Movie_Description_fr_ni3McnxDRllapgQCY2RK",
                  "quality": {
                    "p1080": "link_1080p_Ep4dA",
                    "p720": "link_720p_Lp84u",
                    "p480": "link_480p_XHgdP"
                  }
                },
                "en": {
                  "title": "Movie_Title_en_8aUIp",
                  "description": "Movie_Description_en_XvRf6FRhf4SDYpmL7YVC",
                  "quality": {
                    "p1080": "link_1080p_Q8aDO",
                    "p720": "link_720p_vNSvI",
                    "p480": "link_480p_0WRju"
                  }
                },
                "es": {
                  "title": "Movie_Title_es_zKmPk",
                  "description": "Movie_Description_es_H4pYPTl6wP6yz81z8kfb",
                  "quality": {
                    "p1080": "link_1080p_qgdfB",
                    "p720": "link_720p_G6Kn2",
                    "p480": "link_480p_A3D5f"
                  }
                },
                "jp": {
                  "title": "Movie_Title_jp_QVvPK",
                  "description": "Movie_Description_jp_oI5vioUHpuS0NkfaEfZt",
                  "quality": {
                    "p1080": "link_1080p_iumZ5",
                    "p720": "link_720p_9bWoZ",
                    "p480": "link_480p_sHemP"
                  }
                },
                "de": {
                  "title": "Movie_Title_de_EBfh2",
                  "description": "Movie_Description_de_3xc6qa4C1oY2107HM8m1",
                  "quality": {
                    "p1080": "link_1080p_mtYT1",
                    "p720": "link_720p_OCo9Z",
                    "p480": "link_480p_x26Sm"
                  }
                },
                "it": {
                  "title": "Movie_Title_it_jalJE",
                  "description": "Movie_Description_it_Hzxc0YC8NPWmumTfUe3g",
                  "quality": {
                    "p1080": "link_1080p_sU8m3",
                    "p720": "link_720p_bajWG",
                    "p480": "link_480p_NdfQj"
                  }
                },
                "pt": {
                  "title": "Movie_Title_pt_iSTDY",
                  "description": "Movie_Description_pt_S40hYYXiL3iTtaAwzTwj",
                  "quality": {
                    "p1080": "link_1080p_bODkj",
                    "p720": "link_720p_K7LWC",
                    "p480": "link_480p_Lc4BP"
                  }
                },
                "ru": {
                  "title": "Movie_Title_ru_2X2xg",
                  "description": "Movie_Description_ru_EdFYS8YSnOcHaUWb7NV8",
                  "quality": {
                    "p1080": "link_1080p_wPNzm",
                    "p720": "link_720p_dR0yv",
                    "p480": "link_480p_HIkgD"
                  }
                },
                "zh": {
                  "title": "Movie_Title_zh_tK6q1",
                  "description": "Movie_Description_zh_H6pKJMotRtG2pCJfE3mX",
                  "quality": {
                    "p1080": "link_1080p_Cs9vk",
                    "p720": "link_720p_85u2f",
                    "p480": "link_480p_5gPll"
                  }
                },
                "ar": {
                  "title": "Movie_Title_ar_HQ8X2",
                  "description": "Movie_Description_ar_zek3Q5hRBxEuq2H4ptWS",
                  "quality": {
                    "p1080": "link_1080p_mJDbA",
                    "p720": "link_720p_iDMOC",
                    "p480": "link_480p_m51Nw"
                  }
                },
                "hi": {
                  "title": "Movie_Title_hi_tQUll",
                  "description": "Movie_Description_hi_IuGKpnbpbbUj17TwuIdv",
                  "quality": {
                    "p1080": "link_1080p_jjTZF",
                    "p720": "link_720p_jjAAs",
                    "p480": "link_480p_Ohw0m"
                  }
                },
                "ko": {
                  "title": "Movie_Title_ko_wWcUe",
                  "description": "Movie_Description_ko_M1KLIZN7jNoRHvkcyFZn",
                  "quality": {
                    "p1080": "link_1080p_z89O8",
                    "p720": "link_720p_bnmaf",
                    "p480": "link_480p_uuiC9"
                  }
                },
                "nl": {
                  "title": "Movie_Title_nl_AqahW",
                  "description": "Movie_Description_nl_JsaF5purU0thnXiNZWt5",
                  "quality": {
                    "p1080": "link_1080p_c7yA7",
                    "p720": "link_720p_bpRrE",
                    "p480": "link_480p_irVux"
                  }
                },
                "sv": {
                  "title": "Movie_Title_sv_zg4Yh",
                  "description": "Movie_Description_sv_cXVr3RwYDu4jJfYSkyhG",
                  "quality": {
                    "p1080": "link_1080p_QQErx",
                    "p720": "link_720p_1zgjR",
                    "p480": "link_480p_Atxwq"
                  }
                },
                "tr": {
                  "title": "Movie_Title_tr_R6hWp",
                  "description": "Movie_Description_tr_Ah6bLWf7Rx5kVPoW1G8D",
                  "quality": {
                    "p1080": "link_1080p_3j4I3",
                    "p720": "link_720p_pLBtN",
                    "p480": "link_480p_4c8cf"
                  }
                }
              },
              "picture": "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/q3jHCb4dMfYF6ojikKuHd6LscxC.jpg",
              "minipicture": "https://image.tmdb.org/t/p/w500/7LKGXQKpuF4GPCsRxIgifdNs9vS.png",
              "time": "1h29",
              "date": "2020-01-01"
            },
            {
              "data": {
                "fr": {
                  "title": "Movie_Title_fr_AfPy8",
                  "description": "Movie_Description_fr_ni3McnxDRllapgQCY2RK",
                  "quality": {
                    "p1080": "link_1080p_Ep4dA",
                    "p720": "link_720p_Lp84u",
                    "p480": "link_480p_XHgdP"
                  }
                },
                "en": {
                  "title": "Movie_Title_en_8aUIp",
                  "description": "Movie_Description_en_XvRf6FRhf4SDYpmL7YVC",
                  "quality": {
                    "p1080": "link_1080p_Q8aDO",
                    "p720": "link_720p_vNSvI",
                    "p480": "link_480p_0WRju"
                  }
                },
                "es": {
                  "title": "Movie_Title_es_zKmPk",
                  "description": "Movie_Description_es_H4pYPTl6wP6yz81z8kfb",
                  "quality": {
                    "p1080": "link_1080p_qgdfB",
                    "p720": "link_720p_G6Kn2",
                    "p480": "link_480p_A3D5f"
                  }
                },
                "jp": {
                  "title": "Movie_Title_jp_QVvPK",
                  "description": "Movie_Description_jp_oI5vioUHpuS0NkfaEfZt",
                  "quality": {
                    "p1080": "link_1080p_iumZ5",
                    "p720": "link_720p_9bWoZ",
                    "p480": "link_480p_sHemP"
                  }
                },
                "de": {
                  "title": "Movie_Title_de_EBfh2",
                  "description": "Movie_Description_de_3xc6qa4C1oY2107HM8m1",
                  "quality": {
                    "p1080": "link_1080p_mtYT1",
                    "p720": "link_720p_OCo9Z",
                    "p480": "link_480p_x26Sm"
                  }
                },
                "it": {
                  "title": "Movie_Title_it_jalJE",
                  "description": "Movie_Description_it_Hzxc0YC8NPWmumTfUe3g",
                  "quality": {
                    "p1080": "link_1080p_sU8m3",
                    "p720": "link_720p_bajWG",
                    "p480": "link_480p_NdfQj"
                  }
                },
                "pt": {
                  "title": "Movie_Title_pt_iSTDY",
                  "description": "Movie_Description_pt_S40hYYXiL3iTtaAwzTwj",
                  "quality": {
                    "p1080": "link_1080p_bODkj",
                    "p720": "link_720p_K7LWC",
                    "p480": "link_480p_Lc4BP"
                  }
                },
                "ru": {
                  "title": "Movie_Title_ru_2X2xg",
                  "description": "Movie_Description_ru_EdFYS8YSnOcHaUWb7NV8",
                  "quality": {
                    "p1080": "link_1080p_wPNzm",
                    "p720": "link_720p_dR0yv",
                    "p480": "link_480p_HIkgD"
                  }
                },
                "zh": {
                  "title": "Movie_Title_zh_tK6q1",
                  "description": "Movie_Description_zh_H6pKJMotRtG2pCJfE3mX",
                  "quality": {
                    "p1080": "link_1080p_Cs9vk",
                    "p720": "link_720p_85u2f",
                    "p480": "link_480p_5gPll"
                  }
                },
                "ar": {
                  "title": "Movie_Title_ar_HQ8X2",
                  "description": "Movie_Description_ar_zek3Q5hRBxEuq2H4ptWS",
                  "quality": {
                    "p1080": "link_1080p_mJDbA",
                    "p720": "link_720p_iDMOC",
                    "p480": "link_480p_m51Nw"
                  }
                },
                "hi": {
                  "title": "Movie_Title_hi_tQUll",
                  "description": "Movie_Description_hi_IuGKpnbpbbUj17TwuIdv",
                  "quality": {
                    "p1080": "link_1080p_jjTZF",
                    "p720": "link_720p_jjAAs",
                    "p480": "link_480p_Ohw0m"
                  }
                },
                "ko": {
                  "title": "Movie_Title_ko_wWcUe",
                  "description": "Movie_Description_ko_M1KLIZN7jNoRHvkcyFZn",
                  "quality": {
                    "p1080": "link_1080p_z89O8",
                    "p720": "link_720p_bnmaf",
                    "p480": "link_480p_uuiC9"
                  }
                },
                "nl": {
                  "title": "Movie_Title_nl_AqahW",
                  "description": "Movie_Description_nl_JsaF5purU0thnXiNZWt5",
                  "quality": {
                    "p1080": "link_1080p_c7yA7",
                    "p720": "link_720p_bpRrE",
                    "p480": "link_480p_irVux"
                  }
                },
                "sv": {
                  "title": "Movie_Title_sv_zg4Yh",
                  "description": "Movie_Description_sv_cXVr3RwYDu4jJfYSkyhG",
                  "quality": {
                    "p1080": "link_1080p_QQErx",
                    "p720": "link_720p_1zgjR",
                    "p480": "link_480p_Atxwq"
                  }
                },
                "tr": {
                  "title": "Movie_Title_tr_R6hWp",
                  "description": "Movie_Description_tr_Ah6bLWf7Rx5kVPoW1G8D",
                  "quality": {
                    "p1080": "link_1080p_3j4I3",
                    "p720": "link_720p_pLBtN",
                    "p480": "link_480p_4c8cf"
                  }
                }
              },
              "picture": "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/q3jHCb4dMfYF6ojikKuHd6LscxC.jpg",
              "minipicture": "https://image.tmdb.org/t/p/w500/7LKGXQKpuF4GPCsRxIgifdNs9vS.png",
              "time": "1h29",
              "date": "2020-01-01"
            },
            {
              "data": {
                "fr": {
                  "title": "Movie_Title_fr_AfPy8",
                  "description": "Movie_Description_fr_ni3McnxDRllapgQCY2RK",
                  "quality": {
                    "p1080": "link_1080p_Ep4dA",
                    "p720": "link_720p_Lp84u",
                    "p480": "link_480p_XHgdP"
                  }
                },
                "en": {
                  "title": "Movie_Title_en_8aUIp",
                  "description": "Movie_Description_en_XvRf6FRhf4SDYpmL7YVC",
                  "quality": {
                    "p1080": "link_1080p_Q8aDO",
                    "p720": "link_720p_vNSvI",
                    "p480": "link_480p_0WRju"
                  }
                },
                "es": {
                  "title": "Movie_Title_es_zKmPk",
                  "description": "Movie_Description_es_H4pYPTl6wP6yz81z8kfb",
                  "quality": {
                    "p1080": "link_1080p_qgdfB",
                    "p720": "link_720p_G6Kn2",
                    "p480": "link_480p_A3D5f"
                  }
                },
                "jp": {
                  "title": "Movie_Title_jp_QVvPK",
                  "description": "Movie_Description_jp_oI5vioUHpuS0NkfaEfZt",
                  "quality": {
                    "p1080": "link_1080p_iumZ5",
                    "p720": "link_720p_9bWoZ",
                    "p480": "link_480p_sHemP"
                  }
                },
                "de": {
                  "title": "Movie_Title_de_EBfh2",
                  "description": "Movie_Description_de_3xc6qa4C1oY2107HM8m1",
                  "quality": {
                    "p1080": "link_1080p_mtYT1",
                    "p720": "link_720p_OCo9Z",
                    "p480": "link_480p_x26Sm"
                  }
                },
                "it": {
                  "title": "Movie_Title_it_jalJE",
                  "description": "Movie_Description_it_Hzxc0YC8NPWmumTfUe3g",
                  "quality": {
                    "p1080": "link_1080p_sU8m3",
                    "p720": "link_720p_bajWG",
                    "p480": "link_480p_NdfQj"
                  }
                },
                "pt": {
                  "title": "Movie_Title_pt_iSTDY",
                  "description": "Movie_Description_pt_S40hYYXiL3iTtaAwzTwj",
                  "quality": {
                    "p1080": "link_1080p_bODkj",
                    "p720": "link_720p_K7LWC",
                    "p480": "link_480p_Lc4BP"
                  }
                },
                "ru": {
                  "title": "Movie_Title_ru_2X2xg",
                  "description": "Movie_Description_ru_EdFYS8YSnOcHaUWb7NV8",
                  "quality": {
                    "p1080": "link_1080p_wPNzm",
                    "p720": "link_720p_dR0yv",
                    "p480": "link_480p_HIkgD"
                  }
                },
                "zh": {
                  "title": "Movie_Title_zh_tK6q1",
                  "description": "Movie_Description_zh_H6pKJMotRtG2pCJfE3mX",
                  "quality": {
                    "p1080": "link_1080p_Cs9vk",
                    "p720": "link_720p_85u2f",
                    "p480": "link_480p_5gPll"
                  }
                },
                "ar": {
                  "title": "Movie_Title_ar_HQ8X2",
                  "description": "Movie_Description_ar_zek3Q5hRBxEuq2H4ptWS",
                  "quality": {
                    "p1080": "link_1080p_mJDbA",
                    "p720": "link_720p_iDMOC",
                    "p480": "link_480p_m51Nw"
                  }
                },
                "hi": {
                  "title": "Movie_Title_hi_tQUll",
                  "description": "Movie_Description_hi_IuGKpnbpbbUj17TwuIdv",
                  "quality": {
                    "p1080": "link_1080p_jjTZF",
                    "p720": "link_720p_jjAAs",
                    "p480": "link_480p_Ohw0m"
                  }
                },
                "ko": {
                  "title": "Movie_Title_ko_wWcUe",
                  "description": "Movie_Description_ko_M1KLIZN7jNoRHvkcyFZn",
                  "quality": {
                    "p1080": "link_1080p_z89O8",
                    "p720": "link_720p_bnmaf",
                    "p480": "link_480p_uuiC9"
                  }
                },
                "nl": {
                  "title": "Movie_Title_nl_AqahW",
                  "description": "Movie_Description_nl_JsaF5purU0thnXiNZWt5",
                  "quality": {
                    "p1080": "link_1080p_c7yA7",
                    "p720": "link_720p_bpRrE",
                    "p480": "link_480p_irVux"
                  }
                },
                "sv": {
                  "title": "Movie_Title_sv_zg4Yh",
                  "description": "Movie_Description_sv_cXVr3RwYDu4jJfYSkyhG",
                  "quality": {
                    "p1080": "link_1080p_QQErx",
                    "p720": "link_720p_1zgjR",
                    "p480": "link_480p_Atxwq"
                  }
                },
                "tr": {
                  "title": "Movie_Title_tr_R6hWp",
                  "description": "Movie_Description_tr_Ah6bLWf7Rx5kVPoW1G8D",
                  "quality": {
                    "p1080": "link_1080p_3j4I3",
                    "p720": "link_720p_pLBtN",
                    "p480": "link_480p_4c8cf"
                  }
                }
              },
              "picture": "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/q3jHCb4dMfYF6ojikKuHd6LscxC.jpg",
              "minipicture": "https://image.tmdb.org/t/p/w500/7LKGXQKpuF4GPCsRxIgifdNs9vS.png",
              "time": "1h29",
              "date": "2020-01-01"
            },
            {
              "data": {
                "fr": {
                  "title": "Movie_Title_fr_AfPy8",
                  "description": "Movie_Description_fr_ni3McnxDRllapgQCY2RK",
                  "quality": {
                    "p1080": "link_1080p_Ep4dA",
                    "p720": "link_720p_Lp84u",
                    "p480": "link_480p_XHgdP"
                  }
                },
                "en": {
                  "title": "Movie_Title_en_8aUIp",
                  "description": "Movie_Description_en_XvRf6FRhf4SDYpmL7YVC",
                  "quality": {
                    "p1080": "link_1080p_Q8aDO",
                    "p720": "link_720p_vNSvI",
                    "p480": "link_480p_0WRju"
                  }
                },
                "es": {
                  "title": "Movie_Title_es_zKmPk",
                  "description": "Movie_Description_es_H4pYPTl6wP6yz81z8kfb",
                  "quality": {
                    "p1080": "link_1080p_qgdfB",
                    "p720": "link_720p_G6Kn2",
                    "p480": "link_480p_A3D5f"
                  }
                },
                "jp": {
                  "title": "Movie_Title_jp_QVvPK",
                  "description": "Movie_Description_jp_oI5vioUHpuS0NkfaEfZt",
                  "quality": {
                    "p1080": "link_1080p_iumZ5",
                    "p720": "link_720p_9bWoZ",
                    "p480": "link_480p_sHemP"
                  }
                },
                "de": {
                  "title": "Movie_Title_de_EBfh2",
                  "description": "Movie_Description_de_3xc6qa4C1oY2107HM8m1",
                  "quality": {
                    "p1080": "link_1080p_mtYT1",
                    "p720": "link_720p_OCo9Z",
                    "p480": "link_480p_x26Sm"
                  }
                },
                "it": {
                  "title": "Movie_Title_it_jalJE",
                  "description": "Movie_Description_it_Hzxc0YC8NPWmumTfUe3g",
                  "quality": {
                    "p1080": "link_1080p_sU8m3",
                    "p720": "link_720p_bajWG",
                    "p480": "link_480p_NdfQj"
                  }
                },
                "pt": {
                  "title": "Movie_Title_pt_iSTDY",
                  "description": "Movie_Description_pt_S40hYYXiL3iTtaAwzTwj",
                  "quality": {
                    "p1080": "link_1080p_bODkj",
                    "p720": "link_720p_K7LWC",
                    "p480": "link_480p_Lc4BP"
                  }
                },
                "ru": {
                  "title": "Movie_Title_ru_2X2xg",
                  "description": "Movie_Description_ru_EdFYS8YSnOcHaUWb7NV8",
                  "quality": {
                    "p1080": "link_1080p_wPNzm",
                    "p720": "link_720p_dR0yv",
                    "p480": "link_480p_HIkgD"
                  }
                },
                "zh": {
                  "title": "Movie_Title_zh_tK6q1",
                  "description": "Movie_Description_zh_H6pKJMotRtG2pCJfE3mX",
                  "quality": {
                    "p1080": "link_1080p_Cs9vk",
                    "p720": "link_720p_85u2f",
                    "p480": "link_480p_5gPll"
                  }
                },
                "ar": {
                  "title": "Movie_Title_ar_HQ8X2",
                  "description": "Movie_Description_ar_zek3Q5hRBxEuq2H4ptWS",
                  "quality": {
                    "p1080": "link_1080p_mJDbA",
                    "p720": "link_720p_iDMOC",
                    "p480": "link_480p_m51Nw"
                  }
                },
                "hi": {
                  "title": "Movie_Title_hi_tQUll",
                  "description": "Movie_Description_hi_IuGKpnbpbbUj17TwuIdv",
                  "quality": {
                    "p1080": "link_1080p_jjTZF",
                    "p720": "link_720p_jjAAs",
                    "p480": "link_480p_Ohw0m"
                  }
                },
                "ko": {
                  "title": "Movie_Title_ko_wWcUe",
                  "description": "Movie_Description_ko_M1KLIZN7jNoRHvkcyFZn",
                  "quality": {
                    "p1080": "link_1080p_z89O8",
                    "p720": "link_720p_bnmaf",
                    "p480": "link_480p_uuiC9"
                  }
                },
                "nl": {
                  "title": "Movie_Title_nl_AqahW",
                  "description": "Movie_Description_nl_JsaF5purU0thnXiNZWt5",
                  "quality": {
                    "p1080": "link_1080p_c7yA7",
                    "p720": "link_720p_bpRrE",
                    "p480": "link_480p_irVux"
                  }
                },
                "sv": {
                  "title": "Movie_Title_sv_zg4Yh",
                  "description": "Movie_Description_sv_cXVr3RwYDu4jJfYSkyhG",
                  "quality": {
                    "p1080": "link_1080p_QQErx",
                    "p720": "link_720p_1zgjR",
                    "p480": "link_480p_Atxwq"
                  }
                },
                "tr": {
                  "title": "Movie_Title_tr_R6hWp",
                  "description": "Movie_Description_tr_Ah6bLWf7Rx5kVPoW1G8D",
                  "quality": {
                    "p1080": "link_1080p_3j4I3",
                    "p720": "link_720p_pLBtN",
                    "p480": "link_480p_4c8cf"
                  }
                }
              },
              "picture": "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/q3jHCb4dMfYF6ojikKuHd6LscxC.jpg",
              "minipicture": "https://image.tmdb.org/t/p/w500/7LKGXQKpuF4GPCsRxIgifdNs9vS.png",
              "time": "1h29",
              "date": "2020-01-01"
            }
          ]
        }
      ],
      "videos": [
        "https://www.youtube.com/watch?v=VTVxNM9v_us",
        "https://www.youtube.com/watch?v=VTVxNM9v_us",
        "https://www.youtube.com/watch?v=VTVxNM9v_us"
      ],
      "person": [
        {
          "name": "Jenna Ortega",
          "picture": "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/7oUAtVgZU0uLdUSvDHKkINt1y7Y.jpg",
          "link": "https://www.themoviedb.org/person/974169-jenna-ortega"
        },
        {
          "name": "Jenna Ortega",
          "picture": "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/7oUAtVgZU0uLdUSvDHKkINt1y7Y.jpg",
          "link": "https://www.themoviedb.org/person/974169-jenna-ortega"
        },
        {
          "name": "Jenna Ortega",
          "picture": "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/7oUAtVgZU0uLdUSvDHKkINt1y7Y.jpg",
          "link": "https://www.themoviedb.org/person/974169-jenna-ortega"
        },
        {
          "name": "Jenna Ortega",
          "picture": "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/7oUAtVgZU0uLdUSvDHKkINt1y7Y.jpg",
          "link": "https://www.themoviedb.org/person/974169-jenna-ortega"
        },
        {
          "name": "Jenna Ortega",
          "picture": "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/7oUAtVgZU0uLdUSvDHKkINt1y7Y.jpg",
          "link": "https://www.themoviedb.org/person/974169-jenna-ortega"
        },
        {
          "name": "Jenna Ortega",
          "picture": "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/7oUAtVgZU0uLdUSvDHKkINt1y7Y.jpg",
          "link": "https://www.themoviedb.org/person/974169-jenna-ortega"
        },
        {
          "name": "Jenna Ortega",
          "picture": "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/7oUAtVgZU0uLdUSvDHKkINt1y7Y.jpg",
          "link": "https://www.themoviedb.org/person/974169-jenna-ortega"
        },
        {
          "name": "Jenna Ortega",
          "picture": "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/7oUAtVgZU0uLdUSvDHKkINt1y7Y.jpg",
          "link": "https://www.themoviedb.org/person/974169-jenna-ortega"
        },
        {
          "name": "Jenna Ortega",
          "picture": "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/7oUAtVgZU0uLdUSvDHKkINt1y7Y.jpg",
          "link": "https://www.themoviedb.org/person/974169-jenna-ortega"
        },
        {
          "name": "Jenna Ortega",
          "picture": "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/7oUAtVgZU0uLdUSvDHKkINt1y7Y.jpg",
          "link": "https://www.themoviedb.org/person/974169-jenna-ortega"
        },
        {
          "name": "Jenna Ortega",
          "picture": "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/7oUAtVgZU0uLdUSvDHKkINt1y7Y.jpg",
          "link": "https://www.themoviedb.org/person/974169-jenna-ortega"
        },
        {
          "name": "Jenna Ortega",
          "picture": "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/7oUAtVgZU0uLdUSvDHKkINt1y7Y.jpg",
          "link": "https://www.themoviedb.org/person/974169-jenna-ortega"
        }
      ]
    }
  ],
  "data2": [
    {
      "_id": {
        "$oid": "69309a82b7544c130eb84068"
      },
      "data": {
        "fr": {
          "title": "Movie_Title_fr_AfPy8",
          "description": "Movie_Description_fr_ni3McnxDRllapgQCY2RK",
          "quality": {
            "p1080": "link_1080p_Ep4dA",
            "p720": "link_720p_Lp84u",
            "p480": "link_480p_XHgdP"
          }
        },
        "en": {
          "title": "Movie_Title_en_8aUIp",
          "description": "Movie_Description_en_XvRf6FRhf4SDYpmL7YVC",
          "quality": {
            "p1080": "link_1080p_Q8aDO",
            "p720": "link_720p_vNSvI",
            "p480": "link_480p_0WRju"
          }
        },
        "es": {
          "title": "Movie_Title_es_zKmPk",
          "description": "Movie_Description_es_H4pYPTl6wP6yz81z8kfb",
          "quality": {
            "p1080": "link_1080p_qgdfB",
            "p720": "link_720p_G6Kn2",
            "p480": "link_480p_A3D5f"
          }
        },
        "jp": {
          "title": "Movie_Title_jp_QVvPK",
          "description": "Movie_Description_jp_oI5vioUHpuS0NkfaEfZt",
          "quality": {
            "p1080": "link_1080p_iumZ5",
            "p720": "link_720p_9bWoZ",
            "p480": "link_480p_sHemP"
          }
        },
        "de": {
          "title": "Movie_Title_de_EBfh2",
          "description": "Movie_Description_de_3xc6qa4C1oY2107HM8m1",
          "quality": {
            "p1080": "link_1080p_mtYT1",
            "p720": "link_720p_OCo9Z",
            "p480": "link_480p_x26Sm"
          }
        },
        "it": {
          "title": "Movie_Title_it_jalJE",
          "description": "Movie_Description_it_Hzxc0YC8NPWmumTfUe3g",
          "quality": {
            "p1080": "link_1080p_sU8m3",
            "p720": "link_720p_bajWG",
            "p480": "link_480p_NdfQj"
          }
        },
        "pt": {
          "title": "Movie_Title_pt_iSTDY",
          "description": "Movie_Description_pt_S40hYYXiL3iTtaAwzTwj",
          "quality": {
            "p1080": "link_1080p_bODkj",
            "p720": "link_720p_K7LWC",
            "p480": "link_480p_Lc4BP"
          }
        },
        "ru": {
          "title": "Movie_Title_ru_2X2xg",
          "description": "Movie_Description_ru_EdFYS8YSnOcHaUWb7NV8",
          "quality": {
            "p1080": "link_1080p_wPNzm",
            "p720": "link_720p_dR0yv",
            "p480": "link_480p_HIkgD"
          }
        },
        "zh": {
          "title": "Movie_Title_zh_tK6q1",
          "description": "Movie_Description_zh_H6pKJMotRtG2pCJfE3mX",
          "quality": {
            "p1080": "link_1080p_Cs9vk",
            "p720": "link_720p_85u2f",
            "p480": "link_480p_5gPll"
          }
        },
        "ar": {
          "title": "Movie_Title_ar_HQ8X2",
          "description": "Movie_Description_ar_zek3Q5hRBxEuq2H4ptWS",
          "quality": {
            "p1080": "link_1080p_mJDbA",
            "p720": "link_720p_iDMOC",
            "p480": "link_480p_m51Nw"
          }
        },
        "hi": {
          "title": "Movie_Title_hi_tQUll",
          "description": "Movie_Description_hi_IuGKpnbpbbUj17TwuIdv",
          "quality": {
            "p1080": "link_1080p_jjTZF",
            "p720": "link_720p_jjAAs",
            "p480": "link_480p_Ohw0m"
          }
        },
        "ko": {
          "title": "Movie_Title_ko_wWcUe",
          "description": "Movie_Description_ko_M1KLIZN7jNoRHvkcyFZn",
          "quality": {
            "p1080": "link_1080p_z89O8",
            "p720": "link_720p_bnmaf",
            "p480": "link_480p_uuiC9"
          }
        },
        "nl": {
          "title": "Movie_Title_nl_AqahW",
          "description": "Movie_Description_nl_JsaF5purU0thnXiNZWt5",
          "quality": {
            "p1080": "link_1080p_c7yA7",
            "p720": "link_720p_bpRrE",
            "p480": "link_480p_irVux"
          }
        },
        "sv": {
          "title": "Movie_Title_sv_zg4Yh",
          "description": "Movie_Description_sv_cXVr3RwYDu4jJfYSkyhG",
          "quality": {
            "p1080": "link_1080p_QQErx",
            "p720": "link_720p_1zgjR",
            "p480": "link_480p_Atxwq"
          }
        },
        "tr": {
          "title": "Movie_Title_tr_R6hWp",
          "description": "Movie_Description_tr_Ah6bLWf7Rx5kVPoW1G8D",
          "quality": {
            "p1080": "link_1080p_3j4I3",
            "p720": "link_720p_pLBtN",
            "p480": "link_480p_4c8cf"
          }
        }
      },
      "picture": "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/q3jHCb4dMfYF6ojikKuHd6LscxC.jpg",
      "minipicture": "https://image.tmdb.org/t/p/w500/7LKGXQKpuF4GPCsRxIgifdNs9vS.png",
      "genres": [
        20,
        0,
        8
      ],
      "time": "1h29",
      "date": "2020-01-01",
      "note": 2,
      "saisons": [
        {
          "name": "saison 1",
          "episode": [
            {
              "data": {
                "fr": {
                  "title": "Movie_Title_fr_AfPy8",
                  "description": "Movie_Description_fr_ni3McnxDRllapgQCY2RK",
                  "quality": {
                    "p1080": "link_1080p_Ep4dA",
                    "p720": "link_720p_Lp84u",
                    "p480": "link_480p_XHgdP"
                  }
                },
                "en": {
                  "title": "Movie_Title_en_8aUIp",
                  "description": "Movie_Description_en_XvRf6FRhf4SDYpmL7YVC",
                  "quality": {
                    "p1080": "link_1080p_Q8aDO",
                    "p720": "link_720p_vNSvI",
                    "p480": "link_480p_0WRju"
                  }
                },
                "es": {
                  "title": "Movie_Title_es_zKmPk",
                  "description": "Movie_Description_es_H4pYPTl6wP6yz81z8kfb",
                  "quality": {
                    "p1080": "link_1080p_qgdfB",
                    "p720": "link_720p_G6Kn2",
                    "p480": "link_480p_A3D5f"
                  }
                },
                "jp": {
                  "title": "Movie_Title_jp_QVvPK",
                  "description": "Movie_Description_jp_oI5vioUHpuS0NkfaEfZt",
                  "quality": {
                    "p1080": "link_1080p_iumZ5",
                    "p720": "link_720p_9bWoZ",
                    "p480": "link_480p_sHemP"
                  }
                },
                "de": {
                  "title": "Movie_Title_de_EBfh2",
                  "description": "Movie_Description_de_3xc6qa4C1oY2107HM8m1",
                  "quality": {
                    "p1080": "link_1080p_mtYT1",
                    "p720": "link_720p_OCo9Z",
                    "p480": "link_480p_x26Sm"
                  }
                },
                "it": {
                  "title": "Movie_Title_it_jalJE",
                  "description": "Movie_Description_it_Hzxc0YC8NPWmumTfUe3g",
                  "quality": {
                    "p1080": "link_1080p_sU8m3",
                    "p720": "link_720p_bajWG",
                    "p480": "link_480p_NdfQj"
                  }
                },
                "pt": {
                  "title": "Movie_Title_pt_iSTDY",
                  "description": "Movie_Description_pt_S40hYYXiL3iTtaAwzTwj",
                  "quality": {
                    "p1080": "link_1080p_bODkj",
                    "p720": "link_720p_K7LWC",
                    "p480": "link_480p_Lc4BP"
                  }
                },
                "ru": {
                  "title": "Movie_Title_ru_2X2xg",
                  "description": "Movie_Description_ru_EdFYS8YSnOcHaUWb7NV8",
                  "quality": {
                    "p1080": "link_1080p_wPNzm",
                    "p720": "link_720p_dR0yv",
                    "p480": "link_480p_HIkgD"
                  }
                },
                "zh": {
                  "title": "Movie_Title_zh_tK6q1",
                  "description": "Movie_Description_zh_H6pKJMotRtG2pCJfE3mX",
                  "quality": {
                    "p1080": "link_1080p_Cs9vk",
                    "p720": "link_720p_85u2f",
                    "p480": "link_480p_5gPll"
                  }
                },
                "ar": {
                  "title": "Movie_Title_ar_HQ8X2",
                  "description": "Movie_Description_ar_zek3Q5hRBxEuq2H4ptWS",
                  "quality": {
                    "p1080": "link_1080p_mJDbA",
                    "p720": "link_720p_iDMOC",
                    "p480": "link_480p_m51Nw"
                  }
                },
                "hi": {
                  "title": "Movie_Title_hi_tQUll",
                  "description": "Movie_Description_hi_IuGKpnbpbbUj17TwuIdv",
                  "quality": {
                    "p1080": "link_1080p_jjTZF",
                    "p720": "link_720p_jjAAs",
                    "p480": "link_480p_Ohw0m"
                  }
                },
                "ko": {
                  "title": "Movie_Title_ko_wWcUe",
                  "description": "Movie_Description_ko_M1KLIZN7jNoRHvkcyFZn",
                  "quality": {
                    "p1080": "link_1080p_z89O8",
                    "p720": "link_720p_bnmaf",
                    "p480": "link_480p_uuiC9"
                  }
                },
                "nl": {
                  "title": "Movie_Title_nl_AqahW",
                  "description": "Movie_Description_nl_JsaF5purU0thnXiNZWt5",
                  "quality": {
                    "p1080": "link_1080p_c7yA7",
                    "p720": "link_720p_bpRrE",
                    "p480": "link_480p_irVux"
                  }
                },
                "sv": {
                  "title": "Movie_Title_sv_zg4Yh",
                  "description": "Movie_Description_sv_cXVr3RwYDu4jJfYSkyhG",
                  "quality": {
                    "p1080": "link_1080p_QQErx",
                    "p720": "link_720p_1zgjR",
                    "p480": "link_480p_Atxwq"
                  }
                },
                "tr": {
                  "title": "Movie_Title_tr_R6hWp",
                  "description": "Movie_Description_tr_Ah6bLWf7Rx5kVPoW1G8D",
                  "quality": {
                    "p1080": "link_1080p_3j4I3",
                    "p720": "link_720p_pLBtN",
                    "p480": "link_480p_4c8cf"
                  }
                }
              },
              "picture": "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/q3jHCb4dMfYF6ojikKuHd6LscxC.jpg",
              "minipicture": "https://image.tmdb.org/t/p/w500/7LKGXQKpuF4GPCsRxIgifdNs9vS.png",
              "time": "1h29",
              "date": "2020-01-01"
            },
            {
              "data": {
                "fr": {
                  "title": "Movie_Title_fr_AfPy8",
                  "description": "Movie_Description_fr_ni3McnxDRllapgQCY2RK",
                  "quality": {
                    "p1080": "link_1080p_Ep4dA",
                    "p720": "link_720p_Lp84u",
                    "p480": "link_480p_XHgdP"
                  }
                },
                "en": {
                  "title": "Movie_Title_en_8aUIp",
                  "description": "Movie_Description_en_XvRf6FRhf4SDYpmL7YVC",
                  "quality": {
                    "p1080": "link_1080p_Q8aDO",
                    "p720": "link_720p_vNSvI",
                    "p480": "link_480p_0WRju"
                  }
                },
                "es": {
                  "title": "Movie_Title_es_zKmPk",
                  "description": "Movie_Description_es_H4pYPTl6wP6yz81z8kfb",
                  "quality": {
                    "p1080": "link_1080p_qgdfB",
                    "p720": "link_720p_G6Kn2",
                    "p480": "link_480p_A3D5f"
                  }
                },
                "jp": {
                  "title": "Movie_Title_jp_QVvPK",
                  "description": "Movie_Description_jp_oI5vioUHpuS0NkfaEfZt",
                  "quality": {
                    "p1080": "link_1080p_iumZ5",
                    "p720": "link_720p_9bWoZ",
                    "p480": "link_480p_sHemP"
                  }
                },
                "de": {
                  "title": "Movie_Title_de_EBfh2",
                  "description": "Movie_Description_de_3xc6qa4C1oY2107HM8m1",
                  "quality": {
                    "p1080": "link_1080p_mtYT1",
                    "p720": "link_720p_OCo9Z",
                    "p480": "link_480p_x26Sm"
                  }
                },
                "it": {
                  "title": "Movie_Title_it_jalJE",
                  "description": "Movie_Description_it_Hzxc0YC8NPWmumTfUe3g",
                  "quality": {
                    "p1080": "link_1080p_sU8m3",
                    "p720": "link_720p_bajWG",
                    "p480": "link_480p_NdfQj"
                  }
                },
                "pt": {
                  "title": "Movie_Title_pt_iSTDY",
                  "description": "Movie_Description_pt_S40hYYXiL3iTtaAwzTwj",
                  "quality": {
                    "p1080": "link_1080p_bODkj",
                    "p720": "link_720p_K7LWC",
                    "p480": "link_480p_Lc4BP"
                  }
                },
                "ru": {
                  "title": "Movie_Title_ru_2X2xg",
                  "description": "Movie_Description_ru_EdFYS8YSnOcHaUWb7NV8",
                  "quality": {
                    "p1080": "link_1080p_wPNzm",
                    "p720": "link_720p_dR0yv",
                    "p480": "link_480p_HIkgD"
                  }
                },
                "zh": {
                  "title": "Movie_Title_zh_tK6q1",
                  "description": "Movie_Description_zh_H6pKJMotRtG2pCJfE3mX",
                  "quality": {
                    "p1080": "link_1080p_Cs9vk",
                    "p720": "link_720p_85u2f",
                    "p480": "link_480p_5gPll"
                  }
                },
                "ar": {
                  "title": "Movie_Title_ar_HQ8X2",
                  "description": "Movie_Description_ar_zek3Q5hRBxEuq2H4ptWS",
                  "quality": {
                    "p1080": "link_1080p_mJDbA",
                    "p720": "link_720p_iDMOC",
                    "p480": "link_480p_m51Nw"
                  }
                },
                "hi": {
                  "title": "Movie_Title_hi_tQUll",
                  "description": "Movie_Description_hi_IuGKpnbpbbUj17TwuIdv",
                  "quality": {
                    "p1080": "link_1080p_jjTZF",
                    "p720": "link_720p_jjAAs",
                    "p480": "link_480p_Ohw0m"
                  }
                },
                "ko": {
                  "title": "Movie_Title_ko_wWcUe",
                  "description": "Movie_Description_ko_M1KLIZN7jNoRHvkcyFZn",
                  "quality": {
                    "p1080": "link_1080p_z89O8",
                    "p720": "link_720p_bnmaf",
                    "p480": "link_480p_uuiC9"
                  }
                },
                "nl": {
                  "title": "Movie_Title_nl_AqahW",
                  "description": "Movie_Description_nl_JsaF5purU0thnXiNZWt5",
                  "quality": {
                    "p1080": "link_1080p_c7yA7",
                    "p720": "link_720p_bpRrE",
                    "p480": "link_480p_irVux"
                  }
                },
                "sv": {
                  "title": "Movie_Title_sv_zg4Yh",
                  "description": "Movie_Description_sv_cXVr3RwYDu4jJfYSkyhG",
                  "quality": {
                    "p1080": "link_1080p_QQErx",
                    "p720": "link_720p_1zgjR",
                    "p480": "link_480p_Atxwq"
                  }
                },
                "tr": {
                  "title": "Movie_Title_tr_R6hWp",
                  "description": "Movie_Description_tr_Ah6bLWf7Rx5kVPoW1G8D",
                  "quality": {
                    "p1080": "link_1080p_3j4I3",
                    "p720": "link_720p_pLBtN",
                    "p480": "link_480p_4c8cf"
                  }
                }
              },
              "picture": "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/q3jHCb4dMfYF6ojikKuHd6LscxC.jpg",
              "minipicture": "https://image.tmdb.org/t/p/w500/7LKGXQKpuF4GPCsRxIgifdNs9vS.png",
              "time": "1h29",
              "date": "2020-01-01"
            },
            {
              "data": {
                "fr": {
                  "title": "Movie_Title_fr_AfPy8",
                  "description": "Movie_Description_fr_ni3McnxDRllapgQCY2RK",
                  "quality": {
                    "p1080": "link_1080p_Ep4dA",
                    "p720": "link_720p_Lp84u",
                    "p480": "link_480p_XHgdP"
                  }
                },
                "en": {
                  "title": "Movie_Title_en_8aUIp",
                  "description": "Movie_Description_en_XvRf6FRhf4SDYpmL7YVC",
                  "quality": {
                    "p1080": "link_1080p_Q8aDO",
                    "p720": "link_720p_vNSvI",
                    "p480": "link_480p_0WRju"
                  }
                },
                "es": {
                  "title": "Movie_Title_es_zKmPk",
                  "description": "Movie_Description_es_H4pYPTl6wP6yz81z8kfb",
                  "quality": {
                    "p1080": "link_1080p_qgdfB",
                    "p720": "link_720p_G6Kn2",
                    "p480": "link_480p_A3D5f"
                  }
                },
                "jp": {
                  "title": "Movie_Title_jp_QVvPK",
                  "description": "Movie_Description_jp_oI5vioUHpuS0NkfaEfZt",
                  "quality": {
                    "p1080": "link_1080p_iumZ5",
                    "p720": "link_720p_9bWoZ",
                    "p480": "link_480p_sHemP"
                  }
                },
                "de": {
                  "title": "Movie_Title_de_EBfh2",
                  "description": "Movie_Description_de_3xc6qa4C1oY2107HM8m1",
                  "quality": {
                    "p1080": "link_1080p_mtYT1",
                    "p720": "link_720p_OCo9Z",
                    "p480": "link_480p_x26Sm"
                  }
                },
                "it": {
                  "title": "Movie_Title_it_jalJE",
                  "description": "Movie_Description_it_Hzxc0YC8NPWmumTfUe3g",
                  "quality": {
                    "p1080": "link_1080p_sU8m3",
                    "p720": "link_720p_bajWG",
                    "p480": "link_480p_NdfQj"
                  }
                },
                "pt": {
                  "title": "Movie_Title_pt_iSTDY",
                  "description": "Movie_Description_pt_S40hYYXiL3iTtaAwzTwj",
                  "quality": {
                    "p1080": "link_1080p_bODkj",
                    "p720": "link_720p_K7LWC",
                    "p480": "link_480p_Lc4BP"
                  }
                },
                "ru": {
                  "title": "Movie_Title_ru_2X2xg",
                  "description": "Movie_Description_ru_EdFYS8YSnOcHaUWb7NV8",
                  "quality": {
                    "p1080": "link_1080p_wPNzm",
                    "p720": "link_720p_dR0yv",
                    "p480": "link_480p_HIkgD"
                  }
                },
                "zh": {
                  "title": "Movie_Title_zh_tK6q1",
                  "description": "Movie_Description_zh_H6pKJMotRtG2pCJfE3mX",
                  "quality": {
                    "p1080": "link_1080p_Cs9vk",
                    "p720": "link_720p_85u2f",
                    "p480": "link_480p_5gPll"
                  }
                },
                "ar": {
                  "title": "Movie_Title_ar_HQ8X2",
                  "description": "Movie_Description_ar_zek3Q5hRBxEuq2H4ptWS",
                  "quality": {
                    "p1080": "link_1080p_mJDbA",
                    "p720": "link_720p_iDMOC",
                    "p480": "link_480p_m51Nw"
                  }
                },
                "hi": {
                  "title": "Movie_Title_hi_tQUll",
                  "description": "Movie_Description_hi_IuGKpnbpbbUj17TwuIdv",
                  "quality": {
                    "p1080": "link_1080p_jjTZF",
                    "p720": "link_720p_jjAAs",
                    "p480": "link_480p_Ohw0m"
                  }
                },
                "ko": {
                  "title": "Movie_Title_ko_wWcUe",
                  "description": "Movie_Description_ko_M1KLIZN7jNoRHvkcyFZn",
                  "quality": {
                    "p1080": "link_1080p_z89O8",
                    "p720": "link_720p_bnmaf",
                    "p480": "link_480p_uuiC9"
                  }
                },
                "nl": {
                  "title": "Movie_Title_nl_AqahW",
                  "description": "Movie_Description_nl_JsaF5purU0thnXiNZWt5",
                  "quality": {
                    "p1080": "link_1080p_c7yA7",
                    "p720": "link_720p_bpRrE",
                    "p480": "link_480p_irVux"
                  }
                },
                "sv": {
                  "title": "Movie_Title_sv_zg4Yh",
                  "description": "Movie_Description_sv_cXVr3RwYDu4jJfYSkyhG",
                  "quality": {
                    "p1080": "link_1080p_QQErx",
                    "p720": "link_720p_1zgjR",
                    "p480": "link_480p_Atxwq"
                  }
                },
                "tr": {
                  "title": "Movie_Title_tr_R6hWp",
                  "description": "Movie_Description_tr_Ah6bLWf7Rx5kVPoW1G8D",
                  "quality": {
                    "p1080": "link_1080p_3j4I3",
                    "p720": "link_720p_pLBtN",
                    "p480": "link_480p_4c8cf"
                  }
                }
              },
              "picture": "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/q3jHCb4dMfYF6ojikKuHd6LscxC.jpg",
              "minipicture": "https://image.tmdb.org/t/p/w500/7LKGXQKpuF4GPCsRxIgifdNs9vS.png",
              "time": "1h29",
              "date": "2020-01-01"
            },
            {
              "data": {
                "fr": {
                  "title": "Movie_Title_fr_AfPy8",
                  "description": "Movie_Description_fr_ni3McnxDRllapgQCY2RK",
                  "quality": {
                    "p1080": "link_1080p_Ep4dA",
                    "p720": "link_720p_Lp84u",
                    "p480": "link_480p_XHgdP"
                  }
                },
                "en": {
                  "title": "Movie_Title_en_8aUIp",
                  "description": "Movie_Description_en_XvRf6FRhf4SDYpmL7YVC",
                  "quality": {
                    "p1080": "link_1080p_Q8aDO",
                    "p720": "link_720p_vNSvI",
                    "p480": "link_480p_0WRju"
                  }
                },
                "es": {
                  "title": "Movie_Title_es_zKmPk",
                  "description": "Movie_Description_es_H4pYPTl6wP6yz81z8kfb",
                  "quality": {
                    "p1080": "link_1080p_qgdfB",
                    "p720": "link_720p_G6Kn2",
                    "p480": "link_480p_A3D5f"
                  }
                },
                "jp": {
                  "title": "Movie_Title_jp_QVvPK",
                  "description": "Movie_Description_jp_oI5vioUHpuS0NkfaEfZt",
                  "quality": {
                    "p1080": "link_1080p_iumZ5",
                    "p720": "link_720p_9bWoZ",
                    "p480": "link_480p_sHemP"
                  }
                },
                "de": {
                  "title": "Movie_Title_de_EBfh2",
                  "description": "Movie_Description_de_3xc6qa4C1oY2107HM8m1",
                  "quality": {
                    "p1080": "link_1080p_mtYT1",
                    "p720": "link_720p_OCo9Z",
                    "p480": "link_480p_x26Sm"
                  }
                },
                "it": {
                  "title": "Movie_Title_it_jalJE",
                  "description": "Movie_Description_it_Hzxc0YC8NPWmumTfUe3g",
                  "quality": {
                    "p1080": "link_1080p_sU8m3",
                    "p720": "link_720p_bajWG",
                    "p480": "link_480p_NdfQj"
                  }
                },
                "pt": {
                  "title": "Movie_Title_pt_iSTDY",
                  "description": "Movie_Description_pt_S40hYYXiL3iTtaAwzTwj",
                  "quality": {
                    "p1080": "link_1080p_bODkj",
                    "p720": "link_720p_K7LWC",
                    "p480": "link_480p_Lc4BP"
                  }
                },
                "ru": {
                  "title": "Movie_Title_ru_2X2xg",
                  "description": "Movie_Description_ru_EdFYS8YSnOcHaUWb7NV8",
                  "quality": {
                    "p1080": "link_1080p_wPNzm",
                    "p720": "link_720p_dR0yv",
                    "p480": "link_480p_HIkgD"
                  }
                },
                "zh": {
                  "title": "Movie_Title_zh_tK6q1",
                  "description": "Movie_Description_zh_H6pKJMotRtG2pCJfE3mX",
                  "quality": {
                    "p1080": "link_1080p_Cs9vk",
                    "p720": "link_720p_85u2f",
                    "p480": "link_480p_5gPll"
                  }
                },
                "ar": {
                  "title": "Movie_Title_ar_HQ8X2",
                  "description": "Movie_Description_ar_zek3Q5hRBxEuq2H4ptWS",
                  "quality": {
                    "p1080": "link_1080p_mJDbA",
                    "p720": "link_720p_iDMOC",
                    "p480": "link_480p_m51Nw"
                  }
                },
                "hi": {
                  "title": "Movie_Title_hi_tQUll",
                  "description": "Movie_Description_hi_IuGKpnbpbbUj17TwuIdv",
                  "quality": {
                    "p1080": "link_1080p_jjTZF",
                    "p720": "link_720p_jjAAs",
                    "p480": "link_480p_Ohw0m"
                  }
                },
                "ko": {
                  "title": "Movie_Title_ko_wWcUe",
                  "description": "Movie_Description_ko_M1KLIZN7jNoRHvkcyFZn",
                  "quality": {
                    "p1080": "link_1080p_z89O8",
                    "p720": "link_720p_bnmaf",
                    "p480": "link_480p_uuiC9"
                  }
                },
                "nl": {
                  "title": "Movie_Title_nl_AqahW",
                  "description": "Movie_Description_nl_JsaF5purU0thnXiNZWt5",
                  "quality": {
                    "p1080": "link_1080p_c7yA7",
                    "p720": "link_720p_bpRrE",
                    "p480": "link_480p_irVux"
                  }
                },
                "sv": {
                  "title": "Movie_Title_sv_zg4Yh",
                  "description": "Movie_Description_sv_cXVr3RwYDu4jJfYSkyhG",
                  "quality": {
                    "p1080": "link_1080p_QQErx",
                    "p720": "link_720p_1zgjR",
                    "p480": "link_480p_Atxwq"
                  }
                },
                "tr": {
                  "title": "Movie_Title_tr_R6hWp",
                  "description": "Movie_Description_tr_Ah6bLWf7Rx5kVPoW1G8D",
                  "quality": {
                    "p1080": "link_1080p_3j4I3",
                    "p720": "link_720p_pLBtN",
                    "p480": "link_480p_4c8cf"
                  }
                }
              },
              "picture": "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/q3jHCb4dMfYF6ojikKuHd6LscxC.jpg",
              "minipicture": "https://image.tmdb.org/t/p/w500/7LKGXQKpuF4GPCsRxIgifdNs9vS.png",
              "time": "1h29",
              "date": "2020-01-01"
            },
            {
              "data": {
                "fr": {
                  "title": "Movie_Title_fr_AfPy8",
                  "description": "Movie_Description_fr_ni3McnxDRllapgQCY2RK",
                  "quality": {
                    "p1080": "link_1080p_Ep4dA",
                    "p720": "link_720p_Lp84u",
                    "p480": "link_480p_XHgdP"
                  }
                },
                "en": {
                  "title": "Movie_Title_en_8aUIp",
                  "description": "Movie_Description_en_XvRf6FRhf4SDYpmL7YVC",
                  "quality": {
                    "p1080": "link_1080p_Q8aDO",
                    "p720": "link_720p_vNSvI",
                    "p480": "link_480p_0WRju"
                  }
                },
                "es": {
                  "title": "Movie_Title_es_zKmPk",
                  "description": "Movie_Description_es_H4pYPTl6wP6yz81z8kfb",
                  "quality": {
                    "p1080": "link_1080p_qgdfB",
                    "p720": "link_720p_G6Kn2",
                    "p480": "link_480p_A3D5f"
                  }
                },
                "jp": {
                  "title": "Movie_Title_jp_QVvPK",
                  "description": "Movie_Description_jp_oI5vioUHpuS0NkfaEfZt",
                  "quality": {
                    "p1080": "link_1080p_iumZ5",
                    "p720": "link_720p_9bWoZ",
                    "p480": "link_480p_sHemP"
                  }
                },
                "de": {
                  "title": "Movie_Title_de_EBfh2",
                  "description": "Movie_Description_de_3xc6qa4C1oY2107HM8m1",
                  "quality": {
                    "p1080": "link_1080p_mtYT1",
                    "p720": "link_720p_OCo9Z",
                    "p480": "link_480p_x26Sm"
                  }
                },
                "it": {
                  "title": "Movie_Title_it_jalJE",
                  "description": "Movie_Description_it_Hzxc0YC8NPWmumTfUe3g",
                  "quality": {
                    "p1080": "link_1080p_sU8m3",
                    "p720": "link_720p_bajWG",
                    "p480": "link_480p_NdfQj"
                  }
                },
                "pt": {
                  "title": "Movie_Title_pt_iSTDY",
                  "description": "Movie_Description_pt_S40hYYXiL3iTtaAwzTwj",
                  "quality": {
                    "p1080": "link_1080p_bODkj",
                    "p720": "link_720p_K7LWC",
                    "p480": "link_480p_Lc4BP"
                  }
                },
                "ru": {
                  "title": "Movie_Title_ru_2X2xg",
                  "description": "Movie_Description_ru_EdFYS8YSnOcHaUWb7NV8",
                  "quality": {
                    "p1080": "link_1080p_wPNzm",
                    "p720": "link_720p_dR0yv",
                    "p480": "link_480p_HIkgD"
                  }
                },
                "zh": {
                  "title": "Movie_Title_zh_tK6q1",
                  "description": "Movie_Description_zh_H6pKJMotRtG2pCJfE3mX",
                  "quality": {
                    "p1080": "link_1080p_Cs9vk",
                    "p720": "link_720p_85u2f",
                    "p480": "link_480p_5gPll"
                  }
                },
                "ar": {
                  "title": "Movie_Title_ar_HQ8X2",
                  "description": "Movie_Description_ar_zek3Q5hRBxEuq2H4ptWS",
                  "quality": {
                    "p1080": "link_1080p_mJDbA",
                    "p720": "link_720p_iDMOC",
                    "p480": "link_480p_m51Nw"
                  }
                },
                "hi": {
                  "title": "Movie_Title_hi_tQUll",
                  "description": "Movie_Description_hi_IuGKpnbpbbUj17TwuIdv",
                  "quality": {
                    "p1080": "link_1080p_jjTZF",
                    "p720": "link_720p_jjAAs",
                    "p480": "link_480p_Ohw0m"
                  }
                },
                "ko": {
                  "title": "Movie_Title_ko_wWcUe",
                  "description": "Movie_Description_ko_M1KLIZN7jNoRHvkcyFZn",
                  "quality": {
                    "p1080": "link_1080p_z89O8",
                    "p720": "link_720p_bnmaf",
                    "p480": "link_480p_uuiC9"
                  }
                },
                "nl": {
                  "title": "Movie_Title_nl_AqahW",
                  "description": "Movie_Description_nl_JsaF5purU0thnXiNZWt5",
                  "quality": {
                    "p1080": "link_1080p_c7yA7",
                    "p720": "link_720p_bpRrE",
                    "p480": "link_480p_irVux"
                  }
                },
                "sv": {
                  "title": "Movie_Title_sv_zg4Yh",
                  "description": "Movie_Description_sv_cXVr3RwYDu4jJfYSkyhG",
                  "quality": {
                    "p1080": "link_1080p_QQErx",
                    "p720": "link_720p_1zgjR",
                    "p480": "link_480p_Atxwq"
                  }
                },
                "tr": {
                  "title": "Movie_Title_tr_R6hWp",
                  "description": "Movie_Description_tr_Ah6bLWf7Rx5kVPoW1G8D",
                  "quality": {
                    "p1080": "link_1080p_3j4I3",
                    "p720": "link_720p_pLBtN",
                    "p480": "link_480p_4c8cf"
                  }
                }
              },
              "picture": "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/q3jHCb4dMfYF6ojikKuHd6LscxC.jpg",
              "minipicture": "https://image.tmdb.org/t/p/w500/7LKGXQKpuF4GPCsRxIgifdNs9vS.png",
              "time": "1h29",
              "date": "2020-01-01"
            }
          ]
        }
      ],
      "videos": [
        "https://www.youtube.com/watch?v=VTVxNM9v_us",
        "https://www.youtube.com/watch?v=VTVxNM9v_us",
        "https://www.youtube.com/watch?v=VTVxNM9v_us"
      ],
      "person": [
        {
          "name": "Jenna Ortega",
          "picture": "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/7oUAtVgZU0uLdUSvDHKkINt1y7Y.jpg",
          "link": "https://www.themoviedb.org/person/974169-jenna-ortega"
        },
        {
          "name": "Jenna Ortega",
          "picture": "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/7oUAtVgZU0uLdUSvDHKkINt1y7Y.jpg",
          "link": "https://www.themoviedb.org/person/974169-jenna-ortega"
        },
        {
          "name": "Jenna Ortega",
          "picture": "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/7oUAtVgZU0uLdUSvDHKkINt1y7Y.jpg",
          "link": "https://www.themoviedb.org/person/974169-jenna-ortega"
        },
        {
          "name": "Jenna Ortega",
          "picture": "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/7oUAtVgZU0uLdUSvDHKkINt1y7Y.jpg",
          "link": "https://www.themoviedb.org/person/974169-jenna-ortega"
        },
        {
          "name": "Jenna Ortega",
          "picture": "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/7oUAtVgZU0uLdUSvDHKkINt1y7Y.jpg",
          "link": "https://www.themoviedb.org/person/974169-jenna-ortega"
        },
        {
          "name": "Jenna Ortega",
          "picture": "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/7oUAtVgZU0uLdUSvDHKkINt1y7Y.jpg",
          "link": "https://www.themoviedb.org/person/974169-jenna-ortega"
        },
        {
          "name": "Jenna Ortega",
          "picture": "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/7oUAtVgZU0uLdUSvDHKkINt1y7Y.jpg",
          "link": "https://www.themoviedb.org/person/974169-jenna-ortega"
        },
        {
          "name": "Jenna Ortega",
          "picture": "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/7oUAtVgZU0uLdUSvDHKkINt1y7Y.jpg",
          "link": "https://www.themoviedb.org/person/974169-jenna-ortega"
        },
        {
          "name": "Jenna Ortega",
          "picture": "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/7oUAtVgZU0uLdUSvDHKkINt1y7Y.jpg",
          "link": "https://www.themoviedb.org/person/974169-jenna-ortega"
        },
        {
          "name": "Jenna Ortega",
          "picture": "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/7oUAtVgZU0uLdUSvDHKkINt1y7Y.jpg",
          "link": "https://www.themoviedb.org/person/974169-jenna-ortega"
        },
        {
          "name": "Jenna Ortega",
          "picture": "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/7oUAtVgZU0uLdUSvDHKkINt1y7Y.jpg",
          "link": "https://www.themoviedb.org/person/974169-jenna-ortega"
        },
        {
          "name": "Jenna Ortega",
          "picture": "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/7oUAtVgZU0uLdUSvDHKkINt1y7Y.jpg",
          "link": "https://www.themoviedb.org/person/974169-jenna-ortega"
        }
      ]
    }
  ],
  "data3": [],
  "data4": [],
  "data5": [
    {
      "_id": {
        "$oid": "69309a81b7544c130eb84067"
      },
      "data": {
        "fr": {
          "title": "Movie_Title_fr_AfPy8",
          "description": "Movie_Description_fr_ni3McnxDRllapgQCY2RK",
          "quality": {
            "p1080": "link_1080p_Ep4dA",
            "p720": "link_720p_Lp84u",
            "p480": "link_480p_XHgdP"
          }
        },
        "en": {
          "title": "Movie_Title_en_8aUIp",
          "description": "Movie_Description_en_XvRf6FRhf4SDYpmL7YVC",
          "quality": {
            "p1080": "link_1080p_Q8aDO",
            "p720": "link_720p_vNSvI",
            "p480": "link_480p_0WRju"
          }
        },
        "es": {
          "title": "Movie_Title_es_zKmPk",
          "description": "Movie_Description_es_H4pYPTl6wP6yz81z8kfb",
          "quality": {
            "p1080": "link_1080p_qgdfB",
            "p720": "link_720p_G6Kn2",
            "p480": "link_480p_A3D5f"
          }
        },
        "jp": {
          "title": "Movie_Title_jp_QVvPK",
          "description": "Movie_Description_jp_oI5vioUHpuS0NkfaEfZt",
          "quality": {
            "p1080": "link_1080p_iumZ5",
            "p720": "link_720p_9bWoZ",
            "p480": "link_480p_sHemP"
          }
        },
        "de": {
          "title": "Movie_Title_de_EBfh2",
          "description": "Movie_Description_de_3xc6qa4C1oY2107HM8m1",
          "quality": {
            "p1080": "link_1080p_mtYT1",
            "p720": "link_720p_OCo9Z",
            "p480": "link_480p_x26Sm"
          }
        },
        "it": {
          "title": "Movie_Title_it_jalJE",
          "description": "Movie_Description_it_Hzxc0YC8NPWmumTfUe3g",
          "quality": {
            "p1080": "link_1080p_sU8m3",
            "p720": "link_720p_bajWG",
            "p480": "link_480p_NdfQj"
          }
        },
        "pt": {
          "title": "Movie_Title_pt_iSTDY",
          "description": "Movie_Description_pt_S40hYYXiL3iTtaAwzTwj",
          "quality": {
            "p1080": "link_1080p_bODkj",
            "p720": "link_720p_K7LWC",
            "p480": "link_480p_Lc4BP"
          }
        },
        "ru": {
          "title": "Movie_Title_ru_2X2xg",
          "description": "Movie_Description_ru_EdFYS8YSnOcHaUWb7NV8",
          "quality": {
            "p1080": "link_1080p_wPNzm",
            "p720": "link_720p_dR0yv",
            "p480": "link_480p_HIkgD"
          }
        },
        "zh": {
          "title": "Movie_Title_zh_tK6q1",
          "description": "Movie_Description_zh_H6pKJMotRtG2pCJfE3mX",
          "quality": {
            "p1080": "link_1080p_Cs9vk",
            "p720": "link_720p_85u2f",
            "p480": "link_480p_5gPll"
          }
        },
        "ar": {
          "title": "Movie_Title_ar_HQ8X2",
          "description": "Movie_Description_ar_zek3Q5hRBxEuq2H4ptWS",
          "quality": {
            "p1080": "link_1080p_mJDbA",
            "p720": "link_720p_iDMOC",
            "p480": "link_480p_m51Nw"
          }
        },
        "hi": {
          "title": "Movie_Title_hi_tQUll",
          "description": "Movie_Description_hi_IuGKpnbpbbUj17TwuIdv",
          "quality": {
            "p1080": "link_1080p_jjTZF",
            "p720": "link_720p_jjAAs",
            "p480": "link_480p_Ohw0m"
          }
        },
        "ko": {
          "title": "Movie_Title_ko_wWcUe",
          "description": "Movie_Description_ko_M1KLIZN7jNoRHvkcyFZn",
          "quality": {
            "p1080": "link_1080p_z89O8",
            "p720": "link_720p_bnmaf",
            "p480": "link_480p_uuiC9"
          }
        },
        "nl": {
          "title": "Movie_Title_nl_AqahW",
          "description": "Movie_Description_nl_JsaF5purU0thnXiNZWt5",
          "quality": {
            "p1080": "link_1080p_c7yA7",
            "p720": "link_720p_bpRrE",
            "p480": "link_480p_irVux"
          }
        },
        "sv": {
          "title": "Movie_Title_sv_zg4Yh",
          "description": "Movie_Description_sv_cXVr3RwYDu4jJfYSkyhG",
          "quality": {
            "p1080": "link_1080p_QQErx",
            "p720": "link_720p_1zgjR",
            "p480": "link_480p_Atxwq"
          }
        },
        "tr": {
          "title": "Movie_Title_tr_R6hWp",
          "description": "Movie_Description_tr_Ah6bLWf7Rx5kVPoW1G8D",
          "quality": {
            "p1080": "link_1080p_3j4I3",
            "p720": "link_720p_pLBtN",
            "p480": "link_480p_4c8cf"
          }
        }
      },
      "picture": "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/q3jHCb4dMfYF6ojikKuHd6LscxC.jpg",
      "minipicture": "https://image.tmdb.org/t/p/w500/7LKGXQKpuF4GPCsRxIgifdNs9vS.png",
      "genres": [
        4,
        3,
        3
      ],
      "time": "1h29",
      "date": "2020-01-01",
      "note": 2,
      "saisons": [
        {
          "name": "saison 1",
          "episode": [
            {
              "data": {
                "fr": {
                  "title": "Movie_Title_fr_AfPy8",
                  "description": "Movie_Description_fr_ni3McnxDRllapgQCY2RK",
                  "quality": {
                    "p1080": "link_1080p_Ep4dA",
                    "p720": "link_720p_Lp84u",
                    "p480": "link_480p_XHgdP"
                  }
                },
                "en": {
                  "title": "Movie_Title_en_8aUIp",
                  "description": "Movie_Description_en_XvRf6FRhf4SDYpmL7YVC",
                  "quality": {
                    "p1080": "link_1080p_Q8aDO",
                    "p720": "link_720p_vNSvI",
                    "p480": "link_480p_0WRju"
                  }
                },
                "es": {
                  "title": "Movie_Title_es_zKmPk",
                  "description": "Movie_Description_es_H4pYPTl6wP6yz81z8kfb",
                  "quality": {
                    "p1080": "link_1080p_qgdfB",
                    "p720": "link_720p_G6Kn2",
                    "p480": "link_480p_A3D5f"
                  }
                },
                "jp": {
                  "title": "Movie_Title_jp_QVvPK",
                  "description": "Movie_Description_jp_oI5vioUHpuS0NkfaEfZt",
                  "quality": {
                    "p1080": "link_1080p_iumZ5",
                    "p720": "link_720p_9bWoZ",
                    "p480": "link_480p_sHemP"
                  }
                },
                "de": {
                  "title": "Movie_Title_de_EBfh2",
                  "description": "Movie_Description_de_3xc6qa4C1oY2107HM8m1",
                  "quality": {
                    "p1080": "link_1080p_mtYT1",
                    "p720": "link_720p_OCo9Z",
                    "p480": "link_480p_x26Sm"
                  }
                },
                "it": {
                  "title": "Movie_Title_it_jalJE",
                  "description": "Movie_Description_it_Hzxc0YC8NPWmumTfUe3g",
                  "quality": {
                    "p1080": "link_1080p_sU8m3",
                    "p720": "link_720p_bajWG",
                    "p480": "link_480p_NdfQj"
                  }
                },
                "pt": {
                  "title": "Movie_Title_pt_iSTDY",
                  "description": "Movie_Description_pt_S40hYYXiL3iTtaAwzTwj",
                  "quality": {
                    "p1080": "link_1080p_bODkj",
                    "p720": "link_720p_K7LWC",
                    "p480": "link_480p_Lc4BP"
                  }
                },
                "ru": {
                  "title": "Movie_Title_ru_2X2xg",
                  "description": "Movie_Description_ru_EdFYS8YSnOcHaUWb7NV8",
                  "quality": {
                    "p1080": "link_1080p_wPNzm",
                    "p720": "link_720p_dR0yv",
                    "p480": "link_480p_HIkgD"
                  }
                },
                "zh": {
                  "title": "Movie_Title_zh_tK6q1",
                  "description": "Movie_Description_zh_H6pKJMotRtG2pCJfE3mX",
                  "quality": {
                    "p1080": "link_1080p_Cs9vk",
                    "p720": "link_720p_85u2f",
                    "p480": "link_480p_5gPll"
                  }
                },
                "ar": {
                  "title": "Movie_Title_ar_HQ8X2",
                  "description": "Movie_Description_ar_zek3Q5hRBxEuq2H4ptWS",
                  "quality": {
                    "p1080": "link_1080p_mJDbA",
                    "p720": "link_720p_iDMOC",
                    "p480": "link_480p_m51Nw"
                  }
                },
                "hi": {
                  "title": "Movie_Title_hi_tQUll",
                  "description": "Movie_Description_hi_IuGKpnbpbbUj17TwuIdv",
                  "quality": {
                    "p1080": "link_1080p_jjTZF",
                    "p720": "link_720p_jjAAs",
                    "p480": "link_480p_Ohw0m"
                  }
                },
                "ko": {
                  "title": "Movie_Title_ko_wWcUe",
                  "description": "Movie_Description_ko_M1KLIZN7jNoRHvkcyFZn",
                  "quality": {
                    "p1080": "link_1080p_z89O8",
                    "p720": "link_720p_bnmaf",
                    "p480": "link_480p_uuiC9"
                  }
                },
                "nl": {
                  "title": "Movie_Title_nl_AqahW",
                  "description": "Movie_Description_nl_JsaF5purU0thnXiNZWt5",
                  "quality": {
                    "p1080": "link_1080p_c7yA7",
                    "p720": "link_720p_bpRrE",
                    "p480": "link_480p_irVux"
                  }
                },
                "sv": {
                  "title": "Movie_Title_sv_zg4Yh",
                  "description": "Movie_Description_sv_cXVr3RwYDu4jJfYSkyhG",
                  "quality": {
                    "p1080": "link_1080p_QQErx",
                    "p720": "link_720p_1zgjR",
                    "p480": "link_480p_Atxwq"
                  }
                },
                "tr": {
                  "title": "Movie_Title_tr_R6hWp",
                  "description": "Movie_Description_tr_Ah6bLWf7Rx5kVPoW1G8D",
                  "quality": {
                    "p1080": "link_1080p_3j4I3",
                    "p720": "link_720p_pLBtN",
                    "p480": "link_480p_4c8cf"
                  }
                }
              },
              "picture": "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/q3jHCb4dMfYF6ojikKuHd6LscxC.jpg",
              "minipicture": "https://image.tmdb.org/t/p/w500/7LKGXQKpuF4GPCsRxIgifdNs9vS.png",
              "time": "1h29",
              "date": "2020-01-01"
            },
            {
              "data": {
                "fr": {
                  "title": "Movie_Title_fr_AfPy8",
                  "description": "Movie_Description_fr_ni3McnxDRllapgQCY2RK",
                  "quality": {
                    "p1080": "link_1080p_Ep4dA",
                    "p720": "link_720p_Lp84u",
                    "p480": "link_480p_XHgdP"
                  }
                },
                "en": {
                  "title": "Movie_Title_en_8aUIp",
                  "description": "Movie_Description_en_XvRf6FRhf4SDYpmL7YVC",
                  "quality": {
                    "p1080": "link_1080p_Q8aDO",
                    "p720": "link_720p_vNSvI",
                    "p480": "link_480p_0WRju"
                  }
                },
                "es": {
                  "title": "Movie_Title_es_zKmPk",
                  "description": "Movie_Description_es_H4pYPTl6wP6yz81z8kfb",
                  "quality": {
                    "p1080": "link_1080p_qgdfB",
                    "p720": "link_720p_G6Kn2",
                    "p480": "link_480p_A3D5f"
                  }
                },
                "jp": {
                  "title": "Movie_Title_jp_QVvPK",
                  "description": "Movie_Description_jp_oI5vioUHpuS0NkfaEfZt",
                  "quality": {
                    "p1080": "link_1080p_iumZ5",
                    "p720": "link_720p_9bWoZ",
                    "p480": "link_480p_sHemP"
                  }
                },
                "de": {
                  "title": "Movie_Title_de_EBfh2",
                  "description": "Movie_Description_de_3xc6qa4C1oY2107HM8m1",
                  "quality": {
                    "p1080": "link_1080p_mtYT1",
                    "p720": "link_720p_OCo9Z",
                    "p480": "link_480p_x26Sm"
                  }
                },
                "it": {
                  "title": "Movie_Title_it_jalJE",
                  "description": "Movie_Description_it_Hzxc0YC8NPWmumTfUe3g",
                  "quality": {
                    "p1080": "link_1080p_sU8m3",
                    "p720": "link_720p_bajWG",
                    "p480": "link_480p_NdfQj"
                  }
                },
                "pt": {
                  "title": "Movie_Title_pt_iSTDY",
                  "description": "Movie_Description_pt_S40hYYXiL3iTtaAwzTwj",
                  "quality": {
                    "p1080": "link_1080p_bODkj",
                    "p720": "link_720p_K7LWC",
                    "p480": "link_480p_Lc4BP"
                  }
                },
                "ru": {
                  "title": "Movie_Title_ru_2X2xg",
                  "description": "Movie_Description_ru_EdFYS8YSnOcHaUWb7NV8",
                  "quality": {
                    "p1080": "link_1080p_wPNzm",
                    "p720": "link_720p_dR0yv",
                    "p480": "link_480p_HIkgD"
                  }
                },
                "zh": {
                  "title": "Movie_Title_zh_tK6q1",
                  "description": "Movie_Description_zh_H6pKJMotRtG2pCJfE3mX",
                  "quality": {
                    "p1080": "link_1080p_Cs9vk",
                    "p720": "link_720p_85u2f",
                    "p480": "link_480p_5gPll"
                  }
                },
                "ar": {
                  "title": "Movie_Title_ar_HQ8X2",
                  "description": "Movie_Description_ar_zek3Q5hRBxEuq2H4ptWS",
                  "quality": {
                    "p1080": "link_1080p_mJDbA",
                    "p720": "link_720p_iDMOC",
                    "p480": "link_480p_m51Nw"
                  }
                },
                "hi": {
                  "title": "Movie_Title_hi_tQUll",
                  "description": "Movie_Description_hi_IuGKpnbpbbUj17TwuIdv",
                  "quality": {
                    "p1080": "link_1080p_jjTZF",
                    "p720": "link_720p_jjAAs",
                    "p480": "link_480p_Ohw0m"
                  }
                },
                "ko": {
                  "title": "Movie_Title_ko_wWcUe",
                  "description": "Movie_Description_ko_M1KLIZN7jNoRHvkcyFZn",
                  "quality": {
                    "p1080": "link_1080p_z89O8",
                    "p720": "link_720p_bnmaf",
                    "p480": "link_480p_uuiC9"
                  }
                },
                "nl": {
                  "title": "Movie_Title_nl_AqahW",
                  "description": "Movie_Description_nl_JsaF5purU0thnXiNZWt5",
                  "quality": {
                    "p1080": "link_1080p_c7yA7",
                    "p720": "link_720p_bpRrE",
                    "p480": "link_480p_irVux"
                  }
                },
                "sv": {
                  "title": "Movie_Title_sv_zg4Yh",
                  "description": "Movie_Description_sv_cXVr3RwYDu4jJfYSkyhG",
                  "quality": {
                    "p1080": "link_1080p_QQErx",
                    "p720": "link_720p_1zgjR",
                    "p480": "link_480p_Atxwq"
                  }
                },
                "tr": {
                  "title": "Movie_Title_tr_R6hWp",
                  "description": "Movie_Description_tr_Ah6bLWf7Rx5kVPoW1G8D",
                  "quality": {
                    "p1080": "link_1080p_3j4I3",
                    "p720": "link_720p_pLBtN",
                    "p480": "link_480p_4c8cf"
                  }
                }
              },
              "picture": "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/q3jHCb4dMfYF6ojikKuHd6LscxC.jpg",
              "minipicture": "https://image.tmdb.org/t/p/w500/7LKGXQKpuF4GPCsRxIgifdNs9vS.png",
              "time": "1h29",
              "date": "2020-01-01"
            },
            {
              "data": {
                "fr": {
                  "title": "Movie_Title_fr_AfPy8",
                  "description": "Movie_Description_fr_ni3McnxDRllapgQCY2RK",
                  "quality": {
                    "p1080": "link_1080p_Ep4dA",
                    "p720": "link_720p_Lp84u",
                    "p480": "link_480p_XHgdP"
                  }
                },
                "en": {
                  "title": "Movie_Title_en_8aUIp",
                  "description": "Movie_Description_en_XvRf6FRhf4SDYpmL7YVC",
                  "quality": {
                    "p1080": "link_1080p_Q8aDO",
                    "p720": "link_720p_vNSvI",
                    "p480": "link_480p_0WRju"
                  }
                },
                "es": {
                  "title": "Movie_Title_es_zKmPk",
                  "description": "Movie_Description_es_H4pYPTl6wP6yz81z8kfb",
                  "quality": {
                    "p1080": "link_1080p_qgdfB",
                    "p720": "link_720p_G6Kn2",
                    "p480": "link_480p_A3D5f"
                  }
                },
                "jp": {
                  "title": "Movie_Title_jp_QVvPK",
                  "description": "Movie_Description_jp_oI5vioUHpuS0NkfaEfZt",
                  "quality": {
                    "p1080": "link_1080p_iumZ5",
                    "p720": "link_720p_9bWoZ",
                    "p480": "link_480p_sHemP"
                  }
                },
                "de": {
                  "title": "Movie_Title_de_EBfh2",
                  "description": "Movie_Description_de_3xc6qa4C1oY2107HM8m1",
                  "quality": {
                    "p1080": "link_1080p_mtYT1",
                    "p720": "link_720p_OCo9Z",
                    "p480": "link_480p_x26Sm"
                  }
                },
                "it": {
                  "title": "Movie_Title_it_jalJE",
                  "description": "Movie_Description_it_Hzxc0YC8NPWmumTfUe3g",
                  "quality": {
                    "p1080": "link_1080p_sU8m3",
                    "p720": "link_720p_bajWG",
                    "p480": "link_480p_NdfQj"
                  }
                },
                "pt": {
                  "title": "Movie_Title_pt_iSTDY",
                  "description": "Movie_Description_pt_S40hYYXiL3iTtaAwzTwj",
                  "quality": {
                    "p1080": "link_1080p_bODkj",
                    "p720": "link_720p_K7LWC",
                    "p480": "link_480p_Lc4BP"
                  }
                },
                "ru": {
                  "title": "Movie_Title_ru_2X2xg",
                  "description": "Movie_Description_ru_EdFYS8YSnOcHaUWb7NV8",
                  "quality": {
                    "p1080": "link_1080p_wPNzm",
                    "p720": "link_720p_dR0yv",
                    "p480": "link_480p_HIkgD"
                  }
                },
                "zh": {
                  "title": "Movie_Title_zh_tK6q1",
                  "description": "Movie_Description_zh_H6pKJMotRtG2pCJfE3mX",
                  "quality": {
                    "p1080": "link_1080p_Cs9vk",
                    "p720": "link_720p_85u2f",
                    "p480": "link_480p_5gPll"
                  }
                },
                "ar": {
                  "title": "Movie_Title_ar_HQ8X2",
                  "description": "Movie_Description_ar_zek3Q5hRBxEuq2H4ptWS",
                  "quality": {
                    "p1080": "link_1080p_mJDbA",
                    "p720": "link_720p_iDMOC",
                    "p480": "link_480p_m51Nw"
                  }
                },
                "hi": {
                  "title": "Movie_Title_hi_tQUll",
                  "description": "Movie_Description_hi_IuGKpnbpbbUj17TwuIdv",
                  "quality": {
                    "p1080": "link_1080p_jjTZF",
                    "p720": "link_720p_jjAAs",
                    "p480": "link_480p_Ohw0m"
                  }
                },
                "ko": {
                  "title": "Movie_Title_ko_wWcUe",
                  "description": "Movie_Description_ko_M1KLIZN7jNoRHvkcyFZn",
                  "quality": {
                    "p1080": "link_1080p_z89O8",
                    "p720": "link_720p_bnmaf",
                    "p480": "link_480p_uuiC9"
                  }
                },
                "nl": {
                  "title": "Movie_Title_nl_AqahW",
                  "description": "Movie_Description_nl_JsaF5purU0thnXiNZWt5",
                  "quality": {
                    "p1080": "link_1080p_c7yA7",
                    "p720": "link_720p_bpRrE",
                    "p480": "link_480p_irVux"
                  }
                },
                "sv": {
                  "title": "Movie_Title_sv_zg4Yh",
                  "description": "Movie_Description_sv_cXVr3RwYDu4jJfYSkyhG",
                  "quality": {
                    "p1080": "link_1080p_QQErx",
                    "p720": "link_720p_1zgjR",
                    "p480": "link_480p_Atxwq"
                  }
                },
                "tr": {
                  "title": "Movie_Title_tr_R6hWp",
                  "description": "Movie_Description_tr_Ah6bLWf7Rx5kVPoW1G8D",
                  "quality": {
                    "p1080": "link_1080p_3j4I3",
                    "p720": "link_720p_pLBtN",
                    "p480": "link_480p_4c8cf"
                  }
                }
              },
              "picture": "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/q3jHCb4dMfYF6ojikKuHd6LscxC.jpg",
              "minipicture": "https://image.tmdb.org/t/p/w500/7LKGXQKpuF4GPCsRxIgifdNs9vS.png",
              "time": "1h29",
              "date": "2020-01-01"
            },
            {
              "data": {
                "fr": {
                  "title": "Movie_Title_fr_AfPy8",
                  "description": "Movie_Description_fr_ni3McnxDRllapgQCY2RK",
                  "quality": {
                    "p1080": "link_1080p_Ep4dA",
                    "p720": "link_720p_Lp84u",
                    "p480": "link_480p_XHgdP"
                  }
                },
                "en": {
                  "title": "Movie_Title_en_8aUIp",
                  "description": "Movie_Description_en_XvRf6FRhf4SDYpmL7YVC",
                  "quality": {
                    "p1080": "link_1080p_Q8aDO",
                    "p720": "link_720p_vNSvI",
                    "p480": "link_480p_0WRju"
                  }
                },
                "es": {
                  "title": "Movie_Title_es_zKmPk",
                  "description": "Movie_Description_es_H4pYPTl6wP6yz81z8kfb",
                  "quality": {
                    "p1080": "link_1080p_qgdfB",
                    "p720": "link_720p_G6Kn2",
                    "p480": "link_480p_A3D5f"
                  }
                },
                "jp": {
                  "title": "Movie_Title_jp_QVvPK",
                  "description": "Movie_Description_jp_oI5vioUHpuS0NkfaEfZt",
                  "quality": {
                    "p1080": "link_1080p_iumZ5",
                    "p720": "link_720p_9bWoZ",
                    "p480": "link_480p_sHemP"
                  }
                },
                "de": {
                  "title": "Movie_Title_de_EBfh2",
                  "description": "Movie_Description_de_3xc6qa4C1oY2107HM8m1",
                  "quality": {
                    "p1080": "link_1080p_mtYT1",
                    "p720": "link_720p_OCo9Z",
                    "p480": "link_480p_x26Sm"
                  }
                },
                "it": {
                  "title": "Movie_Title_it_jalJE",
                  "description": "Movie_Description_it_Hzxc0YC8NPWmumTfUe3g",
                  "quality": {
                    "p1080": "link_1080p_sU8m3",
                    "p720": "link_720p_bajWG",
                    "p480": "link_480p_NdfQj"
                  }
                },
                "pt": {
                  "title": "Movie_Title_pt_iSTDY",
                  "description": "Movie_Description_pt_S40hYYXiL3iTtaAwzTwj",
                  "quality": {
                    "p1080": "link_1080p_bODkj",
                    "p720": "link_720p_K7LWC",
                    "p480": "link_480p_Lc4BP"
                  }
                },
                "ru": {
                  "title": "Movie_Title_ru_2X2xg",
                  "description": "Movie_Description_ru_EdFYS8YSnOcHaUWb7NV8",
                  "quality": {
                    "p1080": "link_1080p_wPNzm",
                    "p720": "link_720p_dR0yv",
                    "p480": "link_480p_HIkgD"
                  }
                },
                "zh": {
                  "title": "Movie_Title_zh_tK6q1",
                  "description": "Movie_Description_zh_H6pKJMotRtG2pCJfE3mX",
                  "quality": {
                    "p1080": "link_1080p_Cs9vk",
                    "p720": "link_720p_85u2f",
                    "p480": "link_480p_5gPll"
                  }
                },
                "ar": {
                  "title": "Movie_Title_ar_HQ8X2",
                  "description": "Movie_Description_ar_zek3Q5hRBxEuq2H4ptWS",
                  "quality": {
                    "p1080": "link_1080p_mJDbA",
                    "p720": "link_720p_iDMOC",
                    "p480": "link_480p_m51Nw"
                  }
                },
                "hi": {
                  "title": "Movie_Title_hi_tQUll",
                  "description": "Movie_Description_hi_IuGKpnbpbbUj17TwuIdv",
                  "quality": {
                    "p1080": "link_1080p_jjTZF",
                    "p720": "link_720p_jjAAs",
                    "p480": "link_480p_Ohw0m"
                  }
                },
                "ko": {
                  "title": "Movie_Title_ko_wWcUe",
                  "description": "Movie_Description_ko_M1KLIZN7jNoRHvkcyFZn",
                  "quality": {
                    "p1080": "link_1080p_z89O8",
                    "p720": "link_720p_bnmaf",
                    "p480": "link_480p_uuiC9"
                  }
                },
                "nl": {
                  "title": "Movie_Title_nl_AqahW",
                  "description": "Movie_Description_nl_JsaF5purU0thnXiNZWt5",
                  "quality": {
                    "p1080": "link_1080p_c7yA7",
                    "p720": "link_720p_bpRrE",
                    "p480": "link_480p_irVux"
                  }
                },
                "sv": {
                  "title": "Movie_Title_sv_zg4Yh",
                  "description": "Movie_Description_sv_cXVr3RwYDu4jJfYSkyhG",
                  "quality": {
                    "p1080": "link_1080p_QQErx",
                    "p720": "link_720p_1zgjR",
                    "p480": "link_480p_Atxwq"
                  }
                },
                "tr": {
                  "title": "Movie_Title_tr_R6hWp",
                  "description": "Movie_Description_tr_Ah6bLWf7Rx5kVPoW1G8D",
                  "quality": {
                    "p1080": "link_1080p_3j4I3",
                    "p720": "link_720p_pLBtN",
                    "p480": "link_480p_4c8cf"
                  }
                }
              },
              "picture": "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/q3jHCb4dMfYF6ojikKuHd6LscxC.jpg",
              "minipicture": "https://image.tmdb.org/t/p/w500/7LKGXQKpuF4GPCsRxIgifdNs9vS.png",
              "time": "1h29",
              "date": "2020-01-01"
            },
            {
              "data": {
                "fr": {
                  "title": "Movie_Title_fr_AfPy8",
                  "description": "Movie_Description_fr_ni3McnxDRllapgQCY2RK",
                  "quality": {
                    "p1080": "link_1080p_Ep4dA",
                    "p720": "link_720p_Lp84u",
                    "p480": "link_480p_XHgdP"
                  }
                },
                "en": {
                  "title": "Movie_Title_en_8aUIp",
                  "description": "Movie_Description_en_XvRf6FRhf4SDYpmL7YVC",
                  "quality": {
                    "p1080": "link_1080p_Q8aDO",
                    "p720": "link_720p_vNSvI",
                    "p480": "link_480p_0WRju"
                  }
                },
                "es": {
                  "title": "Movie_Title_es_zKmPk",
                  "description": "Movie_Description_es_H4pYPTl6wP6yz81z8kfb",
                  "quality": {
                    "p1080": "link_1080p_qgdfB",
                    "p720": "link_720p_G6Kn2",
                    "p480": "link_480p_A3D5f"
                  }
                },
                "jp": {
                  "title": "Movie_Title_jp_QVvPK",
                  "description": "Movie_Description_jp_oI5vioUHpuS0NkfaEfZt",
                  "quality": {
                    "p1080": "link_1080p_iumZ5",
                    "p720": "link_720p_9bWoZ",
                    "p480": "link_480p_sHemP"
                  }
                },
                "de": {
                  "title": "Movie_Title_de_EBfh2",
                  "description": "Movie_Description_de_3xc6qa4C1oY2107HM8m1",
                  "quality": {
                    "p1080": "link_1080p_mtYT1",
                    "p720": "link_720p_OCo9Z",
                    "p480": "link_480p_x26Sm"
                  }
                },
                "it": {
                  "title": "Movie_Title_it_jalJE",
                  "description": "Movie_Description_it_Hzxc0YC8NPWmumTfUe3g",
                  "quality": {
                    "p1080": "link_1080p_sU8m3",
                    "p720": "link_720p_bajWG",
                    "p480": "link_480p_NdfQj"
                  }
                },
                "pt": {
                  "title": "Movie_Title_pt_iSTDY",
                  "description": "Movie_Description_pt_S40hYYXiL3iTtaAwzTwj",
                  "quality": {
                    "p1080": "link_1080p_bODkj",
                    "p720": "link_720p_K7LWC",
                    "p480": "link_480p_Lc4BP"
                  }
                },
                "ru": {
                  "title": "Movie_Title_ru_2X2xg",
                  "description": "Movie_Description_ru_EdFYS8YSnOcHaUWb7NV8",
                  "quality": {
                    "p1080": "link_1080p_wPNzm",
                    "p720": "link_720p_dR0yv",
                    "p480": "link_480p_HIkgD"
                  }
                },
                "zh": {
                  "title": "Movie_Title_zh_tK6q1",
                  "description": "Movie_Description_zh_H6pKJMotRtG2pCJfE3mX",
                  "quality": {
                    "p1080": "link_1080p_Cs9vk",
                    "p720": "link_720p_85u2f",
                    "p480": "link_480p_5gPll"
                  }
                },
                "ar": {
                  "title": "Movie_Title_ar_HQ8X2",
                  "description": "Movie_Description_ar_zek3Q5hRBxEuq2H4ptWS",
                  "quality": {
                    "p1080": "link_1080p_mJDbA",
                    "p720": "link_720p_iDMOC",
                    "p480": "link_480p_m51Nw"
                  }
                },
                "hi": {
                  "title": "Movie_Title_hi_tQUll",
                  "description": "Movie_Description_hi_IuGKpnbpbbUj17TwuIdv",
                  "quality": {
                    "p1080": "link_1080p_jjTZF",
                    "p720": "link_720p_jjAAs",
                    "p480": "link_480p_Ohw0m"
                  }
                },
                "ko": {
                  "title": "Movie_Title_ko_wWcUe",
                  "description": "Movie_Description_ko_M1KLIZN7jNoRHvkcyFZn",
                  "quality": {
                    "p1080": "link_1080p_z89O8",
                    "p720": "link_720p_bnmaf",
                    "p480": "link_480p_uuiC9"
                  }
                },
                "nl": {
                  "title": "Movie_Title_nl_AqahW",
                  "description": "Movie_Description_nl_JsaF5purU0thnXiNZWt5",
                  "quality": {
                    "p1080": "link_1080p_c7yA7",
                    "p720": "link_720p_bpRrE",
                    "p480": "link_480p_irVux"
                  }
                },
                "sv": {
                  "title": "Movie_Title_sv_zg4Yh",
                  "description": "Movie_Description_sv_cXVr3RwYDu4jJfYSkyhG",
                  "quality": {
                    "p1080": "link_1080p_QQErx",
                    "p720": "link_720p_1zgjR",
                    "p480": "link_480p_Atxwq"
                  }
                },
                "tr": {
                  "title": "Movie_Title_tr_R6hWp",
                  "description": "Movie_Description_tr_Ah6bLWf7Rx5kVPoW1G8D",
                  "quality": {
                    "p1080": "link_1080p_3j4I3",
                    "p720": "link_720p_pLBtN",
                    "p480": "link_480p_4c8cf"
                  }
                }
              },
              "picture": "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/q3jHCb4dMfYF6ojikKuHd6LscxC.jpg",
              "minipicture": "https://image.tmdb.org/t/p/w500/7LKGXQKpuF4GPCsRxIgifdNs9vS.png",
              "time": "1h29",
              "date": "2020-01-01"
            }
          ]
        }
      ],
      "videos": [
        "https://www.youtube.com/watch?v=VTVxNM9v_us",
        "https://www.youtube.com/watch?v=VTVxNM9v_us",
        "https://www.youtube.com/watch?v=VTVxNM9v_us"
      ],
      "person": [
        {
          "name": "Jenna Ortega",
          "picture": "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/7oUAtVgZU0uLdUSvDHKkINt1y7Y.jpg",
          "link": "https://www.themoviedb.org/person/974169-jenna-ortega"
        },
        {
          "name": "Jenna Ortega",
          "picture": "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/7oUAtVgZU0uLdUSvDHKkINt1y7Y.jpg",
          "link": "https://www.themoviedb.org/person/974169-jenna-ortega"
        },
        {
          "name": "Jenna Ortega",
          "picture": "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/7oUAtVgZU0uLdUSvDHKkINt1y7Y.jpg",
          "link": "https://www.themoviedb.org/person/974169-jenna-ortega"
        },
        {
          "name": "Jenna Ortega",
          "picture": "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/7oUAtVgZU0uLdUSvDHKkINt1y7Y.jpg",
          "link": "https://www.themoviedb.org/person/974169-jenna-ortega"
        },
        {
          "name": "Jenna Ortega",
          "picture": "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/7oUAtVgZU0uLdUSvDHKkINt1y7Y.jpg",
          "link": "https://www.themoviedb.org/person/974169-jenna-ortega"
        },
        {
          "name": "Jenna Ortega",
          "picture": "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/7oUAtVgZU0uLdUSvDHKkINt1y7Y.jpg",
          "link": "https://www.themoviedb.org/person/974169-jenna-ortega"
        },
        {
          "name": "Jenna Ortega",
          "picture": "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/7oUAtVgZU0uLdUSvDHKkINt1y7Y.jpg",
          "link": "https://www.themoviedb.org/person/974169-jenna-ortega"
        },
        {
          "name": "Jenna Ortega",
          "picture": "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/7oUAtVgZU0uLdUSvDHKkINt1y7Y.jpg",
          "link": "https://www.themoviedb.org/person/974169-jenna-ortega"
        },
        {
          "name": "Jenna Ortega",
          "picture": "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/7oUAtVgZU0uLdUSvDHKkINt1y7Y.jpg",
          "link": "https://www.themoviedb.org/person/974169-jenna-ortega"
        },
        {
          "name": "Jenna Ortega",
          "picture": "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/7oUAtVgZU0uLdUSvDHKkINt1y7Y.jpg",
          "link": "https://www.themoviedb.org/person/974169-jenna-ortega"
        },
        {
          "name": "Jenna Ortega",
          "picture": "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/7oUAtVgZU0uLdUSvDHKkINt1y7Y.jpg",
          "link": "https://www.themoviedb.org/person/974169-jenna-ortega"
        },
        {
          "name": "Jenna Ortega",
          "picture": "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/7oUAtVgZU0uLdUSvDHKkINt1y7Y.jpg",
          "link": "https://www.themoviedb.org/person/974169-jenna-ortega"
        }
      ]
    }
  ]
}
```
error: **server**
```json
{
  "message": "2"
}
```
## /account/datas
### use
```bash
curl -s -X GET http://localhost:8080/account/datas \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"session": "VXNsNk4hpmaoIlg17ZZRM2CMXFbXsbnkegkYoCVcu3xTvm4E8K", "username": "frayn-chlorhydric-lateroposition"}'
```
### reponse
no error
```json
{
  "message": "1",
  "datas": {
    "_id": {
      "$oid": "6930916c019724b14bf021e9"
    },
    "username": "Scottish-irish-peahens-accolades",
    "premium": "2025-10-15",
    "password": [
      "$argon2id$v=19$m=4096,t=3,p=1$pK3NHe8m6qUm1iq+C0SRRA$/7woQFuevOp061Gd8NbOpwK0DtXtxoHNc+MtEsZZIxw",
      "$argon2id$v=19$m=4096,t=3,p=1$Dpc8zS8IDny1npjOPCzRDw$ewotPr0vf+GdGWovliVG4gJkZMvEnqA7YPihcwoiP28",
      "$argon2id$v=19$m=4096,t=3,p=1$R95ZDMDLKS4KMNwnlL/4zw$xAtx5rl7W47phVtz+hWYQCFUupwIrNArKqTReU5Vjas",
      "$argon2id$v=19$m=4096,t=3,p=1$XCiOWG8b2GWsJ6+7hNwbBg$kwYWNal8Ef42+KVYKRSqxjXN7NRHbWRHGAdiYUCGvhw",
      "$argon2id$v=19$m=4096,t=3,p=1$9cBt6Xv+svKwlhbCEEqR0A$dqiR5Ui79+0VwYL0te0g2EBStKy4Rf9i/XQW8wNZ+Ps",
      "$argon2id$v=19$m=4096,t=3,p=1$CjIRlzhqfmPtEN399zQwiw$nsVRwKFLvXTXgOeYlXaMzf8fGgLumM4H8LrU0eFfo/Q",
      "$argon2id$v=19$m=4096,t=3,p=1$ACLFOZcNLFt/MCsMQvS2cA$TMhG5vrVnJUCqOZH78n/HiSA7U3VU3oNcU0jdYnAOeQ",
      "$argon2id$v=19$m=4096,t=3,p=1$iEidorsidtsJmZ0xaWZoRA$0fC9fPg1iovnX2Xjdl/Vru3N5Uv/QSI0byJlURGTMNI",
      "$argon2id$v=19$m=4096,t=3,p=1$9axF/++GUH2huMZyLv+qmg$WU2zgqmaJaN0XiPKeKFSEuUQj2FZdRt1jtroyiHvY7g",
      "$argon2id$v=19$m=4096,t=3,p=1$WK9h0WI5LV2yZ/F4DlhU8w$xba9GplFJKGoJqwvrPbeDnoq7lla3l9l7+mTRdfxvsw",
      "$argon2id$v=19$m=4096,t=3,p=1$qy9IhwoFztsec6VHws5Wzg$czRPDosBabkOY1imFyfeeHlbgZyNGc1Iz/xzrzvmKKw",
      "$argon2id$v=19$m=4096,t=3,p=1$sbj6a1eLe6788k+Gci33Xg$0Nk/fxrEz5/C5T+T5O/lKd51mScgOcy+YjQMYfd2azg"
    ],
    "session": [
      {
        "token": "$argon2id$v=19$m=4096,t=3,p=1$1r+VMEmQfhvZwlUwH6Zv5A$ZrHtVuhbAqMZUnRDG5kB97NDUCB7Aai8qryKesvcmzA",
        "name": "Chart"
      }
    ],
    "wishlist": [
      {
        "table": "movies",
        "id": "169309a7a113af24d4bcb2382"
      }
    ],
    "watchlist": [],
    "settings": {
      "langue": "en",
      "cc": null,
      "skip": {
        "intro": true,
        "outro": true
      },
      "kidsmod": {
        "actif": false,
        "max": 7
      },
      "quality": "1080p"
    }
  }
}
```
error: **this account dont existe**
```json
{
  "message": "2"
}
```
error: **server**
```json
{
  "message": "3"
}
```

# /account/edit
# /account/delete
# /account/wishlist/add
# /account/wishlist/remove
# /account/session/check
# /account/session/remove