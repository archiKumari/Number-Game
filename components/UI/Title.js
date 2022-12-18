import { Text, StyleSheet } from "react-native";

import Colors from "../../constants/colors";
function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 25,
    // fontWeight: "bold",
    color: Colors.primary400,
    textAlign: "center",
    borderWidth: 5,
    borderColor: Colors.primary400,
    padding: 10,
    marginTop: 10,
  },
});

export default Title;
