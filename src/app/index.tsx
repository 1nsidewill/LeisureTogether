import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { supabase } from '@/src/initSupabase';

const LoginScreen = () => {
    // const handleLogin = async () => {
    //     const { user, session, error } = await supabase.auth.signIn({
    //         provider: 'kakao'
    //     });

    //     if (error) console.error('Error logging in:', error.message);
    //     else console.log('Success! User:', user, 'Session:', session);
    // };

    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={{ uri: 'https://yourapp.com/logo.png' }} // Your app logo URL
            />
            <Text style={styles.title}>Welcome to LeisureTogether</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Login with Kakao</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    logo: {
        width: 120,
        height: 120,
        marginBottom: 20
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20
    },
    button: {
        backgroundColor: '#FEE500',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5
    },
    buttonText: {
        color: '#000',
        fontSize: 16
    }
});

export default LoginScreen;