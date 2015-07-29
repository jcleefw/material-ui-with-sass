var React = require("react");

var AccordionHeader = React.createClass({

  contextTypes: {
    toggleOpen: React.PropTypes.func.isRequired,
    isOpen: React.PropTypes.func,
    registerHeader: React.PropTypes.func.isRequired
  },

  _handleClick: function(event) {
    this.context.toggleOpen();
    if (this.props.onClick) this.props.onClick(event);
  },

  render: function() {
    var { className, ...other } = this.props;
    className = (className || "") + " mui-accordion-item-header";
    return (
      <div {...other} className={className} onClick={this._handleClick}>
        {this.props.children}
      </div>
    );
  },

  componentWillMount: function() {
    this.context.registerHeader(this);
  }
});

module.exports = AccordionHeader;
