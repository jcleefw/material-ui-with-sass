var React = require('react');
var Classable = require('./mixins/classable');
var IconButton = require('./icon-button');
var NavigationMenu = require('./svg-icons/navigation-menu');
var Paper = require('./paper');

var AppBar = React.createClass({

  mixins: [Classable],

  propTypes: {
    onMenuIconButtonClick: React.PropTypes.func,
    showMenuIconButton: React.PropTypes.bool,
    iconClassNameLeft: React.PropTypes.string,
    iconElementLeft: React.PropTypes.element,
    iconElementRight: React.PropTypes.element,
    title : React.PropTypes.node,
    zDepth: React.PropTypes.number
  },

  getDefaultProps: function() {
    return {
      showMenuIconButton: true,
      title: '',
      zDepth: 1
    }
  },

  componentDidMount: function() {
    if (process.env.NODE_ENV !== 'production' &&
       (this.props.iconElementLeft && this.props.iconClassNameLeft)) {
        var warning = 'Properties iconClassNameLeft and iconElementLeft cannot be simultaneously ' +
                      'defined. Please use one or the other.';
        console.warn(warning);
    }
  },

  render: function() {
    var { title, className, onMenuIconButtonClick, showMenuIconButton, iconClassNameLeft, iconElementLeft, iconElementRight, zDepth, ...other } = this.props;

    var classes = this.getClasses('mui-app-bar'), menuElementLeft, menuElementRight;

    if (this.props.title) {
      // If the title is a string, wrap in an h1 tag.
      // If not, just use it as a node.
      title = Object.prototype.toString.call(title) === '[object String]' ?
              <h1 className="mui-app-bar-title">{title}</h1> :
              title;
    }

    if (showMenuIconButton) {
      if (iconElementLeft) {
        menuElementLeft = (
          <div className="mui-app-bar-navigation-icon-button">
            {iconElementLeft}
          </div>
        );
      } else {
        var child = (iconClassNameLeft) ? '' : <NavigationMenu/>;
        menuElementLeft = (
          <IconButton
            className="mui-app-bar-navigation-icon-button"
            iconClassName={iconClassNameLeft}
            onClick={this._onMenuIconButtonClick}>
              {child}
          </IconButton>
        );
      }
    }

    menuElementRight = (this.props.children) ? this.props.children :
                       (iconElementRight) ? iconElementRight : '';

    return (
      <Paper {...other} rounded={false} className={classes} zDepth={zDepth}>
        {menuElementLeft}
        {title}
        {menuElementRight}
      </Paper>
    );
  },

  _onMenuIconButtonClick: function(e) {
    if (this.props.onMenuIconButtonClick) this.props.onMenuIconButtonClick(e);
  }

});

module.exports = AppBar;
