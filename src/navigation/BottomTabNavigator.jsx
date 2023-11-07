import { StyleSheet } from "react-native";
import { colors } from "../constants/Colors";
import CartNavigator from './CartNavigator';
import OrdersNavigator from "./OrdersNavigator";
import StackNavigator from './StackNavigator';
import ProfileNavigator from "./profileNavigator";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs" ;
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


const BottomTab = createBottomTabNavigator()

function BottomTabNavigator() {
    return (
    <BottomTab.Navigator 
    initialRouteName='HomeNav' 
    screenOptions={{
        headerShown: false, 
        tabBarShowLabel: false,
         tabBarStyle: styles.tabBar,
         }}
         >
        <BottomTab.Screen 
        name='HomeNav' 
        component={StackNavigator} 
        options={{
            tabBarIcon: ({focused}) => (
                <FontAwesome5 name="clinic-medical" 
                size={28} 
                color={focused ? colors.secondary : colors.primary}
                 />
                ),
            }} 
            />
        <BottomTab.Screen 
        name='CartNav' 
        component={CartNavigator} 
        options={{
            tabBarIcon: ({focused}) =>(
                <FontAwesome5 name="calendar-check"
                 size={28} 
                 color={focused ? colors.secondary : colors.primary} 
                 />
                    ),
                }}
                />
                        <BottomTab.Screen 
                        name='OrdersNav' 
                        component={OrdersNavigator} 
                        options={{
            tabBarIcon: ({focused}) =>(
                <MaterialIcons name="location-pin"
                 size={30} 
                 color={focused ? colors.secondary : colors.primary} 
                 />
                    ),
                }}
                />
                <BottomTab.Screen 
                        name='ProfileNav' 
                        component={ProfileNavigator} 
                        options={{
            tabBarIcon: ({focused}) =>(
                <FontAwesome5 name="user"
                 size={28} 
                 color={focused ? colors.secondary : colors.primary} 
                 />
                    ),
                }}
                />
    </BottomTab.Navigator>
    )
}

export default BottomTabNavigator



const styles = StyleSheet.create({
tabBar: {
    backgroundColor: colors.quaternary,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    height: 60,
}
})