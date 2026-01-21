import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import {Button, Text, TextInput} from 'react-native-paper'
import Colors from '../constants/colors';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TEST_USER= {
    username: "test@aerlaw.tech",
    password: "Test1234!"
}

const login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

const handleLogin = () => {
    if (username === TEST_USER.username && password === TEST_USER.password) {
        console.log("Login successful");
        router.replace("/");
        AsyncStorage.setItem("user", JSON.stringify({ username }));
    } else {
        setError("Invalid credentials");
    }
}

    return (
        <View style={[styles.container, { backgroundColor: Colors.background }]}>
            <View style={[styles.content, { backgroundColor: Colors.surface }]}>
                <Text style={[styles.title, { color: Colors.primary }]}>
                    EcoTrack Citoyen
                </Text>
                <Text style={[styles.subtitle, { color: Colors.textSecondary }]}>
                    Login
                </Text>

                {error && (
                    <Text style={styles.error} variant="headlineSmall">
                        {error}
                    </Text>
                )}

                <TextInput 
                    label="Username" 
                    value={username}
                    onChangeText={setUsername}
                    mode="outlined" 
                    style={styles.input}
                    outlineStyle={[styles.outlineStyle, { borderColor: Colors.primary }]}
                    left={<TextInput.Icon icon="account-outline" color={Colors.primary} />}
                />

                <TextInput
                    label="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    mode="outlined"
                    style={styles.input}
                    outlineStyle={[styles.outlineStyle, { borderColor: Colors.primary }]}
                    left={<TextInput.Icon icon="lock-outline" color={Colors.primary}/>}
                />

                <Button 
                    mode="contained" 
                    style={styles.button}
                    textColor={Colors.textOnSecondary}
                    buttonColor={Colors.secondary} 
                    disabled={username === "" || password === ""}
                    onPress={handleLogin}
                    icon="login"
                >
                    Se connecter
                </Button>
            </View>
        </View>
    )
}

export default login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 24,
    },
    content: {
        width: '100%',
        maxWidth: 400,
        alignSelf: 'center',
        padding: 32,
        borderRadius: 24,
        shadowColor: Colors.primary,
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.1,
        shadowRadius: 20,
        elevation: 8,
        borderWidth: 1,
        borderColor: Colors.border,
    },
    input: {
        marginBottom: 20,
    },
    button: {
        marginTop: 24,
        borderRadius: 16,
        paddingVertical: 6,
    },
    title: {
        fontSize: 32,
        fontWeight: '900',
        textAlign: 'center',
        marginBottom: 12,
        textShadowColor: 'rgba(0,0,0,0.1)',
        textShadowOffset: {width: 0, height: 2},
        textShadowRadius: 4,
    },
    subtitle: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 32,
        fontWeight: '500',
    },
    outlineStyle: {
        borderWidth: 1.5,
        borderRadius: 16,
    },
    error:{
        color: Colors.error,
        textAlign: 'center',
        marginBottom: 16,
    }
})