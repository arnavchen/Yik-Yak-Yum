import * as React from 'react';
import { View } from 'react-native';
import { Button, Card, Icon, MD3Colors, Text } from 'react-native-paper';

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

export default function FoodPost({ data, style, ...rest }: Props) {
    const [expanded, setExpanded] = React.useState(false);
    return (
        //  style={style}
        <View>
            <Card elevation={5}>
                <View style={{ paddingLeft: 16, flexDirection: 'row', alignItems: 'center' }}>
                    <Icon
                        source="alert-circle-outline"
                        color={'orange'}
                        size={50}
                    />
                    <Card.Title style={{ flexDirection: 'column' }} title={data.title} subtitle={data.date} />
                </View>
                <Card.Content>
                    <Text variant="bodyMedium">{data.caption}</Text>
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
