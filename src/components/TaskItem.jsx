import React from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { styles } from '../styles/styles';

export default function TaskItem({
  item,
  onToggleComplete,
  onEdit,
  onDelete,
  animationValue
}) {
  const animatedStyle = {
    opacity: animationValue,
    transform: [
      {
        translateY: animationValue.interpolate({
          inputRange: [0, 1],
          outputRange: [50, 0],
        }),
      },
    ],
  };

  return (
    <Animated.View style={[styles.itemTarefa, animatedStyle]}>
      <TouchableOpacity style={styles.conteudoTarefa} onPress={() => onToggleComplete(item.id)}>
        <View style={[styles.checkbox, item.concluida && styles.checkboxConcluida]}>
          {item.concluida && <Text style={styles.checkmark}>✓</Text>}
        </View>

        <View style={styles.textoContainer}>
          <Text style={[styles.textoTarefa, item.concluida && styles.textoConcluido]}>{item.texto}</Text>
          <Text style={styles.dataTarefa}>{item.data}</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.botoesAcao}>
        <TouchableOpacity style={[styles.botaoAcao, styles.botaoEditar]} onPress={() => onEdit(item.id, item.texto)}>
          <Text style={styles.textoBotaoAcao}>✏️</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.botaoAcao, styles.botaoExcluir]} onPress={() => onDelete(item.id)}>
          <Text style={styles.textoBotaoAcao}>🗑️</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
}
