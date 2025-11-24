const label = {
  baixa: "Baixa",
  alta: "Alta",
  critica: "Crítica",
};

export default function PriorityTag({ priority }) {
  return <span className={`tag tag-${priority}`}>{label[priority]}</span>;
}
