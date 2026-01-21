import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, Dimensions, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { Card, Text, Button} from "react-native-paper";
import Colors from "../../constants/colors";

type User = {
    username: string
}

export default function Index() {
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();
    const { width } = Dimensions.get("window");

    useEffect(() => {
        (async () => {
            const loggedUser = await AsyncStorage.getItem("user")

            if (loggedUser) {
                setUser(JSON.parse(loggedUser));
            } else {
                router.replace("/login");
            }
        })();
    }, []);

    if (!user) return null;

    return (
    <ScrollView style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerTitle}>Hello {user.username}</Text>
            <Text style={styles.headerSubtitle}>EcoTrack Citizen - Waste Management</Text>
        </View>
        <View style={styles.cardsContainer}>

        {/* Card 1: Reporting a problem */}
        <Card style={styles.card}>
          <Card.Content>
            <View style={styles.cardIconContainer}>
              <Image 
                source={require("../../assets/images/icons8-erreur-nft-64.png")}
                style={styles.cardImage}
                resizeMode="contain"/>
            </View>
            <Text style={styles.cardTitle}>Signaler un problème</Text>
            <Text style={styles.cardText}>
              Déchets au sol, conteneur cassé, odeur...
            </Text>
            <Button
              mode="contained"
              style={styles.cardButton}
              buttonColor={Colors.secondary}
              textColor={Colors.textOnSecondary}
              onPress={() => router.push("./citoyen/report")}
            >
              Signaler
            </Button>
          </Card.Content>
        </Card>

        {/* Card 2: Challenges */}
        <Card style={styles.card}>
          <Card.Content>
            <View style={styles.cardIconContainer}>
              <Text style={styles.cardIcon}>🥇</Text>
            </View>
            <Text style={styles.cardTitle}>Défis Écologiques</Text>
            <Text style={styles.cardText}>
              Participer à des challenges collectifs
            </Text>
            <Button
              mode="contained"
              style={styles.cardButton}
              buttonColor={Colors.tertiary}
              textColor={Colors.textOnSecondary}
              onPress={() => router.push("../citoyen/challenges")}
            >
              Voir les défis
            </Button>
          </Card.Content>
        </Card>

        {/* Card 3: Impact */}
        <Card style={styles.card}>
          <Card.Content>
            <View style={styles.cardIconContainer}>
              <Text style={styles.cardIcon}>📊</Text>
            </View>
            <Text style={styles.cardTitle}>Mon impact</Text>
            <Text style={styles.cardText}>
              Visualiser CO₂ évité, déchets recyclés
            </Text>
            <Button
              mode="contained"
              style={styles.cardButton}
              buttonColor={Colors.primary}
              textColor={Colors.textOnPrimary}
              onPress={() => router.push("./citoyen/impact")}
            >
              Voir mon impact
            </Button>
          </Card.Content>
        </Card>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    padding: 24,
    paddingTop: 60,
    backgroundColor: Colors.surface,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "900",
    color: Colors.primary,
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
    fontWeight: "500",
  },
  cardsContainer: {
    padding: 24,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    flexWrap: "wrap",
    gap: 16,  
  },
  cardsContainerDesktop: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    paddingHorizontal: 32,
    paddingVertical: 24,
  },
  cardsContainerMobile: {
    gap: 20,
  },
  card: {
    borderRadius: 20,
    elevation: 6,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    width: Dimensions.get("window").width > 768 ? "30%" : "100%",
    aspectRatio: 1,
    marginBottom: 20,
  },
  cardImage: {
    width: 48,
    height: 48,
  }
  ,
  cardContent: {
    flex: 1,
    padding: 20,
    gap: 12,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  cardIconContainer: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: Colors.surfaceVariant,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 16,
  },
  cardIcon: {
    fontSize: 32,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: Colors.primary,
    textAlign: "center",
    marginBottom: 8,
    width: "100%",
  },
  cardText: {
    fontSize: 13,
    color: Colors.textSecondary,
    textAlign: "center",
    marginBottom: 16,
    lineHeight: 16,
    flex: 1,
    width: "100%",
    paddingHorizontal: 4,
  },
  cardButton: {
    borderRadius: 12,
    paddingVertical: 2,
    width: "90%",
    alignSelf: "center",
  }
});