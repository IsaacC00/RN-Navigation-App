import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router';
import { DrawerActions } from '@react-navigation/native';
import CustomButton from '@/components/shared/CustomButton';

const UserScreen = () => {
    const navigation = useNavigation();

    const onToogleDrawer = () => {
      navigation.dispatch( DrawerActions.openDrawer );
    } 
  return (
    <View>
      <CustomButton className='mt-20 px-10' onPress={onToogleDrawer}>
        Abrir Menu
      </CustomButton>
    </View>
  )
}

export default UserScreen