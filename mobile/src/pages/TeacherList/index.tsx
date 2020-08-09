import React from 'react'
import { View } from 'react-native'
import PageHeader from '../../components/PageHeader'

import styles from './styles'
import TeacherItem from '../../components/TeacherItem'
import { ScrollView } from 'react-native-gesture-handler'

function TeacherList(){
    return (
        <View style={styles.container}>
            <PageHeader title='Proffys Disponíveis'></PageHeader>

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal:16,
                    paddingBottom: 16
                }}
            >
                <TeacherItem></TeacherItem>
                <TeacherItem></TeacherItem>
                <TeacherItem></TeacherItem>
                <TeacherItem></TeacherItem>
            </ScrollView>
        </View>
    )
}

export default TeacherList