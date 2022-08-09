// @ts-nocheck
export default {
  "name": "CatFacts",
  "baseUrl": "https://catfact.ninja",
  "operations": [
    {
      "method": "GET",
      "path": "/breeds",
      "type": "query",
      "field": "getBreeds",
      "description": "Returns a a list of breeds",
      "responseByStatusCode": {
        "200": {
          "responseSchema": "https://catfact.ninja/docs/api-docs.json#/paths/~1breeds/get/responses/200/content/application~1json/schema"
        }
      },
      "requestSchema": {
        "type": "object",
        "properties": {
          "limit": {
            "type": "integer",
            "format": "int64",
            "name": "limit",
            "description": "limit the amount of results returned"
          }
        },
        "title": "getBreeds_request"
      },
      "argTypeMap": {
        "limit": "Int"
      },
      "headers": {
        "Accept": "application/json"
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
          "responseSchema": "https://catfact.ninja/docs/api-docs.json#/paths/~1fact/get/responses/200/content/application~1json/schema"
        }
      },
      "requestSchema": {
        "type": "object",
        "properties": {
          "max_length": {
            "type": "integer",
            "format": "int64",
            "name": "max_length",
            "description": "maximum length of returned fact"
          }
        },
        "title": "getRandomFact_request"
      },
      "argTypeMap": {
        "max_length": "Int"
      },
      "headers": {
        "Accept": "application/json"
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
          "responseSchema": "https://catfact.ninja/docs/api-docs.json#/paths/~1facts/get/responses/200/content/application~1json/schema"
        }
      },
      "requestSchema": {
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
        },
        "title": "getFacts_request"
      },
      "argTypeMap": {
        "max_length": "Int",
        "limit": "Int"
      },
      "headers": {
        "Accept": "application/json"
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
        }
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
        "$resolvedRef": "/paths/~1breeds/get/responses/200/content/application~1json/schema",
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
        "$resolvedRef": "/paths/~1facts/get/responses/200/content/application~1json/schema",
        "title": "getFacts_200_response"
      },
      "QueryInput": {
        "type": "object",
        "title": "QueryInput",
        "properties": {
          "getBreeds": {
            "$ref": "#/definitions/getBreeds_request"
          },
          "getRandomFact": {
            "$ref": "#/definitions/getRandomFact_request"
          },
          "getFacts": {
            "$ref": "#/definitions/getFacts_request"
          }
        }
      },
      "getBreeds_request": {
        "type": "object",
        "properties": {
          "limit": {
            "type": "integer",
            "format": "int64",
            "name": "limit",
            "description": "limit the amount of results returned"
          }
        },
        "title": "getBreeds_request"
      },
      "getRandomFact_request": {
        "type": "object",
        "properties": {
          "max_length": {
            "type": "integer",
            "format": "int64",
            "name": "max_length",
            "description": "maximum length of returned fact"
          }
        },
        "title": "getRandomFact_request"
      },
      "getFacts_request": {
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
        },
        "title": "getFacts_request"
      }
    }
  }
}