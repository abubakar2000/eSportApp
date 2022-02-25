import { Animated, Dimensions, StyleSheet, Text, View } from 'react-native'

import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler';
const { width, height } = Dimensions.get('screen');


const ActionSheet = () => {
  const [alignment, setAlignment] = useState(new Animated.Value(0));

  const bringUpActionSheet = () => {
    Animated.timing(alignment, {
      toValue: 0,
      duration: 500,
      useNativeDriver:false
    }).start();
  }
  
  const hideTheActionSheet = () => {
    Animated.timing(alignment, {
      toValue: 1,
      duration: 500,
      useNativeDriver:false
    }).start();
  }

  const actionSheetInterpolate = alignment.interpolate({
    inputRange: [0, 1],
    outputRange: [-(height / 2.4)+50, 0]
  })

  const actionSheetStyle = {
    bottom: actionSheetInterpolate
  };

  const gestureHandler = (e) => {
    if(e.nativeEvent.contentOffset.y < 0) bringUpActionSheet();
    else if (e.nativeEvent.contentOffset.y > 0) hideTheActionSheet();
  }

  return (
    <Animated.View style={[styles.bottomSheetContainer, actionSheetStyle]}>
      <ScrollView onScroll={(e) => gestureHandler(e)} style={[styles.grabber]}></ScrollView>
      <Text>ActionSheet</Text>
    </Animated.View>
  )
}

export default ActionSheet

const styles = StyleSheet.create({
  bottomSheetContainer: {
    padding:15,
    position: 'absolute',
    backgroundColor: 'rgb(255,255,255)',
    width: width,
    height: height / 2.4,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    shadowOffset: {
      height: height / 2.4,
      width: 10,

    },
    elevation: 10,
    shadowColor: 'rgb(140,140,140)',
    shadowRadius: 3,
    shadowOpacity: 0.8,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25
  },
  grabber: {
    width:55,
    borderRadius:4,
    borderTopWidth:5,
    borderTopColor:'rgb(150,150,150)'
  },
})
