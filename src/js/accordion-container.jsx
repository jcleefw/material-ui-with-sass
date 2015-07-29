var React = require("react");
var _ = require("underscore");

var registeredItems = [];

var AccordionContainer = React.createClass({

  getChildContext: function() {
    return {
      openedItem: this.openedItem,
      closedItem: this.closedItem,
      registerItem: this.registerItem,
      unregisterItem: this.unregisterItem
    };
  },

  childContextTypes: {
    openedItem: React.PropTypes.func,
    closedItem: React.PropTypes.func,
    registerItem: React.PropTypes.func,
    unregisterItem: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      jumpToOpenItem: false,
      singleOpenItem: false
    };
  },

  itemIsRegistered: function(item) {
    return _.contains(registeredItems, item);
  },

  openedItem: function(openedItem) {
    if (this.props.singleOpenItem && this.itemIsRegistered(openedItem)) {
      _.each(registeredItems, function(item) {
        if (item.isOpen() && item !== openedItem) {
          item.close();
        }
      }, this);
    }
    if (this.props.jumpToOpenItem) React.findDOMNode(openedItem).scrollIntoView({behavior: "smooth", block: "start"});
  },

  closedItem: function(closedItem) {

  },

  registerItem: function(item) {
    registeredItems.push(item);
  },

  unregisterItem: function(itemToUnregister) {
    registeredItems = _.reject(registeredItems, function(item) { return item === itemToUnregister; });
  },

  renderChild: function(child) {
    // In React 0.14 contexts have switched to be parent-based, so everything will work normally without any cloning
    if (React.version.indexOf("0.14") !== -1) return child;

    if (child.ref) {
      //if (process.env.NODE_ENV !== "production") {
      //  console.warn("You passed a child (" + child.type.displayName + ") to the AccordionContainer which had a ref (" + child.ref + ")! " +
      //    "It will be not be cloned with the right accordion context. " +
      //    "If this child is, or renders an AccordionItem, your accordion's probably not working.");
      //}
      return child;
    }
    // By using `cloneWithProps`, we can set the child's context to ourself.
    return React.addons.cloneWithProps(child);
  },

  render: function() {
    var { className, ...other } = this.props;
    className = (className || "") + " mui-accordion-container";
    return (
      <div {...other} className={className}>
        {React.Children.map(this.props.children, this.renderChild)}
      </div>
    );
  },

  componentWillUnmount: function() {
    registeredItems = [];
  },

  componentWillMount: function() {
    registeredItems = [];
  }
});

module.exports = AccordionContainer;
