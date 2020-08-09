import React from 'react'
import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/Favorites';


const { Navigator, Screen } = createBottomTabNavigator();

function StudyTabs(){
    return (
        <Navigator>
            {/** 
             * o NavigationContainer precisa aparecer uma unica vez.
             * Por isso esta presente no arquivo AppStack, pois eh o mais alto nivel que envolve tudo
            */}
            <Screen name="TeacherList" component={TeacherList}></Screen>
            <Screen name="Favorites" component={Favorites}></Screen>
        </Navigator>
    )
}

export default StudyTabs;