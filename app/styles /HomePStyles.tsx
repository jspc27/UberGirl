import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
    menuButton: {
        position: "absolute",
        top: 20,
        left: 20,
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        padding: 10,
        borderRadius: 50,
    },
    closeButton: {
        padding: 10,
        borderRadius: 50,
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    
    
    sidebar: {
        position: "absolute",
        top: 0,
        left: -300, // Oculto inicialmente
        width: 250,
        height: "100%",
        backgroundColor: "#fff",
        paddingVertical: 20,
        paddingHorizontal: 15,
        borderRightWidth: 1,
        borderRightColor: "#ddd",
        shadowColor: "#000",
        shadowOffset: { width: 2, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    profileContainer: {
        alignItems: "center",
        marginBottom: 20,
    },
    avatarContainer: {
        width: 80,
        height: 80,
        borderRadius: 40,
        overflow: "hidden",
        marginBottom: 10,
        position: "relative",
    },
    avatar: {
        width: "100%",
        height: "100%",
    },
    onlineIndicator: {
        position: "absolute",
        bottom: 5,
        right: 5,
        width: 15,
        height: 15,
        borderRadius: 10,
        backgroundColor: "green",
        borderWidth: 2,
        borderColor: "white",
    },
    username: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
    },
    userRole: {
        fontSize: 14,
        color: "#777",
    },
    menuSection: {
        marginTop: 20,
    },
    menuItem: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 12,
    },
    menuText: {
        fontSize: 16,
        marginLeft: 10,
        color: "#333",
    },
    logoutButton: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
        paddingVertical: 10,
        backgroundColor: "#FF1493",
        borderRadius: 8,
        paddingHorizontal: 15,
        justifyContent: "center",
    },
    logoutText: {
        fontSize: 16,
        color: "#fff",
        marginLeft: 10,
    },
    footer: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        padding: 15,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: "center",
    },
    
    input: {
        width: "90%",
        height: 40,
        backgroundColor: "#fff",
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
    },
    
    button: {
        width: "90%",
        backgroundColor: "#FF1493",
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: "center",
    },
    
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    closeButtonContainer: {
        width: "100%",
        alignItems: "flex-end",
        padding: 10,
    },
    
    
});

export default styles;
