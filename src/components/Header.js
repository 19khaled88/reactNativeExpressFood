import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { parameters, colors } from '../global/style'
import { Icon } from '@rneui/base'
export default function Header({ title }) {
  return (
    <View style={styles.header}>
      <View style={{ marginLeft: 20 }}>
        <Icon
          type="material-community"
          name="arrow-left"
          color={colors.headerText}
          size={28}
          onPress={() => {}}
        />
      </View>
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: colors.buttons,
    height: parameters.headerHeight,
  },
  headerText: {
    color: colors.headerText,
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 10,
  },
})
