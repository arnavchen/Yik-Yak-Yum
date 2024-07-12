import * as React from 'react';
import { View } from 'react-native';
import { Button, Card, Icon, MD3Colors, Text } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons';

// import { Avatar, Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, Typography } from '@mui/material';

export type Props = {
    data: {
        title: string,
        date: string,
        caption: string,
        workRequired: boolean,
    };
    style?: React.CSSProperties;
};

const timeNow = Date.now();

export default function FoodPost({ data, ...rest }: Props) {
    const [expanded, setExpanded] = React.useState(false);
    const recent = new Date() - data.date < 86400000;
    var showIcon = recent && data.workRequired;
    // showIcon = false;
    return (
        <View>
            <Card elevation={5} onPress={() => console.log('hi')}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {/* Show the warning icon if it's recent and there's work required */}
                    {showIcon && <Ionicons name="alert-circle-outline" size={50} color="black" style={{ paddingLeft: 10 }} />}
                    <Card.Title titleVariant="titleLarge" titleNumberOfLines={2} style={{ flex: 1 }} title={data.title + " at your moms house you fat fuck"} subtitle={getTimeAgo(data.date)} />
                </View>
                <Card.Content>
                    <Text variant="titleLarge">{data.caption}</Text>
                    <Text variant="bodyMedium">Some work required</Text>
                </Card.Content>
                {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
                <Card.Actions>
                    <Button onPress={() => console.log('Pressed')}>Cancel</Button>
                    <Button>Ok</Button>
                </Card.Actions>
            </Card>
            {/* <Card style={{}}>
                <CardHeader
                    avatar={data.workRequired &&
                        <Avatar sx={{ bgcolor: red[500] }}>
                            <AssignmentIcon />
                        </Avatar>
                    }
                    title={"Free Buckeye Donuts"}
                    subheader="20 minutes ago"
                />
                <CardContent>
                    <Typography variant="body1" color="text.secondary">
                        They are giving out one donut per student with a buckid
                    </Typography>
                    <Typography style={{ marginTop: 10 }} variant="body2" color="text.secondary">
                        *Requires Work
                    </Typography>
                </CardContent>
                <CardActions>
                    <IconButton>
                        <ThumbsUpDown />
                    </IconButton>
                    <Text>
                        2 confirmed, 1 denied
                    </Text>
                    <div style={{ marginLeft: 'auto' }}>
                        <IconButton aria-label="share">
                            <SendIcon />
                        </IconButton>
                    </div>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>20 mins ago:</Typography>
                        <Typography paragraph>
                            yeah this shit fake asf
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card> */}
        </View>
    );
}

const getTimeAgo = (date) => {
    const now = new Date();
    const elapsed = now - new Date(date);

    const minutes = Math.floor(elapsed / 60000);
    const hours = Math.floor(elapsed / 3600000);
    const days = Math.floor(elapsed / 86400000);
    const weeks = Math.floor(elapsed / 604800000);
    const months = Math.floor(elapsed / 2629800000);
    const years = Math.floor(elapsed / 31557600000);

    if (minutes < 1) {
        return 'just now';
    } else if (minutes < 60) {
        return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
    } else if (hours < 24) {
        return `${hours} hour${hours === 1 ? '' : 's'} ago`;
    } else if (days < 7) {
        return `${days} day${days === 1 ? '' : 's'} ago`;
    } else if (weeks < 4) {
        return `${weeks} week${weeks === 1 ? '' : 's'} ago`;
    } else if (months < 12) {
        return `${months} month${months === 1 ? '' : 's'} ago`;
    } else {
        return `${years} year${years === 1 ? '' : 's'} ago`;
    }
};
