var React = require('react');
var mui = require('mui');
var AccordionContainer = mui.AccordionContainer;
var AccordionItem = mui.AccordionItem;
var AccordionHeader = mui.AccordionHeader;
var AccordionContent = mui.AccordionContent;
var Icon = mui.Icon;
var ComponentDoc = require('../../component-doc.jsx');

var AvatarPage = React.createClass({
  render: function() {
    var accordionCode =
      'var mui = require("material-ui-with-sass");\n' +
      'var AccordionContainer = mui.AccordionContainer;\n' +
      'var AccordionItem = mui.AccordionItem;\n' +
      'var AccordionHeader = mui.AccordionHeader;\n' +
      'var AccordionContent = mui.AccordionContent;\n\n' +

      '<AccordionContainer singleOpenItem={false} jumpToOpenItem={false}>\n' +
      '  <AccordionItem initiallyOpen={false} onOpen={function() { console.log("opened"); }} onClose={function() { console.log("closed"); }}>\n' +
      '    <AccordionHeader>header 1</AccordionHeader>\n' +
      '    <AccordionContent>\n' +
      '      <p>You can style the content however you like also</p>\n' +
      '    </AccordionContent>\n' +
      '  </AccordionItem>\n\n' +

      '  <AccordionItem>\n' +
      '    <AccordionHeader>\n' +
      '      <div style={{fontSize: 15, color: red}}>You can style the header however you want, and render your own html</div>\n' +
      '    </AccordionHeader>\n' +
      '    <AccordionContent>\n' +
      '      <p>You can style the content however you like also</p>\n' +
      '    </AccordionContent>\n' +
      '  </AccordionItem>\n\n' +

      '  <AccordionItem>\n' +
      '    <AccordionHeader>lipsum</AccordionHeader>\n' +
      '    <AccordionContent>\n' +
      '      Lorem ipsum dolor sit amet...\n' +
      '    </AccordionContent>\n' +
      '  </AccordionItem>\n' +
      '</AccordionContainer>';

    var accordionDesc = (
      <div>
        <p className="mui-font-style-subhead-1">
          <b>NOTE:</b> Because of the way context currently works (unless you are using React 0.14), if you set a 'ref' on an AccordionItem, AccordionHeader, or AccordionContent,
          your accordion will not function correctly.
        </p>
        <p className="mui-font-style-subhead-1">
          The Accordion currently doesn't have many options. You create an AccordionContainer, put some AccordionItems in it.
          In each AccordionItem you put an AccordionHeader and an AccordionContent. When the AccordionHeader is clicked, it will expand
          that AccordionItem, and the AccordionContent will be shown. The rest of the styling and markup is left up to you.
        </p>
      </div>
    );

    var componentInfo = [
      {
        name: 'AccordionContainer props',
        infoArray: [
          {
            name: 'singleOpenItem',
            type: 'bool',
            header: 'default: false',
            desc: 'Only allow one AccordionItem to be open at a time'
          },
          {
            name: 'jumpToOpenItem',
            type: 'bool',
            header: 'default: false',
            desc: 'When an AccordionItem is opened, the page will "jump" there by using window.scrollIntoView()'
          }
        ]
      },
      {
        name: 'AccordionItem props',
        infoArray: [
          {
            name: 'initiallyOpen',
            type: 'bool',
            header: 'default: false',
            desc: 'This item will be open initially'
          },
          {
            name: 'onOpen',
            type: 'func',
            header: 'optional',
            desc: 'Callback when this item is opened'
          },
          {
            name: 'onClose',
            type: 'func',
            header: 'optional',
            desc: 'Callback when this item is closed'
          }
        ]
      }
    ];

    return (
      <div>
        <ComponentDoc
          name="Accordion"
          code={accordionCode}
          desc={accordionDesc}
          componentInfo={componentInfo}>
          <AccordionContainer>
            <AccordionItem initiallyOpen={false} onOpen={function() { console.log("opened"); }} onClose={function() { console.log("closed"); }}>
              <AccordionHeader>header 2</AccordionHeader>
              <AccordionContent>
                <br/>
                <b>Some AccordionContent</b> <br/><br/>
                You can put anything you like in here <br/><br/>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader><div style={{color:"red", fontSize: 15}}>You can style the header however you want, and render your own html</div></AccordionHeader>
              <AccordionContent>
                <br/>
                <b>Some AccordionContent</b> <br/><br/>
                You can put anything you like in here <br/><br/>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader>lipsum</AccordionHeader>
              <AccordionContent>
                <br/>
                <b>Some AccordionContent</b> <br/><br/>
                You can put anything you like in here <br/><br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et lectus mattis, tristique lectus vel,
                efficitur est. Etiam et dui semper, porttitor eros non, consequat justo. Praesent consequat, lacus
                pharetra rutrum varius, massa ex porta odio, vitae pellentesque nisl mauris sed orci. In hac habitasse
                platea dictumst. Donec feugiat bibendum eros, non mollis mi pulvinar nec. Praesent ac finibus elit.
                Cras id justo ultricies, bibendum ex in, bibendum orci. Maecenas venenatis tincidunt nisl vitae varius.
                Aliquam interdum felis nibh, at venenatis ligula luctus ac. Aenean finibus malesuada ex, et euismod
                magna varius a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis, ante posuere
                egestas euismod, odio massa ultrices arcu, sit amet volutpat tellus ligula eget dui. Vivamus tincidunt
                eros a felis interdum sollicitudin.<br/><br/>
              </AccordionContent>
            </AccordionItem>
          </AccordionContainer>
        </ComponentDoc>
      </div>
    );
  }
});

module.exports = AvatarPage;
