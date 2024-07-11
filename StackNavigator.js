import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// Screens
import FoodScreen from './screens/FoodScreen';
import MapScreen from './screens/MapScreen';

import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Feather from '@expo/vector-icons/Feather';

const Tab = createBottomTabNavigator();

function getTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="FoodScreen" component={FoodScreen} options={{
                title: 'Food', tabBarIcon: ({ color }) => (
                    <FontAwesome5 name="hamburger" size={24} color="black" />
                )
            }} />
            <Tab.Screen name="MapScreen" component={MapScreen} options={{
                title: 'Map', tabBarIcon: ({ color }) => (
                    <Feather name="map" size={24} color="black" />
                )
            }} />
        </Tab.Navigator>
    );
}

const Stack = createNativeStackNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Main" component={getTabs} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation