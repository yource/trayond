import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from "./pages/home"
import LoginPage from "./pages/login/login"
import ForgetPage from "./pages/login/forget"
import bending1 from './pages/calculators/bending1';

const Stack = createNativeStackNavigator();
const MyTheme = {
    dark: true,
    colors: {
        ...DefaultTheme.colors,
        primary: 'rgb(255, 45, 85)',
        background: _global.pageBackgroundColor,
        card: 'rgb(255, 255, 255)',
        text: _global.fontColor,
        border: 'rgb(199, 199, 204)',
        notification: 'rgb(255, 69, 58)',
    },
};
const App = () => {
    return (
        <NavigationContainer theme={MyTheme}>
            <Stack.Navigator initialRouteName="home"
                screenOptions={{ headerShown: false }}>
                <Stack.Screen name="home" component={HomePage} />
                <Stack.Screen name="login" component={LoginPage} />
                <Stack.Screen name="forget" component={ForgetPage} />
                <Stack.Screen name="bending1" component={bending1} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;