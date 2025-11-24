export default function FilterBar({
  search,
  onSearch,
  priority,
  onPriorityChange,
  location,
  locations,
  onLocationChange,
}) {
  return (
    <section className="toolbar">
      <div className="field">
        <label>Buscar</label>
        <input
          type="text"
          placeholder="Busque por título, descrição, dono..."
          value={search}
          onChange={(event) => onSearch(event.target.value)}
        />
      </div>

      <div className="field">
        <label>Prioridade</label>
        <div className="segmented">
          {["todas", "baixa", "alta", "critica"].map((value) => (
            <button
              key={value}
              className={priority === value ? "active" : ""}
              onClick={() => onPriorityChange(value)}
              type="button"
            >
              {value === "critica" ? "crítica" : value}
            </button>
          ))}
        </div>
      </div>

      <div className="field">
        <label>Local</label>
        <select
          value={location}
          onChange={(event) => onLocationChange(event.target.value)}
        >
          {locations.map((loc) => (
            <option key={loc} value={loc}>
              {loc === "todas" ? "Todos" : loc}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
}
