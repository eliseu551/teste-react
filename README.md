# Kanban de Tarefas (React + Vite)

Painel kanban para visualizar tarefas por status, filtrar por prioridade/local e abrir detalhes em modal.

## Requisitos
- Node.js 18+ (recomendado) e npm.

## Como rodar
1) Instale dependencias  
`npm install`

2) Suba o servidor de desenvolvimento  
`npm run dev`  
Abra o endereco exibido no terminal (por padrao: `http://localhost:5173`).

## Build para producao
`npm run build`

Para pre-visualizar o build:  
`npm run preview`

## Estrutura de pastas
- `src/`: codigo-fonte React.
- `src/components/`: componentes visuais desacoplados da logica de negocio.
- `src/data/`: fonte de dados mockada (substituivel por API externa).
- `public/`: estaticos servidos como base.

## Estrutura principal (arquivos)
- `src/App.jsx`: estado, filtros e montagem do kanban.
- `src/components/*`: filtros, colunas, cards, modal, tags de prioridade.
- `src/data/tasks.js`: seed de tarefas (troque por sua API quando pronta).
- `src/styles.css`: tema escuro, layout responsivo e estilo do kanban.

## Bibliotecas utilizadas
- `react` e `react-dom`: renderizacao e hooks.
- `vite` + `@vitejs/plugin-react`: bundler/dev server rapido com JSX e fast refresh.

## Decisoes tecnicas
- Hooks (`useState`, `useMemo`) para estado local, filtros e agrupamentos sem store global.
- Separacao de logica (App) e apresentacao (componentes em `src/components/`) para reuso e manutencao.
- Ordenacao fixa de status e filtros combinados (texto, prioridade, local) para uma consulta simples e previsivel.
- Seed local em `src/data/tasks.js` para funcionar offline; basta substituir por chamada a API quando necessario.
