import { COLORS } from "@/constants/colors";
import { Stack, Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function RootLayout() {
	return (
		<Tabs>
			<Tabs.Screen name="films" options={{
				title: 'All Films',
				tabBarLabel: "Films",
				headerShown: false,
				tabBarIcon: ({ color, size }) => (
					<Ionicons name="film-outline" size={size} color={color} />
				),
			}} />
			<Tabs.Screen name="people" options={{
				title: 'All Characters',
				tabBarLabel: "People",
				tabBarIcon: ({ color, size }) => (
					<Ionicons name="people-outline" size={size} color={color} />
				),
			}} />
			<Tabs.Screen name="favorites" options={{
				title: 'My Favorites',
				tabBarLabel: "Favorites",
				tabBarIcon: ({ color, size }) => (
					<Ionicons name="star-outline" size={size} color={color} />
				),
			}} />
			<Tabs.Screen name="index" options={{ href: null }} />
		</Tabs>
	);
}
