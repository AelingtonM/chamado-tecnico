export interface Chamado {
  id: number;
  titulo: string;
  descricao: string;
  solicitante: string;
  tecnico: string;
  status: StatusChamado;
  prioridade: Prioridade;
  dataCriacao: Date;
  dataAtualizacao: Date;
  dataConclusao?: Date;
  observacoes?: string;
  categoria: string;
}

export enum StatusChamado {
  ABERTO = 'Aberto',
  EM_ANDAMENTO = 'Em Andamento',
  AGUARDANDO = 'Aguardando',
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
