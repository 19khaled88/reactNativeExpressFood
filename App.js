import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { colors } from './src/global/style'
import HomeScreen from './src/screens/HomeScreen'
import SignInScreen from './src/screens/SignInScreen'
import SignInWelcomeScreen from './src/screens/SignInWelcomeScreen'
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.statusbar}
      ></StatusBar>
      <HomeScreen />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
