import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="home" options={{ title: 'Home' }} />
      <Tabs.Screen name="quotes" options={{ title: 'Quotes' }} />
      <Tabs.Screen name="customers" options={{ title: 'Customers' }} />
      <Tabs.Screen name="schedule" options={{ title: 'Schedule' }} />
      <Tabs.Screen name="more" options={{ title: 'More' }} />
    </Tabs>
  );
}
