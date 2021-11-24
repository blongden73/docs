---
title: Cord Api | Documentation
date: 2021-11-23 15:35:00 Z
Colours: Purple
Introduction Text: |-
  ### Welcome to the Cord API!

  ### This document describes integration APIs and flows available to partners who wish to embed the Cord experience directly into their application

  ### Use the Cord API to pre-populate the identities of your teams and users. This ensures a fast and seamless user experience, where the Cord sidebar appears immediately and the user is already logged in. This architecture ensures that when a user is requesting a page, Cord already has all their details (name, profile picture) as well as the other people in their organization.

  ### [Get started with Cord](https://cord.com/)
Sections:
- Title: Authentication
  Text: |-
    Each integration partner has an **application ID** and an associated **shared secret**, which can be obtained through the developer dashboard and stored securely on the server, **never exposed client side**.

    All API requests must include a valid **access token** as in the request headers: `Authorization: Bearer <ACCESS_TOKEN>`.

    To obtain an access token, the application ID and shared secret are combined to generate a **signed app token**, which is then exchanged for the access token using the `/v1/authorize` API. Access tokens have a limited lifespan (expiration is provided in the API response, normally 24 hours).

    The signed app token is a JWT that must be generated server-side, with a short expiration (1 minute), containing the application ID in the payload `app_id` field, signed with the shared secret using the `HS512` (HMAC using SHA-512 hash) algorithm.

    **HTTP Request**

    `POST https://api.cord.com/v1/authorize`

    **Request Body**
  Table Columns:
  - Column Title: Field
    Rows:
    - signed_app_token
  - Column Title: Type
    Rows:
    - string
  - Column Title: Description
    Rows:
    - required
  Code:
  - Text: '1. Generate a signed app token:'
    Code: |-
      import jwt from 'jsonwebtoken';

      const signed_app_token = jwt.sign({ app_id: '<APP_ID>' }, '<SHARED_SECRET>', {
        expiresIn: '1 min',
        algorithm: 'HS512',
      });
  - Text: '2. Exchange the signed app token for an access token:'
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
  Text: |-
    ## **Create a user**

    **HTTP Request**

    `POST https://api.cord.com/v1/users`

    **Request Body**
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
    This endpoint creates or updates a user:

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
  - Text: 'If successful, the response will be:'
    Code: |-
      {
        "success": true
      }
layout: api
---

