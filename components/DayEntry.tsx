import { View, type ViewProps, TouchableOpacity, Text } from 'react-native';

import { ThemedText } from '@/components/ThemedText';

import { useThemeColor } from '@/hooks/useThemeColor';
import React, { Children } from 'react';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, Typography } from '@mui/material';
import { ThumbUp, ThumbDown, ThumbsUpDown, Comment } from '@mui/icons-material';
import SendIcon from '@mui/icons-material/Send';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FoodBank from '@mui/icons-material/FoodBank';
import { red } from '@mui/material/colors';
import { IconButtonProps } from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import { FoodPost } from '@/components/FoodPost';

// Combines View properties AND the date
export type Props = ViewProps & {
  date: Date;
  children?: React.ReactNode;
};

export function DayEntry({ date, children, style, ...otherProps }: Props) {
  // API response
  let posts = [];
  for (let i = 0; i < 10; i++) {
    posts[i] = {
      title: 'Free Buckeye Donuts',
      date: 'epoch millis go here',
      caption: 'go to buckeye donuts and get a free donut with a student id',
      workRequired: true,
    }
  }
  // const backgroundColor = useThemeColor();
  return <View style={[{ padding: 20 }, style]} {...otherProps}>
    {children}
    <ThemedText type="title">{
      date.toLocaleDateString()
    }</ThemedText>
    {/* For each post make a Food Entry */}
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
      {posts.map((x, i) => {
        // style={{ width: '30%', margin: 10 }}
        return <FoodPost data={x}  key={i} />
      })}
    </View>
  </View>
}
