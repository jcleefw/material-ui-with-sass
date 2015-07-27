var React = require('react');
var KeyCode = require('./utils/key-code');
var Classable = require('./mixins/classable');
var WindowListenable = require('./mixins/window-listenable');
var FocusRipple = require('./ripples/focus-ripple');
var TouchRipple = require('./ripples/touch-ripple');

var EnhancedButton = React.createClass({

  mixins: [Classable, WindowListenable],

  propTypes: {
    centerRipple: React.PropTypes.bool,
    className: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    disableFocusRipple: React.PropTypes.bool,
    disableTouchRipple: React.PropTypes.bool,
    keyboardFocused: React.PropTypes.bool,
    linkButton: React.PropTypes.bool,
    onBlur: React.PropTypes.func,
    onFocus: React.PropTypes.func,
    onClick: React.PropTypes.func,
    rippleOuterClassName: React.PropTypes.string
  },

  windowListeners: {
    'keydown': '_handleWindowKeydown',
    'keyup': '_handleWindowKeyup'
  },

  getInitialState: function() {
    return {
      isKeyboardFocused: !this.props.disabled && this.props.keyboardFocused
    };
  },

  render: function() {
    var {
      centerRipple,
      disabled,
      disableFocusRipple,
      disableTouchRipple,
      linkButton,
      onBlur,
      onFocus,
      onClick,
      ...other } = this.props;
    var classes = this.getClasses('mui-enhanced-button', {
      'mui-is-disabled': disabled,
      'mui-is-keyboard-focused': this.state.isKeyboardFocused,
      'mui-is-link-button': linkButton
    });
    var touchRipple = (
      <TouchRipple
        outerClassName={this.props.rippleOuterClassName}
        ref="touchRipple"
        key="touchRipple"
        centerRipple={centerRipple}>
        {this.props.children}
        </TouchRipple>
    );
    var focusRipple = (
      <FocusRipple
        key="focusRipple"
        show={this.state.isKeyboardFocused} />
    );
    var buttonProps = {
      className: classes,
      disabled: disabled,
      onBlur: this._handleBlur,
      onFocus: this._handleFocus,
      onClick: this._handleClick
    };
    var buttonChildren = [
      disabled || disableTouchRipple ? this.props.children : touchRipple,
      disabled || disableFocusRipple ? null : focusRipple
    ];

    if (disabled && linkButton) {
      return (
        <span {...other} 
          className={classes} 
          disabled={disabled}>
          {this.props.children}
        </span>
      );
    }

    return linkButton ? (
      <a {...other} {...buttonProps}>
        {buttonChildren}
      </a>
    ) : (
      <button {...other} {...buttonProps}>
        {buttonChildren}
      </button>
    );
  },

  isKeyboardFocused: function() {
    return this.state.isKeyboardFocused;
  },

  _handleWindowKeydown: function(e) {
    if (!this.props.disabled) {
      if (e.keyCode == KeyCode.TAB) this._tabPressed = true;
      if (e.keyCode == KeyCode.ENTER && this.state.isKeyboardFocused) {
        this._handleClick(e);
      }
    }
  },

  _handleWindowKeyup: function(e) {
    if (!this.props.disabled && e.keyCode == KeyCode.SPACE && this.state.isKeyboardFocused) {
      this._handleClick(e);
    }
  },

  _handleBlur: function(e) {
    this._cancelFocusTimeout();
    if (!this.props.disabled) {
      this.setState({
        isKeyboardFocused: false
      });

      if (this.props.onBlur) this.props.onBlur(e);
    }
  },

  _handleFocus: function(e) {
    if (!this.props.disabled) {
      //setTimeout is needed because the focus event fires first
      //Wait so that we can capture if this was a keyboard focus
      //or touch focus
      this._focusTimeout = setTimeout(function() {
        if (this._tabPressed) {
          this.setState({
            isKeyboardFocused: true
          });
        }
      }.bind(this), 150);
    
      if (this.props.onFocus) this.props.onFocus(e);
    }
  },

  _handleClick: function(e) {
    this._cancelFocusTimeout();
    if (!this.props.disabled) {
      this._tabPressed = false;
      this.setState({
        isKeyboardFocused: false
      });
     
      if (this.props.onClick) this.props.onClick(e);
    }
  },

  _cancelFocusTimeout: function () {
    if (this._focusTimeout) {
      clearTimeout(this._focusTimeout);
      this._focusTimeout = null;
    }
  }

});

module.exports = EnhancedButton;
