import React from 'react';
import { ScrollView, Text, StyleSheet, Image, View } from 'react-native';

export default function PontosTuristicos() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Pontos Turísticos</Text>

            {/* CARD 1 */}
            <View style={styles.card}>
                <Image
                    source={require('../assets/povo.jpg')}
                    style={styles.image}

                />
                <Text style={styles.subtitle}>Parque do Povo</Text>
                <Text style={styles.text}>
                    Um dos principais cartões-postais da cidade, ideal para caminhadas,
                    esportes e lazer em família.
                </Text>
            </View>

            {/* CARD 2 */}
            <View style={styles.card}>
                <Image
                     source={require('../assets/catedral.jpg')}
                    style={styles.image}
                />
                <Text style={styles.subtitle}>Catedral São Sebastião</Text>
                <Text style={styles.text}>
                    Importante ponto religioso e arquitetônico, localizado no centro da cidade.
                </Text>
            </View>

            {/* CARD 3 */}
            <View style={styles.card}>
                <Image
                   source={require('../assets/cidade.jpg')}
                    style={styles.image}
                />
                <Text style={styles.subtitle}>Cidade da Criança</Text>
                <Text style={styles.text}>
                    Espaço voltado para lazer infantil, com atrações, áreas verdes e atividades recreativas.
                </Text>
            </View>

            {/* CARD 4 */}
            <View style={styles.card}>
                <Image
                  source={require('../assets/prudenshopping.jpg')}
                    style={styles.image}
                />
                <Text style={styles.subtitle}>Prudenshopping</Text>
                <Text style={styles.text}>
                    Principal centro de compras da cidade, com lojas, cinema e praça de alimentação.
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
        padding: 10,
        marginBottom: 15,
        elevation: 3, // sombra Android
    },

    image: {
        width: '100%',
        height: 180,
        borderRadius: 8
    },

    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10
    },

    text: {
        fontSize: 15,
        marginTop: 5,
        color: '#555'
    }
});