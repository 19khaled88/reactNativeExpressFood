import { StyleSheet, Text, View, StatusBar } from 'react-native'
import Header from './src/components/Header'
import { colors } from './src/global/style'
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.statusbar}
      ></StatusBar>
      <Header title="My Account" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
