---
title: Design | Specification
date: 2021-11-12 10:14:00 Z
Introduction Text: Pricing lorem ipsum dolor est something small
Colours: Red
Overview Description: Pricing lorem ipsum dolor est something small
Icon: <svg width="361" height="361" viewBox="0 0 361 361" fill="none" xmlns="http://www.w3.org/2000/svg"><path
  stroke="#fff" d="M1.5 1.5h359v359H1.5z"/><path opacity=".5" d="M335.421 182.673c0
  85.901-69.636 155.537-155.537 155.537-85.9 0-155.537-69.636-155.537-155.537 0-85.9
  69.636-155.537 155.537-155.537 85.901 0 155.537 69.636 155.537 155.537ZM1.205 358.974
  359.533 1.203M2.051 1.065 360.1 359.114" stroke="#fff"/><path fill-rule="evenodd"
  clip-rule="evenodd" d="M316.54 342.892c18.995-11.405 32.125-26.428 38.807-44.488
  6.62-17.89 6.292-37.073 1.456-55.928-9.329-36.376-36.132-74.501-70.941-108.758 17.613-29.115
  24.084-55.262 17.465-77.146-8.003-26.463-32.277-38.594-56.511-41.702-24.477-3.14-53.058
  1.946-79.129 13.543a173.28 173.28 0 0 0-19.095 9.952C100.422 15.477 49.147 1 1.852
  1v35.108c36.327 0 76.51 10.062 115.603 26.728-6.539 6.68-12.477 14.048-17.589 22.099-34.321
  54.06-25.744 121.997 3.838 175.878-13.676 10.048-28.406 20.727-44.338 32.276l-.002.001c-7.309
  5.299-14.87 10.781-22.7 16.469v-68.931H1.556V361h118.699v-35.108H73.972l5.66-4.098.002-.002c15.407-11.154
  29.837-21.601 43.391-31.549 44.103 56.705 118.752 93.475 192.889 53.007l.317-.172.309-.186ZM269.722
  66.735c2.263 7.484 1.489 21.201-10.439 42.844-21.957-18.46-46.561-35.849-72.631-51.076
  19.892-8 40.016-10.82 55.698-8.81 17.162 2.202 25.009 9.228 27.372 17.042Zm-30.074
  72.217c-26.239-22.463-56.436-43.056-88.088-59.818-8.649 7.128-16.189 15.38-22.054
  24.618-24.615 38.771-20.647 90.992 2.626 135.889 47.095-35.695 80.114-64.646 107.516-100.689Zm25.814
  24.013c-29.867 38.489-65.909 69.739-114.259 106.319 38.1 48.602 94.664 71.985 147.57
  43.324 13.062-7.917 20.18-17.015 23.648-26.387 3.557-9.615 3.906-21.252.374-35.023-6.754-26.337-26.973-57.416-57.333-88.233Z"
  fill="#fff"/></svg>
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