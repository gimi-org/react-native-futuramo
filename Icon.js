import React, {Component} from 'react'
import {Text, StyleSheet} from 'react-native'

import Icons from './Futuramo'

class Icon extends Component {
  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps)
  }
  render() {
    const {style, color, name, ...props} = this.props;
    return (
      <Text {...props} style={[styles.icon, {color}, style]} ref={component => this._root = component}>
        {name}
      </Text>
    )
  }
}

const styles = StyleSheet.create({
  icon: {
    fontFamily: 'FontAwesome',
    backgroundColor: 'transparent'
  }
})

export {Icons}
export default Icon
