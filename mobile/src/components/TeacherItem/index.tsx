import React from 'react'
import { View, Image, Text } from 'react-native'

import styles from './styles'

import heatOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatappIcon from '../../assets/images/icons/whatsapp.png'
import { RectButton } from 'react-native-gesture-handler'

interface TeacherItemProps{
    title?: string;
}

const TeacherItem: React.FunctionComponent<TeacherItemProps> = ({ title }) => {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image 
                    style={styles.avatar}
                    source={{ 
                        //para aparecer a imagem precisa setar o height e width
                        uri: 'https://avatars0.githubusercontent.com/u/1031017?s=460&u=d26b4740df88663f9a4864d010ff6e7dce5386fd&v=4'
                        }}>
                        
                </Image>

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Fabio</Text>
                    <Text style={styles.subject}>Matematica</Text>
                </View>
            </View>

            <Text style={styles.bio}>
                xxxxxxxxxx
                {'\n'}{'\n'}
                ghfhgfhgfhg
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/Hora {' '}
                    <Text style={styles.priceValue}>R$ 20,00</Text>
                </Text>


                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton, styles.favorited]}>
                        <Image source={ heatOutlineIcon}></Image>
                        <Image source={ unfavoriteIcon}></Image>
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Image source={ whatappIcon}></Image>
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    )

}

export default TeacherItem