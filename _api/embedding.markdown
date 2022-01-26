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
  Code:
  - Text: '1. Generate the user session token on the server side:

'
    Code: |-
      import jwt from 'jsonwebtoken';

      const session_token = jwt.sign(
        {
          app_id: '<APP_ID>',
          user_id: '<USER_ID>',
          organization_id: '<ORGANIZATION_ID>',
        },
        '<SECRET>',
        {
          expiresIn: '1 min',
          algorithm: 'HS512',
        },
      );
  - Text: '2. Embed and initialize the Cord library on the client side:'
    Code: |-
      `<script src="https://app.cord.com/embed/latest.js"></script>
      <script>`
        window.cord.init({
          session_token: '<SESSION_TOKEN>',
        });
      </script>
- Title: Events
  Text: |-
    Cord dispatches standard DOM events on the document element for various lifecycle stages or user actions.

    For example, you might adjust your website layout based on changes in the sidebar, such as the sidebar opening, closing, or resizing.

    Some events contain additional information in the `event.detail` property.
  Table Columns:
  - Column Title: Event name
    Rows:
    - cord:sidebar.open
    - cord:sidebar.close
    - cord:sidebar.resize
  - Column Title: Event detail
    Rows:
    - "{ width: number }"
    - undefined
    - "{ width: number }\t"
  - Column Title: Description
    Rows:
    - The sidebar is now open with a specific width.
    - The sidebar is now closed.
    - The sidebar has been resized to adapt to browser width.
  Code:
  - Text: 
    Code: 
- Title: Custom Page Titles
  Text: |-
    By default, when showing the context of a conversation (in the inbox, email notifications, etc) we use the `document.title` of the page the conversation is happening on.

    If you'd like to have custom, Cord-specific page titles, you can add a <meta> tag in the document `<head>`.
  Code:
  - Text: 
    Code: <meta property="cord:title" content="Picnic Location - Poll Results" />
  Info Text: If your app is an SPA with client-side routing, make sure you keep this
    <meta> tag's content value up-to-date with the relevant title of the page the
    user is on.
layout: api
---

