"use strict";

import React, {Component} from 'react/addons';
import {Card, Input} from 'belle';
import Code from './Code';

export default React.createClass({

  mixins: [React.addons.LinkedStateMixin],

  getInitialState() {
    return {
      customInputValue: 'What is going on? Ohh, we provided minHeight and custom styles. Please be so kind and add a little bit more text here.'
    };
  },

  render() {
    return <Card>

      <h2 id="input" style={ {marginTop: 0, marginBottom: 40} }>Input</h2>

      <Input defaultValue="Jane Doe" placeholder="Name" />

      <Code value={ exampleCode } style={ {marginTop: 40} } />

      <h3>Properties</h3>

      <table>
        <tr>
          <td style={ propertyNameStyle }>
            valueLink
          </td>
          <td style={ propertyDescriptionStyle }>
            <p style={ {marginTop: 0} }>
              <i>Value Reference</i>
              <br />
              optional</p>
            <p>
              Behaves like the valueLink poperty of any React rendered input of type="text" or textarea.
              ValueLink allows to enable two-way data binding between a state property and the value in
              the user interface.
            </p>
          </td>
        </tr>

        <tr>
          <td style={ propertyNameStyle }>
            defaultValue
          </td>
          <td style={ propertyDescriptionStyle }>
            <p style={ {marginTop: 0} }>
              <i>String</i>
              <br />
              optional</p>
            <p>
              Behaves like the defaultValue property of any React rendered input of type="text" or textarea.
              The Input's field value is set and can be manipulated through the user interface.
            </p>
          </td>
        </tr>

        <tr>
          <td style={ propertyNameStyle }>
            value
          </td>
          <td style={ propertyDescriptionStyle }>
            <p style={ {marginTop: 0} }>
              <i>String</i>
              <br />
              optional</p>
            <p>
              Behaves like the value property of any React rendered input of type="text" or textarea.
              The Input's field value is set and can <b>not</b> be manipulated through the user interface.
            </p>
          </td>
        </tr>

        <tr>
          <td style={ propertyNameStyle }>
            minHeight
          </td>
          <td style={ propertyDescriptionStyle }>
            <p style={ {marginTop: 0} }>
              <i>Integer</i>
              <br />
              optional</p>
            <p>
              Once set the Input will always keep a minimum height. This can be useful to indicate
              to users that it is expected from them to provide a certain amount of text input.
            </p>
          </td>
        </tr>

        <tr>
          <td style={ propertyNameStyle }>
            hoverStyle
          </td>
          <td style={ propertyDescriptionStyle }>
            <p style={ {marginTop: 0} }>
              <i>Object</i>
              <br />
              optional
            </p>
            <p>
              Works like React's built-in style property.
              Becomes active once the user hovers over the input with the cursor.
            </p>
          </td>
        </tr>

        <tr>
          <td style={ propertyNameStyle }>
            focusStyle
          </td>
          <td style={ propertyDescriptionStyle }>
            <p style={ {marginTop: 0} }>
              <i>Object</i>
              <br />
              optional
            </p>
            <p>
              Works like React's built-in style property.
              Becomes active once the input is the element focused in the DOM.
            </p>
          </td>
        </tr>
      </table>

      <p>
        Any other property valid for a HTML textarea like
        <span style={ {color: 'grey'} }> style, placeholder, onClick, …</span>
      </p>

      <h3>More Examples</h3>

      <Input minHeight={ 120 }
             valueLink={ this.linkState('customInputValue') }
             placeholder="Just fill in whatever you like :)"
             style={{
               border: '1px solid #C8C8C8',
               padding: 10,
               width: 280,
               borderRadius: 3,
               boxShadow: 'inset 0 1px 2px #CCC'
             }}
             hoverStyle={{
               border: '1px solid #6C6C6C'
             }}
             focusStyle={{
               borderColor: '#53C7F2',
               boxShadow: 'inset 0 1px 2px #CCC, 0 0 8px #53C7F2'
             }}/>

      <p>Two-way data binding: { this.state.customInputValue }</p>

      <Code value={ advancedExampleCode } style={ {marginTop: 40} } />

    </Card>;
  }
});

const exampleCode = `<!-- default input with a defaultValue -->
<Input defaultValue="Jane Doe" />`;

const advancedExampleCode = `<Input minHeight={ 120 }
       valueLink={ this.linkState('customInputValue') }
       placeholder="Just fill in whatever you like :)"
       style={{
         border: '1px solid #C8C8C8',
         padding: 10,
         width: 280,
         borderRadius: 3,
         boxShadow: 'inset 0 1px 2px #CCC'
       }}
       hoverStyle={{
         border: '1px solid #6C6C6C'
       }}
       focusStyle={{
         borderColor: '#53C7F2',
         boxShadow: 'inset 0 1px 2px #CCC, 0 0 8px #53C7F2'
       }}/>

<p>Two-way data binding: { this.state.customInputValue }</p>`;

const propertyNameStyle = {
  padding: '0 20px 0 0',
  textAlign: 'left',
  verticalAlign: 'top',
  color: 'grey'
};

const propertyDescriptionStyle = {
  padding: 0,
  textAlign: 'left',
  verticalAlign: 'top'
};
