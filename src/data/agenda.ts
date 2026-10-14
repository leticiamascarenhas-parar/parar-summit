import { trilhas } from "./trilhas";
import { speakers } from "./speakers";

// Sessão = o que a pessoa pode favoritar: uma palestra ou uma mesa inteira
export interface Sessao {
  id: string;
  titulo: string;
  palestrantes: string[];
  data: string; // "20/10"
  hora: string; // "09:00"
  local: string; // "Lab 5" | "Plenária Principal"
  eixo: string;
}

export const ANO_EVENTO = 2026;

function slug(texto: string) {
  return texto
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

// "09h" | "13h40" | "10H30" → "09:00" | "13:40" | "10:30"
function normalizarHora(hora: string) {
  const [h, m = "00"] = hora.toLowerCase().split("h");
  return `${h.trim().padStart(2, "0")}:${(m.trim() || "00").padStart(2, "0")}`;
}

// "20 OUT" → "20/10"
function normalizarDia(dia: string) {
  const meses: Record<string, string> = { SET: "09", OUT: "10", NOV: "11" };
  const [d, mes] = dia.trim().split(/\s+/);
  return `${d.padStart(2, "0")}/${meses[mes.toUpperCase()] ?? "10"}`;
}

export function idTrilha(trilhaId: string, palestra: { id: number; mesa?: string }) {
  return `t-${trilhaId}-${palestra.mesa ?? palestra.id}`;
}

export function idPlenaria(palestra: string) {
  return `p-${slug(palestra)}`;
}

function sessoesTrilhas(): Sessao[] {
  const sessoes: Sessao[] = [];
  const porId = new Map<string, Sessao>();

  for (const trilha of trilhas) {
    for (const palestra of trilha.palestras) {
      const id = idTrilha(trilha.id, palestra);
      const existente = porId.get(id);
      if (existente) {
        existente.palestrantes.push(palestra.palestrante);
        continue;
      }

      const [data, hora = "00h"] = palestra.horario.split(/\s+às\s+/);
      const sessao: Sessao = {
        id,
        titulo: palestra.titulo,
        palestrantes: [palestra.palestrante],
        data,
        hora: normalizarHora(hora),
        local: palestra.sala.replace(/^sala:\s*/i, ""),
        eixo: trilha.nome
      };
      porId.set(id, sessao);
      sessoes.push(sessao);
    }
  }

  return sessoes;
}

function sessoesPlenaria(): Sessao[] {
  return speakers
    .filter((s) => s.dia && s.horario)
    .map((s) => ({
      id: idPlenaria(s.palestra),
      titulo: s.palestra,
      palestrantes: s.participantes?.length
        ? s.participantes.map((p) => p.nome)
        : s.nome
          ? [s.nome]
          : [],
      data: normalizarDia(s.dia!),
      hora: normalizarHora(s.horario!),
      local: "Plenária Principal",
      eixo: s.eixo ?? ""
    }));
}

export const sessoes: Sessao[] = [...sessoesPlenaria(), ...sessoesTrilhas()];
