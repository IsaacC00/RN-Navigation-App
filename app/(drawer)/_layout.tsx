import { View, Text } from 'react-native'
import React from 'react'
import Drawer from 'expo-router/drawer'
import { Ionicons } from '@expo/vector-icons'
import CustomDrawer from '@/components/shared/CustomDrawer'

const DrawerLayout = () => {
    return (
        <Drawer
            //? personalixar el backgrounde de la aplicacion
            drawerContent={ CustomDrawer }
            screenOptions={{
                headerShown:false,
                //? color al sobreponer el menu
                overlayColor: 'rgba(0,0,0,0.5)',
                //? color para cuando una pagina esta activa
                drawerActiveTintColor: 'indigo',
                //? color para el canva principal de la aplicacion
                headerShadowVisible: false,
                sceneStyle: {
                    backgroundColor: 'white'
                }
            }}
        //? personalixar el backgrounde de la aplicacion
        >
            <Drawer.Screen
                name="user/index" // This is the name of the page and must match the url from root
                options={{
                    drawerLabel: 'User',
                    title: 'Usuario',
                    //? deestrucutramos el color y el tamanio para que sea igual a la tipografia
                    drawerIcon: ({color,size}) => <Ionicons name='person-add-outline' size={size} color={color}/>
                }}
                />
            <Drawer.Screen
                name="schedule/index" // This is the name of the page and must match the url from root
                options={{
                    drawerLabel: 'Horario',
                    title: 'Horario',
                    //? deestrucutramos el color y el tamanio para que sea igual a la tipografia
                    drawerIcon: ({color,size}) => <Ionicons name='time-outline' size={size} color={color}/>
                }}
            />

            <Drawer.Screen
                name="(tabs)" // This is the name of the page and must match the url from root
                options={{
                    drawerLabel: 'Tabs + Stack',
                    title: 'Tabs + Stack',
                    //? deestrucutramos el color y el tamanio para que sea igual a la tipografia
                    drawerIcon: ({color,size}) => <Ionicons name='albums-outline' size={size} color={color}/>
                }}
            />
        </Drawer>

    )

}

export default DrawerLayout