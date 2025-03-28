import React, { useState, useRef, useEffect } from "react";
import { View, Text, TouchableOpacity, Animated, StatusBar, Image, TextInput, Alert } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { User, Map, LogOut, Menu as MenuIcon, X, Settings, HelpCircle } from "lucide-react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../styles /HomePStyles";
import { router } from "expo-router";

const HomeP = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const sidebarAnim = useRef(new Animated.Value(-300)).current;
    const [ubicacion, setUbicacion] = useState("");
    const [destino, setDestino] = useState("");
    const [region, setRegion] = useState({
        latitude: 4.6097,
        longitude: -74.0817,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
    });
    
    useEffect(() => {
        const obtenerUbicacion = async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                Alert.alert("Permiso denegado", "No se pudo acceder a la ubicación");
                return;
            }
            let location = await Location.getCurrentPositionAsync({});
            setRegion({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05,
            });
            setUbicacion(`${location.coords.latitude}, ${location.coords.longitude}`);
        };

        obtenerUbicacion();
    }, []);

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
        <LinearGradient colors={["#FF69B4", "#FF1493"]} style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#FF69B4" />
            
            <TouchableOpacity
    style={[
        styles.menuButton,
        { zIndex: sidebarOpen ? -1 : 10 } // Oculta detrás del sidebar cuando está abierto
    ]}
    onPress={toggleSidebar}
>
    <MenuIcon size={28} color="#FF1493" />
</TouchableOpacity>



            <View style={{ flex: 1 }}>
                <MapView style={styles.map} region={region}>
                    <Marker coordinate={{ latitude: region.latitude, longitude: region.longitude }} />
                </MapView>
            </View>

            <Animated.View style={[styles.sidebar, { left: sidebarAnim }]}>
    {/* Botón de cerrar en la esquina superior derecha del sidebar */}
    <View style={styles.closeButtonContainer}>
        <TouchableOpacity onPress={toggleSidebar}>
            <X size={28} color="#FF1493" />
        </TouchableOpacity>
    </View>

    <View style={styles.profileContainer}>
        <View style={styles.avatarContainer}>
            <Image source={require("../../assets/images/profile-placeholder.png")} style={styles.avatar} />
            <View style={styles.onlineIndicator} />
        </View>
        <Text style={styles.username}>María Rodríguez</Text>
        <Text style={styles.userRole}>Pasajera</Text>
    </View>

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

    <TouchableOpacity style={styles.logoutButton}>
        <LogOut size={22} color="#fff" />
        <Text style={styles.logoutText}>Cerrar Sesión</Text>
    </TouchableOpacity>
</Animated.View>


            <View style={styles.footer}>
                <TextInput
                    style={styles.input}
                    placeholder="Ubicación actual"
                    placeholderTextColor="#666"
                    value={ubicacion}
                    onChangeText={setUbicacion}
                    editable={false}
                />
                <TextInput
                    style={styles.input}
                    placeholder="¿A dónde quieres ir?"
                    placeholderTextColor="#666"
                    value={destino}
                    onChangeText={setDestino}
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Confirmar</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
};

export default HomeP;
