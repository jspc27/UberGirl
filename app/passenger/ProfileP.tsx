import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity, Animated, StatusBar, Image } from "react-native";
import { User, Map, LogOut, Menu as MenuIcon, X, Settings, HelpCircle, ChevronLeft } from "lucide-react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../styles /ProfilePStyles";
import { router } from "expo-router";

const HomeP = () => {

    return (
    <LinearGradient
        colors={['#FF69B4', '#FF1493']}
        style={styles.container}
    >
        <StatusBar barStyle="light-content" backgroundColor="#FF69B4" />
        <View style={styles.container}>
        <TouchableOpacity onPress={() => router.push('/passenger/HomeP')}>
      <ChevronLeft color="#FF1493" size={32} />
    </TouchableOpacity>
            {/* Contenido principal */}
            <View style={styles.content}>
                <Text style={styles.welcomeText}>Perfil</Text>
                {/* Aquí puedes agregar más contenido */}
            </View>
        </View>
    </LinearGradient>
    );
};

export default HomeP;