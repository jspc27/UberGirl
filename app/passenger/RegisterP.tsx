import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, KeyboardAvoidingView, Platform, StatusBar } from 'react-native';
import { Lock, Mail, EyeOff, Eye, Phone, ChevronLeft } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from "../styles /RegisterPStyles"; 
import { router } from 'expo-router';

const RegisterP = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState ('');

  const handleLogin = () => {
    console.log('Iniciando sesión con:', email);
  };

  return (
    <LinearGradient
      colors={['#FF69B4', '#FF1493']}
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
              source={require('../../assets/images/LogoPink.png')} 
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          <View style={styles.inputContainer}>
            <View style={styles.inputWrapper}>
              <Mail color="#FF1493" size={24} style={styles.inputIcon} />
              <TextInput
                placeholder="Nombre completo"
                placeholderTextColor="#999"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                style={styles.input}
              />
            </View>

            <View style={styles.inputWrapper}>
              <Mail color="#FF1493" size={24} style={styles.inputIcon} />
              <TextInput
                placeholder="Correo electrónico"
                placeholderTextColor="#999"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                style={styles.input}
              />
            </View>

            <View style={styles.inputWrapper}>
  <Phone color="#FF1493" size={24} style={styles.inputIcon} />
  <TextInput
    placeholder="Teléfono"
    placeholderTextColor="#999"
    value={phone}
    onChangeText={setPhone}
    keyboardType="phone-pad"
    autoCapitalize="none"
    style={styles.input}
  />
</View>

            <View style={styles.inputWrapper}>
              <Lock color="#FF1493" size={24} style={styles.inputIcon} />
              <TextInput
                placeholder="Contraseña"
                placeholderTextColor="#999"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                style={styles.input}
              />
              <TouchableOpacity 
                onPress={() => setShowPassword(!showPassword)}
                style={styles.passwordToggle}
              >
                {showPassword ? (
                  <EyeOff color="#FF1493" size={24} />
                ) : (
                  <Eye color="#FF1493" size={24} />
                )}
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity 
            onPress={handleLogin}
            style={styles.loginButton}
          >
            <Text style={styles.loginButtonText}>Registrarse</Text>
          </TouchableOpacity>

          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>¿Ya tienes cuenta? </Text>
            <TouchableOpacity
           onPress={() => router.push("/")}
            >
              <Text style={styles.signupLink}>Iniciar Sesión</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default RegisterP;