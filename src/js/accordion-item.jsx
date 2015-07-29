var React = require("react");
var Paper = require("./paper");

var AccordionItem = React.createClass({

  contextTypes: {
    openedItem: React.PropTypes.func,
    closedItem: React.PropTypes.func,
    registerItem: React.PropTypes.func.isRequired,
    unregisterItem: React.PropTypes.func.isRequired
  },

  getChildContext: function () {
    return {
      isOpen: this.isOpen,
      toggleOpen: this.toggleOpen,
      registerContent: this.registerContent,
      registerHeader: this.registerHeader
    };
  },

  childContextTypes: {
    isOpen: React.PropTypes.func,
    toggleOpen: React.PropTypes.func,
    registerContent: React.PropTypes.func,
    registerHeader: React.PropTypes.func
  },

  getDefaultProps: function () {
    return {
      initiallyOpen: false
    }
  },

  propTypes: {
    initiallyOpen: React.PropTypes.bool,
    onOpen: React.PropTypes.func,
    onClose: React.PropTypes.func
  },

  getInitialState: function () {
    return {
      isOpen: this.props.initiallyOpen
    }
  },

  toggleOpen: function (open) {
    open = (open == null) ? !this.isOpen() : open;
    (open) ? this.open() : this.close();
  },

  isOpen: function () {
    return this.state.isOpen;
  },

  isClosed: function () {
    return !this.state.isOpen;
  },

  open: function () {
    var self = this;
    this.setState({isOpen: true}, function () {
      self.content.forceUpdate(function () {
        if (self.props.onOpen) self.props.onOpen();
        if (self.context.openedItem) self.context.openedItem(self);
      });
    });
  },

  close: function () {
    var self = this;
    this.setState({isOpen: false}, function () {
      self.content.forceUpdate(function () {
        if (self.props.onClose) self.props.onClose();
        if (self.context.closedItem) self.context.closedItem(self);
      });
    });
  },

  componentDidMount: function () {
    this.context.registerItem(this);
    if (this.props.initiallyOpen) this.open();
  },

  componentWillUnmount: function () {
    this.context.unregisterItem(this);
  },

  renderChild: function (child) {
    // In React 0.14 contexts have switched to be parent-based, so everything will work normally without any cloning
    if (React.version.indexOf("0.14") !== -1) return child;

    if (child.ref) {
      //if (process.env.NODE_ENV !== "production") {
      //  console.warn("You passed a child (" + child.type.displayName + ") to the AccordionItem which had a ref (" + child.ref + ")! " +
      //    "It will be not be cloned with the right accordion context. " +
      //    "If this child is, or renders an AccordionHeader or AccordionContent, your accordion's probably not working.");
      //}
      return child;
    }
    // By using `cloneWithProps`, we can set the child's context to ourself.
    return React.addons.cloneWithProps(child);
  },

  render: function () {
    var { className, ...other } = this.props;
    className = (className || "") + " mui-accordion-item" + ((this.isOpen()) ? " mui-accordion-item-is-open" : " mui-accordion-item-is-closed");

    var zDepth = (this.state.isOpen) ? 2 : 0;

    return (
      <Paper zDepth={zDepth} {...other} className={className}>
        {React.Children.map(this.props.children, this.renderChild)}
      </Paper>
    );
  },

  registerContent: function (accordionContent) {
    this.content = accordionContent;
  },

  registerHeader: function (accordionHeader) {
    this.header = accordionHeader;
  }
});

module.exports = AccordionItem;
