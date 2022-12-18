import { Text, View, StyleSheet, Image } from "react-native";

import Colors from "../constants/colors";
import Title from "../components/UI/Title";
import SecondaryButton from "../components/UI/SecondaryButton";

function GameOverScreen({roundNumber, userNumber, onStartNewGame}) {
  return (
    <View style={styles.rootContainer}>
      <Title style={styles.text}>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlight}>{roundNumber}</Text> rounds to guess the number{" "}
          <Text style={styles.highlight}>{userNumber}</Text>.
        </Text>
        <SecondaryButton onPress={onStartNewGame}>Start New Game</SecondaryButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary500,
    overflow: "hidden",
    margin: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  text: {
    color: Colors.primary400,
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 20,
    color: Colors.secondary500,
    textAlign: 'center',
    marginVertical: 20,
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: 'white',
  }
});

export default GameOverScreen;
