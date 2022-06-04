import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useRef, useState } from 'react'
import Header from '../components/Header'
import { colors, parameters, title } from '../global/style'
import * as Animatable from 'react-native-animatable'
import { Icon, Button} from '@rneui/base'
import { SocialIcon } from "@rneui/themed";

export default function SignInScreen() {
  const [textInput2Focused, setTextInput2Focused] = useState(false)
  const emailInputText = useRef('')
  const passwordInputText = useRef('')
  return (
    <View>
      <Header title="My Account" />
      <View style={{ marginLeft: 20, marginTop: 10 }}>
        <Text style={styles.title}>Sign In</Text>
      </View>
      <View style={{ alignItems: 'center', marginTop: 10 }}>
        <Text style={styles.text1}>Please enter your email and password</Text>
        <Text style={styles.text1}>Register with your account</Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <View>
          <TextInput
            ref={emailInputText}
            style={styles.TextInput1}
            placeholder="Email"
          ></TextInput>
        </View>
      </View>
      <View style={styles.TextInput2}>
        <Animatable.View
          animation={textInput2Focused ? '' : 'fadeInLeft'}
          duration={400}
        >
          <Icon
            name="lock"
            type="material"
            iconStyle={{ color: colors.grey3 }}
          />
        </Animatable.View>
        <TextInput
          ref={passwordInputText}
          style={styles.InputText}
          placeholder="Password"
          onFocus={() => {
            setTextInput2Focused(false)
          }}
          onBlur={() => {
            setTextInput2Focused(true)
          }}
        />
        <Animatable.View
          animation={textInput2Focused ? '' : 'fadeInLeft'}
          duration={400}
        >
          <Icon
            name="visibility-off"
            iconStyle={{ color: colors.grey3 }}
            type="material"
          />
        </Animatable.View>
      </View>
      <View
        style={{
          marginTop: 20,
          marginHorizontal: 20,
        }}
      >
        <Button
          title="Sign In"
          buttonStyle={parameters.styledButton}
          titleStyle={parameters.buttonTitle}
        />
      </View>
      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <Text style={{ ...styles.text1, textDecorationLine: 'underline' }}>
          Forgot Password
        </Text>
      </View>
      <View style={{ alignItems: 'center', marginTop: 10, marginBottom: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Or</Text>
      </View>

      <View style={{ marginHorizontal: 10, marginTop: 10 }}>
        <SocialIcon
          title="Sign In with Facebook"
          button
          type="facebook"
          style={styles.SocialIcon}
          onPress={() => {}}
        />
      </View>
      <View style={{ marginHorizontal: 10, marginTop: 10 }}>
        <SocialIcon
          title="Sign In with Google"
          button
          type="google"
          style={styles.SocialIcon}
          onPress={() => {}}
        />
      </View>
      <View style={{ marginTop: 25, marginLeft: 21 }}>
        <Text style={{ ...styles.text1 }}>New On XpresFood?</Text>
      </View>
      <View
        style={{ alignItems: 'flex-end', marginHorizontal: 30, marginTop: -30 }}
      >
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
  container: {
    flex: 1,
  },
  text1: {
    color: colors.grey1,
    fontSize: 16,
  },
  title: {
    color: title.color,
    fontWeight: '900',
    fontSize: 20,
  },
  TextInput1: {
    borderWidth: 1,
    borderColor: '#86939e',
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    paddingLeft: 15,
    height: 45,
  },
  TextInput2: {
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 20,
    borderColor: '#86939e',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
  },
  InputText: {
    height: 45,
    paddingLeft: 2,
  },
  buttonStyle: {
    backgroundColor: '#ff8c52',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ff8c52',
    height: 50,
    paddingHorizontal: 20,
    width: '100%',

    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 3,
  },
  SocialIcon: {
    borderRadius: 12,
    height: 50,
    width: 350,
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
  },
  createStyle: {
    color: '#ff8c52',
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },
})
