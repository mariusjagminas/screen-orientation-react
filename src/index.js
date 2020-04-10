import React from 'react'
import PropTypes from 'prop-types'

class ScreenOrientation extends React.Component {

  componentDidMount() {
    import(/* webpackChunkName: "screen-orientation-js" */'screen-orientation-js')
      .then(app => {
        app.init(this.props.options);
      });
  }
  render() {
    return null
  }
}

export default ScreenOrientation

ScreenOrientation.propTypes = {
  options: PropTypes.shape({
    message: PropTypes.string,
    color: PropTypes.string,
    fontSize: PropTypes.number,
    animation: PropTypes.bool,
    bgColor: PropTypes.string,
    iconColor: PropTypes.string,
    iconColor: PropTypes.string,
    iconSize: PropTypes.number,
    minHeight: PropTypes.number,
  })
}


