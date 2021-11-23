---
title: Cord Api | Documentation
date: 2021-11-23 15:35:00 Z
Colours: Purple
Introduction Text: |-
  Welcome to the Cord API!

  This document describes integration APIs and flows available to partners who wish to embed the Cord experience directly into their application

  Use the Cord API to pre-populate the identities of your teams and users. This ensures a fast and seamless user experience, where the Cord sidebar appears immediately and the user is already logged in. This architecture ensures that when a user is requesting a page, Cord already has all their details (name, profile picture) as well as the other people in their organization.

  [Get started with Cord](https://cord.com/)
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
  Code: |-
    import jwt from 'jsonwebtoken';

    const signed_app_token = jwt.sign({ app_id: '<APP_ID>' }, '<SHARED_SECRET>', {
      expiresIn: '1 min',
      algorithm: 'HS512',
    });
layout: api
---

