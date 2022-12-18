import {View, Text, StyleSheet} from "react-native"

import Colors from "../../constants/colors"

function NumberContainer({children}) {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 3,
        borderColor: Colors.primary400,
        paddingHorizontal: 5,
        paddingVertical: 10,
        borderRadius: 8,
        margin: 20,
        alignItems: "center",
        justifyContent: "center",

    },
    numberText: {
        color: Colors.primary400,
        fontSize: 36,
        fontFamily: 'open-sans',
        // fontWeight: "bold"
    },
})


export default NumberContainer