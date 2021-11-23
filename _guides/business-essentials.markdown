---
title: Business | Essentials
date: 2021-11-12 10:13:00 Z
Colours: Purple
Overview Description: Pricing lorem ipsum dolor est something small
Icon: <svg width="361" height="361" viewBox="0 0 361 361" fill="none" xmlns="http://www.w3.org/2000/svg"><path
  stroke="#fff" d="M1.5 1.5h358.999v358.999H1.5z"/><path opacity=".5" d="M335.148
  182.69c0 86.068-69.583 155.838-155.415 155.838-85.833 0-155.416-69.77-155.416-155.838S93.9
  26.853 179.733 26.853c85.832 0 155.415 69.77 155.415 155.837Z" stroke="#fff"/><path
  opacity=".5" transform="rotate(-44.955 435.005 177.782)" stroke="#fff" d="M0-.5h506.358"/><path
  opacity=".5" transform="rotate(45 -.864 2.76)" stroke="#fff" d="M0-.5h506.358"/><mask
  id="a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="1" y="1" width="360"
  height="360"><path fill="#C4C4C4" d="M1 1h360v359.999H1z"/></mask><g mask="url(#a)"><path
  fill-rule="evenodd" clip-rule="evenodd" d="M242.941 1h118.7V121.373h-35.109V60.099L265.71
  120.92l-43.155 123.342-122.424 26.726-74.052 90.302h-49.458L80.922 239.247l114.975-25.1
  39.321-112.385 65.653-65.653h-57.93V1.001Z" fill="#fff"/></g></svg>
Sections:
- Title: Something here
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