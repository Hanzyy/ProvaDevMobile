import { Text, View } from "react-native";
import Card from "../../../components/Cards";
import styles from "./styles";

export default function HomePage(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.txt}>Home</Text>
            </View>
            <View style={styles.cards}>
                <Card
                Imagem = {require("../../../assets/relogio.png")}
                Nome = {"Consultas Marcadas"}
                ></Card>
                <Card
                Imagem = {require("../../../assets/agenda.webp")}
                Nome = {"Agendar Consulta"}
                ></Card>
                <Card
                Imagem = {require("../../../assets/interrogacao.png")}
                Nome = {"Tire Suas Dúvidas"}
                ></Card>
            </View>
        </View>
    )
}