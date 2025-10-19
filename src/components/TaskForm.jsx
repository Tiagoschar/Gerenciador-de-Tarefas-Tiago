import React from 'react';
import { View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, Platform } from 'react-native';
import { styles } from '../styles/styles';

export default function TaskForm({
  textoTarefa,
  setTextoTarefa,
  onSubmit,
  isEditing,
  showClearButton,
  onClear
}) {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.formularioContainer}>
      <View style={styles.formulario}>
        <TextInput
          style={styles.input}
          placeholder="Digite uma nova tarefa..."
          value={textoTarefa}
          onChangeText={setTextoTarefa}
          onSubmitEditing={onSubmit}
          returnKeyType="done"
        />

        <TouchableOpacity style={styles.botaoAdicionar} onPress={onSubmit}>
          <Text style={styles.textoBotaoAdicionar}>
            {isEditing ? 'Atualizar' : 'Adicionar'}
          </Text>
        </TouchableOpacity>

        {showClearButton && (
          <TouchableOpacity style={styles.botaoLimpar} onPress={onClear}>
            <Text style={styles.textoBotaoLimpar}>Limpar Concluídas</Text>
          </TouchableOpacity>
        )}
      </View>
    </KeyboardAvoidingView>
  );
}
