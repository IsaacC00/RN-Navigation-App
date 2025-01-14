import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Redirect, useLocalSearchParams, useNavigation } from 'expo-router'
import { products } from '@/store/products.store';

//? por defecto el slot busca el index
//? este archivo lo que recibe por el nombre es un id como argumento
//? esto ayduadra a mostrar un producto(en este caso) con el id que se mande

const ProductScreen = () => {

    //? hook que opermite ver cual es el agumento que se mando
    const {id} = useLocalSearchParams();

    const product = products.find( p => p.id === id )

    const navigation = useNavigation();
    useEffect(() => {
        navigation.setOptions({
            title:product ? product.title : 'Producto'
        })
    }, [product]);

    if (!product) {
        return <Redirect href='/' />   
    }
    
    return (
        <View className='px-5 mt-2'>
            <Text className='font-work-black text-2xl'>{product.title}</Text>
            <Text className='py-3'>{product.description}</Text>
            <Text className='font-work-black '>{product.price}</Text>
        </View>
    )
}

export default ProductScreen