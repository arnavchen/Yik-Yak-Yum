import { View, type ViewProps } from 'react-native';
import { ThemedText } from '@/components/ThemedText';

import { useThemeColor } from '@/hooks/useThemeColor';
import { Children } from 'react';

// Combines View properties AND the date
export type Props = ViewProps & {
    date: Date;
    children?: React.ReactNode;
};

export function DayEntry({ date, children, style, ...otherProps }: Props) {
    // const backgroundColor = useThemeColor();
    return <View style={[{ padding: 20 }, style]} {...otherProps}>
        {children}
        <ThemedText type="title">{
            date.toLocaleDateString()
        }</ThemedText>
        <ThemedText onPress={() => alert('lol fatass want his free donut')}>
            One free pastry at buckeye donuts
        </ThemedText>
        <ThemedText>
            Location, Duration, Likes, Dislikes, Comments
        </ThemedText>
    </View>
}
