var React = require("react");

var Avatar = React.createClass({
  render: function() {
    var { className, ...other } = this.props;
    className = (className || "") + " mui-avatar";
    return (
      <div {...other} className={className} >
        {this.props.children}
      </div>
    );
  }
});

module.exports = Avatar;
