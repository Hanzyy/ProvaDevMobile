import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#FFFAF0",
        height:'100%',
        width:'100%',
        alignItems:'center',
        justifyContent:"top"
    },
    header:{
        backgroundColor:'#87CEFA',
        height:'15%',
        width:'100%',
        alignItems:'center',
        justifyContent:'center'
    },
    txt:{
        fontFamily:"TimesNewRoman",
        fontSize:30
    },
    cards:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'flex-start',
        flexDirection:'row',
        flexWrap:'wrap',
        marginTop:'50px'
    }
})

export default styles