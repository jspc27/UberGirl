import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    menuButton: {
        position: "absolute",
        top: 50,
        left: 20,
        zIndex: 10,
        backgroundColor: "rgba(255,255,255,0.2)",
        padding: 10,
        borderRadius: 30,
    },
    sidebar: {
        position: "absolute",
        top: 0,
        width: 300,
        height: "100%",
        backgroundColor: "white",
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        shadowColor: "#000",
        shadowOffset: { width: 5, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 10,
        paddingHorizontal: 20,
        paddingTop: 60,
    },
    profileContainer: {
        alignItems: "center",
        marginBottom: 30,
        borderBottomWidth: 1,
        borderBottomColor: "#E0E0E0",
        paddingBottom: 20,
    },
    avatarContainer: {
        position: "relative",
        marginBottom: 15,
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 3,
        borderColor: "#8A2BE2",
    },
    onlineIndicator: {
        position: "absolute",
        bottom: 10,
        right: 10,
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: "#4CAF50",
        borderWidth: 2,
        borderColor: "white",
    },
    username: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#333",
        marginTop: 10,
    },
    userRole: {
        fontSize: 16,
        color: "#666",
    },
    menuSection: {
        marginBottom: 30,
    },
    menuItem: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#F0F0F0",
    },
    menuText: {
        fontSize: 18,
        color: "#333",
        marginLeft: 15,
    },
    logoutButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FF1493",
        paddingVertical: 15,
        borderRadius: 30,
        marginTop: 20,
    },
    logoutText: {
        color: "white",
        fontSize: 18,
        marginLeft: 10,
    },
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
    },
});

export default styles;