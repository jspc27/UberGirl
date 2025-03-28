import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity, Animated, StatusBar, Image } from "react-native";
import { User, Map, LogOut, Menu as MenuIcon, X, Settings, HelpCircle } from "lucide-react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../styles /HomePStyles";
import { router } from "expo-router";

const HomeP = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const sidebarAnim = useRef(new Animated.Value(-300)).current;

    const toggleSidebar = () => {
        Animated.spring(sidebarAnim, {
            toValue: sidebarOpen ? -300 : 0,
            friction: 10,
            tension: 40,
            useNativeDriver: false,
        }).start();
        setSidebarOpen(!sidebarOpen);
    };

    return (
    <LinearGradient
        colors={['#FF69B4', '#FF1493']}
        style={styles.container}
    >
        <StatusBar barStyle="light-content" backgroundColor="#FF69B4" />
        <View style={styles.container}>
            {/* Botón de menú */}
            <TouchableOpacity 
                style={styles.menuButton} 
                onPress={toggleSidebar}
            >
                {sidebarOpen ? (
                    <X size={28} color="#FF1493" />
                ) : (
                    <MenuIcon size={28} color="white" />
                )}
            </TouchableOpacity>

            {/* Sidebar animado */}
            <Animated.View style={[styles.sidebar, { left: sidebarAnim }]}>
                {/* Sección de perfil */}
                <View style={styles.profileContainer}>
                    <View style={styles.avatarContainer}>
                        <Image 
                            source={require('../../assets/images/profile-placeholder.png')} 
                            style={styles.avatar}
                        />
                        <View style={styles.onlineIndicator} />
                    </View>
                    <Text style={styles.username}>María Rodríguez</Text>
                    <Text style={styles.userRole}>Pasajera</Text>
                </View>

                {/* Menú de navegación */}
                <View style={styles.menuSection}>
                    <TouchableOpacity onPress={() => router.push("/passenger/ProfileP")} style={styles.menuItem}>
                        <User size={22} color="#FF1493" />
                        <Text style={styles.menuText}>Mi Perfil</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuItem}>
                        <Map size={22} color="#FF1493" />
                        <Text style={styles.menuText}>Mis Viajes</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuItem}>
                        <Settings size={22} color="#FF1493" />
                        <Text style={styles.menuText}>Configuración</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuItem}>
                        <HelpCircle size={22} color="#FF1493" />
                        <Text style={styles.menuText}>Ayuda</Text>
                    </TouchableOpacity>
                </View>

                {/* Botón de Cerrar Sesión */}
                <TouchableOpacity style={styles.logoutButton}>
                    <LogOut size={22} color="#fff" />
                    <Text style={styles.logoutText}>Cerrar Sesión</Text>
                </TouchableOpacity>
            </Animated.View>

            {/* Contenido principal */}
            <View style={styles.content}>
                <Text style={styles.welcomeText}>Bienvenida, María</Text>
                {/* Aquí puedes agregar más contenido */}
            </View>
        </View>
    </LinearGradient>
    );
};

export default HomeP;