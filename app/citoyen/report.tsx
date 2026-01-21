import React from 'react';
import { View, ScrollView, StyleSheet, FlatList} from 'react-native';
import { Card, Text, Button, IconButton} from 'react-native-paper';
import { useRouter } from 'expo-router';
import Colors from '../../constants/colors';

const containers = [
  {
    id: 'verre',
    title: 'Verre',
    icon: 'bottle-wine',
    color: Colors.tertiary,
    description: 'Conteneurs verre (bouteilles, bocaux)',
  },
  {
    id: 'plastique',
    title: 'Plastique',
    icon: 'recycle',
    color: Colors.secondary,
    description: 'Bouteilles PET, emballages plastiques',
  },
  {
    id: 'carton',
    title: 'Carton',
    icon: 'package-variant-closed',
    color: Colors.primary,
    description: 'Boîtes carton, emballages alimentaires',
  },
  {
    id: 'menager',
    title: 'Déchets Ménagers',
    icon: 'trash-can-outline',
    color: Colors.error,
    description: 'Poubelle grise (non recyclable)',
  },
  {
    id: 'organique',
    title: 'Organique',
    icon: 'leaf',
    color: Colors.success,
    description: 'Déchets verts, restes alimentaires',
  },
];

export default function report() {
  const router = useRouter();

  const renderContainer = ({ item }: { item: any }) => (
    <Card style={styles.containerCard}>
      <Card.Content style={styles.cardContent}>
        <View style={[styles.iconCircle, { backgroundColor: item.color + '20' }]}>
          <IconButton
            icon={item.icon}
            size={24}
            iconColor={item.color}
          />
        </View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Button
          mode="contained"
          style={styles.signalerButton}
          buttonColor={item.color}
          textColor={Colors.textOnPrimary}
        >
          Signaler
        </Button>
      </Card.Content>
    </Card>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Signaler un problème</Text>
        <Text style={styles.headerSubtitle}>
          Sélectionne le type de conteneur défectueux
        </Text>
      </View>

      <FlatList
        data={containers}
        renderItem={renderContainer}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.grid}
        showsVerticalScrollIndicator={false}
      />
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
    fontWeight: '900',
    color: Colors.primary,
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
    fontWeight: '500',
  },
  grid: {
    padding: 20,
    gap: 16,
  },
  containerCard: {
    flex: 1,
    aspectRatio: 1,
    borderRadius: 20,
    elevation: 4,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  cardContent: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  iconCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.primary,
    textAlign: 'center',
    marginBottom: 4,
  },
  description: {
    fontSize: 12,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 14,
    flex: 1,
  },
  signalerButton: {
    borderRadius: 12,
    paddingVertical: 4,
    marginTop: 8,
  },
});
