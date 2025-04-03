import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, KeyboardAvoidingView, Platform, StatusBar } from 'react-native';
import { Lock, Mail, EyeOff, Eye, ChevronLeft} from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from "../styles /LoginPStyles"; 
import { router } from 'expo-router';

const LoginP = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

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
      <View>
  </View>
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
            <Text style={styles.logoText}>Pasajera(o)</Text>
          </View>

          <View style={styles.inputContainer}>
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
            onPress={() => router.push("/passenger/HomeP")}
            style={styles.loginButton}
          >
            <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
          </TouchableOpacity>

          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>¿No tienes cuenta? </Text>
            <TouchableOpacity
           onPress={() => router.push("/passenger/RegisterP")}
            >
              <Text style={styles.signupLink}>Regístrate</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default LoginP;