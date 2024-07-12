import { View, Text, type ViewProps } from 'react-native';
import React from 'react';

import FoodPost from './FoodPost';

// Combines View properties AND the date
export type Props = ViewProps & {
  date: Date;
  children?: React.ReactNode;
};

export default function DayEntry({ date, children, style, ...otherProps }: Props) {
  // API response
  let posts = [];
  for (let i = 0; i < 10; i++) {
    posts[i] = {
      title: 'Free Buckeye Donuts',
      date: date.getTime(),
      caption: 'go to buckeye donuts and get a free donut with a student id',
      workRequired: true,
    }
  }
  // const backgroundColor = useThemeColor();
  return <View style={[{ padding: 20 }, style]} {...otherProps}>
    {children}
    {/* For each post make a Food Entry */}
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
      {posts.map((x, i) => {
        // style={{ width: '30%', margin: 10 }}
        return <FoodPost data={x} key={i} />
      })}
    </View>
  </View>
}
