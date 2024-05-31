import { colors, fontSize } from "@/constants/tokens";
import { Tabs } from "expo-router";
import {BlurView} from 'expo-blur';
import { StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'

const TabsNavigation = () => {

    <Tabs
     screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarLabelStyle: {
            fontSize: fontSize.xs,
            fontWeight: '500',
        },
        headerShown: false,
        tabBarStyle: {
            position: 'absolute',
            borderTopLeftRadius: 20,
            borderWidth: 0,
            paddingTop: 8,
            
        },
        tabBarBackground: () => <BlurView intensity={95}
        style={{
            ...StyleSheet.absoluteFillObject,
            overflow: 'hidden',
            borderTopLeftRadius: 20,
            borderBottomRightRadius: 20,
        }} />
     }}>
        <Tabs.Screen name="favorites" options={{
            title: "Favorites",
            tabBarIcon: ({ color }) => <FontAwesome name="heart" size={20}
            color={color} />, 
            }}/>
        <Tabs.Screen name="playlists"/>
        <Tabs.Screen name="(songs)"/>
        <Tabs.Screen name="artists"/>
    </Tabs>
}

export default TabsNavigation;