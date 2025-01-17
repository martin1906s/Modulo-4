import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LaptopList } from "./screens/laptopsList";
import { LaptopForm } from "./screens/laptopsForm";
export default function App() {
  const StackContacts=createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StackContacts.Navigator>
        <StackContacts.Screen
        name="LaptopListNav" component={LaptopList}/>
        <StackContacts.Screen
        name="LaptopFormNav" component={LaptopForm}/>
      </StackContacts.Navigator>
    </NavigationContainer>
  );
}
