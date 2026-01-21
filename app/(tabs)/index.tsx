import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

type User = {
    username: string
}

export default function Index() {
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();

    useEffect(() => {
        (async () => {
            const loggedUser = await AsyncStorage.getItem("user")

            if (loggedUser) {
                setUser(JSON.parse(loggedUser));
            } else {
                router.replace("/login");
            }
        })()
    });

    return (
    <View>
      <Text>Index</Text>
    </View>
  );
}

const styles = StyleSheet.create({});