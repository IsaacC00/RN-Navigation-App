import { Stack } from 'expo-router'

//? una capeta que contenga () encerrando su nombre 
//? significa que es un compactador y no influye en la ruta
//? de la aplicacion => en este caso es para agrupar por el stack 

const StackLayout = () => {
    return (
        //? este componente renderiza una cabezera
        <Stack
            //? propiedades para personalizar la cabezera
            screenOptions={{
                //? mostrar la cabezera
                // headerShown: false,
                headerShadowVisible: false, 
                contentStyle:{
                    backgroundColor:'white'
                }
            }}
        >
        //? Ojo los Stack.Screen van encerrados por un Stack

            <Stack.Screen
                name='home/index'
                options={{
                    title: 'Inicio'
                }}
            />
            <Stack.Screen
                name='products/index'
                options={{
                    title: 'Productos',
                    animation:'ios_from_right'
                }}
            />
            <Stack.Screen
                name='profile/index'
                options={{
                    title: 'Perfil',
                    animation:'flip'
                }}
            />
            <Stack.Screen
                name='settings/index'
                options={{
                    title: 'Ajustes',
                    animation:'slide_from_bottom'
                }}
            />
        </Stack>
    )
}

export default StackLayout