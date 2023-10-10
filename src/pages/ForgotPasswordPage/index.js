import { Image, TextInput, View, TouchableOpacity, Text } from 'react-native'
import styles from './styles'
import { Link } from '@react-navigation/native';


export default function ForgotPasswordPage(){
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/logo.png')} style={styles.logo}/>
            <TextInput placeholder='Email' style={styles.input}/>
            <TouchableOpacity style={styles.btn}>
                <Link to={{screen: 'LoginPage'}} style={styles.btnTxt}>Login</Link>
            </TouchableOpacity>
            <View style={styles.viewLinks}>
                <Link to={{screen: 'RegisterPage'}}>Cadastre-se </Link>
                <Link to={{screen: 'LoginPage'}}>Voltar para o Login </Link>
            </View>
        </View>
    )
}