# todoVue

> A simple web Node.js application with todo list Vue.js component.

Application based on the [Webpack Vue.js template](http://vuejs-templates.github.io/webpack/) for [Vue CLI](https://cli.vuejs.org/guide/).

## Application running

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## Component structure

A todo list component was realised as a [single file component](https://vuejs.org/v2/guide/single-file-components.html) firstly (you can see it according to the commits) and then its code was separated to three different files containing HTML, JS and CSS code.

## Component features

Component provides the CRUD operations with the todo list items, i.e.:

- Viewing the all todo list items
- Adding new items
- Editing existed items
- Deleting items

Also it possible to change the status of the current item to `Completed/Not completed` pressing on the label with the current status.

Todo list state saves to the browser `localStorage`, so you can view the edited list even after the page reloading.
