import { View, Image, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { icons } from '../../constants'

const TabsLayout = () => {

	const TabIcon = ({ icon, color, name, focused }) => {
		return (
			<View className="items-center justify-center">
				<Image source={icon} resizeMode="contain" tintColor={color} className="mt-5 w-6 h-6" />
				<Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`}></Text>
			</View>
		)
	}

	return (
		<>
			<Tabs
				screenOptions={{
					tabBarShowLabel: true,
					tabBarActiveTintColor: "#FFA001",
					tabBarInactiveTintColor: "#CDCDE0",
					tabBarStyle : {
						backgroundColor: '#161622',
						borderTopWidth: 1,
						borderTopColor: '#232533',	
					}
				}}>
				<Tabs.Screen name='home'
					options={{
						title: 'Home',
						headerShown: false,
						tabBarIcon: ({ color, focused }) => (
							<TabIcon
								icon={icons.home}
								color={color}
								name={"Home"}
								focused={focused}
							/>
						)
					}} />
				<Tabs.Screen name='bookmark'
					options={{
						title: 'Bookmark',
						headerShown: false,
						tabBarIcon: ({ color, focused }) => (
							<TabIcon
								icon={icons.bookmark}
								color={color}
								name={"Bookmark"}
								focused={focused}
							/>
						)
					}} />
				<Tabs.Screen name='create'
					options={{
						title: 'Create',
						headerShown: false,
						tabBarIcon: ({ color, focused }) => (
							<TabIcon
								icon={icons.plus}
								color={color}
								name={"Create"}
								focused={focused}
							/>
						)
					}} />
				<Tabs.Screen name='profile'
					options={{
						title: 'profile',
						headerShown: false,
						tabBarIcon: ({ color, focused }) => (
							<TabIcon
								icon={icons.profile}
								color={color}
								name={"profile"}
								focused={focused}
							/>
						)
					}} />
			</Tabs>
		</>
	)
}

export default TabsLayout