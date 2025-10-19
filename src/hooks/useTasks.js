import { useState } from 'react';
import { Alert } from 'react-native';

/**
 * useTasks - hook para gerenciamento CRUD das tarefas
 * Fornece: tarefas, texto, setters e operações (add/update/toggle/delete/clearCompleted)
 */
export function useTasks(initial = []) {
  const [tarefas, setTarefas] = useState(initial);
  const [textoTarefa, setTextoTarefa] = useState('');
  const [editandoId, setEditandoId] = useState(null);

  const adicionarOuAtualizar = (onAddedAnimation) => {
    if (textoTarefa.trim() === '') {
      Alert.alert('Ops!', 'Digite uma tarefa');
      return;
    }

    if (editandoId) {
      setTarefas(prev =>
        prev.map(t => (t.id === editandoId ? { ...t, texto: textoTarefa } : t))
      );
      setEditandoId(null);
    } else {
      const nova = {
        id: Date.now().toString(),
        texto: textoTarefa,
        concluida: false,
        data: new Date().toLocaleTimeString(),
      };
      setTarefas(prev => [nova, ...prev]);
      // Dispara animação externa (hook de animação decide como)
      if (onAddedAnimation) onAddedAnimation(nova.id);
    }

    setTextoTarefa('');
  };

  const toggleComplete = (id) => {
    setTarefas(prev => prev.map(t => (t.id === id ? { ...t, concluida: !t.concluida } : t)));
  };

  const startEdit = (id, texto) => {
    setEditandoId(id);
    setTextoTarefa(texto);
  };

  const remove = (id) => {
    setTarefas(prev => prev.filter(t => t.id !== id));
  };

  const clearCompleted = (onRemoveAnimation) => {
    const concluidas = tarefas.filter(t => t.concluida);
    concluidas.forEach(t => {
      if (onRemoveAnimation) {
        // animação será disparada; callback dentro da animação deve chamar remove
        onRemoveAnimation(t.id, () => remove(t.id));
      } else {
        remove(t.id);
      }
    });
  };

  return {
    tarefas,
    textoTarefa,
    setTextoTarefa,
    editandoId,
    setEditandoId,
    adicionarOuAtualizar,
    toggleComplete,
    startEdit,
    remove,
    clearCompleted,
    setTarefas,
  };
}
