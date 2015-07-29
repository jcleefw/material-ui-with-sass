var React = require("react");

var AccordionContent = React.createClass({

  contextTypes: {
    isOpen: React.PropTypes.func.isRequired,
    registerContent: React.PropTypes.func.isRequired
  },

  render: function() {
    var { className, ...other } = this.props;
    className = (className || "") + " mui-accordion-item-content";
    return (
      <div {...other} className={className}>
        {this.props.children}
      </div>
    );
  },

  componentWillMount: function() {
    this.context.registerContent(this);
  }
});

module.exports = AccordionContent;
