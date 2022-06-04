import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
  Pressable,
  Image,
} from 'react-native'
import Header from '../components/Header'
import { colors, parameters } from '../global/style'
import { Icon } from '@rneui/themed'
import { filterData } from '../global/filterData'
export default function HomeScreen() {
  const [delivery, setDelivery] = useState(true)
  const [indexCheck, setIndexCheck] = useState('0')
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView stickyHeaderIndices={[2]} showsVerticalScrollIndicator={true}>
        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setDelivery(true)
            }}
          >
            <View
              style={{
                ...styles.deliveryButton,
                backgroundColor: delivery ? colors.buttons : colors.grey5,
              }}
            >
              <Text style={styles.deliveryText}>Delivery</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setDelivery(false)
            }}
          >
            <View
              style={{
                ...styles.deliveryButton,
                backgroundColor: delivery ? colors.grey5 : colors.buttons,
              }}
            >
              <Text style={styles.deliveryText}>PickUp</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
            paddingTop: 10,
          }}
        >
          <View
            style={{
              paddingVertical: 5,
              borderRadius: 19,
              flexDirection: 'row',
              backgroundColor: colors.grey4,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 10,
              }}
            >
              <Icon
                type="material-community"
                name="map-marker"
                color={colors.grey1}
                size={26}
              />
              <Text style={{ marginLeft: 5 }}>22 Business Street</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 20,
                backgroundColor: colors.Cardbackground,
                borderRadius: 18,
                width: 80,
                marginRight: 2,
              }}
            >
              <Icon
                type="material-community"
                name="clock-time-four"
                color={colors.grey1}
                size={26}
              />
              <Text style={{ marginLeft: 5 }}>New</Text>
            </View>
          </View>
          <View>
            <Icon
              type="material-community"
              name="tune"
              color={colors.grey1}
              size={26}
            />
          </View>
        </View>
        <View
          style={{
            backgroundColor: colors.grey5,
            marginTop: 10,
            height: 40,
          }}
        >
          <Text style={{ fontSize: 25, color: 'white', paddingLeft: 15 }}>
            Categories
          </Text>
        </View>
        <View>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={filterData}
            keyExtractor={(item) => item.id}
            extraData={indexCheck}
            renderItem={({ item, index }) => (
              <Pressable
                onPress={() => {
                  setIndexCheck(item.id)
                }}
              >
                <View
                  style={
                    indexCheck === item.id
                      ? { ...styles.smallCardSelected }
                      : { ...styles.smallCard }
                  }
                >
                  <Image
                    style={{ height: 60, width: 60, borderRadius: 30 }}
                    source={item.image}
                  />
                  <View>
                    <Text>{item.name}</Text>
                  </View>
                </View>
              </Pressable>
            )}
          />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  deliveryButton: {
    paddingHorizontal: 20,
    borderRadius: 15,
    paddingVertical: 5,
  },
  deliveryText: {
    fontSize: 15,
    height: 25,
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallCard: {
    borderRadius: 30,
    backgroundColor: colors.Cardbackground,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 80,
    margin: 10,
    height: 100,
  },
  smallCardSelected: {
    borderRadius: 30,
    backgroundColor: colors.buttons,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 80,
    margin: 10,
    height: 100,
  },
})
