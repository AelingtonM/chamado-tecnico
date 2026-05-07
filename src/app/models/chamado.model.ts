export interface Chamado {
  id: number;
  titulo: string;
  descricao: string;
  solicitante: string;
  setor?: string;
  tecnico: string;
  status: StatusChamado;
  prioridade: Prioridade;
  dataAbertura: Date;
  dataAtualizacao: Date;
  dataConclusao?: Date;
  observacao?: string;
  categoria: string;
}

export enum StatusChamado {
  ABERTO = 'Aberto',
  EM_ATENDIMENTO = 'Em atendimento',
  CONCLUIDO = 'Concluído',
  CANCELADO = 'Cancelado'
}

export enum Prioridade {
  BAIXA = 'Baixa',
  MEDIA = 'Média',
  ALTA = 'Alta',
  URGENTE = 'Urgente'
}

export interface Usuario {
  id: number;
  nome: string;
  email: string;
  perfil: 'admin' | 'tecnico' | 'solicitante';
}
