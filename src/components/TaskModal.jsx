import PriorityTag from "./PriorityTag.jsx";

export default function TaskModal({ task, onClose }) {
  if (!task) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="task-title"
        onClick={(event) => event.stopPropagation()}
      >
        <header className="modal-head">
          <div>
            <p className="eyebrow">{task.owner}</p>
            <h3 id="task-title">{task.title}</h3>
          </div>
          <PriorityTag priority={task.priority} />
        </header>

        <p className="modal-desc">{task.description}</p>

        <div className="modal-grid">
          <div>
            <p className="meta-label">Status</p>
            <p className="meta-value">{task.status}</p>
          </div>
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

        <div className="attachments">
          <p className="meta-label">Anexos</p>
          {task.attachments.length === 0 ? (
            <p className="muted">Sem anexos.</p>
          ) : (
            <ul>
              {task.attachments.map((file) => (
                <li key={file.name}>
                  <a href={file.url}>{file.name}</a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="modal-actions">
          <button type="button" className="ghost" onClick={onClose}>
            Fechar
          </button>
          <button type="button" className="primary">
            Marcar como feito
          </button>
        </div>
      </div>
    </div>
  );
}
