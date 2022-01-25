---
title: Documentation | Cord API
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
    in the HTTP Request headers: `Authorization: Bearer <ACCESS_TOKEN>`.\n\n![flow_secret.svg](/docs/uploads/flow_secret_updated.svg)\n\nTo
    obtain an *Access Token*, the *App ID* and *Secret* are used to generate a *Signed
    Token*, which is then exchanged for the *Access Token* using the `/v1/authorize`
    endpoint. *Access Token*s have a limited lifespan. Their expiration is provided
    in the API response, and is normally 24 hours.\n\n![sync_orgs.svg](/uploads/sync_orgs.svg)\n\nThe
    *Signed Token* is a JWT that must be generated server-side, with a short expiration
    (1 minute), containing the *App ID* in the payload `app_id` field, and signed
    with the *Secret* using the `HS512` (HMAC using SHA-512 hash) algorithm.\n\n**HTTP
    Request**\n\n`POST https://api.cord.com/v1/authorize`\n\n**Request Body**"
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
    List all users created with this *App ID*.

    **HTTP Request**

    `GET https://api.cord.com/v1/users`
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
- Title: Organizations
  Text: |-
    ## Create an organization

    **HTTP Request**

    `POST https://api.cord.com/v1/organizations`

    **Request Body**
  Table Columns:
  - Column Title: Field
    Rows:
    - id
    - name
    - status
    - members
  - Column Title: Type
    Rows:
    - string
    - string
    - string
    - string[]
  - Column Title: Description
    Rows:
    - required|| Partner-specific unique organization ID
    - required|| Organization name
    - optional|| `active` OR `deleted`
    - optional||List of partner-specific IDs of the users who are members of this
      organization. These are the IDs you gave for these users when you created them
      in the Create Users call above.
  Code:
  - Text: "Example request to create an organization:\n\n"
    Code: |-
      curl "https://api.cord.com/v1/organizations" \
        -X POST \
        -H "Authorization: Bearer <ACCESS_TOKEN>" \
        -H "Content-Type: application/json" \
        -d '{
          "id": "10",
          "name": "Planet Express",
          "members": ["4", "42"]
        }'
  - Text: "If successful, the response is:\n\n"
    Code: |-
      {
        "success": true
      }
- Title: Create or update an organization
  Text: "Use `HTTP POST` to update an existing organization or create a new one:\n\n-
    If the organization does not exist in the Cord backend (based on its ID), it will
    be created; some fields are required.\n- If the organization exists, it will be
    updated: all fields are optional, and only the fields provided will be updated.
    \n- If the request is updating the members list, the list is treated as exhaustive:
    all member user IDs must be included, and previous members who are not in the
    list will be removed.\n\n**HTTP Request**\n\n`PUT https://api.cord.com/v1/organizations/<ID>`\n\n**Request
    Body**"
  Table Columns:
  - Column Title: Field
    Rows:
    - name
    - status
    - members
  - Column Title: Type
    Rows:
    - string
    - string
    - string[]
  - Column Title: Description
    Rows:
    - Required on create|| Organization name
    - Optional|| `active` OR `deleted`
    - Optional|| List of partner-specific IDs of the users who are members of this
      organization
  Code:
  - Text: 'Example request to update and organization''s status to deleted:'
    Code: |
      curl "https://api.cord.com/v1/organizations/456" \
        -X PUT \
        -H "Authorization: Bearer <ACCESS_TOKEN>" \
        -H "Content-Type: application/json" \
        -d '{
          "status": "deleted",
        }'
  - Text: 'If successful, the response is:'
    Code: |-
      {
        "success": true
      }
- Title: Update organization members
  Text: "Use `HTTP POST` to add and/or remove members from an organization. \n\nRequests
    to add a user that is already a member of that organisation, or remove a user
    that is not a member, will have no effect (but will not return an error). \n\n**Note:
    It is an error to add and remove the same user in a single request**\n\n**HTTP
    Request**\n\n`POST https://api.cord.com/v1/organizations/<ID>/members`\n\n**Request
    Body**"
  Table Columns:
  - Column Title: Field
    Rows:
    - add
    - remove
  - Column Title: Type
    Rows:
    - string[]
    - string[]
  - Column Title: Description
    Rows:
    - optional|| List of partner-specific IDs of the users who should be added as
      members to this organization
    - optional|| List of partner-specific IDs of the users who should be removed as
      members from this organization
  Code:
  - Text: Example request to add one member and remove another
    Code: |-
      curl "https://api.cord.com/v1/organizations/456/members" \
        -X POST \
        -H "Authorization: Bearer <ACCESS_TOKEN>" \
        -H "Content-Type: application/json" \
        -d '{
          "add": ["4"],
          "remove": ["42"]
        }'
  - Text: 'If successful, the response is:'
    Code: |-
      {
        "success": true
      }
- Title: List organizations
  Text: |-
    Returns all organizations created with this *App ID*

    **HTTP Request**

    `GET https://api.cord.com/v1/organizations`
  Code:
  - Text: 'Example request to gets the list of organizations:'
    Code: |-
      curl "https://api.cord.com/v1/organizations" \
        -H "Authorization: Bearer <ACCESS_TOKEN>"
  - Text: 'Example response:'
    Code: |-
      [
        {
          "id": "10",
          "name": "Planet Express"
        }
      ]
- Title: Get organization details
  Text: |-
    Returns all the info about a specific organization.

    **HTTP Request**

    `GET https://api.cord.com/v1/organizations/<ID>`
  Code:
  - Text: 'Example request to get details for a organization:'
    Code: |-
      curl "https://api.cord.com/v1/organizations/10" \
        -H "Authorization: Bearer <ACCESS_TOKEN>"
  - Text: 'If the organization exists, the response is:'
    Code: |-
      {
        "id": "10",
        "name": "Planet Express",
        "members": ["4", "42"]
      }
- Title: Batch
  Text: |-
    Use this for cases where you need to take actions on several organisations or users at once. The action taken for each entity is "create or update": If an existing user or organisation with that ID exists, it will be updated with the provided data.

    **HTTP Request**

    `POST https://api.cord.com/v1/batch`

    **Request Body**
  Table Columns:
  - Column Title: Field
    Rows:
    - users
    - organizations
  - Column Title: Type
    Rows:
    - user[]
    - organization[]
  - Column Title: Description
    Rows:
    - 'optional|| List of user objects. Every object must include the `id` field.
      If the user already exists, all other fields are optional and only updated when
      present. If the user does not already exist, fields are required as described
      above in the "Create a user" API.

'
    - optional|| List of organization objects. Every object must include the `id`
      field. If the organization already exists, all other fields are optional and
      only updated when present. If the organization does not already exist, fields
      are required as described above in the "Create an organization" API.
  Code:
  - Text: 'Example request that operates on several users and organizations:'
    Code: |-
      curl "https://api.cord.com/v1/batch" \
        -X POST \
        -H "Authorization: Bearer <ACCESS_TOKEN>" \
        -H "Content-Type: application/json" \
        -d '{
          "organizations": [
            {
              "id": "10",
              "name": "Planet Express",
              "members": ["4", "42"]
            }
          ],
          "users": [
            {
              "id": "4",
              "name": "Hubert Farnsworth",
              "email": "hubert@planetexpress.nny"
            },
            {
              "id": "42",
              "name": "Leela Turanga",
              "email": "leela@planetexpress.nny"
            }
          ]
        }'
  - Text: 'If successful, the response is:'
    Code: |-
      {
        "success": true
      }
layout: api
---

