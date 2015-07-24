# [Material-UI](http://callemall.github.io/material-ui/)

[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/callemall/material-ui?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Material-UI is a CSS framework and a set of [React](http://facebook.github.io/react/) components that implement [Google's Material Design](https://www.google.com/design/spec/material-design/introduction.html) specification.

Check out our [documentation site](http://www.material-ui.com/) for live examples. It's still a work in progress, but hopefully you can see where we're headed.

## Prerequisites

We recommend that you get started with the [React Library](http://facebook.github.io/react/) before diving into material-ui for a better understanding. Should you choose to skip this, don't worry, we'll explain relevant React concepts as they come along.

## Installation

Material-UI is available as an [npm package](https://www.npmjs.org/package/material-ui-with-sass).
```sh
npm install material-ui-with-sass
```

Use [browserify](http://browserify.org/) and [reactify](https://github.com/andreypopp/reactify) for dependency management and JSX transformation. The CSS framework is written in [Less](http://lesscss.org/), so you'll need to compile that as well. For [Sass](http://www.sass-lang.com) users, [material-ui-sass](https://github.com/gpbl/material-ui-sass) contains the .scss version of the Less framework. People working with [Stylus](http://learnboost.github.io/stylus/) can use [material-ui-stylus](https://github.com/Autarc/material-ui-stylus) to import
the proper .styl version of the files.

### React-Tap-Event-Plugin
Due to this bug: https://github.com/zilverline/react-tap-event-plugin/issues/22
We have removed all references of "TouchTap" and replaced with "Click" for the time being.
react-tap-event-plugin is no longer a dependency of this repository.

### Roboto Font
Be sure to include the [Roboto](http://www.google.com/fonts/specimen/Roboto) font in your project.
Here are [some instructions](http://www.google.com/fonts#UsePlace:use/Collection:Roboto:400,300,500) on how to include it in your project.

## Usage

Once material-ui is included in your project, you can use the components this way:
```js
/** MyAwesomeReactComponent.jsx */

var React = require('react'),
  mui = require('material-ui'),
  RaisedButton = mui.RaisedButton;

var MyAwesomeReactComponent = React.createClass({

  render: function() {
    return (
      <RaisedButton label="Default" />
    );
  }

});

module.exports = MyAwesomeReactComponent;
```

## Customization

The styles are separated into 2 scss files:
* src/sass/scaffolding.less
* src/sass/components.less

This allows you to override any variables defined in [custom-variables.less](https://github.com/sarink/material-ui-with-sass/blob/master/src/sass/variables/_custom-variables.scss) without having to modify material-ui-with-sass source files directly. For example, your main.scss file could look something like this:
```less
@import "node_modules/material-ui-with-sass/src/sass/scaffolding";

//Define a custom less file to override any variables defined in scaffolding.scss
@import "my-custom-overrides.scss";

@import "node_modules/material-ui-with-sass/src/sass/components";
```

## Examples
There are 2 projects that you can look at to help you get started. The first project can be found in the [example folder](https://github.com/callemall/material-ui/tree/master/example). This is a basic project that shows how you can consume material-ui components in your own project.

The second project is the actual documentation site. This is a more complex project but will give examples of every component. Check out the [docs folder](https://github.com/callemall/material-ui/tree/master/docs) for build instructions.

## Contribute

[Material-UI](http://www.material-ui.com/) came about from our love of [React](http://facebook.github.io/react/) and [Google's Material Design](https://www.google.com/design/spec/material-design/introduction.html). We're currently using it on a project at [Call-Em-All](https://www.call-em-all.com/) and plan on adding to it and making it better. If you'd like to help, check out the [docs folder](https://github.com/callemall/material-ui/tree/master/docs). We'd greatly appreciate any contribution you make. :)

## License
This project is licensed under the terms of the [MIT license](https://github.com/callemall/material-ui/blob/master/LICENSE)
