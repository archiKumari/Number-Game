import { View, Text, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

function GuessLogItems({ roundNumber, guess }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    listItem: {
        borderColor: Colors.primary500,
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: Colors.secondary500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation: 5,
    },
    itemText: {
        fontFamily: 'open-sans'
    }
})

export default GuessLogItems;