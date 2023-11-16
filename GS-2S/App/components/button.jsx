import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Button({ press, title }) {

    return (
        <TouchableOpacity
            onPress={press}
            style={styles.button}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button : {
        width : '80%',
        backgroundColor : '#156669',
        padding : 15,
        borderRadius : 10,
        marginTop : '5%',
        alignSelf : 'center',
        elevation : 2
    },
    buttonText : {
        fontSize : 16,
        textAlign : 'center',
        letterSpacing : 2,
        fontWeight : '900',
        color : '#fff'
    }
})