import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GlobalStyles from "./app/styles/globalStyles";

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
            <Stack.Navigator>
                <Stack.Screen name='login' component={LoginComponent} options={{ title: 'SENAOFFERTS', headerStyle: GlobalStyles.header_auth, headerTitleStyle: GlobalStyles.headerTitle_auth, headerTitleAlign: 'center'}} />
                <Stack.Screen name='dashboard' component={MainPageComponent} options={{ title: 'SENAOFFERTS', headerStyle: GlobalStyles.header_auth, headerTitleStyle: GlobalStyles.headerTitle_auth, headerTitleAlign: 'center'}} />
                <Stack.Screen name='register' component={RegisterComponent} options={{ title: 'SENAOFFERTS', headerStyle: GlobalStyles.header_auth, headerTitleStyle: GlobalStyles.headerTitle_auth, headerTitleAlign: 'center'}} />
                <Stack.Screen name='CV' component={CVComponent} options={{ title: 'SENAOFFERTS', headerStyle: GlobalStyles.header_auth, headerTitleStyle: GlobalStyles.headerTitle_auth, headerTitleAlign: 'center'}} />
                <Stack.Screen name='Apply' component={ApplyOffersComponent} options={{ title: 'SENAOFFERTS', headerStyle: GlobalStyles.header_auth, headerTitleStyle: GlobalStyles.headerTitle_auth, headerTitleAlign: 'center'}} />
                <Stack.Screen name='MyOffers' component={MyOffersComponent} options={{ title: 'SENAOFFERTS', headerStyle: GlobalStyles.header_auth, headerTitleStyle: GlobalStyles.headerTitle_auth, headerTitleAlign: 'center'}} />
                <Stack.Screen name='Offers' component={OffersComponent} options={{ title: 'SENAOFFERTS', headerStyle: GlobalStyles.header_auth, headerTitleStyle: GlobalStyles.headerTitle_auth, headerTitleAlign: 'center'}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};



export default Navigation;


