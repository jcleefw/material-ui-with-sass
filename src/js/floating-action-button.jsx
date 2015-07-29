var React = require('react');
var Classable = require('./mixins/classable');
var EnhancedButton = require('./enhanced-button');
var FontIcon = require('./font-icon');
var Paper = require('./paper');

var getZDepth = function(disabled) {
  var zDepth = disabled ? 0 : 2;
  return {
    zDepth: zDepth,
    initialZDepth: zDepth
  };
};

var FloatingActionButtonOriginal = React.createClass({

  mixins: [Classable],

  propTypes: {
    className: React.PropTypes.string,
    iconClassName: React.PropTypes.string,
    mini: React.PropTypes.bool,
    onMouseDown: React.PropTypes.func,
    onMouseUp: React.PropTypes.func,
    onMouseOut: React.PropTypes.func,
    onTouchEnd: React.PropTypes.func,
    onTouchStart: React.PropTypes.func,
    secondary: React.PropTypes.bool
  },

  componentWillMount: function() {
    this.setState(getZDepth(this.props.disabled));
  },

  componentWillReceiveProps: function(newProps) {
    if(newProps.disabled !== this.props.disabled){
      this.setState(getZDepth(newProps.disabled));
    }
  },

  componentDidMount: function() {
    if (process.env.NODE_ENV !== 'production') {
      if (this.props.iconClassName && !_.isEmpty(_.compact(this.props.children))) {
        var warning = 'You have set both an iconClassName and a child icon. ' +
                      'It is recommended you use only one method when adding ' +
                      'icons to FloatingActionButtons.';
        console.warn(warning);
      }
    }
  },


  render: function() {
    var { icon, mini, secondary, ...other } = this.props;
    var classes = this.getClasses('mui-floating-action-button', {
      'mui-is-mini': mini,
      'mui-is-secondary': !this.props.disabled && secondary
    });

    if (this.props.iconClassName) icon = <FontIcon className={"mui-floating-action-button-icon " + this.props.iconClassName} />;

    return (
      <Paper
        className={classes}
        innerClassName="mui-floating-action-button-inner"
        zDepth={this.state.zDepth}
        circle={true}>

        <EnhancedButton {...other}
          rippleOuterClassName="mui-floating-action-button-ripple-wrapper"
          className="mui-floating-action-button-container"
          onMouseDown={this._handleMouseDown}
          onMouseUp={this._handleMouseUp}
          onMouseOut={this._handleMouseOut}
          onTouchStart={this._handleTouchStart}
          onTouchEnd={this._handleTouchEnd}>

          {icon}
          {this.props.children}

        </EnhancedButton>

      </Paper>
    );
  },

  _handleMouseDown: function(e) {
    //only listen to left clicks
    if (e.button === 0) {
      this.setState({ zDepth: this.state.initialZDepth + 1 });
    }
    if (this.props.onMouseDown) this.props.onMouseDown(e);
  },

  _handleMouseUp: function(e) {
    this.setState({ zDepth: this.state.initialZDepth });
    if (this.props.onMouseUp) this.props.onMouseUp(e);
  },

  _handleMouseOut: function(e) {
    this.setState({ zDepth: this.state.initialZDepth });
    if (this.props.onMouseOut) this.props.onMouseOut(e);
  },

  _handleTouchStart: function(e) {
    this.setState({ zDepth: this.state.initialZDepth + 1 });
    if (this.props.onTouchStart) this.props.onTouchStart(e);
  },

  _handleTouchEnd: function(e) {
    this.setState({ zDepth: this.state.initialZDepth });
    if (this.props.onTouchEnd) this.props.onTouchEnd(e);
  }

});













var Tooltip = require("./tooltip");
var Icon = require("./icon");
var _ = require("underscore");
// If react-0.14.0-beta1 is installed, then ReactDOM is a separate package
var ReactDOM = {findDOMNode: React.findDOMNode}; //(React.version.indexOf("0.14") !== -1) ? require("react-dom") : React;

