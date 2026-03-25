import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function InfoGerais() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Informações Gerais</Text>

      {/* CARD POPULAÇÃO */}
      <View style={styles.card}>
        <Ionicons name="people" size={24} color="#ff6a00" />
        <Text style={styles.subtitle}>População</Text>
        <Text style={styles.text}>Aproximadamente 230 mil habitantes</Text>
      </View>

      {/* CARD LOCALIZAÇÃO */}
      <View style={styles.card}>
        <Ionicons name="location" size={24} color="#ff6a00" />
        <Text style={styles.subtitle}>Localização</Text>
        <Text style={styles.text}>Interior do estado de São Paulo</Text>
      </View>

      {/* CARD CLIMA */}
      <View style={styles.card}>
        <Ionicons name="sunny" size={24} color="#ff6a00" />
        <Text style={styles.subtitle}>Clima</Text>
        <Text style={styles.text}>Tropical, com verões quentes e invernos secos</Text>
      </View>

      {/* CARD ECONOMIA */}
      <View style={styles.card}>
        <Ionicons name="cash" size={24} color="#ff6a00" />
        <Text style={styles.subtitle}>Economia</Text>
        <Text style={styles.text}>
          Baseada no comércio, serviços, educação e agronegócio.
        </Text>
      </View>

      {/* CARD EDUCAÇÃO */}
      <View style={styles.card}>
        <Ionicons name="school" size={24} color="#ff6a00" />
        <Text style={styles.subtitle}>Educação</Text>
        <Text style={styles.text}>
          Destaque para universidades e instituições de ensino superior.
        </Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#f4f6f9'
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center'
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    elevation: 3,
    alignItems: 'center'
  },

  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8
  },

  text: {
    fontSize: 15,
    marginTop: 5,
    textAlign: 'center',
    color: '#555'
  }
});