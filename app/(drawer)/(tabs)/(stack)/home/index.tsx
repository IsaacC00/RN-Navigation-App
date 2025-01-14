import CustomButton from '@/components/shared/CustomButton'
import { DrawerActions } from '@react-navigation/native';
import { router, useNavigation } from 'expo-router'
import { View } from 'react-native'

const HomeScreen = () => {

  //? abrir el menu de drawer desde un boton
  const navigation = useNavigation();
  const onToogleDrawer = () => {
    navigation.dispatch( DrawerActions.openDrawer );
  } 

  return (
    
    <View className='px-10 py-10'>

      {/* //? no hacer esto => 
      //  <Link href='/products' asChild>
      <CustomButton className='mb-5' color='primary'>Productos</CustomButton>
      </Link> 
      */}

      <CustomButton className='mb-5' color='primary' onPress={() => router.push('/products')}>
        Products
      </CustomButton>

      <CustomButton className='mb-5' color='secondary' onPress={() => router.push('/settings')}>
        Settings
      </CustomButton>

      <CustomButton className='mb-5' color='tertiary' onPress={() => router.push('/profile')}>
        Profile
      </CustomButton>

      <CustomButton className='mb-5' variant='text-only' onPress={() => router.push('/home')}>
        Home
      </CustomButton>
      <CustomButton onPress={onToogleDrawer}>
        Abrir Menu
      </CustomButton>

    </View>
    //?   <Link className='mb-5' href='/products'>Products</Link>
    //   <Link className='mb-5' href='/profile'>Profile</Link>
    //   <Link className='mb-5' href='/settings'>Settings</Link>

  )

    //? componente para redireccionar a una pantalla especifica
  // return <Redirect href='/products'></Redirect>
  // return (
  //   <SafeAreaView className=''>
  //     <View className='mt-10 mx-2'>
  //       <Text className='text-5xl font-work-black text-primary'>Hola Mundo</Text>
  //       <Text className='text-4xl font-work-medium text-secondary'>Hola Mundo</Text>
  //       <Text className='text-3xl font-work-light text-secondary-200'>Hola Mundo</Text>
  //       <Text className='text-2xl font-work-light text-secondary-100'>Hola Mundo</Text>
  //       <Text className='text-lg font-work-light text-tertiary'>Hola Mundo</Text>

  //? componente para llevarme a una pantalla deseada
  //       <Link href='/products'>Productos</Link>
  //     </View>
  //   </SafeAreaView>
  // )
}

export default HomeScreen