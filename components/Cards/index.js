import { Image, Text, TouchableOpacity, View } from "react-native"
import styles from "./styles";


const Card = (props) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.btn}>
                <Image source={props.Imagem} style={styles.img}></Image>
                <Text style={styles.txt}>{props.Nome}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Card;