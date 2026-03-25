import React from 'react';
import { ScrollView, Text, StyleSheet, Image } from 'react-native';

export default function Historia() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>História de Presidente Prudente</Text>

            <Image
                source={require('../assets/parque.jpg')}
                style={styles.image}
            />


            <Text style={styles.text}>
                Presidente Prudente é um município brasileiro do interior do estado de São Paulo, distante 558 quilômetros da capital estadual. Segundo o censo de 2022, do Instituto Brasileiro de Geografia e Estatística (IBGE), a população do município era de 225 668 habitantes, sendo o 40º município paulista mais populoso. Sua área territorial é de aproximadamente 561 km². </Text>
                <Text style={styles.text}>O município foi emancipado de Campos Novos do Paranapanema (atual Campos Novos Paulista) e Conceição de Monte Alegre (hoje distrito de Paraguaçu Paulista) no início da década de 1920. Seu nome é uma referência ao ex-presidente brasileiro Prudente de Morais (1841-1902), que foi um advogado e político brasileiro, tornando-se o primeiro governador paulista na República (1889-1890).</Text>


           

            <Image
                source={require('../assets/indio.jpg')}
                style={styles.image}
            />
              <Text style={styles.text}>Foram os índios xavantes, caingangues e guaranis/guaranis-caiuás os primitivos habitantes da área em que hoje está a região oeste do estado de São Paulo. A colonização da área se deu em meados do século XIX, quando teve início um grande fluxo migratório de mineiros para o território paulista, ocasionado pela diminuição do ouro em Minas Gerais e, também, pela Guerra do Paraguai. A colonização do território, porém, não foi pacífica, tendo ocorrido em meio a conflitos com os povos originários da região.[6]</Text>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { padding: 15 },
    title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
    text: { fontSize: 16, marginBottom: 10 },
    image: { width: '100%', height: 200, marginBottom: 10 }
});