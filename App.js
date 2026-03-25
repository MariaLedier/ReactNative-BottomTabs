import Historia from './components/historia';
import PontosTuristicos from './components/turismo';
import InfoGerais from './components/info';
import Contatos from './components/contatos';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="História" 
          component={Historia}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="book" size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen 
          name="Turismo" 
          component={PontosTuristicos}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="map" size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen 
          name="Info" 
          component={InfoGerais}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="information-circle" size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen 
          name="Contatos" 
          component={Contatos}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="call" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}