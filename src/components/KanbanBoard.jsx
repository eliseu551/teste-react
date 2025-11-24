import TaskCard from "./TaskCard.jsx";

export default function KanbanBoard({ columns, onSelectTask, emptyMessage }) {
  const hasTasks = columns.some((col) => col.tasks.length > 0);

  if (!hasTasks) {
    return <p className="empty">{emptyMessage}</p>;
  }

  return (
    <div className="kanban">
      {columns.map((column) => (
        <section key={column.status} className="column">
          <header className="column-header">
            <div>
              <p className="eyebrow">Status</p>
              <h2>{column.status}</h2>
            </div>
            <span className="badge badge-neutral">
              {column.tasks.length} item(s)
            </span>
          </header>

          <div className="cards">
            {column.tasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onClick={() => onSelectTask(task)}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
