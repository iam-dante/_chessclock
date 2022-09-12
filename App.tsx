import { View } from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import Base from "./src/pages";

export default function App(){
  return(
    <NavigationContainer>
      <Base/>
    </NavigationContainer>
  )
}