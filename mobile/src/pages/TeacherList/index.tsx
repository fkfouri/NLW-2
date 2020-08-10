import React, { useState } from 'react'
import { View, Text } from 'react-native'
import PageHeader from '../../components/PageHeader'


import TeacherItem, { Teacher } from '../../components/TeacherItem'
import { ScrollView, TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import api from '../../services/api'

import AsyncStorage from '@react-native-community/async-storage'

import styles from './styles'

function TeacherList(){
    const [teachers, setTeachers] = useState([])
    const [favorites, setFavorites] = useState<number[]>([]) //do tipo array numerico
    const [isFiltersVisible, setIsFiltersVisible] = useState(false);


    const [subject, setSubject] = useState('')
    const [week_day, setWeekDay] = useState('')
    const [time, setTime] = useState('')

    function loadFavorites(){
                /**
         * O AsyncStorage é um BD que somente armazena texto.
         * Assim, preciso converter uma lista de favoritos em texto.
         */
        AsyncStorage.getItem('favorites').then(response =>{
            if (response){
                const favoritedTeachers = JSON.parse(response)
                const favoritedTeachersIds = favoritedTeachers.map(( teachers: Teacher) =>{
                    return teachers.id
                })

                setFavorites(favoritedTeachersIds)
            }
        })
    }


    function handleToggleFiltesVisible(){
        setIsFiltersVisible(!isFiltersVisible)
    }

    async function handleFiltersSubmit(){
        loadFavorites()

        const response = await api.get('classes',{
            params:{
                subject,
                week_day,
                time
            }
        })

        setTeachers(response.data)

        setIsFiltersVisible(false)
    }

    return (
        <View style={styles.container}>
            <PageHeader 
                title='Proffys Disponíveis'
                headerRight={(
                    <BorderlessButton onPress={handleToggleFiltesVisible}>
                        <Feather name='filter' size={20} color='#FFF'></Feather>
                    </BorderlessButton>
                ) }
            >

                { isFiltersVisible &&(
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Matéria</Text>
                        <TextInput
                            style={styles.input}
                            value={subject}
                            onChangeText = { text => setSubject(text)}
                            placeholder='Qual a matéria?'
                            placeholderTextColor='#c1bccc'
                        />

                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da Semana</Text>
                                <TextInput
                                    style={styles.input}
                                    value={week_day}
                                    onChangeText={ text => setWeekDay(text)}
                                    placeholder='Qual o dia?'
                                    placeholderTextColor='#c1bccc'
                                />
                            </View>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horario</Text>
                                <TextInput
                                    style={styles.input}
                                    value={time}
                                    onChangeText={text => setTime(text)}
                                    placeholder='Qual o horario?'
                                    placeholderTextColor='#c1bccc'
                                />
                            </View>
                        </View>

                        <RectButton
                            style={styles.submitButton}
                            onPress={handleFiltersSubmit}
                        >
                            <Text style={ styles.submitButtonText}>Filtrar</Text>
                        </RectButton>
                    </View>
                )}
            </PageHeader>

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal:16,
                    paddingBottom: 16
                }}
            >
                {teachers.map((teacher: Teacher) => {
                    return <TeacherItem 
                                key={teacher.id}
                                teacher={teacher} 
                                favorited={favorites.includes(teacher.id)}
                            />
                })}
            </ScrollView>
        </View>
    )
}

export default TeacherList