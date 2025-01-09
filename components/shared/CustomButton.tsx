import React from 'react';
import { Text, Pressable, PressableProps, View } from 'react-native'

interface Props extends PressableProps {
    children: string,
    color?: 'primary' | 'secondary' | 'tertiary'
    className?: string
    variant?: 'contained' | 'text-only'
}

const CustomButton = ({ children, color = 'primary', onPress, onLongPress, className, variant = 'contained' }: Props) => {

    //? que es esto??? 
    const colorButton = {
        primary: 'bg-primary',
        secondary: 'bg-secondary',
        tertiary: 'bg-tertiary',
    }[color];
    //? que es esto??? 

    const textColor = {
        primary: 'text-primary',
        secondary: 'text-secondary',
        tertiary: 'text-tertiary',
    }[color]


    if (variant === 'text-only') {
        return (
            <Pressable onPress={onPress} className={`p-3 ${className}`}>
                <Text className={`font-work-medium ${color} text-center`}>{children}</Text>
            </Pressable>

        )
    }

    return (
        <Pressable onPress={onPress} className={`p-3 rounded-md ${colorButton} ${className} active:opacity-90`}>
            <Text className='text-white text-center'>{children}</Text>
        </Pressable>
    )
}

export default CustomButton