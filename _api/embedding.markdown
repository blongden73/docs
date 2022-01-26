---
title: Embedding | Cord API
date: 2022-01-21 13:01:00 Z
permalink: "/embedding/"
Colours: Purple
Sections:
- Title: Embedding Cord
  Text: |-
    Cord is added to a page with a `<script>` tag, and then initialized with a *Session Token*.

    `<script src="https://app.cord.com/embed/latest.js"></script>`

    To initialize Cord on the page, call `window.cord.init({ session_token: "..." })`.

    The *Session Token* is a JWT that:

    - Must be generated server-side
    - Must contain your *App ID*, as well as the viewer-specific `user_id` and `organization_id` fields
    - Must be signed with the same *Secret* used to obtain *Access Token*s, using the HS512 (HMAC using SHA-512 hash) algorithm.
    - Must be set to a short expiration (1 minute). A longer expiration isn't needed - it will only be used during the library initialization phase to transfer the user session information to the Cord components.

    To remove the Cord instance from the page, call `window.cord.destroy()`.
  Table Columns:
  - Column Title: Field
    Rows:
    - signed_app_token
  - Column Title: Type
    Rows:
    - string
  - Column Title: Description
    Rows:
    - required|| The *Signed Token* generated as described above.
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
layout: api
---

