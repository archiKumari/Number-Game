import {View, StyleSheet} from 'react-native'

import Colors from '../../constants/colors'

function Card ({children}) {
    return <View style={styles.card}>{children}</View>
}

const styles = StyleSheet.create({
    card: {
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        marginTop: 35,
        marginHorizontal: 24,
        borderRadius: 10,
        backgroundColor: Colors.primary500,
        elevation: 10,
        // shadowColor: 'black',
        // shadowOffset: {width:0, height:5},
        // shadowRadius: 6,
        // shadowOpacity: 0.95
      },
})


export default Card