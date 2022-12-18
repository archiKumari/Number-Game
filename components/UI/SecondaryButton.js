import { View, Text, Pressable, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

function SecondaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 25,
    margin: 5,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: Colors.secondary500,
    paddingVertical: 8,
    paddingHorizontal: 15,
    elevation: 5,
  },
  buttonText: {
    color: Colors.primary400,
    fontWeight: 'bold',
    textAlign: "center",
  },
  pressed: {
    backgroundColor: 'white',
    // opacity: 0.75,
  },
});

export default SecondaryButton;