var FloatingActionButton = React.createClass({

  getInitialState: function() {
    return {
      tooltipShown: false,
      showSpeedDial: false,
      text: this.props.text,
      speedDialIsPinned: false
    };
  },

  getDefaultProps: function() {
    return {
      tooltipPosition: "left",
      useSpeedDial: false,
      useIconsForText: true,
      text: "",
      speedDialTransitionTime: 50,
      speedDialTransitionRotate: 90,
      speedDialOpenText: "keyboard_arrow_left",
      speedDialVisibleTime: 2000,
      isSpeedDialButton: false,
      speedDialDirection: "up"
    }
  },

  propTypes: {
    mini: React.PropTypes.bool,
    tooltip: React.PropTypes.string,
    tooltipPosition: React.PropTypes.oneOf(["top", "left"]),
    speedDialTransitionTime: React.PropTypes.number,
    speedDialTransitionRotate: React.PropTypes.number,
    text: React.PropTypes.string,
    speedDialOpenText: React.PropTypes.string,
    speedDialVisibleTime: React.PropTypes.number,
    speedDialButtons: React.PropTypes.array,
    useSpeedDial: React.PropTypes.bool,
    useIconsForText: React.PropTypes.bool,
    speedDialDirection: React.PropTypes.oneOf(["up"])
  },

  _positionTooltip: function() {
    var tooltipPosition = this.props.tooltipPosition;
    var tooltip = ReactDOM.findDOMNode(this.refs.tooltip);
    var button = ReactDOM.findDOMNode(this.refs.button);

    var style = {
      "z-index": "999999",
      position: "absolute",
      top: "",
      right: "",
      bottom: "",
      left: ""
    };

    var offset = 3;
    if (tooltipPosition === "top") {
      style.top = Math.round(tooltip.offsetHeight) + offset + "px";
      style.top = "-" + style.top;
      style.left = "calc(50% - " + Math.round(tooltip.offsetWidth/2) + "px)";
    }
    else if (tooltipPosition === "right") {
      style.top = "calc(50% - " + Math.round(tooltip.offsetHeight/2) + "px)";
      style.right = Math.round(tooltip.offsetWidth) + offset + "px";
      style.right = "-" + style.right;
    }
    else if (tooltipPosition === "bottom") {
      style.top = Math.round(button.offsetHeight) + offset + "px";
      style.left = "calc(50% - " + Math.round(tooltip.offsetWidth/2) + "px)";
    }
    else if (tooltipPosition === "left") {
      style.top = "calc(50% - " + Math.round(tooltip.offsetHeight/2) + "px)";
      style.left = Math.round(tooltip.offsetWidth) + offset + "px";
      style.left = "-" + style.left;
    }

    _.extend(tooltip.style, style);
  },

  showTooltip: function() {
    if (this.props.tooltip && !this.props.disabled) {
      this._positionTooltip();
      this.setState({tooltipShown: true});
    }
  },

  hideTooltip: function() {
    if (this.props.tooltip) this.setState({tooltipShown: false});
  },

  _handleBlur: function(e) {
    this.hideTooltip();
    if (this.props.onBlur) this.props.onBlur(e);
  },

  _handleFocus: function(e) {
    this.showTooltip();
    if (this.props.onFocus) this.props.onFocus(e);
  },

  _handleMouseOut: function(e) {
    this.hideTooltip();
    if (this.props.useSpeedDial) this.hideSpeedDial();
    if (this.props.onMouseOut) this.props.onMouseOut(e);
  },

  _handleMouseOver: function(e) {
    this.showTooltip();
    if (this.props.useSpeedDial) this.showSpeedDial();
    if (this.props.onMouseOver) this.props.onMouseOver(e);
  },

  showSpeedDial: function() {
    var self = this;
    this.setState({showSpeedDial: true, willHideSpeedDial: false});
    ReactDOM.findDOMNode(this.refs.button).style.transform = "rotate(" + this.props.speedDialTransitionRotate + "deg)";
    ReactDOM.findDOMNode(this.refs.button).style.WebkitTransform = "rotate(" + this.props.speedDialTransitionRotate + "deg)";
    ReactDOM.findDOMNode(this.refs.button).style.msTransform = "rotate(" + this.props.speedDialTransitionRotate + "deg)";
    _.delay(function() {
      self.setState({text: self.props.speedDialOpenText});
    }, self.props.speedDialTransitionTime);
  },

  hideSpeedDial: function() {
    if (!this.state.speedDialIsPinned) {
      var self = this;
      this.setState({willHideSpeedDial: true});
      if (this.state.showSpeedDial) {
        _.delay(function () {
          if (self.state.willHideSpeedDial) {
            self.setState({showSpeedDial: false, willHideSpeedDial: false});
            ReactDOM.findDOMNode(self.refs.button).style.transform = "rotate(0deg)";
            ReactDOM.findDOMNode(self.refs.button).style.WebkitTransform = "rotate(0deg)";
            ReactDOM.findDOMNode(self.refs.button).style.msTransform = "rotate(0deg)";
            _.delay(function () {
              self.setState({text: self.props.text});
            }, self.props.speedDialTransitionTime);
          }
        }, self.props.speedDialVisibleTime);
      }
    }
  },

  togglePinnedSpeedDial: function() {
    var pinned = !this.state.speedDialIsPinned;
    this.setState({speedDialIsPinned: pinned});
    (pinned) ? this.showSpeedDial() : this.hideSpeedDial();
  },

  _handleClick: function(e) {
    if (this.props.useSpeedDial) this.togglePinnedSpeedDial();
    if (this.props.onClick) this.props.onClick(e);
  },

  renderSpeedDialButton(speedDialButton, i) {
    var className = (speedDialButton.className || "") + " mui-speed-dial-button";
    return <FloatingActionButton key={"speedDialButton-"+i} {...speedDialButton} className={className} parent={this} mini={true} onMouseOver={this.showSpeedDial} onMouseOut={this.hideSpeedDial} useSpeedDial={false} isSpeedDialButton={true} />
  },

  render: function () {
    var {className, ...other} = this.props;

    if (!this.props.isSpeedDialButton) className = (className || "") + " mui-floating-action-button-wrapper";
    if (this.props.useSpeedDial) className = (className || "") + " mui-speed-dial-direction-" + this.props.speedDialDirection;

    var speedDialButtons;
    if (!_.isEmpty(_.compact(this.props.speedDialButtons))) {
      speedDialButtons = (
        <div className={"mui-speed-dial-buttons-container" + (this.state.showSpeedDial ? " mui-speed-dial-is-shown" : "")}>
          {this.props.speedDialButtons.map(this.renderSpeedDialButton)}
        </div>
      );
    }

    var tooltip;
    if (this.props.tooltip && !this.props.useSpeedDial) tooltip = <Tooltip ref="tooltip" className="mui-icon-button-tooltip" label={this.props.tooltip} show={this.state.tooltipShown} touch={this.props.touch} />;

    var text;
    if (this.props.useIconsForText && this.state.text) text = <Icon>{this.state.text}</Icon>;
    else if (this.state.text) text = this.state.text;

    return (
      <div className={className}>
        {this.props.speedDialDirection === "up" ? speedDialButtons : undefined}
        <FloatingActionButtonOriginal ref="button" {...other} onClick={this._handleClick} onMouseOver={this._handleMouseOver} onMouseOut={this._handleMouseOut} onFocus={this._handleFocus} onBlur={this._handleBlur}>
          {tooltip}
          {text}
        </FloatingActionButtonOriginal>
      </div>
    );
  },

  componentDidMount: function() {
    if (this.props.tooltip) this._positionTooltip();
  },

  componentWillMount: function() {
    if (this.props.useSpeedDial) this.hideSpeedDial = _.debounce(this.hideSpeedDial, 300);
  }
});

module.exports = FloatingActionButton;
