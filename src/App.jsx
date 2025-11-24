import { useMemo, useState } from "react";
import { tasksSeed } from "./data/tasks.js";
import FilterBar from "./components/FilterBar.jsx";
import KanbanBoard from "./components/KanbanBoard.jsx";
import TaskModal from "./components/TaskModal.jsx";

const statusOrder = ["Aguardando", "Em andamento", "Planejada"];

export default function App() {
  const [tasks] = useState(tasksSeed);
  const [search, setSearch] = useState("");
  const [priority, setPriority] = useState("todas");
  const [location, setLocation] = useState("todas");
  const [selectedTask, setSelectedTask] = useState(null);

  const locations = useMemo(() => {
    const list = Array.from(new Set(tasks.map((task) => task.location)));
    return ["todas", ...list];
  }, [tasks]);

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const matchesPriority =
        priority === "todas" ? true : task.priority === priority;

      const matchesLocation =
        location === "todas" ? true : task.location === location;

      const haystack = `${task.title} ${task.description} ${task.location} ${task.owner} ${task.status}`.toLowerCase();
      const matchesSearch = haystack.includes(search.trim().toLowerCase());

      return matchesPriority && matchesLocation && matchesSearch;
    });
  }, [tasks, priority, location, search]);

  const criticalCount = useMemo(
    () => filteredTasks.filter((task) => task.priority === "critica").length,
    [filteredTasks]
  );

  const tasksByStatus = useMemo(() => {
    return statusOrder.map((status) => ({
      status,
      tasks: filteredTasks.filter((task) => task.status === status),
    }));
  }, [filteredTasks]);

  return (
    <div className="page">
      <header className="hero">
        <div>
          <p className="eyebrow">Painel de tarefas</p>
          <h1>Kanban do time</h1>
          <p className="subtitle">
            Visualize tarefas, ajuste filtros e abra detalhes rápidos sem sair
            do fluxo.
          </p>
        </div>
        <div className="badges">
          <span className="badge badge-neutral">
            {tasks.length} tarefas na fila
          </span>
          <span className="badge badge-critical">
            {criticalCount} crítica(s) visíveis
          </span>
        </div>
      </header>

      <FilterBar
        search={search}
        onSearch={setSearch}
        priority={priority}
        onPriorityChange={setPriority}
        location={location}
        locations={locations}
        onLocationChange={setLocation}
      />

      <KanbanBoard
        columns={tasksByStatus}
        onSelectTask={setSelectedTask}
        emptyMessage="Nenhuma tarefa encontrada para os filtros aplicados."
      />

      <TaskModal task={selectedTask} onClose={() => setSelectedTask(null)} />
    </div>
  );
}
