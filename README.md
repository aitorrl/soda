# Front: Biko2 D8 Theme (based on COG)
![by Biko2](https://raw.githubusercontent.com/biko2/biko-repo-bagdes/master/png/biko-bagge-pill.png)
![GitHub last commit](https://img.shields.io/github/last-commit/biko2/front.svg?style=plastic)
![GitHub release](https://img.shields.io/github/release/biko2/front.svg)
![node](https://img.shields.io/node/v/gulp.svg)
![Maintenance](https://img.shields.io/maintenance/yes/2020.svg)

- [Soda: Biko2 D8 Theme (component based)](#front-biko2-d8-theme-based-on-cog)
  - [Installation](#installation)
    - [Setup Local Development](#setup-local-development)
  - [Ejecutar herramientas](#ejecutar-herramientas)
  - [Tasks](#tasks)
  - [Theme Overview](#theme-overview)
    - [Folder Structure](#folder-structure)
    - [Sass Structure](#sass-structure)
    - [Gulp](#gulp)
    - [JavaScript](#javascript)
    - [Images](#images)
  - [Further Documentation](#further-documentation)
  - [Build Notes](#build-notes)

---

## Installation

Añadir repo de packagist al `composer.json` del proyecto
```
{
            "type": "composer",
            "url": "https://packagist.org/"
        }
```

Instalar modulo biko_svgsprites
```
composer require 'biko2/biko_svgsprites'
```
Descargar este theme e incluirlo en el proyecto en `themes/custom`.
Muy recomendable cambiarle el nombre al theme en los siguientes archivos:
```
soda.breakpoints.yml
soda.info.yml
soda.libraries.yml
soda.theme
```


### Setup Local Development

Hay que instalar nodejs para preparar las herramientas.
```
npm install
```
desde la carpeta del theme `themes/custom/NOMBRE_DEL_THEME`

## Ejecutar herramientas
Para compilar todo.
```
npm run build
```
Para tenerlo lanzado y que recompile cuando cambiamos los archivos.
```
npm start

```

## Theme Overview

Starter theme for Biko2 proyects component based.

```
custom/ (theme folder)
|-- soda/ 
```

### Folder Structure

```
|-- assets/css/  (generated css)
|-- assets/images/  (theme images)
|-- assets/js/  (compiled js)
|-- assets/pages/  (compiled style guide)
|-- src/assets/js/  (js sources)
|-- src/assets/images/  (image sources)
|-- src/assets/fonts/  (font sources)
|-- src/assets/scss/  (SMACSS based sass setup)
|-- src/assets/twigPages/  (Twig based pages)
|-- gulpfile.js  (configured gulp file)
|-- *logo.png (placeholder logo png file)
|-- *logo.svg (placeholder logo svg file)
|-- node_modules/  (modules generated by npm)
|-- package.json  (configured to load dependencies by npm)
|-- README.md (Documentation)
|-- screenshot.png (placeholder theme screenshot file)
|-- soda.info.yml (theme config file)
|-- soda.breakpoints.yml (theme breakpoints file)
|-- soda.libraries.yml (starter libraries file to load theme assets)
|-- soda.theme (file to use for preprocess functions)
|-- theme-settings.php (file to use for making theme settings available in the GUI)
```

### Components Structure

BEM & Atomic design structure.
```
sass/
  |-- 00-base/
  |-- 01-components/
  |-- 02-component-blocks/
  |-- 03-pages/
  |-- style.scss
```

[BEM - Atomic documentation] (https://www.lullabot.com/articles/bem-atomic-design-a-css-architecture-worth-loving)

* **styles.scss**  the manifest file that imports all the partials or folders with globbing

### Gulp

The Gulp installation and tasks are setup to work on install, but are still intended to be easily updated based on project needs. The tasks are declared in `gulpfile.js` and broken out within the `gulp-tasks/` subfolder. You can list the available Gulp tasks with `gulp --tasks`. The most common gulp task is `gulp watch` when developing locally, which covers Sass compiling, JS linting, and building dynamic styleguides.  

### JavaScript

An example JS file `app.js` is added by default in the `js/` folder. This file contains sample code wrapped in the `Drupal.behaviors` code standard. This JS file is added to the theme with the following portion of the code from `[theme-name].libraries.yml`. Cog does not have compression enabled for Gulp since it is relying on Drupal's caching system.

```
lib:
  js:
    js/app.js: {}
    js/vendors.js: {}
```

### Images

## Further Documentation


## Build Notes