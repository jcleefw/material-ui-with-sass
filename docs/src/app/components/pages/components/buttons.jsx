var React = require('react');
var mui = require('mui');
var FlatButton = mui.FlatButton;
var FloatingActionButton = mui.FloatingActionButton;
var RaisedButton = mui.RaisedButton;
var FontIcon = mui.FontIcon;
var ComponentDoc = require('../../component-doc.jsx');

var ButtonPage = React.createClass({

  render: function() {

    var code =
      '//material-ui-with-sass FloatingActionButton additions\n' +
      '<FloatingActionButton text="face" useIconsForText={true} tooltip="I\'m a face!" tooltipPosition="left" />\n' +
      '<FloatingActionButton text="KS" useIconsForText={false} secondary={true} />\n' +
      'var speedDialButtons = [\n' +
      '  {tooltip: "Previous", text: "skip_previous"},\n' +
      '  {tooltip: "Play",     text: "play_arrow"},\n' +
      '  {tooltip: "Next",     text: "skip_next", onClick: function(e) { console.log(e); }},\n' +
      '  {tooltip: "abc",      text: "ABC", useIconsForText: false, secondary: true}\n' +
      '];\n' +
      '<FloatingActionButton useIconsForText={true} text="music_note" speedDialButtons={speedDialButtons} speedDialOpenText="keyboard_arrow_right" speedDialDirection="up" speedDialTransitionRotate={90} />\n\n' +

      '//Flat Buttons\n' +
      '<FlatButton label="Default" />\n' +
      '<FlatButton label="Primary" primary={true} />\n' +
      '<FlatButton label="Secondary" secondary={true} />\n' +
      '<FlatButton secondary={true}>\n' +
      '  <span className="mui-flat-button-label example-image-button">Choose an Image</span>\n' +
      '  <input type="file" id="imageButton" className="example-image-input"></input>\n' +
      '</FlatButton>\n' +
      '<div className="button-example-container">\n' +
      '  <FlatButton linkButton={true} href="https://github.com/sarink/material-ui-with-sass" secondary={true}>\n' +
      '    <FontIcon className="muidocs-icon-custom-github example-flat-button-icon"/>\n' +
      '    <span className="mui-flat-button-label">Github</span>\n' +
      '  </FlatButton>\n' +
      '</div>\n' +
      '<FlatButton label="Disabled" disabled={true} />\n\n' +

      '//Raised Buttons\n' + 
      '<RaisedButton label="Default" />\n' +
      '<RaisedButton label="Primary" primary={true} />\n' +
      '<RaisedButton label="Secondary" secondary={true} />\n' +
      '<RaisedButton secondary={true}>\n' +
      '  <span className="mui-raised-button-label example-image-button">Choose an Image</span>\n' +
      '  <input type="file" id="imageButton" className="example-image-input"></input>\n' +
      '</RaisedButton>\n' +
      '<div className="button-example-container">\n' +
      '  <RaisedButton linkButton={true} href="https://github.com/sarink/material-ui-with-sass" secondary={true}>\n' +
      '    <FontIcon className="muidocs-icon-custom-github example-button-icon"/>\n' +
      '    <span className="mui-raised-button-label example-icon-button-label">Github</span>\n' +
      '  </RaisedButton>\n' +
      '</div>\n' +
      '<RaisedButton label="Disabled" disabled={true} />\n\n' +

      '//Floating Action Buttons\n' +
      '<FloatingActionButton iconClassName="muidocs-icon-action-grade" />\n' +
      '<FloatingActionButton iconClassName="muidocs-icon-action-grade" mini={true} />\n' +
      '<FloatingActionButton iconClassName="muidocs-icon-action-grade" disabled={true} />\n' +
      '<FloatingActionButton iconClassName="muidocs-icon-custom-github" linkButton={true} href="https://github.com/sarink/material-ui-with-sass" mini={true} secondary={true}/>' +
      '<FloatingActionButton iconClassName="muidocs-icon-action-grade" mini={true} disabled={true} />\n' +
      '<FloatingActionButton iconClassName="muidocs-icon-action-grade" secondary={true} />\n' +
      '<FloatingActionButton iconClassName="muidocs-icon-action-grade" mini={true} secondary={true} />\n\n';

    var desc = 'This component generates a button element and all props except for ' +
      'the custom props below will be passed down to the button element. Also, ' +
      'focus styles will happen on tab but not on click.';

    var componentInfo = [
      {
        name: 'Flat Button',
        infoArray: [
          {
            name: 'label or children',
            type: 'string (label) or HTML/React elements (children)',
            header: 'required',
            desc: 'This is what will be displayed inside the button. If a label is specified, the text within the label prop will be displayed.'+
            ' Otherwise, the component will expect children which will then be displayed (in our example, we are nesting an <input type="file" />'+
            'and a span that acts as our label to be displayed.) '+
            'This only applies to flat and raised buttons.'
          },
          {
            name: 'linkButton',
            type: 'bool',
            header: 'default: false',
            desc: 'If true, an anchor element will be generated instead of a button element.'
          },
          {
            name: 'primary',
            type: 'bool',
            header: 'default: false',
            desc: 'If true, the button will use the primary button colors.'
          },
          {
            name: 'secondary',
            type: 'bool',
            header: 'default: false',
            desc: 'If true, the button will use the secondary button colors.'
          }
        ]
      },
      {
        name: 'Raised Button',
        infoArray: [
          {
            name: 'label or children',
            type: 'string (label) or HTML/React elements (children)',
            header: 'required',
            desc: 'This is what will be displayed inside the button. If a label is specified, the text within the label prop will be displayed.'+
            ' Otherwise, the component will expect children which will then be displayed (in our example, we are nesting an <input type="file" />'+
            'and a span that acts as our label to be displayed.) '+
            'This only applies to flat and raised buttons.'
          },
          {
            name: 'linkButton',
            type: 'bool',
            header: 'default: false',
            desc: 'If true, an anchor element will be generated instead of a button element.'
          },
          {
            name: 'primary',
            type: 'bool',
            header: 'default: false',
            desc: 'If true, the button will use the primary button colors.'
          },
          {
            name: 'secondary',
            type: 'bool',
            header: 'default: false',
            desc: 'If true, the button will use the secondary button colors.'
          }
        ]
      },
      {
        name: 'Floating Action Button',
        infoArray: [
          {
            name: 'iconClassName',
            type: 'string',
            header: 'optional',
            desc: 'This is the classname of the icon to display inside the button. This only applies to ' +
              'floating action buttons. An alternative to adding an icon would be to insert a custom svg ' +
              'component or FontIcon as a child.'
          },
          {
            name: 'linkButton',
            type: 'bool',
            header: 'default: false',
            desc: 'If true, an anchor element will be generated instead of a button element.'
          },
          {
            name: 'mini',
            type: 'bool',
            header: 'default: false',
            desc: 'If true, the button will be a small floating action button.'
          },
          {
            name: 'secondary',
            type: 'bool',
            header: 'default: false',
            desc: 'If true, the button will use the secondary button colors.'
          },
          {
            name: 'tooltip',
            type: 'string',
            header: 'optional',
            desc: 'Adds a tooltip to the button'
          },
          {
            name: 'tooltipPosition',
            type: 'string',
            header: 'optional (default: "left")',
            desc: 'Specifies where the tooltip is anchored. Valid values are: top, right, bottom, left'
          },
          {
            name: 'useSpeedDial',
            type: 'bool',
            header: 'default: false',
            desc: 'Enables speed dial functionality'
          },
          {
            name: 'text',
            type: 'string',
            header: 'default: ""',
            desc: 'Adds some text to the button, will be an icon if useIconsForText is set to true'
          },
          {
            name: 'useIconsForText',
            type: 'bool',
            header: 'default: true',
            desc: 'Pass the "text" prop, and use any of the icon names in https://www.google.com/design/icons/'
          },
          {
            name: 'speedDialButtons',
            type: 'array',
            header: 'optional (default: [])',
            desc: 'An array of objects which are just props used to create each speed dial button. A speed dial button is nothing more than another FloatingActionButton with mini=true and useSpeedDial=false'
          },

          {
            name: 'speedDialOpenText',
            type: 'string',
            header: 'optional (default: "keyboard_arrow_left")',
            desc: 'When the speed dial buttons are shown, the main button will display this text (remember, with useIconsForText set to true, this is actually an icon)'
          },
          {
            name: 'speedDialTransitionRotate',
            type: 'number',
            header: 'optional (default: 90)',
            desc: 'Number of degrees the main button will rotate when the speed dial opens up'
          },
          {
            name: 'speedDialTransitionTime',
            type: 'number',
            header: 'optional (default: 50)',
            desc: 'Milliseconds the speed dial will spend rotating'
          },
          {
            name: 'speedDialVisibleTime',
            type: 'number',
            header: 'optional (default: 2000)',
            desc: 'Milliseconds to delay the speed dial after mouseout before closing'
          },
          {
            name: 'speedDialDirection',
            type: 'string',
            header: 'optional (default: "up")',
            desc: 'Specifies which direction the speed dial will open, currently only "up" is supported'
          },
        ]
      }
    ];

    var speedDialButtons = [
      {tooltip: "Previous", text: "skip_previous"},
      {tooltip: "Play",     text: "play_arrow"},
      {tooltip: "Next",     text: "skip_next", onClick: function(e) { console.log(e); }},
      {tooltip: "ABC",      text: "ABC", useIconsForText: false, secondary: true}
    ];

    return (
      <ComponentDoc
        name="Buttons"
        code={code}
        desc={desc}
        componentInfo={componentInfo}>

        <div className="button-examples">

          <div className="button-example-group">
            <div className="button-example-container">
              <FloatingActionButton text="face" useIconsForText={true} tooltip="I'm a face!"/>
            </div>
            <div className="button-example-container">
              <FloatingActionButton text="KS" useIconsForText={false} secondary={true} />
            </div>
            <div className="button-example-container">
              <FloatingActionButton text="music_note" speedDialButtons={speedDialButtons} useSpeedDial={true} />
            </div>
          </div>




          <div className="button-example-group">
            <div className="button-example-container">
              <FlatButton label="Default" tooltip="Default" tooltipPosition="left" />
            </div>
            <div className="button-example-container">
              <FlatButton label="Primary" primary={true} />
            </div>
            <div className="button-example-container">
              <FlatButton label="Secondary" secondary={true} />
            </div>
            <div className="button-example-container">
              <FlatButton secondary={true}>
                <span className="mui-flat-button-label example-image-button">Choose an Image</span>
                <input type="file" id="imageButton" className="example-image-input"></input>
              </FlatButton>
            </div>
            <div className="button-example-container">
              <FlatButton linkButton={true} href="https://github.com/sarink/material-ui-with-sass" secondary={true}>
                <FontIcon className="muidocs-icon-custom-github example-flat-button-icon"/>
                <span className="mui-flat-button-label example-icon-button-label">Github</span>
              </FlatButton>
            </div>
            <div className="button-example-container">
              <FlatButton label="Disabled" disabled={true} />
            </div>
          </div>

          <div className="button-example-group">
            <div className="button-example-container">
              <RaisedButton label="Default" />
            </div>
            <div className="button-example-container">
              <RaisedButton label="Primary" primary={true} />
            </div>
            <div className="button-example-container">
              <RaisedButton label="Secondary" secondary={true} />
            </div>
            <div className="button-example-container">
              <RaisedButton secondary={true}>
                <span className="mui-raised-button-label example-image-button">Choose an Image</span>
                <input type="file" className="example-image-input"></input>
              </RaisedButton>
            </div>
            <div className="button-example-container">
              <RaisedButton linkButton={true} href="https://github.com/sarink/material-ui-with-sass" secondary={true}>
                <FontIcon className="muidocs-icon-custom-github example-button-icon"/>
                <span className="mui-raised-button-label example-icon-button-label">Github</span>
              </RaisedButton>
            </div>
            <div className="button-example-container">
              <RaisedButton label="Disabled" disabled={true} />
            </div>
          </div>

          <div className="button-example-group">
            <div className="button-example-container">
              <FloatingActionButton iconClassName="muidocs-icon-action-grade" />
            </div>
            <div className="button-example-container">
              <FloatingActionButton iconClassName="muidocs-icon-action-grade" mini={true} />
            </div>
            <div className="button-example-container">
              <FloatingActionButton iconClassName="muidocs-icon-action-grade" disabled={true} />
            </div>
            <div className="button-example-container">
              <FloatingActionButton iconClassName="muidocs-icon-custom-github" linkButton={true} href="https://github.com/sarink/material-ui-with-sass" mini={true} secondary={true}/>
            </div>
            <div className="button-example-container">
              <FloatingActionButton iconClassName="muidocs-icon-action-grade" mini={true} disabled={true} />
            </div>
          </div>
        </div>

      </ComponentDoc>
    );
  }

});

module.exports = ButtonPage;
