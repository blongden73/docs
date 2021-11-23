---
title: Product | Considerations
date: 2021-11-12 10:14:00 Z
Colours: Orange
Overview Description: Pricing lorem ipsum dolor est something small
Icon: <svg width="361" height="361" viewBox="0 0 361 361" fill="none" xmlns="http://www.w3.org/2000/svg"><path
  stroke="#fff" d="M1.5 1.5h359v359H1.5z"/><path opacity=".5" d="M335.421 182.671c0
  85.901-69.636 155.537-155.537 155.537-85.901 0-155.537-69.636-155.537-155.537 0-85.9
  69.636-155.537 155.537-155.537 85.901 0 155.537 69.636 155.537 155.537ZM1.204 358.974
  359.533 1.203M2.053 1.065l358.049 358.05" stroke="#fff"/><mask id="a" style="mask-type:alpha"
  maskUnits="userSpaceOnUse" x="1" y="1" width="360" height="360"><path fill="#C4C4C4"
  d="M1 1h360v360H1z"/></mask><g mask="url(#a)"><path fill-rule="evenodd" clip-rule="evenodd"
  d="M69.975 87.42c45.027-53.399 123.447-67.613 185.089-30.306 68.238 41.299 90.076
  130.096 48.777 198.334-41.298 68.238-130.096 90.076-198.334 48.777l-18.402 30.407c85.031
  51.462 195.68 24.249 247.143-60.782 51.462-85.031 24.249-195.68-60.782-247.143C193.505-21.686
  90.89-.508 36.142 72.9V1.838H.902V122.66h119.144v-35.24H69.975Z" fill="#fff"/></g></svg>
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