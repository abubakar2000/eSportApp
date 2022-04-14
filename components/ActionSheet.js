import { Animated, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'

import React, { useState } from 'react'

import RoundsList from './RoundsList';
import Rewards from './Rewards';
import UploadScreenShots from './UploadScreenShots';
import ViewResults from './ViewResults';

const { width, height } = Dimensions.get('screen');


const ActionSheet = ({ showActionSheetMethod, alignment, setAlignment, content }) => {
  // const [alignment, setAlignment] = useState(new Animated.Value(0));

  const hideActionSheet = () => {
    Animated.timing(alignment, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false
    }).start();
  }

  const showActionSheet = () => {
    Animated.timing(alignment, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false
    }).start();
  }

  const actionSheetInterpolate = alignment.interpolate({
    inputRange: [0, 1],
    outputRange: [-(height+100), -Dimensions.get('screen').height/4]
  })

  const actionSheetStyle = {
    bottom: actionSheetInterpolate
  };

  const gestureHandler = (e) => {
    if (e.nativeEvent.contentOffset.y < 0) hideActionSheet();
    else
      if (e.nativeEvent.contentOffset.y > 0) showActionSheetMethod();
  }

  return (
    <Animated.View style={[styles.bottomSheetContainer, actionSheetStyle]}>
      <View style={{ height: 8 }}>
        <ScrollView
          onTouchStart={hideActionSheet}
          onScroll={(e) => gestureHandler(e)} style={[styles.grabber]}></ScrollView>
      </View>
      <View style={{ width: '100%', paddingBottom: 30, marginTop: 20 }}>
        {content === "Rounds" &&
          <RoundsList/>
        }
        {content === "Rewards" &&
          <Rewards />
        }
        {content === "ViewResults" &&
          <View style={{ height: 200 }}>
            <ViewResults />
          </View>
        }
        {content === "UploadScreenshots" &&
          <UploadScreenShots />
        }
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
    // height: height,
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
  },
})
