import { Animated, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler';

import image from '../assets/favicon.png';

const { width, height } = Dimensions.get('screen');


const ActionSheet = ({ hideTheActionSheet, alignment, setAlignment }) => {
  // const [alignment, setAlignment] = useState(new Animated.Value(0));

  const bringUpActionSheet = () => {
    Animated.timing(alignment, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false
    }).start();
  }

  // const hideTheActionSheet = () => {
  //   Animated.timing(alignment, {
  //     toValue: 1,
  //     duration: 500,
  //     useNativeDriver: false
  //   }).start();
  // }

  const actionSheetInterpolate = alignment.interpolate({
    inputRange: [0, 1],
    outputRange: [-(height / 2.4) + 50, 0]
  })

  const actionSheetStyle = {
    bottom: actionSheetInterpolate
  };

  const gestureHandler = (e) => {
    if (e.nativeEvent.contentOffset.y < 0) bringUpActionSheet();
    else
      if (e.nativeEvent.contentOffset.y > 0) hideTheActionSheet();
  }

  return (
    <Animated.View style={[styles.bottomSheetContainer, actionSheetStyle]}>
      <View style={{ height: 8 }}>
        <ScrollView onScroll={(e) => gestureHandler(e)} style={[styles.grabber]}></ScrollView>
      </View>
      <View style={{ width: '100%', }}>
        <View style={{
          flexDirection: 'row', justifyContent: 'space-between',
          width: '100%', marginTop: 20, marginBottom: 20
        }}>
          <Text style={{ fontSize: 12 }}>Full Match Details</Text>
          <Text style={{ fontSize: 12 }}>BGMI Match #7768</Text>
        </View>
        <View>
          {
            <View style={{ flexDirection: 'row', backgroundColor: 'white', padding: 10, borderRadius: 10 }}>
              <View style={{ flex: 1 }}>
                <Image source={image} />
              </View>
              <View style={{ flex: 5, flexDirection: 'column', paddingLeft: 20 }}>
                <Text style={{ fontSize: 12, color: 'black' }}>Round 2</Text>
                <Text style={{ fontSize: 12, color: 'gray' }}>26/06/2020</Text>
                <Text style={{ fontSize: 12, color: 'gray' }}>Errangle TPP</Text>
              </View>
              <View style={{ justifyContent: 'flex-end' }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#2B3963', color: 'white', paddingTop: 5,
                    paddingBottom: 5, textAlign: 'center', paddingLeft: 20, paddingRight: 20,
                    borderRadius: 5
                  }}>
                  <Text style={{
                    color: 'white'
                  }}>View</Text>
                </TouchableOpacity>
              </View>
            </View>
          }
        </View>
      </View>
    </Animated.View>
  )
}

export default ActionSheet

const styles = StyleSheet.create({
  bottomSheetContainer: {
    padding: 15,
    position: 'absolute',
    backgroundColor: '#F4F5F8',
    width: width,
    height: height / 2.4,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    shadowOffset: {
      height: 1,
      width: 0,
    },
    elevation: 10,
    shadowColor: 'rgb(140,140,140)',
    shadowRadius: 3,
    shadowOpacity: 0.8,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25
  },
  grabber: {
    height: '100%',
    width: 80,
    backgroundColor: 'rgb(150,150,150)',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'rgb(150,150,150)'

    // width: 55,
    // borderRadius: 4,
    // borderTopWidth: 5,
    // borderTopColor: 'rgb(150,150,150)'
  },
})
