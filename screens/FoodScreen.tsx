import { LinearGradient } from "expo-linear-gradient";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import React from 'react';
import DayEntry from '../components/DayEntry';

// Get the date
const date = new Date();

export default function FoodScreen() {
  return (
    <ScrollView style={{ backgroundColor: 'orange' }} contentInsetAdjustmentBehavior="automatic">
      <SafeAreaView>
        {/* Show the first DayEntry */}
        <LinearGradient colors={['orange', "#ffffff"]} style={{ flex: 1 }}>
          {/* Preface with how many items are free right now */}

          {/* Todays DayEntry */}
          <DayEntry date={date}>
            <Text style={styles.titleContainer}>
              What's free tonight?
            </Text>
          </DayEntry>
        </LinearGradient>
        {/* Show the last 5 days (maybe want more) */}
        {/* (by showing what used to be free and what you missed, we are psychologically manipulating people that use our app to know what they could've had for free and therefore they check it more (... and it could be important for free food info today) */}
        {[...Array(5)].map((x, i) => {
          i += 1;
          var prevDate = new Date();
          prevDate.setDate(date.getDate() - i);
          return <DayEntry key={i} date={prevDate}>
            <Text style={styles.titleContainer}>{
              prevDate.toLocaleDateString(undefined, { month: 'long', day: 'numeric' })
            }</Text>
          </DayEntry>
        })}
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 10,
    marginBottom: 30,
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
