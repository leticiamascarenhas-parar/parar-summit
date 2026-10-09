export interface Palestra {
  id: number;
  titulo: string;
  palestrante: string;
  cargo: string;
  foto: string;
  horario: string;
  sala: string;
  descricao?: string;
  // cards com o mesmo "mesa" (na mesma trilha) fazem parte da mesma mesa de conteúdo
  mesa?: string;
  mediador?: boolean;
}

export interface Trilha {
  id: string;
  nome: string;
  palestras: Palestra[];
}

export const trilhas: Trilha[] = [
  {
    id: "conectividade",
    nome: "Conectividade",
    palestras: [
      {
        id: 1,
        mesa: "conectividade",
        titulo: "Como a conectividade transforma a Gestão de Frotas",
        palestrante: "Sérgio Jábali",
        cargo: "CTO da Golfleet e professor do Instituto PARAR",
        foto: "/images/trilhas/titulo/sergio-jabali.webp",
        horario: "20/10 às 14h30",
        sala: "sala: Lab 5",
      },
      
      {
        id: 2,
        mesa: "conectividade",
        titulo: "Como a conectividade transforma a Gestão de Frotas",
        palestrante: "Carlos Campos",
        cargo: "Diretor Geral Brasil e VP Vendas LATAM da Emnify",
        foto: "/images/trilhas/carlos-campos.webp",
        horario: "20/10 às 14h30",
        sala: "sala: Lab 5",
      },

      {
        id: 3,
        mesa: "conectividade",
        titulo: "Como a conectividade transforma a Gestão de Frotas",
        palestrante: "Eduardo Resende",
        cargo: "Diretor Geral Brasil e VP Vendas LATAM da Emnify",
        foto: "/images/trilhas/eduardo-resende.webp",
        horario: "20/10 às 14h30",
        sala: "sala: Lab 5",
      }
    ]
  },

  {
    id: "inovacao",
    nome: "Inovação",
    palestras: [
      {
        id: 1,
        mesa: "inovacao",
        titulo: "A Era dos carros autônomos está próxima?",
        palestrante: "Paulo Ferrato",
        cargo: "CBO da Draiver",
        foto: "/images/trilhas/paulo-ferrato.png",
        horario: "20/10 às 09h",
        sala: "sala: Lab 5",
      },
      
      {
        id: 2,
        mesa: "inovacao",
        titulo: "A Era dos carros autônomos está próxima?",
        palestrante: "Anderson Santos",
        cargo: "Diretor Comercial e de Parcerias Near Location",
        foto: "/images/trilhas/anderson-santos.webp",
        horario: "20/10 às 09h",
        sala: "sala: Lab 5",
      },
    ]
  },

  {
    id: "gestao-de-frotas-publicas",
    nome: "Gestão de Frotas Públicas",
    palestras: [
      {
        id: 1,
        titulo: "Desafios na governança e na gestão de frotas públicas",
        palestrante: "Stanley Plácido",
        cargo: "Diretor de Mobilidade Interna na Secretaria de Gestão e Governo Digital do Estado de São Paulo",
        foto: "/images/trilhas/stanley-placido.jpeg",
        horario: "20/10 às 14h30",
        sala: "sala: Hub 2",
      },
      
      {
        id: 2,
        titulo: "Blindando a gestão de frotas públicas do fantasma da fiscalização",
        palestrante: "Daniela Diniz",
        cargo: "Advogada especialista em Licitações e Contratos Administrativos",
        foto: "/images/trilhas/daniela-diniz.webp",
        horario: "21/10 às 15h",
        sala: "sala: Hub 2",
      } 
    ]
  },
  
  {
    id: "gestao-e-lideranca",
    nome: "Gestão e Liderança",
    palestras: [
      {
        id: 1,
        titulo: "Liderança e Inteligência Emocional na Gestão de Frotas",
        palestrante: "Eliandro Maurat",
        cargo: "CEO do Instituto Vida Segura",
        foto: "/images/trilhas/eliandro-maurat.png",
        horario: "21/10 às 09h",
        sala: "sala: Lab 5",
      }
    ]
  }, 

  {
    id: "frotas-mistas-e-pesadas",
    nome: "Frotas Mistas e Pesadas",
    palestras: [
      {
        id: 2,
        mesa: "transporte-rodoviario", // cards com o mesmo "mesa" abrem juntos
        titulo: "O Transporte Rodoviário de Cargas mudou: os principais desafios e tendências",
        palestrante: "Márcio Lino",
        cargo: "Gerente de Mobilidade da Copasa | Prof. Inst. PARAR",
        foto: "/images/trilhas/marcio-lino.webp",
        horario: "20/10 às 13h40",
        sala: "sala: Lab 5",
      },
      
      {
        id: 3,
        mesa: "transporte-rodoviario",
        titulo: "O Transporte Rodoviário de Cargas mudou: os principais desafios e tendências",
        palestrante: "Mauricio Franco",
        cargo: "CEO da Carga Online | Prof. Inst. PARAR",
        foto: "/images/trilhas/mauricio-franco.webp",
        horario: "20/10 às 13h40",
        sala: "sala: Lab 5",
      },
    ]
  },

  {
    id: "frotas-eletricas",
    nome: "Frotas Elétricas",
    palestras: [
      {
        id: 1,
        mesa: "frotas-eletricas",
        titulo: "Eletrificação de frotas: o que o gestor ainda precisa saber?",
        palestrante: "Arthur Rufino",
        cargo: "CEO da Octa",
        foto: "/images/trilhas/arthur-rufino.webp",
        horario: "20/10 às 13h40",
        sala: "sala: Lab 4",
      },

      {
        id: 2,
        mesa: "frotas-eletricas",
        titulo: "Eletrificação de frotas: o que o gestor ainda precisa saber?",
        palestrante: "Pablo Moura",
        cargo: "Líder de vendas e marketing da GM Fleet",
        foto: "/images/trilhas/pablo-moura.webp",
        horario: "20/10 às 13h40",
        sala: "sala: Lab 4",
      },
    ]
  },

  {
    id: "sustentabilidade",
    nome: "Sustentabilidade",
    palestras: [
      {
        id: 1,
        titulo: "O Caminho da Descarbonização: o papel do etanol nas frotas brasileiras",
        palestrante: "Renata Camargo",
        cargo: "Gerente de Sustentabilidade da UNICA",
        foto: "/images/trilhas/titulo/renata-unica.jpeg",
        horario: "21/10 às 13h40",
        sala: "sala: Lab 5",
      }
    ]
  },

  {
    id: "gestao-de-dados",
    nome: "Gestão de Dados",
    palestras: [
      {
        id: 1,
        titulo: "KPI: Indicadores para Gestão de Frotas",
        palestrante: "Milad Neto",
        cargo: "Diretor na KLume e professor do Instituto PARAR",
        foto: "/images/trilhas/titulo/milad-neto.jpg",
        horario: "20/10 às 14h30",
        sala: "sala: Lab 4",
      }
    ]
  },

  {
    id: "gestao-de-manutencao",
    nome: "Gestão de Manutenção",
    palestras: [
      {
        id: 1,
        titulo: "Gestão de Manutenção de alta performance",
        palestrante: "Wiliam Magalhães",
        cargo: "Especialista em Manutenção",
        foto: "/images/speakers/william-magalhaes.jpeg",
        horario: "21/10 às 14h20",
        sala: "sala: Hub 2",
      }
    ]
  },

  {
    id: "cultura-de-seguranca",
    nome: "Cultura de Segurança",
    palestras: [
      {
        id: 1,
        titulo: "Direção defensiva como estratégia na Gestão de Frotas",
        palestrante: "Eduardo Marçon",
        cargo: "CEO da SafeD Cursos e Eventos",
        foto: "/images/trilhas/eduardo-marcon.jpeg",
        horario: "21/10 às 09h",
        sala: "sala: Lab 4",
      }
    ]
  }
];