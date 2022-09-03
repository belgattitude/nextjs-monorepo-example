// @ts-nocheck
export default {
  "name": "CatFacts",
  "baseUrl": "https://catfact.ninja/",
  "operations": [
    {
      "method": "GET",
      "path": "/breeds",
      "type": "query",
      "field": "getBreeds",
      "description": "Returns a a list of breeds",
      "responseByStatusCode": {
        "200": {
          "responseSchema": {
            "type": "array",
            "items": {
              "title": "Breed model",
              "description": "Breed",
              "properties": {
                "breed": {
                  "$ref": "#/definitions/Breed"
                },
                "country": {
                  "$ref": "#/definitions/Country"
                },
                "origin": {
                  "$ref": "#/definitions/Origin"
                },
                "coat": {
                  "$ref": "#/definitions/Coat"
                },
                "pattern": {
                  "$ref": "#/definitions/Pattern"
                }
              },
              "type": "object",
              "$resolvedRef": "/components/schemas/Breed"
            },
            "title": "getBreeds_200_response"
          }
        }
      },
      "argTypeMap": {
        "limit": {
          "type": "integer",
          "format": "int64",
          "name": "limit",
          "description": "limit the amount of results returned"
        }
      },
      "queryParamArgMap": {
        "limit": "limit"
      },
      "headers": {
        "accept": "application/json"
      }
    },
    {
      "method": "GET",
      "path": "/fact",
      "type": "query",
      "field": "getRandomFact",
      "description": "Returns a random fact",
      "responseByStatusCode": {
        "200": {
          "responseSchema": {
            "title": "CatFact model",
            "description": "CatFact",
            "properties": {
              "fact": {
                "$ref": "#/definitions/Fact"
              },
              "length": {
                "$ref": "#/definitions/Length"
              }
            },
            "type": "object",
            "$resolvedRef": "/components/schemas/CatFact"
          }
        }
      },
      "argTypeMap": {
        "max_length": {
          "type": "integer",
          "format": "int64",
          "name": "max_length",
          "description": "maximum length of returned fact"
        }
      },
      "queryParamArgMap": {
        "max_length": "max_length"
      },
      "headers": {
        "accept": "application/json"
      }
    },
    {
      "method": "GET",
      "path": "/facts",
      "type": "query",
      "field": "getFacts",
      "description": "Returns a a list of facts",
      "responseByStatusCode": {
        "200": {
          "responseSchema": {
            "type": "array",
            "items": {
              "title": "CatFact model",
              "description": "CatFact",
              "properties": {
                "fact": {
                  "$ref": "#/definitions/Fact"
                },
                "length": {
                  "$ref": "#/definitions/Length"
                }
              },
              "type": "object",
              "$resolvedRef": "/components/schemas/CatFact"
            },
            "title": "getFacts_200_response"
          }
        }
      },
      "argTypeMap": {
        "max_length": {
          "type": "integer",
          "format": "int64",
          "name": "max_length",
          "description": "maximum length of returned fact"
        },
        "limit": {
          "type": "integer",
          "format": "int64",
          "name": "limit",
          "description": "limit the amount of results returned"
        }
      },
      "queryParamArgMap": {
        "max_length": "max_length",
        "limit": "limit"
      },
      "headers": {
        "accept": "application/json"
      }
    }
  ],
  "operationHeaders": {},
  "referencedSchema": {
    "$ref": "#/definitions/_schema",
    "definitions": {
      "_schema": {
        "type": "object",
        "title": "_schema",
        "properties": {
          "query": {
            "$ref": "#/definitions/Query"
          },
          "queryInput": {
            "$ref": "#/definitions/QueryInput"
          }
        },
        "required": [
          "query"
        ]
      },
      "Query": {
        "type": "object",
        "title": "Query",
        "properties": {
          "getBreeds": {
            "$ref": "#/definitions/getBreeds_200_response"
          },
          "getRandomFact": {
            "$ref": "#/definitions/CatFact_SPACE_model"
          },
          "getFacts": {
            "$ref": "#/definitions/getFacts_200_response"
          }
        },
        "readOnly": true
      },
      "getBreeds_200_response": {
        "type": "array",
        "items": {
          "title": "Breed model",
          "description": "Breed",
          "properties": {
            "breed": {
              "$ref": "#/definitions/Breed"
            },
            "country": {
              "$ref": "#/definitions/Country"
            },
            "origin": {
              "$ref": "#/definitions/Origin"
            },
            "coat": {
              "$ref": "#/definitions/Coat"
            },
            "pattern": {
              "$ref": "#/definitions/Pattern"
            }
          },
          "type": "object",
          "$resolvedRef": "/components/schemas/Breed"
        },
        "title": "getBreeds_200_response"
      },
      "Breed_SPACE_model": {
        "title": "Breed model",
        "description": "Breed",
        "properties": {
          "breed": {
            "$ref": "#/definitions/Breed"
          },
          "country": {
            "$ref": "#/definitions/Country"
          },
          "origin": {
            "$ref": "#/definitions/Origin"
          },
          "coat": {
            "$ref": "#/definitions/Coat"
          },
          "pattern": {
            "$ref": "#/definitions/Pattern"
          }
        },
        "type": "object",
        "$resolvedRef": "/components/schemas/Breed"
      },
      "Breed": {
        "title": "Breed",
        "description": "Breed",
        "type": "string"
      },
      "Country": {
        "title": "Country",
        "description": "Country",
        "type": "string"
      },
      "Origin": {
        "title": "Origin",
        "description": "Origin",
        "type": "string"
      },
      "Coat": {
        "title": "Coat",
        "description": "Coat",
        "type": "string"
      },
      "Pattern": {
        "title": "Pattern",
        "description": "Pattern",
        "type": "string"
      },
      "CatFact_SPACE_model": {
        "title": "CatFact model",
        "description": "CatFact",
        "properties": {
          "fact": {
            "$ref": "#/definitions/Fact"
          },
          "length": {
            "$ref": "#/definitions/Length"
          }
        },
        "type": "object",
        "$resolvedRef": "/components/schemas/CatFact"
      },
      "Fact": {
        "title": "Fact",
        "description": "Fact",
        "type": "string"
      },
      "Length": {
        "title": "Length",
        "description": "Length",
        "type": "integer",
        "format": "int32"
      },
      "getFacts_200_response": {
        "type": "array",
        "items": {
          "title": "CatFact model",
          "description": "CatFact",
          "properties": {
            "fact": {
              "$ref": "#/definitions/Fact"
            },
            "length": {
              "$ref": "#/definitions/Length"
            }
          },
          "type": "object",
          "$resolvedRef": "/components/schemas/CatFact"
        },
        "title": "getFacts_200_response"
      },
      "QueryInput": {
        "type": "object",
        "title": "QueryInput",
        "properties": {
          "getBreeds": {
            "$ref": "#/definitions/queryInput_getBreeds"
          },
          "getRandomFact": {
            "$ref": "#/definitions/queryInput_getRandomFact"
          },
          "getFacts": {
            "$ref": "#/definitions/queryInput_getFacts"
          }
        },
        "writeOnly": true
      },
      "queryInput_getBreeds": {
        "title": "queryInput_getBreeds",
        "type": "object",
        "properties": {
          "limit": {
            "type": "integer",
            "format": "int64",
            "name": "limit",
            "description": "limit the amount of results returned"
          }
        }
      },
      "queryInput_getRandomFact": {
        "title": "queryInput_getRandomFact",
        "type": "object",
        "properties": {
          "max_length": {
            "type": "integer",
            "format": "int64",
            "name": "max_length",
            "description": "maximum length of returned fact"
          }
        }
      },
      "queryInput_getFacts": {
        "title": "queryInput_getFacts",
        "type": "object",
        "properties": {
          "max_length": {
            "type": "integer",
            "format": "int64",
            "name": "max_length",
            "description": "maximum length of returned fact"
          },
          "limit": {
            "type": "integer",
            "format": "int64",
            "name": "limit",
            "description": "limit the amount of results returned"
          }
        }
      }
    }
  }
}