import React, { useState } from 'react'
import { View, AsyncStorage } from 'react-native'
import PageHeader from '../../components/PageHeader'

import styles from './styles'
import { ScrollView } from 'react-native-gesture-handler'
import TeacherItem, { Teacher } from '../../components/TeacherItem'
import { useFocusEffect } from '@react-navigation/native'


function Favorites(){
    const [favorites, setFavorites] = useState([]) //vou ter que mostrar todos
    function loadFavorites(){
                /**
         * O AsyncStorage é um BD que somente armazena texto.
         * Assim, preciso converter uma lista de favoritos em texto.
         */
        AsyncStorage.getItem('favorites').then(response =>{
            if (response){
                const favoritedTeachers = JSON.parse(response)
                setFavorites(favoritedTeachers)
            }
        })
    }

        /**
     * useFocusEffect é uma funcao que dispara toda a vez que a tela entrar em foco
     * 
     * Esta sendo usado, pois a lista de favoritos era carregado apenas uma vez, ou
     * seja, durante a navegacao da abas, nao atualizava a lista de favoritos.
     */
    useFocusEffect(() =>{
        loadFavorites()
    })

    return (
        <View style={styles.container}>
            <PageHeader title='Meus Proffys favoritos'></PageHeader>

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal:16,
                    paddingBottom: 16
                }}
            >
                { favorites.map((teacher : Teacher) =>{
                    return(
                        <TeacherItem
                            key = { teacher.id }
                            teacher ={ teacher }
                            favorited = { true}

                        />
                    )

                })}

            </ScrollView>
        </View>
    )
}

export default Favorites