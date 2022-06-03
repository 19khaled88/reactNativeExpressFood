import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { colors } from './src/global/style'
import SignInScreen from './src/screens/SignInScreen'
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.statusbar}
      ></StatusBar>
      <SignInScreen title="title" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
