import { DrawerActions } from '@react-navigation/native';
import { router, Stack, useNavigation } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';


//? una capeta que contenga () encerrando su nombre 
//? significa que es un compactador y no influye en la ruta
//? de la aplicacion => en este caso es para agrupar por el stack 

const StackLayout = () => {

    const navigation = useNavigation();

    const onHeaderLeftClick = (canGoBack: boolean = false) => {
        if (canGoBack) {
          router.back();
          return;
        }
        navigation.dispatch(DrawerActions.toggleDrawer());
      };

    return (
        //? este componente renderiza una cabezera
        <Stack
            //? propiedades para personalizar la cabezera
            screenOptions={{
                //? mostrar la cabezera
                headerShown: true,
                //? mostrar la cabezera
                headerShadowVisible: false,
                contentStyle: {
                    backgroundColor: 'white'
                },
                headerLeft: ({ tintColor, canGoBack }) => (
                    <Ionicons
                        name={canGoBack ? 'arrow-back-outline' : 'grid-outline'}
                        onPress ={ () => onHeaderLeftClick(canGoBack)}
                        className='mr-5'
                        size={20}
                    />
                ),
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
                    animation: 'ios_from_right'
                }}
            />
            <Stack.Screen
                name='profile/index'
                options={{
                    title: 'Perfil',
                    animation: 'flip'
                }}
            />
            <Stack.Screen
                name='settings/index'
                options={{
                    title: 'Ajustes',
                    animation: 'slide_from_bottom'
                }}
            />
        </Stack>
    )
}

export default StackLayout