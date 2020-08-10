import React from 'react'
import { View, Image, Text, Linking } from 'react-native'

import styles from './styles'

import heatOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatappIcon from '../../assets/images/icons/whatsapp.png'
import { RectButton } from 'react-native-gesture-handler'


export interface Teacher{
    id: number
    avatar:string;
    bio: string;
    cost: number;
    name: string,
    subject: string,
    whatsapp: string
}

interface TeacherItemProps{
    teacher: Teacher;
}


const TeacherItem: React.FunctionComponent<TeacherItemProps> = ({ teacher }) => {
    function handleLinkToWhatsapp(){
        //Deep Link => uma aplicacao abrir outra
        Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`)
    }

    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image 
                    style={styles.avatar}
                    source={{ 
                        //para aparecer a imagem precisa setar o height e width
                        uri: teacher.avatar
                        }}>
                        
                </Image>

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>{teacher.name}</Text>
                    <Text style={styles.subject}>{teacher.subject}</Text>
                </View>
            </View>

            <Text style={styles.bio}>
                {teacher.bio}
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/Hora {' '}
                    <Text style={styles.priceValue}>R$ {teacher.cost}</Text>
                </Text>


                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton, styles.favorited]}>
                        <Image source={ heatOutlineIcon}></Image>
                        <Image source={ unfavoriteIcon}></Image>
                    </RectButton>

                    <RectButton 
                        style={styles.contactButton}
                        onPress={handleLinkToWhatsapp}
                    >
                        <Image source={ whatappIcon}></Image>
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    )

}

export default TeacherItem