---
title: Cord Api | Documentation
date: 2021-11-23 15:35:00 Z
Colours: Purple
Introduction Text: "### Starting to use the Cord API\n\n### The first steps in adding
  collaboration into your product are:\n\n1. Call our API to register users, and the
  organisations they belong to. \n2. Embed the Cord client-side javascript in your
  pages. When embedding, you tell the script who is currently logged-in.\n3. (Optional)
  Control the look & feel of Cord.\n\n### [Get started with Cord](https://cord.com/)"
Sections:
- Title: Authentication
  Text: "You have an **App ID** and a **Secret**, which you can get in your [Cord
    Console](https://console.cord.com). \n\n**Never expose your App ID and Secret
    on the client side!**.\n\nAll API requests must include a valid *Access Token*
    in the HTTP Request headers: `Authorization: Bearer <ACCESS_TOKEN>`.\n\nTo obtain
    an *Access Token*, the *App ID* and *Secret* are used to generate a *Signed Token*,
    which is then exchanged for the *Access Token* using the `/v1/authorize` endpoint.
    *Access Token*s have a limited lifespan. Their expiration is provided in the API
    response, and is normally 24 hours.\n\nThe *Signed Token* is a JWT that must be
    generated server-side, with a short expiration (1 minute), containing the *App
    ID* in the payload `app_id` field, and signed with the *Secret* using the `HS512`
    (HMAC using SHA-512 hash) algorithm.\n\n**HTTP Request**\n\n`POST https://api.cord.com/v1/authorize`\n\n**Request
    Body**"
  Table Columns:
  - Column Title: Field
    Rows:
    - signed_app_token
  - Column Title: Type
    Rows:
    - string
  - Column Title: Description
    Rows:
    - "**required**. The *Signed Token* generated as described above."
  Code:
  - Text: '1. Generate a *Signed Token*:'
    Code: |-
      import jwt from 'jsonwebtoken';

      const signed_app_token = jwt.sign({ app_id: '<APP_ID>' }, '<SECRET>', {
        expiresIn: '1 min',
        algorithm: 'HS512',
      });
  - Text: '2. Exchange the *Signed Token* for an *Access Token*:'
    Code: |-
      curl "https://api.cord.com/v1/authorize" \
        -X POST \
        -H "Content-Type: application/json" \
        -d '{ "signed_app_token": "<SIGNED_APP_TOKEN>" }'
  - Text: 'If successful, the response will be:'
    Code: |-
      {
        "access_token": "eyJzZX...",
        "expires": "2021-06-29T14:54:17.050Z" // ISO timestamp
      }
- Title: Users
  Text: "## **Create a user**\n\nNext, pre-register all users and organisations on
    our API. This ensures a fast and seamless user experience, where the Cord sidebar
    appears immediately and the user is already \"logged in\" to the chat, with:\n\n-
    All their details (name, profile picture) \n- The other people in their organization
    that they can @mention.\n\n**HTTP Request**\n\n`POST https://api.cord.com/v1/users`\n\n**Request
    Body**"
  Table Columns:
  - Column Title: Field
    Rows:
    - id
    - email
    - name
    - status
    - profile_picture_url
    - first_name
    - last_name
  - Column Title: Type
    Rows:
    - string
    - string
    - string
    - string
    - string
    - string
    - string
  - Column Title: Description
    Rows:
    - required
    - required
    - optional
    - optional
    - optional
    - optional
    - optional
  Code:
  - Text: 'Example request that creates a user:'
    Code: |-
      curl "https://api.cord.com/v1/users" \
        -X POST \
        -H "Authorization: Bearer <ACCESS_TOKEN>" \
        -H "Content-Type: application/json" \
        -d '{
          "id": "3001",
          "name": "Philip J Fry",
          "email": "delivery@planetexpress.nny",
          "first_name": "Philip",
          "last_name": "Fry"
        }'
  - Text: 'If successful, the response will be:'
    Code: |-
      {
        "success": true
      }
- Title: Create or update a user
  Text: |-
    Create or update uses the `PUT` HTTP method.

    * if the user does not exist in the Cord backend (based on its ID), it will be created; some fields are required.

    * if the user exists, it will be updated; all fields are optional, only the fields provided will be updated.

    **HTTP Request**

    `PUT https://api.cord.com/v1/users/<ID>`

    **Request Body**
  Table Columns:
  - Column Title: Field
    Rows:
    - email
    - "name\t"
    - status
    - "profile_picture_url\t"
    - first_name
    - last_name
  - Column Title: Type
    Rows:
    - string
    - string
    - string
    - string
    - string
    - string
  - Column Title: Description
    Rows:
    - required on create
    - optional
    - optional
    - optional
    - optional
    - optional
  Code:
  - Text: 'Example request that updates a user''s name and profile picture:'
    Code: |-
      curl "https://api.cord.com/v1/users/123" \
        -X PUT \
        -H "Authorization: Bearer <ACCESS_TOKEN>" \
        -H "Content-Type: application/json" \
        -d '{
          "name": "Bender Bending Rodriguez",
          "profile_picture_url": "https://cord.com/favicon-32x32.png"
        }'
  - Text: 'If successful, the response is:'
    Code: |-
      {
        "success": true
      }
- Title: List users
  Text: |-
    List all users created in your application.

    **HTTP Request**

    `GET https://api.cord.com/v1/users`
  Table Columns:
  - Column Title: 
    Rows:
    - 
    - 
    - 
    - 
    - 
    - 
  - Column Title: 
    Rows:
    - 
    - 
    - 
    - 
    - 
    - 
  - Column Title: 
    Rows:
    - 
    - 
    - 
    - 
    - 
    - 
  Code:
  - Text: 'Example request to gets the list of users:'
    Code: |-
      curl "https://api.cord.com/v1/users" \
        -H "Authorization: Bearer <ACCESS_TOKEN>"
  - Text: 'Example response:'
    Code: |-
      [
        {
          "id": "3001",
          "name": "Philip J Fry",
          "email": "delivery@planetexpress.nny",
          "first_name": "Philip",
          "last_name": "Fry"
        },
        {
          "id": "123",
          "name": "Bender Bending Rodriguez",
          "email": "bending@planetexpress.nny"
        }
      ]
layout: api
---

