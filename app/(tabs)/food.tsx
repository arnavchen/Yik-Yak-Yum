import { Image, StyleSheet, Platform, ScrollView, SafeAreaView } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { DayEntry } from '@/components/DayEntry';

// Get the date
const date = new Date();

export default function HomeScreen() {
  return (
    <ScrollView>
      {/* Show the first DayEntry */}
      <SafeAreaView>
        <DayEntry date={date} style={{ backgroundColor: 'orange' }}>
          <ThemedText style={{ alignItems: 'center', paddingBottom: 20, textDecorationLine: 'underline' }} type="title">What's free rn?</ThemedText>
        </DayEntry>
      </SafeAreaView>
      {/* Show the last 5 days (maybe want more) */}
      {/* (by showing what used to be free and what you missed, we are psychologically manipulating people that use our app to know what they could've had for free and therefore they check it more (... and it could be important for free food info today) */}
      {[...Array(5)].map((x, i) => {
        i += 1;
        var prevDate = new Date();
        prevDate.setDate(date.getDate() - i);
        return <DayEntry key={i} date={prevDate} />
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: 10
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
