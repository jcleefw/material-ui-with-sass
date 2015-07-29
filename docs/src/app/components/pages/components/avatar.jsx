var React = require('react');
var mui = require('mui');
var Avatar = mui.Avatar;
var Icon = mui.Icon;
var ComponentDoc = require('../../component-doc.jsx');

var AvatarPage = React.createClass({
  render: function() {
    var avatarCode = '<Avatar className="my-custom-avatar">KS</Avatar>\n' +
                     '/* in your css /* .my-custom-avatar { background-color: red; }\n\n' +
                     '<Avatar><Icon>face</Icon></Avatar>\n\n' +
                     '<Avatar><img src="images/partly_cloudy.png" /></Avatar>\n\n';
    var avatarDesc = (
      <p className="mui-font-style-subhead-1">
        The Avatar component is very simple. Basically, it renders a circle with some centered content inside of it.<br/><br/>
        The default size is 40px, but you can set your own width/height in css, or in inline-styles if you like.<br/><br/>
        You can embed an Icon, an img, or just some plain old text.<br/><br/>
        If it is an image, it will be center/clipped inside the circle.
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
          <br/>
          <Avatar><img src="images/partly_cloudy.png" /></Avatar>
        </ComponentDoc>
      </div>
    );
  }
});

module.exports = AvatarPage;
