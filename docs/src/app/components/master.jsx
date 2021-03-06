var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var mui = require('mui');
var AppBar = mui.AppBar;
var AppCanvas = mui.AppCanvas;
var Menu = mui.Menu;
var IconButton = mui.IconButton;
var AppLeftNav = require('./app-left-nav.jsx');

var Master = React.createClass({

  mixins: [Router.State],

  render: function() {

    var title = 
      this.context.router.isActive('css-framework') ? 'CSS Framework' :
      this.context.router.isActive('components') ? 'Components' : '';
    var githubButton = (
      <IconButton
        className="github-icon-button"
        iconClassName="muidocs-icon-custom-github"
        href="https://github.com/sarink/material-ui-with-sass"
        linkButton={true} />
    );

    return (
      <AppCanvas predefinedLayout={1}>

        <AppBar
          className="mui-dark-theme"
          onMenuIconButtonClick={this._onMenuIconButtonClick}
          title={title}
          zDepth={0}>
          {githubButton}
        </AppBar>

        <AppLeftNav ref="leftNav" />

        <RouteHandler />

      </AppCanvas>
    );
  },

  _onMenuIconButtonClick: function() {
    this.refs.leftNav.toggle();
  }
  
});

module.exports = Master;
