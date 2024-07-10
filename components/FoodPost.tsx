import { TouchableOpacity, Animated, View, type ViewProps, Text, Pressable } from 'react-native';

import { ThemedText } from '@/components/ThemedText';

import { useThemeColor } from '@/hooks/useThemeColor';
import { Children } from 'react';
import React, { useState } from 'react';
// import { Avatar, Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, Typography } from '@mui/material';
import { ThumbUp, ThumbDown, ThumbsUpDown, Comment } from '@mui/icons-material';
import SendIcon from '@mui/icons-material/Send';
import WarningIcon from '@mui/icons-material/Warning';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import FoodBank from '@mui/icons-material/FoodBank';
import { red } from '@mui/material/colors';
import { IconButtonProps } from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';



interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export type Props = {
    data: {
        title: string,
        date: string,
        caption: string,
        workRequired: boolean,
    };
    style?: React.CSSProperties;
};

export function FoodPost({ data, style, ...rest }: Props) {
    const [expanded, setExpanded] = React.useState(false);
    return (
        //  style={style}
        <View>
            {/* <CardActionArea href="https://google.com">
                <CardContent>
                    <Typography>Click me!</Typography>
                </CardContent>
            </CardActionArea> */}
            <CardActionArea>
                <Card style={{}}>
                    <CardHeader
                        avatar={data.workRequired &&
                            <Avatar sx={{ bgcolor: red[500] }}>
                                <AssignmentIcon />
                            </Avatar>
                        }
                        title={"Free Buckeye Donuts"}
                        subheader="20 minutes ago"
                    />
                    {/* <CardMedia
        component="img"
        height="194"
        image="https://breakfastwithnick.com/wp-content/uploads/buckeye-donuts-25.jpeg"
        alt="Paella dish"
      /> */}
                    <CardContent>
                        <Typography variant="body1" color="text.secondary">
                            They are giving out one donut per student with a buckid
                        </Typography>
                        <Typography style={{ marginTop: 10 }} variant="body2" color="text.secondary">
                            *Requires Work
                        </Typography>
                    </CardContent>
                    <CardActions>
                        {/* Rate */}
                        <IconButton>
                            <ThumbsUpDown />
                        </IconButton>
                        <Text>
                            2 confirmed, 1 denied
                        </Text>
                        {/* Comment */}
                        {/* <IconButton onClick={() => { setExpanded(!expanded) }}>
          <Comment />
        </IconButton> */}
                        {/* Put to right side of screen */}
                        <div style={{ marginLeft: 'auto' }}>
                            <IconButton aria-label="share">
                                <SendIcon />
                            </IconButton>
                        </div>
                    </CardActions>
                    {/* Comments */}
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>20 mins ago:</Typography>
                            <Typography paragraph>
                                yeah this shit fake asf
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            </CardActionArea>
        </View>
    );
}
