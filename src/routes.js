import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Home from './pages/Home/index.js'
import MyLinks from './pages/MyLinks/index.js'

import { Ionicons } from '@expo/vector-icons'
import { DrawerActions } from '@react-navigation/native'

const Drawer = createDrawerNavigator();

function Routes(){
    return(
        <Drawer.Navigator 
            screenOptions={{
                drawerActiveBackgroundColor:'#2CCBB9',
                drawerActiveTintColor: '#FFF',
                drawerLabelStyle: {fontSize: 19, marginTop: 5 }
            }}
        >
            <Drawer.Screen 
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    title: 'Importar Link',
                    drawerIcon: ({focused, size, color}) => (
                        <Ionicons 
                            name={focused ? 'cube' : 'cube-outline'}
                            color={color}
                            size={size}
                        />
                    )
                }}
            />

            <Drawer.Screen 
                name="MyLinks"
                component={MyLinks}
                options={{
                    headerShown: false,
                    title: 'Meus Links',
                    drawerIcon: ({focused, size, color}) => (
                        <Ionicons 
                            name={focused ? 'stats-chart' : 'stats-chart-outline'}
                            color={color}
                            size={size}
                        />
                    )
                }}
            />
        </Drawer.Navigator>
    )
}

export default Routes