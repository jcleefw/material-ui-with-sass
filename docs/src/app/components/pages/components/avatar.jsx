var React = require('react');
var mui = require('mui');
var Avatar = mui.Avatar;
var Icon = mui.Icon;
var ComponentDoc = require('../../component-doc.jsx');

var AvatarPage = React.createClass({
  render: function() {
    var avatarCode = '<Avatar className="my-custom-avatar">KS</Avatar>\n\n' +
                     '<Avatar className="my-custom-avatar"><Icon>face</Icon></Avatar>\n\n' +
                     '// in your css...\n' +
                     '.my-custom-avatar { background-color: red; }';
    var avatarDesc = (
      <p className="mui-font-style-subhead-1">
        The Avatar component is very simple. Basically, it renders a circle with some centered content inside of it.<br/>
        You can put anything inside of it, and it can be styled with regular css.<br/>
        The default size is 40px, but you can set your own width/height in css, or in inline-styles if you like.<br/>
        You can embed an Icon, an img, or just some plain old text.
      </p>
    );

    var componentInfo = [];

    return (
      <div>
        <ComponentDoc
          name="Avatar"
          code={avatarCode}
          desc={avatarDesc}
          componentInfo={componentInfo}>
          <Avatar style={{backgroundColor: "red"}}>KS</Avatar>
          <br/>
          <Avatar><Icon>face</Icon></Avatar>
        </ComponentDoc>
      </div>
    );
  }
});

module.exports = AvatarPage;
