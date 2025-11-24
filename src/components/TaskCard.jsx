import PriorityTag from "./PriorityTag.jsx";

export default function TaskCard({ task, onClick }) {
  return (
    <article
      className="card"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onClick();
        }
      }}
    >
      <header className="card-head">
        <div className="title-block">
          <p className="eyebrow">{task.owner}</p>
          <h3>{task.title}</h3>
        </div>
        <PriorityTag priority={task.priority} />
      </header>

      <p className="card-desc">{task.description}</p>

      <div className="card-meta">
        <div>
          <p className="meta-label">Data</p>
          <p className="meta-value">
            {new Date(task.date).toLocaleDateString("pt-BR")}
          </p>
        </div>
        <div>
          <p className="meta-label">Local</p>
          <p className="meta-value">{task.location}</p>
        </div>
      </div>
    </article>
  );
}
