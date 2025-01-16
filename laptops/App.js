import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LaptopList } from "./screens/laptopsList";
export default function App() {
  const StackContacts=createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StackContacts.Navigator>
        <StackContacts.Screen
        name="LaptopListNav" component={LaptopList}/>
      </StackContacts.Navigator>
    </NavigationContainer>
  );
}
