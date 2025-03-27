import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    safeArea: {
      flex: 1,
    },
    keyboardView: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 24,
    },
    logoContainer: {
      alignItems: 'center',
      marginBottom: 40,
    },
    logo: {
      width: 150,
      height: 150,
      marginBottom: 16,
    },
    logoText: {
      fontSize: 32,
      fontWeight: 'bold',
      color: 'white',
      textShadowColor: 'rgba(0, 0, 0, 0.25)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 10,
    },
    loginButton: {
      backgroundColor: 'white',
      borderRadius: 12,
      paddingVertical: 16,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
      marginTop: 16
    },
    loginButtonText: {
      color: '#FF1493',
      fontSize: 18,
      fontWeight: 'bold',
    },
    
  });
  
  export default styles;