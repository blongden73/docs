---
title: Errors | Cord Api
date: 2022-01-26 15:23:00 Z
Colours: Purple
Sections:
- Title: Error Messages
  Text: We do our best to return clear and detailed error messages for various error
    cases. The table below describes the types of errors that might be returned, along
    with a general description of what that type of error means. In practice, the
    error response will also contain a message field that offers more specific information
    about what went wrong.
  Table Columns:
  - Column Title: HTTP
    Rows:
    - 400
    - 400
    - 400
    - 400
    - 401
    - 401
    - 401
    - 401
    - 401
    - 401
    - 401
    - 401
    - 409
    - 409
    - 500
  - Column Title: Error
    Rows:
    - invalid_request
    - unexpected_field
    - missing_field
    - invalid_field
    - application_not_found
    - user_not_found
    - organization_not_found
    - missing_authorization_header
    - invalid_authorization_header
    - invalid_app_token
    - invalid_access_token
    - expired_access_token
    - organization_already_exists
    - user_already_exists
    - error
  - Column Title: Description
    Rows:
    - The request body is not a valid JSON object or is empty.
    - A field is present in the request but is not one of the required or optional
      fields.
    - A required field is missing from the request.
    - The value for a field is an incorrect type.
    - The referenced application ID does not exist.
    - The request references a user ID which has not yet been created.
    - The request references an organization ID which has not yet been created.
    - The API you're calling expects an Authorization header, which is missing.
    - The Authorization header is either not a valid JWT or is missing the Bearer
      prefix.
    - The app token not a valid JWT or is signed incorrectly.
    - The access token is invalid. You should request another one.
    - The access token is expired or has been revoked. You should request another
      one.
    - The organization you're trying to create already exists.
    - The user you're trying to create already exists.
    - Generic internal server error.
  Code:
  - Text: 'Example request with missing access token:'
    Code: |-
      curl "https://api.cord.com/v1/users/123" \
        -X PUT \
        -H "Content-Type: application/json" \
        -d '{
          "profile_picture_url": "https://cord.com/favicon-32x32.png"
        }'
      {
        "error": "missing_authorization_header",
        "message": "Authorization header bearer token must be present."
      }
  - Text: 'Example request with an unexpected field:'
    Code: |-
      curl "https://api.cord.com/v1/organizations/123" \
        -X PUT \
        -H "Content-Type: application/json" \
        -d '{ "foo": "bar" }'
      {
        "error": "unexpected_field",
        "message": "foo is not a valid field name for this request. Expected 3 optional fields: name, status and members."
      }
layout: api
---

