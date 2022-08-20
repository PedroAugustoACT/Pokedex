import React, { useEffect, useState } from "react";
import {View, Text, StyleSheet, Touchable, Image, ButtonProps, Button, TouchableOpacity, Alert} from 'react-native';
import {Feather} from '@expo/vector-icons'
import { styles } from './styles';

export function Homepage() {
  return (
    <View style={styles.containerBackground}>
        <Image 
          source={require('../../../assets/pokedex_logo.png')}
          //style={{ width: 300, height: 120 }}
          />
        <Text style={styles.txtSubtitle}>Descubra e viage pelo mundo Pokémon</Text>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonBox}>
                <Text style={styles.txtButton}>Vamos lá</Text>
                <Feather name="arrow-right" size={22} color='white' /> 
            </TouchableOpacity>
        </View>
        <View style={styles.footer}>
              <View >
                <Text style={styles.footerText}>Developed by Pedro Augusto {'\u00A9'}</Text>
              </View>   
        </View>
    </View>
  );
}