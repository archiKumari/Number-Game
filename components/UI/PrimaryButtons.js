import { View, Text, Pressable, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

function PrimaryButton({ children, onPress }) {
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
    borderRadius: 28,
    margin: 5,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary400,
    paddingVertical: 8,
    paddingHorizontal: 15,
    elevation: 5,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    backgroundColor: Colors.primary300,
    opacity: 0.75,
  },
});

export default PrimaryButton;
