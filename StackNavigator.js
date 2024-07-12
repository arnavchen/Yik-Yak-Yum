import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// Screens
import FoodScreen from './screens/FoodScreen';
import MapScreen from './screens/MapScreen';

import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function getTabs() {
    return (
        <Tab.Navigator screenOptions={{
            tabBarStyle: {
                shadowOpacity: 0.3,
                shadowRadius: 10,
            }
        }}>
            <Tab.Screen name="FoodScreen" component={FoodScreen} options={{
                title: 'Food', headerShown: false, tabBarIcon: ({ focused }) => (
                    <Ionicons name={focused ? 'fast-food' : 'fast-food-outline'} size={24} color="black" />
                )
            }} />
            <Tab.Screen name="MapScreen" component={MapScreen} options={{
                title: 'Map', headerShown: false, tabBarIcon: ({ focused }) => (
                    <Ionicons name={focused ? 'map' : 'map-outline'} size={24} color="black" />
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
                <Stack.Screen name="Main" component={getTabs} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation