var React = require('react');
var mui = require('mui');
var ComponentDoc = require('../../component-doc.jsx');

var {AppBar, DropDownMenu, Icon} = mui;

class AppBarPage extends React.Component {

  constructor(props) {
    super(props);

    this.code = 
          '<AppBar title=\'Title\' showMenuIconButton={true} />';

    this.desc = 'App bars are a collection of components placed as a static ' +
                'header for an application. It is used for navigation, search ' +
                'branding, and actions. An app bar is also referred to as the ' +
                'primary toolbar or action bar for Android.';

    this.componentInfo = [
      {
        name: 'Props',
        infoArray: [
          {
            name: 'iconClassNameLeft',
            type: 'string',
            header: 'optional',
            desc: 'The classname of the icon on the left of the app bar. If you ' +
                  'are using a stylesheet for your icons, enter the class name ' +
                  'for the icon to be used here.'
          },
          {
            name: 'iconElementLeft',
            type: 'element',
            header: 'optional',
            desc: 'The custom element to be displayed on the left side of the ' +
                  'app bar such as an SvgIcon.'
          },
          //{
          //  name: 'iconElementRight',
          //  type: 'element',
          //  header: 'optional',
          //  desc: 'Similiar to the iconElementLeft prop except that this element ' +
          //        'is displayed on the right of the app bar.'
          //},
          {
            name: 'showMenuIconButton',
            type: 'boolean',
            header: 'default: true',
            desc: 'Determines whether or not to display the Menu icon next to ' +
                  'the title. Setting this prop to false will hide the icon.'
          },
          {
            name: 'title',
            type: 'string',
            header: 'optional',
            desc: 'A string of text that is displayed on the app bar.'
          },
          {
            name: 'zDepth',
            type: 'number',
            header: 'default: 1',
            desc: 'The zDepth of the app bar. The shadow of the app bar is also ' +
                  'dependent on this property.'
          }
        ] 
      },
      {
        name: 'Events',
        infoArray: [
          {
            name: 'onLeftIconButtonClick',
            header: 'AppBar.onLeftIconButtonClick(e)',
            desc: 'Callback function for when the left icon is selected via ' +
                  'a click.'
          }, 
          //{
          //  name: 'onRightIconButtonClick',
          //  header: 'AppBar.onRightIconButtonClick(e)',
          //  desc: 'Callback function for when the right icon is selected via ' +
          //        'a click.'
          //}
        ]
      }
    ];
  }

  render() {
    return (
      <ComponentDoc
        name="AppBar"
        code={this.code}
        desc={this.desc}
        componentInfo={this.componentInfo}>
          <AppBar title='Title' style={{position:"inherit"}} showMenuIconButton={true} />
      </ComponentDoc>
    );
  }

}

module.exports = AppBarPage;
