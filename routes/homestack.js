import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/home';
import Reviewdetail from '../screens/reviewdetail';
import AppHeader from '../shared/customheader';

const Stack = createStackNavigator();

const HomeStack = () => {

    return(
        <Stack.Navigator
            screenOptions={{
                headerStyle: { height: 80, backgroundColor: "#3498DB" },
                headerTitleAlign: 'center',
                headerTintColor: '#fff'
            }}
        >
            <Stack.Screen 
                name="Home" 
                component={Home} 
                options={({navigation}) => ({
                        headerTitle: () => <AppHeader title="Home" navigation={navigation} />,
                })}           
            />
            <Stack.Screen 
                name="Reviewdetail" 
                component={Reviewdetail}
                options={{
                    title: "Review Detail",
                }}
            />
        </Stack.Navigator>
    );
}

export default HomeStack;