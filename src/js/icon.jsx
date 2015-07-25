var React = require("react");
var Classable = require("./mixins/classable");

var Icon = React.createClass({

  mixins: [Classable],

  render: function() {

    var {
      className,
      ...other
    } = this.props;
    var classes = this.getClasses("material-icons");

    return (
      <i {...other} className={classes}>{this.props.children}</i>
    );
  }

});

module.exports = Icon;
