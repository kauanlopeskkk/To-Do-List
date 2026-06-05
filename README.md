# Lista de Tarefas React

## Descrição

Aplicação de gerenciamento de tarefas desenvolvida em React para demonstrar o uso de Hooks, Context API, Hooks Customizados e técnicas de otimização de renderização.

O usuário pode:

* Adicionar novas tarefas.
* Marcar tarefas como concluídas.
* Remover tarefas.
* Filtrar tarefas por status (Todas, Pendentes e Concluídas).
* Manter os dados salvos no navegador através do Local Storage.

---

## Tecnologias Utilizadas

* React
* JavaScript (ES6+)
* Vite
* Context API
* React Hooks

  * useState
  * useEffect
  * useContext
  * useMemo
* React.memo
* Local Storage
* CSS

---

## Estrutura do Projeto

```text
src/
├── components/
│   ├── TaskForm.jsx
│   ├── TaskList.jsx
│   ├── TaskItem.jsx
│   └── FilterButtons.jsx
│
├── context/
│   └── TaskContext.jsx
│
├── hooks/
│   └── useLocalStorage.js
│
├── App.jsx
└── main.jsx
```

---

## Como Executar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/lista-de-tarefas-react.git
```

### 2. Acesse a pasta do projeto

```bash
cd lista-de-tarefas-react
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Execute o servidor de desenvolvimento

```bash
npm run dev
```

### 5. Abra no navegador

Acesse o endereço exibido no terminal, normalmente:

```text
http://localhost:5173
```

---

## Recursos Aplicados

### Hooks

* useState para gerenciamento de estado.
* useEffect para persistência dos dados.

### Context API

* createContext para criação do contexto global.
* useContext para acesso e atualização dos dados.

### Hook Customizado

* useLocalStorage para encapsular a lógica de persistência.

### Otimização

* useMemo para filtragem eficiente das tarefas.
* React.memo para evitar renderizações desnecessárias dos itens da lista.

---

## Autor

Kauan
