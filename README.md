# screen-orientation-react

[![npm package][npm-badge]][npm]

[npm]: https://www.npmjs.org/package/screen-orientation-react
[npm-badge]: https://img.shields.io/npm/v/screen-orientation-react

React component which displays an animated full-screen message when the mobile device's screen is rotated horizontally.

Some applications or websites may display content properly only in portrait orientation on the mobile devices. To prevent the website's layout from breaking , ```screenOrientationReact```  informs the user that the app can't be viewed in landscape orientation.

## Installation

Install component with npm

```
$ npm install screen-orientation-react
```

## Usage

You can place  `<screenOrientationReact/>`  anywhere in your application. Under the hood the component uses    
 [screen-orientation-js](https://www.npmjs.com/package/screen-orientation-js) which renders `<div>` element containing a message, and appends it to `<body>`. When the component is active, `<div>`  element's styles will be set to `position: fixed; z-index: 9999` , so the message will always remains on the top.

## Example 

```jsx
import React from 'react'
import screenOrientationReact from 'screen-orientation-react'

const options = { 
  color:  "#7c692d",
  bgColor: "#2d7c72",
  animation: false,
  fontSize: 3
}

class App extends React.Component {
  
  render() {

    return(
      <>
       <screenOrientationReact options={options}/>
      </>
    )
  }"Landscape orientation is not supported. 
}
```

## Props

### `options` [object]


| Key          | Value type| Description                                       | Default value                              |
|:-------------|:----------|:--------------------------------------------------|:------------------------------------------ |
| `message:`   | string    | The custom message to display.                    | ""Landscape orientation is not support..." |        
| `color:`     | string    | Text color.                                       |  #0000                                     |
| `fontSize:`  | number    | Font size. Recommended values 1-6.                |  5                                         |
| `bgColor:`   | string    | Background color.                                 |  #ffff                                     | 
| `animation:` | boolean   | The rotating phone animation.                     |  true                                      |
| `iconColor:` | string    | Icon color.                                       |  #1D1D1D                                   |
| `iconSize:`  | number    | Icon size.                                        |  10                                        |
| `minHeight:` | number    | The viewport height in `.px` to display a message.|  500                                       |