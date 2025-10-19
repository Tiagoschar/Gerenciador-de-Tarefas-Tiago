import React from 'react';
import { FlatList } from 'react-native';
import TaskItem from './TaskItem';
import EmptyList from './EmptyList';

export default function TaskList({
  tarefas,
  getAnimationForId,
  onToggleComplete,
  onEdit,
  onDelete
}) {
  const renderItem = ({ item }) => (
    <TaskItem
      item={item}
      animationValue={getAnimationForId(item.id)}
      onToggleComplete={onToggleComplete}
      onEdit={onEdit}
      onDelete={onDelete}
    />
  );

  return (
    <FlatList
      data={tarefas}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      style={{ flex: 1 }}
      contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 20 }}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={<EmptyList />}
    />
  );
}
