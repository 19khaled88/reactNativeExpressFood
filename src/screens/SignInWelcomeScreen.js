import React, { useRef, useState } from 'react'
import { View, Text, StyleSheet, TextInput, Image } from 'react-native'
import { colors, parameters, title } from '../global/style'
import * as Animatable from 'react-native-animatable'
import { Icon, Button } from '@rneui/base'
import { SocialIcon } from '@rneui/themed'
import Swiper from 'react-native-swiper'
export default function SignInWelcomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 3,
          justifyContent: 'flex-start',
          alignItems: 'center',
          paddingTop: 20,
        }}
      >
        <Text
          style={{
            fontSize: 26,
            color: colors.background2,
            fontWeight: 'bold',
          }}
        >
          DISCOVER RESTAURANT
        </Text>
        <Text
          style={{
            fontSize: 26,
            color: colors.background2,
            fontWeight: 'bold',
          }}
        >
          IN YOUR AREA
        </Text>
      </View>
      <View style={{ flex: 4, justifyContent: 'center' }}>
        <Swiper autoplay={true}>
          <View style={styles.slide1}>
            <Image
              source={{
                uri:
                  'https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              }}
              style={{ height: '100%', width: '100%' }}
            />
          </View>
          <View style={styles.slide2}>
            <Image
              source={{
                uri:
                  'https://media.istockphoto.com/photos/mouthwatering-delicious-homemade-burger-used-to-chop-beef-on-the-picture-id907077304?k=20&m=907077304&s=612x612&w=0&h=8-B5NbweXox599VNncLVDqZ_atCCJlhpCU3Y7f0kW9o=',
              }}
              style={{ height: '100%', width: '100%' }}
            />
          </View>
          <View style={styles.slide3}>
            <Image
              source={{
                uri:
                  'https://media.istockphoto.com/photos/delicious-hamburger-on-wood-picture-id495520234?k=20&m=495520234&s=612x612&w=0&h=Xb5ro4-LSkqox6rcllGA5MBo4Rp3fVdF_n6va6duGmU=',
              }}
              style={{ height: '100%', width: '100%' }}
            />
          </View>
          <View style={styles.slide4}>
            <Image
              source={{
                uri:
                  'https://thumbs.dreamstime.com/b/tasty-burger-french-fries-fire-close-up-home-made-flames-130127368.jpg',
              }}
              style={{ height: '100%', width: '100%' }}
            />
          </View>
        </Swiper>
      </View>

      <View style={{ flex: 4, justifyContent: 'flex-end', marginBottom: 20 }}>
        <View style={{ marginHorizontal: 20, marginTop: 30 }}>
          <Button
            title="SIGN IN"
            buttonStyle={parameters.styledButton}
            titleStyle={parameters.buttonTitle}
          />
        </View>
      </View>

      <View style={{ marginHorizontal: 20, marginBottom: 50 }}>
        <Button
          title="Create an account"
          buttonStyle={styles.createButton}
          titleStyle={styles.createStyle}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BB09',
  },
  slide4: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92CC09',
  },
  createButton: {
    backgroundColor: 'white',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ff8c52',
    height: 40,
    paddingHorizontal: 20,
    borderColor: colors.buttons,
    height: 45,
  },
  createStyle: {
    color: colors.grey1,
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },
})
