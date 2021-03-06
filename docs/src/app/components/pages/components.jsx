var React = require('react');
var PageWithNav = require('./page-with-nav.jsx');

var Components = React.createClass({

  render: function() {
    var menuItems = [
      { route: 'accordion', text: 'Accordion'},
      { route: 'app-bar', text: 'AppBar'},
      { route: 'avatar', text: 'Avatar'},
      { route: 'buttons', text: 'Buttons'},
      { route: 'date-picker', text: 'Date Picker'},
      { route: 'dialog', text: 'Dialog'},
      { route: 'dropdown-menu', text: 'Dropdown Menu'},
      { route: 'icons', text: 'Icons'},
      { route: 'icon-buttons', text: 'Icon Buttons'},
      { route: 'left-nav', text: 'Left Nav'},
      { route: 'menus', text: 'Menus'},
      { route: 'paper', text: 'Paper'},
      { route: 'sliders', text: 'Sliders'},
      { route: 'switches', text: 'Switches'},
      { route: 'snackbar', text: 'Snackbar'},
      { route: 'tabs', text: 'Tabs'},
      { route: 'text-fields', text: 'Text Fields'},
      { route: 'toolbars', text: 'Toolbars'},
    ];

    return (
      <PageWithNav menuItems={menuItems} />
    );
  }

});

module.exports = Components;
