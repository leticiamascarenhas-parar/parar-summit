// Agenda pessoal: ids das sessões favoritadas, salvos só no navegador da pessoa
const CHAVE = "parar-summit-26:agenda";
export const EVENTO = "agenda:change";

let memoria: string[] = [];

export function lerAgenda(): string[] {
  try {
    const salvo = JSON.parse(localStorage.getItem(CHAVE) ?? "[]");
    return Array.isArray(salvo) ? salvo.filter((id) => typeof id === "string") : memoria;
  } catch {
    return memoria;
  }
}

function salvar(ids: string[]) {
  memoria = ids;
  try {
    localStorage.setItem(CHAVE, JSON.stringify(ids));
  } catch {
    // sem storage (aba anônima, bloqueado): segue só em memória
  }
  document.dispatchEvent(new CustomEvent(EVENTO, { detail: ids }));
}

export function estaNaAgenda(id: string) {
  return lerAgenda().includes(id);
}

export function alternar(id: string) {
  const ids = lerAgenda();
  salvar(ids.includes(id) ? ids.filter((x) => x !== id) : [...ids, id]);
}

export function remover(id: string) {
  salvar(lerAgenda().filter((x) => x !== id));
}

export function adicionarVarios(novos: string[]) {
  const ids = lerAgenda();
  salvar([...ids, ...novos.filter((id) => !ids.includes(id))]);
}

export function limpar() {
  salvar([]);
}
