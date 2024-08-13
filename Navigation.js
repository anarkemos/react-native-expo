import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GlobalStyles from "./app/styles/globalStyles";
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';


import LoginComponent from "./app/components/auth/loginComponent";
import RegisterComponent from "./app/components/auth/registerComponent";
import CVComponent from "./app/components/CV/CVComponent";
import MainPageComponent from "./app/components/dashboard/mainPageComponent";
import ApplyOffersComponent from "./app/components/offers/applyOfferComponent";
import MyOffersComponent from "./app/components/offers/myOffersComponent";
import OffersComponent from "./app/components/offers/offersComponent";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation = () => {  

    return (
        <NavigationContainer>
            <TabNavigation></TabNavigation>
        </NavigationContainer>
    );
};
function TabNavigation(){
    return(
    <Tab.Navigator>
        <Tab.Screen name="dashboard" component={NavigationScreens} options={{headerShown:false, tabBarLabel: () => null, tabBarIcon: ()=>(<AntDesign name="home" size={24} color="black" />)}}/>
        <Tab.Screen name="Offers" component={OffersComponent} options={{tabBarIcon: ()=>(<MaterialIcons name="local-offer" size={24} color="black" />) , tabBarLabel: () => null, title: 'SENAOFFERTS', headerStyle: GlobalStyles.header_auth, headerTitleStyle: GlobalStyles.headerTitle_auth, headerTitleAlign: 'center'}}/>
        <Tab.Screen name="MyOffers" component={MyOffersComponent} options={{tabBarIcon:()=>(<FontAwesome name="save" size={24} color="black" />), tabBarLabel: () => null, title: 'SENAOFFERTS', headerStyle: GlobalStyles.header_auth, headerTitleStyle: GlobalStyles.headerTitle_auth, headerTitleAlign: 'center'}}/>
        <Tab.Screen name="CV" component={CVComponent} options={{ tabBarIcon:()=>(<Ionicons name="document-text-outline" size={24} color="black" />) ,tabBarLabel: () => null, title: 'SENAOFFERTS', headerStyle: GlobalStyles.header_auth, headerTitleStyle: GlobalStyles.headerTitle_auth, headerTitleAlign: 'center'}}/>
        <Tab.Screen name="login" component={LoginComponent} options={{ tabBarIcon:()=>(<MaterialIcons name="account-circle" size={24} color="black" />),tabBarLabel: () => null, title: 'SENAOFFERTS', headerStyle: GlobalStyles.header_auth, headerTitleStyle: GlobalStyles.headerTitle_auth, headerTitleAlign: 'center'}}/>
    </Tab.Navigator>
    )
};

function NavigationScreens(){
    return(
            <Stack.Navigator>
                <Stack.Screen name='dashboard' component={MainPageComponent} options={{ title: 'SENAOFFERTS', headerStyle: GlobalStyles.header_auth, headerTitleStyle: GlobalStyles.headerTitle_auth, headerTitleAlign: 'center'}} />
                <Stack.Screen name='login' component={LoginComponent} options={{ title: 'SENAOFFERTS', headerStyle: GlobalStyles.header_auth, headerTitleStyle: GlobalStyles.headerTitle_auth, headerTitleAlign: 'center'}} />
                <Stack.Screen name='register' component={RegisterComponent} options={{ title: 'SENAOFFERTS', headerStyle: GlobalStyles.header_auth, headerTitleStyle: GlobalStyles.headerTitle_auth, headerTitleAlign: 'center'}} />
                <Stack.Screen name='CV' component={CVComponent} options={{ title: 'SENAOFFERTS', headerStyle: GlobalStyles.header_auth, headerTitleStyle: GlobalStyles.headerTitle_auth, headerTitleAlign: 'center'}} />
                <Stack.Screen name='Apply' component={ApplyOffersComponent} options={{ title: 'SENAOFFERTS', headerStyle: GlobalStyles.header_auth, headerTitleStyle: GlobalStyles.headerTitle_auth, headerTitleAlign: 'center'}} />
                <Stack.Screen name='MyOffers' component={MyOffersComponent} options={{ title: 'SENAOFFERTS', headerStyle: GlobalStyles.header_auth, headerTitleStyle: GlobalStyles.headerTitle_auth, headerTitleAlign: 'center'}} />
                <Stack.Screen name='Offers' component={OffersComponent} options={{ title: 'SENAOFFERTS', headerStyle: GlobalStyles.header_auth, headerTitleStyle: GlobalStyles.headerTitle_auth, headerTitleAlign: 'center'}} />
            </Stack.Navigator>
    );
}

export default Navigation;


