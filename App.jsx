import React from 'react';
import { View } from 'react-native';
import Header from './src/components/Header';
import TaskForm from './src/components/TaskForm';
import TaskList from './src/components/TaskList';
import { styles } from './src/styles/styles';
import { useTasks } from './src/hooks/useTasks';
import { useAnimations } from './src/hooks/useAnimations';

export default function App() {
  const {
    tarefas,
    textoTarefa,
    setTextoTarefa,
    editandoId,
    adicionarOuAtualizar,
    toggleComplete,
    startEdit,
    remove,
    clearCompleted,
  } = useTasks([]);

  const { getAnimationForId, animateIn, animateOut } = useAnimations();

  const handleAddOrUpdate = () => {
    // adicionarOuAtualizar aceita callback para animação quando adiciona
    adicionarOuAtualizar((id) => animateIn(id));
  };

  const handleDeleteWithAnimation = (id) => {
    // animação de saída chama remove quando terminada
    animateOut(id, () => remove(id));
  };

  const handleClearCompleted = () => {
    // passamos a função de animação que recebe id e callback de remoção
    clearCompleted((id, callback) => animateOut(id, callback));
  };

  return (
    <View style={styles.container}>
      <Header pendingCount={tarefas.filter(t => !t.concluida).length} />

      <TaskForm
        textoTarefa={textoTarefa}
        setTextoTarefa={setTextoTarefa}
        onSubmit={handleAddOrUpdate}
        isEditing={!!editandoId}
        showClearButton={tarefas.some(t => t.concluida)}
        onClear={handleClearCompleted}
      />

      <TaskList
        tarefas={tarefas}
        getAnimationForId={getAnimationForId}
        onToggleComplete={toggleComplete}
        onEdit={startEdit}
        onDelete={handleDeleteWithAnimation}
      />
    </View>
  );
}
