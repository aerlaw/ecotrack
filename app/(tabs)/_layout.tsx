import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Tabs } from 'expo-router'
import {MaterialCommunityIcons as Icon} from '@expo/vector-icons'

export default function TabsLayout() { 
    return (
      <Tabs>
        <Tabs.Screen name="index" 
        options={{ 
            title: "Home",
            tabBarLabel: "Acceuil",
            tabBarIcon: ({ color, size }) => (
                <Icon name="view-dashboard" color={color} size={size} />
            )
         }} />
        <Tabs.Screen 
            name="signalement-conteneur" 
            options={{ 
                title: "Conteneur Plein",
                tabBarLabel: "Conteneur",
                tabBarIcon: ({ color, size }) => (
                    <Icon name="alert-box" color={color} size={size} />
            )
         }} />
         <Tabs.Screen 
            name="gamification" 
            options={{ 
                title: "Gamification",
                tabBarLabel: "Gamification",
                tabBarIcon: ({ color, size }) => (
                    <Icon name="star-circle" color={color} size={size} />
            )
         }} />
         <Tabs.Screen 
            name="historique" 
            options={{ 
                title: "Historique",
                tabBarLabel: "Historique",
                tabBarIcon: ({ color, size }) => (
                    <Icon name="history" color={color} size={size} />
            )
         }} />
         <Tabs.Screen 
            name="horaire" 
            options={{ 
                title: "Horaire",
                tabBarLabel: "Horaire",
                tabBarIcon: ({ color, size }) => (
                    <Icon name="calendar-clock" color={color} size={size} />
            )
         }} />
      </Tabs>
    )
}

const styles = StyleSheet.create({})
