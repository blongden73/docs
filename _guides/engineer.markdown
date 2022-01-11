---
title: Engineering | Practice
date: 2021-11-12 10:10:00 Z
Colours: Green
Icon: <svg width="382" height="383" viewBox="0 0 382 383" fill="none" xmlns="http://www.w3.org/2000/svg"><path
  stroke="#fff" d="M.5 1.5h381v381H.5z"/><path fill-rule="evenodd" clip-rule="evenodd"
  d="M0 127.546V1.593h127.727v37.254h-63.14c3.468 9.986 8.536 20.2 15.628 29.529 15.833
  20.827 42.834 38.769 89.496 38.769 57.885 0 96.028 23.057 119.154 53.478 22.45 29.532
  29.679 64.52 29.565 88.236l-37.253-.179c.083-17.284-5.46-43.794-21.969-65.511-15.833-20.827-42.834-38.77-89.496-38.77-57.885
  0-96.028-23.056-119.154-53.478-5.227-6.875-9.628-14.046-13.304-21.301v57.926H0Zm62.868
  8.169c-.114 23.716 7.116 58.704 29.566 88.236 23.126 30.421 61.269 53.478 119.154
  53.478 46.662 0 73.663 17.942 89.496 38.769 6.952 9.145 11.959 19.14 15.421 28.938h-62.934v37.254h127.728V256.436h-37.254v58.518c-3.676-7.255-8.078-14.426-13.304-21.301-23.126-30.422-61.269-53.478-119.154-53.478-46.662
  0-73.663-17.943-89.496-38.77-16.509-21.717-22.052-48.227-21.969-65.511l-37.254-.179Z"
  fill="#fff"/><circle opacity=".5" cx="189.817" cy="193.774" r="165.073" stroke="#fff"/><path
  opacity=".5" d="M1.348 381.795 380.702 2.347M1.094 1.09l379.93 379.93" stroke="#fff"/></svg>
Overview Description: Pricing lorem ipsum dolor est something small
Introduction Text: Adding collaboration into your product is just a couple of lines
  of Javascript. If you like, there's a lot more you can do to fine-tune the experience,
  look and feel. This guide will help you explore the different ways you can make
  your users happier.
Sections:
- Title: Colors and styles
  Text: "- You can customise the sidebar colors in the [Developer Console](https://console.cord.com/).
    \n\n- Alternatively, if you're embedding a [custom launcher button](), you can
    style it via HTML attributes.\n\n- React components that can be styled with any
    CSS you like, and further out-of-the-box customisation options are coming soon.
    [E-mail us](mailto:support@cord.com) about what you'd like to customise - we accept
    pictures, Figma links, CSS styles or text descriptions."
- Title: API keys
  Text: |-
    Need a staging API key and a separate live key? You can create up to 10 keys in your [Developer Console](https://console.cord.com/) to separate logging, messages, etc. (Let [us know] (mailto:support@cord.com) if you need more).

    The keys are completely separate and can be configured separately, contain a separate set of user/org and message data, etc.
- Title: Analytics
  Text: Segment, GCP
- Title: Broadcast module
  Text: Onboarding
- Title: Support module
  Text: Support
  Code: |-
    import jwt from 'jsonwebtoken';

    const signed_app_token = jwt.sign({ app_id: '<APP_ID>' }, '<SHARED_SECRET>', {
      expiresIn: '1 min',
      algorithm: 'HS512',
    });
- Title: Accessing message content
  Text: 'This is how we could use tables in the API docs below is an example of how
    this would behave. '
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
layout: guide
---

This field will be used as a ReadMe for each of the pages. 

**Introduction Text**\
This lives at the top of each of the guide, this field is totally optional, if you use it it will display as the first paragraph on each of the guides. 

**Colours**\
This defines the colour of the page, you can choose the colour from the dropdown list and it will add the corresponding Cord colour to the page

**Overview description**\
This field is only visual on the overview section. It is a simple extract to be used underneath the title of the section.

**Icon**\
This field contains the relevant icon for each of the sections. It will only accept SVG code. 

**Sections**\
The section fields contain Title and Text, these fields will be predefined, there are extra optional fields which can be added below each of these, these are *Code* and *Table Columns. *Code will add a code block at the end of the section, this gets automatically converted in JS (currently only JS is supported). Table Columns will start the process of adding a table to the page. Within Table Columns add an object field. Within this object field you will need *Column Title* and *Rows. Rows *needs to also be set to be a list. 