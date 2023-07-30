# Recruitment Task

![Eslint 8.21.0](https://img.shields.io/badge/Eslint-8.21.0-brightgreen)
![Prettier 2.7.1](https://img.shields.io/badge/Prettier-2.7.1-brightgreen)
![Typescript 4.7.4](https://img.shields.io/badge/Typescript-4.7.4-brightgreen)
![Stylelint 14.10.0](https://img.shields.io/badge/Stylelint-14.10.0-brightgreen)
![Node.js 4.5.4](https://img.shields.io/badge/Node.js-4.5.4-brightgreen)
![Sass 1.54.4](https://img.shields.io/badge/Sass-1.54.4-brightgreen)

- [Recruitment Task](#senti1_recruitment_task)
  - [Start](#start)
  - [Build scripts](#build-scripts)
  - [Requirements](#requirements)
  - [Files structure](#files-structure)
  - [Styles](#stylizacja)
  - [Icons](#ikony)
    - [SvgIcon.vue](#svgiconvue)
    
## Build scripts

To start the development process:

- **`npm install`** - install dependencies
- **`npm run prod`** - builds css & js [production mode]
- **`npm run dev`** - builds css & js [development mode]

## Requirements

- [Vue 3.0](https://v3.vuejs.org/) >= 3.0
- [TS](https://www.typescriptlang.org/) >= 2.7.2
- [Pinia](https://pinia.vuejs.org/) >= 2.0.9
- [Vue-router](https://router.vuejs.org/) >= 2.4.10
- [Husky](https://element-plus.org/) >= 8.0.1

## Files structure

```js
.
├── .husky                          # husky config directory
└── src                             # the main source of the project directory
    ├── assets                      # images and styles files
    ├── composables                 # directory with composables (e.g. useRules -> validation rules)
    ├── components                  # directory where we keep components for specific views or base components
    ├── layout                      # directory where we keep layouts
    ├── router                      # is used for the main vue-router configuration
    ├── store                       # is used for Pinia's main configuration
    ├── views                       # directory where components merge into separate pages
    └── settings.ts                 # general configuration file for the project
├── .eslintignore                   # eslint ignore file
├── .estlintrc.js                   # eslint config file
├── .gitignore                      # gitignore file
├── .prettierrc                     # prettier config file
├── index.html                      # main index file
├── package.json                    # npm config file
├── jsconfig.json                   # js main config file
├── tsconfig.json                   # ts config file
├── vite.config.ts                  # vite config file
└── README.md                       # readme file
```

## Styles

For styling there is a file `src/assets/scss/index.scss`

## Icons

### SvgIcon.vue

This is a component that allows you to use the svg icons included in the directory.
To add a new icon, you need to add a file with the svg extension to the src/icons directory
component is global therefore no need to import it, just use:

` <SvgIcon iconClass="bug" :size="30" color="red" />`

