import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Pressable,
  Dimensions,
  Animated,
} from "react-native";
import React, { useRef, useEffect } from "react";
import Svg, { Path } from "react-native-svg";

const windowHeight = Dimensions.get("window").height / 2;

export default function App() {
  const heightAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animação para aumentar a altura da View
    Animated.timing(heightAnim, {
      toValue: windowHeight, // Alvo da altura final
      duration: 1500, // Duração da animação em milissegundos
      useNativeDriver: false, // Não é possível usar o native driver para height
    }).start();
  }, [heightAnim]);
  return (
    <ImageBackground
      source={require("./src/assets/images/imageBackground_9.jpg")}
      style={styles.container}
      blurRadius={10}
    >
      <View
        style={{
          width: "100%",
          height: "40%",
          paddingLeft: 30,
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 35, color: "#ECD29C" }}>Explorer</Text>
        <Text style={{ fontSize: 35, color: "#ECD29C", marginLeft: 35 }}>
          World
        </Text>
      </View>
      <StatusBar />
      <Animated.View
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: heightAnim,
        }}
      >
        <Svg
          viewBox="0 0 1440 320"
          width="100%"
          height="20%"
          preserveAspectRatio="none"
          style={{ marginBottom: -1 }}
        >
          <Path
            fill="#ECD29C"
            fillOpacity="1"
            d="M0,128L60,112C120,96,240,64,360,85.3C480,107,600,181,720,213.3C840,245,960,235,1080,240C1200,245,1320,267,1380,277.3L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </Svg>
        <View style={styles.login}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#999"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#999"
            secureTextEntry
          />
          <Pressable style={styles.btnLogin} onPress={() => alert("ALERTA")}>
            <Text style={styles.txtBtnLogin}>Login</Text>
          </Pressable>
        </View>
      </Animated.View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  login: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ECD29C",
  },

  input: {
    width: "80%",
    paddingLeft: 5,
    borderBottomWidth: 1,
    height: 50,
    backgroundColor: "transparent",
    marginBottom: 20,
    fontSize: 16,
  },

  btnLogin: {
    width: "80%",
    padding: 5,
    backgroundColor: "#707D83",
    borderRadius: 20,
    padding: 10,
  },

  txtBtnLogin: {
    color: "#ECD29C",
    textAlign: "center",
  },
});
