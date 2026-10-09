export type Participante = {
  nome: string;
  cargo?: string;
  foto: string;
  mediador?: boolean;
  bandeira?: "us" | "uy";
};

export type Speaker = {
  nome?: string;
  cargo?: string;
  foto?: string;
  descricao?: string;
  palestra: string;
  detalhes?: string;
  dia?: string;
  horario?: string;
  // bandeira do país do palestrante, no canto superior direito da foto
  bandeira?: "us" | "uy";
  // "mesa" = mesa de debate: vira um grupo de cards (um por participante) com painel compartilhado
  tipo?: "mesa";
  participantes?: Participante[];
};

export const speakers: Speaker[] = [
  {
    nome: "Neto Zampier",
    cargo: "Palestrante e ex-jogador de futebol",
    foto: "/images/speakers/neto-zampier.jpg",
    descricao: "Palestrante e ex-jogador de futebol.",
    palestra: "Sobreviver",
    dia: "20 OUT",
    horario: "10H00",
    detalhes: "Qual o impacto de um acidente de trabalho? Após sobreviver ao acidente aéreo da Chapecoense em 2016 — ocorrido durante uma viagem a trabalho —, Neto Zampier sobe ao palco do PARAR Summit para compartilhar profundas reflexões sobre gestão de riscos, prevenção e cuidado coletivo."
  },

  {
    tipo: "mesa",
    palestra: "Frota do Futuro: o impacto da IA e outras tecnologias no dia a dia do gestor",
    dia: "20 OUT",
    horario: "13H40", 
    detalhes: "Uma gestão de condutores eficiente é determinante para os resultados da gestão de frotas.",
    participantes: [
      {
        nome: "Sérgio Jábali",
        cargo: "CTO da Golfleet e professor do Instituto PARAR",
        foto: "/images/trilhas/titulo/sergio-jabali.webp",
        mediador: true
      },
      {
        nome: "Chris Donaldson",
        cargo: "Diretor de Vendas na HERE Technologies",
        foto: "/images/trilhas/chris-donaldson.webp",
        bandeira: "us"
      }
    ]
  },

  {
    nome: "Wiliam Magalhães",
    cargo: "Engenheiro, especialista em Engenharia Automotiva e Gestão de Ativos, e técnico em Mecatrônica Volvo Trucks.",
    foto: "/images/speakers/william-magalhaes.jpeg",
    descricao: "Engenheiro, especialista em Engenharia Automotiva e Gestão de Ativos, e técnico em Mecatrônica Volvo Trucks.",
    palestra: "Engenharia da Decisão Aplicada à Gestão de Frotas",
    dia: "20 OUT",
    horario: "14H40",
    detalhes: "O especialista William Magalhães traz práticas essenciais de monitoramento e manutenção que minimizam custos operacionais e protegem o capital. Uma palestra indispensável para gestores que buscam extrair o valor máximo de cada recurso."
  },

  {
    nome: "Alejandro Furas",
    cargo: "Secretário Geral do Latin NCAP e Global NCAP",
    foto: "/images/speakers/alejandro-furas.jpeg",
    descricao: "Secretário Geral do Latin NCAP e Global NCAP.",
    palestra: "Latin NCAP: O Impacto da Segurança Veicular na Gestão de Frotas",
    dia: "20 OUT", // PROVISÓRIO
    horario: "15H35", // PROVISÓRIO
    bandeira: "uy",
    detalhes: "Ter uma frota segura começa muito antes do veículo ir para a rua. Alejandro Furas analisa o panorama da segurança automotiva e o papel das empresas como forças de mudança no setor."
  },

  {
    tipo: "mesa",
    palestra: "Seu motorista é seu maior ativo ou seu maior risco?",
    dia: "21 OUT",
    horario: "10H20",
    detalhes: "Uma gestão de condutores eficiente é determinante para os resultados da gestão de frotas pesadas. Aprenda a liderar e valorizar os seus condutores para que eles se tornem agentes estratégicos dentro da sua operação.",
    participantes: [
      {
        nome: "Mauricio Franco",
        cargo: "CEO da Carga Online e Prof. Instituto PARAR",
        foto: "/images/trilhas/mauricio-franco.webp",
        mediador: true
      },
      {
        nome: "Cleodimir Vieira do Amaral",
        cargo: "Coordenador de Rastreamento do Grupo Sada",
        foto: "/images/speakers/cleodimir-vieira.webp"
      },
      {
        nome: "Wily Martins",
        cargo: "Coordenador de Frota do Grupo Sada",
        foto: "/images/speakers/wily-martins.webp"
      },
      {
        nome: "Roberto Vagner",
        cargo: "Coordenador de Frota do Grupo Sada",
        foto: "/images/speakers/roberto.vagner.webp"
      }
    ]
  },

  {
    nome: "Carlos Tudisco",
    cargo: "COO da Golfleet e professor do Instituto PARAR",
    foto: "/images/trilhas/titulo/carlos-tudisco.jpeg",
    descricao: "COO da Golfleet e professor do Instituto PARAR",
    palestra: "Política de Frotas: Alta Performance com Segurança Jurídica",
    dia: "21 OUT",
    horario: "13H45"
  },

  {
    tipo: "mesa",
    palestra: "Aprendendo com a Gestão de Frotas dos Estados Unidos",
    dia: "21 OUT",
    horario: "15H05",
    participantes: [
      {
        nome: "Maria Neve",
        cargo: "Presidente da NAFA, a maior associação de gestores de frotas do mundo",
        foto: "/images/speakers/maria.neve.jpg",
        bandeira: "us"
      },
      {
        nome: "Mike Camnetar",
        cargo: "Gerente de Frotas na General Mills, Ex-Presidente da NAFA e especialista na gestão de ativos e certificação de frotas",
        foto: "/images/speakers/mike-camnetar.png",
        bandeira: "us"
      }
    ]
  },

  {
    nome: "Rogerio Nersissian",
    cargo: "Especialista em Cultura de Segurança, palestrante e embaixador do Instituto PARAR",
    foto: "/images/speakers/rogerio-nerssissian.jpeg",
    descricao: "Especialista em Cultura de Segurança, palestrante e embaixador do Instituto PARAR.",
    palestra: "A Jornada da Cultura de Segurança",
    dia: "21 OUT",
    horario: "15H35",
    detalhes: "Erros acontecem, mas as consequências deles podem ser desenhadas. o palestrante e embaixador do Instituto PARAR, Rogério Nersissian, desconstrói a cultura da culpa para ensinar como líderes de frotas podem implementar sistemas resilientes. Uma imersão prática sobre como mapear vulnerabilidades e blindar sua equipe contra incidentes graves."
  }

];