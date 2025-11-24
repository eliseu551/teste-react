export const tasksSeed = [
  {
    id: "t1",
    title: "Atualizar servidor de staging",
    date: "2025-11-28",
    location: "Datacenter Sul",
    priority: "alta",
    status: "Em andamento",
    owner: "Ana",
    description:
      "Aplicar patches de segurança e validar serviços críticos no ambiente de staging.",
    attachments: [
      { name: "checklist.pdf", url: "#" },
      { name: "rollout-plan.xlsx", url: "#" },
    ],
  },
  {
    id: "t2",
    title: "Reunião de alinhamento com cliente",
    date: "2025-11-26",
    location: "Videoconferência",
    priority: "baixa",
    status: "Aguardando",
    owner: "Bruno",
    description:
      "Preparar pauta e alinhar backlog de entregas do próximo sprint com o cliente.",
    attachments: [{ name: "pauta.md", url: "#" }],
  },
  {
    id: "t3",
    title: "Monitorar fila de incidentes críticos",
    date: "2025-11-25",
    location: "NOC",
    priority: "critica",
    status: "Em andamento",
    owner: "Equipe NOC",
    description:
      "Acompanhar tickets críticos e garantir comunicação com times de resposta.",
    attachments: [
      { name: "runbook.txt", url: "#" },
      { name: "escala.pdf", url: "#" },
    ],
  },
  {
    id: "t4",
    title: "Visita técnica ao cliente XPTO",
    date: "2025-11-30",
    location: "Cliente XPTO - São Paulo",
    priority: "alta",
    status: "Planejada",
    owner: "Carla",
    description:
      "Verificar rede interna e propor melhorias de disponibilidade e redundância.",
    attachments: [],
  },
  {
    id: "t5",
    title: "Revisar documentação de APIs",
    date: "2025-12-02",
    location: "Remoto",
    priority: "baixa",
    status: "Planejada",
    owner: "Diego",
    description:
      "Atualizar exemplos de uso e validar contratos expostos para parceiros.",
    attachments: [{ name: "apis-v2.yaml", url: "#" }],
  },
  {
    id: "t6",
    title: "RCA incidente 2025-11-12",
    date: "2025-11-27",
    location: "Sala War Room",
    priority: "critica",
    status: "Aguardando",
    owner: "Equipe SRE",
    description:
      "Conduzir análise de causa raiz e identificar ações preventivas e responsáveis.",
    attachments: [{ name: "post-mortem.md", url: "#" }],
  },
];
