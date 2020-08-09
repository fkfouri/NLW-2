import React from 'react'
import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/Favorites';
import { Ionicons } from '@expo/vector-icons' //ha muitos pacotes de font_images nativos no expo.


const { Navigator, Screen } = createBottomTabNavigator();

function StudyTabs(){
    return (
        <Navigator
            tabBarOptions = {{ 
                style:{
                    elevation: 0, //propriedades de sombra do android
                    shadowOpacity: 0,
                    height: 64
                },
                tabStyle:{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                iconStyle:{
                    flex: 0, //tira a capacidade de ocupar o maximo de tamanho possivel,
                    width: 20,
                    height: 20
                },
                labelStyle:{
                    fontFamily: 'Archivo_700Bold',
                    fontSize: 13,
                    marginLeft: 16
                },
                inactiveBackgroundColor:'#fafafc',
                activeBackgroundColor: '#ebebf5',
                inactiveTintColor: '#c1bccc',
                activeTintColor: '#32264d'
            }}
        >
            {/** 
             * o NavigationContainer precisa aparecer uma unica vez.
             * Por isso esta presente no arquivo AppStack, pois eh o mais alto nivel que envolve tudo
            */}
            <Screen 
                name="TeacherList" 
                component={TeacherList}
                options = {{
                    tabBarLabel: 'Proffys',
                    tabBarIcon: ({ color, size}) => {
                        return (
                            <Ionicons name='ios-easel' size ={size} color={color} />
                        )
                    }

                }}
            ></Screen>
            <Screen 
                name="Favorites" 
                component={Favorites}
                options = {{
                    tabBarLabel: 'Favoritos',
                    tabBarIcon: ({ color, size}) => {
                        return (
                            <Ionicons name='ios-heart' size ={size} color={color} />
                        )
                    }

                }}
            ></Screen>
        </Navigator>
    )
}

export default StudyTabs;