import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import {colourNameToHex} from './Themed';

export function MeButton(props:any) {
  const { 
    onPress, 
    title = 'Save',
    style = {},
    textStyle = {}
  } = props;

  (()=>{
    if(style.backgroundColor && !style.color)
      textStyle.color = setContrast(style.backgroundColor);
    if(['rgb(255,255.255)','white','#ffffff'].indexOf(style.backgroundColor) > -1 )
      style.borderWidth = 1
  })();

  function setContrast(color:string) {
    var rgb = [255, 0, 0];
    if(color.indexOf('#') > -1){
      rgb = hexToRgb(color);
    }else if(color.indexOf('rgb(') > -1){
      rgb = color.replace(/(rgb\()|(rgba\()|\)/g,'')
        .split(',')
        .map(e=>parseInt(e));
    }else{
      let _color = colourNameToHex(color);
    rgb = hexToRgb(_color);
  }


  // http://www.w3.org/TR/AERT#color-contrast
  const brightness = Math.round(((rgb[0] * 299) + (rgb[1] * 587) + (rgb[2] * 114)) / 1000);


  const textColor = (brightness > 125) ? 'black' : 'white';
    return textColor;
  }
  function hexToRgb(hex:string):Array<number> {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [
      parseInt(result[1], 16),
      parseInt(result[2], 16),
      parseInt(result[3], 16)
    ] : [0,0,0];
  }

  return (
    <Pressable style={[styles.button,style]} onPress={onPress}>
      <Text style={[styles.text,textStyle]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 32,
    elevation: 3,
    backgroundColor: 'black',
    borderWidth:0,
    borderColor:'#999',
  },
    text: {
    fontSize: 12,
    lineHeight: 21,
    fontWeight: '600',
    letterSpacing: 0.25,
    color: 'white',
    textTransform:'uppercase',
  },
});
