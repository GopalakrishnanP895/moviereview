import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import AppHeader from '../shared/customheader';


import About from '../screens/about';

const Stack = createStackNavigator();

const AboutStack = () => {

    return(
        <Stack.Navigator
            screenOptions={{
                headerStyle: { height: 80, backgroundColor: "#3498DB" },
                headerTitleAlign: 'center',
                headerTintColor: '#fff'
            }}
        >
            <Stack.Screen 
                name="About" 
                component={About} 
                options={({navigation}) => ({
                    headerTitle: () => <AppHeader title="About" navigation={navigation} />,
                })}  
            />
        </Stack.Navigator>
    );
}

export default AboutStack;