# Investoo Group Frontend Test

This is a small project to show the use of Foundation 6.4.
The main features are:
- Foundation 6.4 sass, with gulp
- Fopundation libraries: XY Grid, Responsive Top Bar, Breadcrumbs, Card, Dropdown and Off-canvas
- Panini, passing variables to partials
- This project does not make use of the whole Foundation framework, only some parts, to get the maximun performance
- XY Grid, Responsive Top Bar, Menus, Breadcrumbs, Card, Dropdown and Off-canvas
- jQuery as a node module
- Fontawesome as a node module using only the needed icons
- Isotope as a node module

## Description

The project folders structure is:
```bash
src
|--assets
   |--img
   |--js
      |--lib
         |--fontawesome.js
         |--foundation-explicit-pieces.js
      |--app.js
   |--scss
      |--components
         |--_custom_components.scss
      |--_settings.scss
      |--app.scss
|--layouts
|--pages
|--partials
```

The files that has been developed for this project are:

JavaScript:
- app.js: import only needed libraries and some javascript functions
- fontawesome.js: import only needee icons

Sass:
- custom_components.scss: the actual sass code for the project
- app.scss: import only needed libraries and setting of config variables

Html:
- layouts: html layout
- pages: html page
- partials: some pieces of html code

## Installation

First, to use this project, your computer needs:

- [NodeJS](https://nodejs.org/en/) (0.12 or greater)
- [Git](https://git-scm.com/)

Run the following commands:

- Clone this project:

```bash
git clone https://github.com/andrewf137/investoo_frontend
```

- Navigate to the project folder:

```bash
cd investoo_frontend
```

- Run npm install:

```bash
npm install
```

- Run gulp:

```bash
gulp
```