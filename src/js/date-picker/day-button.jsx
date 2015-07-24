var React = require('react');
var Classable = require('../mixins/classable');
var DateTime = require('../utils/date-time');
var EnhancedButton = require('../enhanced-button');

var DayButton = React.createClass({

  mixins: [Classable],

  propTypes: {
    date: React.PropTypes.object,
    onClick: React.PropTypes.func,
    selected: React.PropTypes.bool
  },

  render: function() {
    var {
      className,
      date,
      onClick,
      selected,
      ...other
    } = this.props;
    var classes = this.getClasses('mui-date-picker-day-button', { 
      'mui-is-current-date': DateTime.isEqualDate(this.props.date, new Date()),
      'mui-is-selected': this.props.selected
    });

    return this.props.date ? (
      <EnhancedButton {...other}
        className={classes}
        disableFocusRipple={true}
        disableTouchRipple={true}
        onClick={this._handleClick}>
        <div className="mui-date-picker-day-button-select" />
        <span className="mui-date-picker-day-button-label">{this.props.date.getDate()}</span>
      </EnhancedButton>
    ) : (
      <span className={classes} />
    );
  },

  _handleClick: function(e) {
    if (this.props.onClick) this.props.onClick(e, this.props.date);
  }

});

module.exports = DayButton;
