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
  Dimensions,
} from 'react-native'
import Header from '../components/Header'
import { colors, parameters } from '../global/style'
import { Icon } from '@rneui/themed'
import { filterData, restaurantData } from '../global/filterData'
import FoodCard from './FoodCard'

const SCREEN_WIDTH = Dimensions.get('window').width
export default function HomeScreen() {
  const [delivery, setDelivery] = useState(true)
  const [indexCheck, setIndexCheck] = useState('0')
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView
        stickyHeaderIndices={[0]}
        style={{ flex: 1 }}
        // stickyHeaderIndices={[0]}
        // showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            flex: 0.1,
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            backgroundColor: colors.Cardbackground,
            height: 50,
          }}
        >
          <View
            style={{
              flex: 1,
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
                  width: '100%',
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
                  width: '100%',
                }}
              >
                <Text style={styles.deliveryText}>PickUp</Text>
              </View>
            </TouchableOpacity>
          </View>
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
          <Text style={{ fontSize: 25, color: 'white', paddingLeft: 10 }}>
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
        <View
          style={{
            backgroundColor: colors.grey5,
            marginTop: 10,
            height: 40,
          }}
        >
          <Text style={{ fontSize: 25, color: 'white', paddingLeft: 10 }}>
            Free Delivery now
          </Text>
        </View>
        <View>
          <FlatList
            style={{ marginTop: 10, marginBottom: 10 }}
            horizontal={true}
            data={restaurantData}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={{ marginRight: 5 }}>
                <FoodCard
                  screenWidth={SCREEN_WIDTH * 0.8}
                  images={item.images}
                  restaurantName={item.restaurantName}
                  farAway={item.farAway}
                  businessAddress={item.businessAddress}
                  averageReview={item.averageReview}
                  numberOfReview={item.numberOfReview}
                />
              </View>
            )}
          />
        </View>
        <View
          style={{
            backgroundColor: colors.grey5,
            marginTop: 10,
            height: 40,
          }}
        >
          <Text style={{ fontSize: 25, color: 'white', paddingLeft: 10 }}>
            Promotions Available
          </Text>
        </View>
        <View>
          <FlatList
            style={{ marginTop: 10, marginBottom: 10 }}
            horizontal={true}
            data={restaurantData}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={{ marginRight: 5 }}>
                <FoodCard
                  screenWidth={SCREEN_WIDTH * 0.8}
                  images={item.images}
                  restaurantName={item.restaurantName}
                  farAway={item.farAway}
                  businessAddress={item.businessAddress}
                  averageReview={item.averageReview}
                  numberOfReview={item.numberOfReview}
                />
              </View>
            )}
          />
        </View>
        <View
          style={{
            backgroundColor: colors.grey5,
            marginTop: 10,
            height: 40,
          }}
        >
          <Text style={{ fontSize: 25, color: 'white', paddingLeft: 10 }}>
            Restaurant in Your area
          </Text>
        </View>
        <View style={{ width: SCREEN_WIDTH, paddingTop: 10 }}>
          {restaurantData.map((item) => (
            <View key={item.id} style={{ paddingBottom: 20 }}>
              <FoodCard
                screenWidth={SCREEN_WIDTH * 0.8}
                images={item.images}
                restaurantName={item.restaurantName}
                farAway={item.farAway}
                businessAddress={item.businessAddress}
                averageReview={item.averageReview}
                numberOfReview={item.numberOfReview}
              />
            </View>
          ))}
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
    borderRadius: 35,
    paddingVertical: 5,
    width: '40%',
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
