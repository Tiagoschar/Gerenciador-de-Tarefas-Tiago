# Gerenciador de Tarefas (refatorado)

# Feito por: Tiago Schartner Carvalho

## Objetivo
Refatoração do código original (Codigo.jsx) em uma estrutura de projeto modular, separando responsabilidades em componentes, hooks, estilos e constantes.

## Organização do projeto
- `src/components` - componentes visuais (Header, TaskForm, TaskList, TaskItem, EmptyList)
- `src/hooks` - hooks customizados (`useTasks` para CRUD; `useAnimations` para animações)
- `src/styles` - estilos centralizados em `styles.js` usando `StyleSheet.create`
- `src/utils` - constantes e configurações (cores, textos)
- `App.jsx` - arquivo de entrada que compõe os componentes usando os hooks

## O que foi aplicado / conceitos
- **Componentização**: cada parte da UI é isolada (separação de responsabilidades), facilitando manutenção e testes.
- **Hooks customizados**:
  - `useTasks` contém toda a lógica de estado e ações (create, read, update, delete e limpar concluídas). Ele expõe funções que o componente de alto nível usa.
  - `useAnimations` centraliza o gerenciamento de `Animated.Value` por `id`, com helpers `animateIn` e `animateOut`.
- **Estilos centralizados**: todos os estilos foram colocados em `styles/styles.js` usando `StyleSheet.create` para melhor performance no React Native.
- **Constants**: strings e paletas simples centralizadas em `utils/constants.js` para facilitar mudanças.
- **Reutilização**: `TaskItem` é independente, recebe handlers via props e o `Animated.Value` para a animação. `TaskList` encapsula o `FlatList`.

## Como testar
1. Baixe os arquivos do repositório.
2. Instale dependências e execute com seu fluxo usual (Expo ou React Native CLI).
3. Verifique: adicionar, editar, concluir, excluir, limpar concluídas e as animações.

## Notas
- Essa refatoração manteve o comportamento do código original (alertas, validação de texto vazio, contador de pendentes, animações).
- Para armazenamento persistente (AsyncStorage ou backend), a lógica do `useTasks` pode ser estendida facilmente.
