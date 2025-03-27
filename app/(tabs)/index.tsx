import React from "react";
import { View, Text, TouchableOpacity, StatusBar, SafeAreaView, KeyboardAvoidingView, Image, Platform } from "react-native";
import { useRouter } from "expo-router";
import styles from "../styles /IndexStyles";
import { LinearGradient } from "expo-linear-gradient";

const SelectRoleScreen = () => {
  const router = useRouter();

  return (
    <LinearGradient
      colors={['#FF69B4', '#8A2BE2']} // Gradiente de rosa a morado
      style={styles.container}
    >
      <StatusBar barStyle="light-content" backgroundColor="#FF69B4" />
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView 
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyboardView}
        >
          <View style={styles.logoContainer}>
            <Image 
              source={require('../../assets/images/ubergirl-logo.png')} 
              style={styles.logo}
              resizeMode="contain"
            />
            <Text style={styles.logoText}>Elige tu rol</Text>
          </View>

          <TouchableOpacity 
            onPress={() => router.push("/passenger/LoginP")}
            style={styles.loginButton}
          >
            <Text style={styles.loginButtonText}>Soy Pasajera</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={() => router.push("/driver/LoginD")}
            style={[styles.loginButton, { marginTop: 16 }]} // Espacio entre botones
          >
            <Text style={styles.loginButtonText}>Soy Conductora</Text>
          </TouchableOpacity>

        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default SelectRoleScreen;