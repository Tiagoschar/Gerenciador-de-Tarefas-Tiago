import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/styles';
import { APP_TITLE } from '../utils/constants';

export default function Header({ pendingCount }) {
  return (
    <View style={styles.header}>
      <Text style={styles.titulo}>{APP_TITLE}</Text>
      <Text style={styles.subtitulo}>{pendingCount} pendentes</Text>
    </View>
  );
}
