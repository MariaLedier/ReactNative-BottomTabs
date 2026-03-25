import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';

export default function Contatos() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Contatos Úteis</Text>

      {/* Emergência */}
      <View style={styles.box}>
        <Text style={styles.subtitle}>🚨 Emergência</Text>
        <Text style={styles.text}>Polícia: 190</Text>
        <Text style={styles.text}>Bombeiros: 193</Text>
        <Text style={styles.text}>SAMU: 192</Text>
      </View>

      {/* Hospitais */}
      <View style={styles.box}>
        <Text style={styles.subtitle}>🏥 Hospitais</Text>
        <Text style={styles.text}>Hospital Regional</Text>
        <Text style={styles.text}>Santa Casa</Text>
      </View>

      {/* Transporte */}
      <View style={styles.box}>
        <Text style={styles.subtitle}>🚌 Transporte</Text>
        <Text style={styles.text}>Rodoviária</Text>
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

  box: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12
  },

  subtitle: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 5
  },

  text: {
    fontSize: 15,
    marginBottom: 3
  }
});