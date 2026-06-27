# To-do List com Recoil

Este é o projeto de To-do List utilizando React, Vite e Recoil.

O app permite:
- adicionar tarefas
- listar tarefas
- filtrar tarefas por todas, concluídas e pendentes
- marcar e desmarcar tarefas como concluídas
- remover tarefas

## Atendimento da atividade

O projeto usa Recoil para gerenciar o estado global da lista de tarefas:

- `RecoilRoot` em `src/main.jsx` envolve toda a aplicação
- `tasksAtom` em `src/atoms/taskAtom.js` armazena as tarefas
- `filterAtom` em `src/atoms/filterAtom.js` armazena o filtro atual
- `filteredTasksSelector` em `src/selectors/filteredTasksSelector.js` retorna a lista filtrada
- `useRecoilState` é usado para adicionar, concluir, remover e alterar o filtro
- `useRecoilValue` é usado para ler as tarefas filtradas no componente de lista

## Como executar

1. Abra o terminal na pasta `Recoil`
2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

4. Abra o endereço exibido no terminal, normalmente `http://localhost:5173`

## Estrutura principal

- `src/main.jsx`: renderiza o app dentro de `RecoilRoot`
- `src/atoms/taskAtom.js`: átomo para o estado das tarefas
- `src/atoms/filterAtom.js`: átomo para o filtro atual
- `src/selectors/filteredTasksSelector.js`: seletor para retornar tarefas filtradas
- `src/components/TaskForm.jsx`: adiciona tarefas usando `useRecoilState`
- `src/components/TaskList.jsx`: lista as tarefas filtradas usando `useRecoilValue`
- `src/components/TaskItem.jsx`: alterna conclusão e remove tarefas usando `useRecoilState`
- `src/components/FilterButtons.jsx`: define o filtro atual usando `useRecoilState`

## Observações

O estado global do app é gerenciado com Recoil, usando `atom`, `selector`, `useRecoilState`, `useRecoilValue` e `RecoilRoot`.
