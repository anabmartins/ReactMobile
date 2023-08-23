import * as React from "react";
import { Image, View, Text, TextInput, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

export function Login() {
  const navigation = useNavigation();

  function Login() {
    navigation.navigate("DrawerRoutes");
  }
  function Register() {
    navigation.navigate("Register");
  }
  function ForgetPass() {
    navigation.navigate("ForgetPassword");
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/logo.svg")}
        style={styles.logo}
      ></Image>
      <Text style={styles.title}>Bem-Vindo</Text>
      <Text style={styles.subtitle}>ao Controle de estoque</Text>

      <TouchableOpacity style={styles.button} onPress={Login}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={Register}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={ForgetPass}>
        <Text style={styles.buttonText}>Esqueci minha senha</Text>
      </TouchableOpacity>
    </View>
  );
}
