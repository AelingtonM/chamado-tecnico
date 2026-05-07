import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChamadoService {

  public chamados: any[] = [
    {
      id: 1,
      titulo: 'Computador não liga',
      descricao: 'O computador da recepção não está ligando desde ontem.',
      solicitante: 'Maria Silva',
      tecnico: 'João Santos',
      status: 'Aberto',
      prioridade: 'Alta',
      data: '2026-05-01'
    },
    {
      id: 2,
      titulo: 'Impressora sem conexão',
      descricao: 'A impressora do 2º andar não aparece na rede.',
      solicitante: 'Carlos Oliveira',
      tecnico: 'Ana Costa',
      status: 'Em Andamento',
      prioridade: 'Média',
      data: '2026-05-06'
    },
    {
      id: 3,
      titulo: 'Instalação de software',
      descricao: 'Necessário instalar pacote Office no notebook novo.',
      solicitante: 'Pedro Almeida',
      tecnico: 'João Santos',
      status: 'Concluído',
      prioridade: 'Baixa',
      data: '2026-04-20'
    }
  ];

  public tecnicos: any[] = [
    { id: 1, nome: 'João Santos', especialidade: 'Hardware', telefone: '(11) 99999-1111' },
    { id: 2, nome: 'Ana Costa', especialidade: 'Redes', telefone: '(11) 99999-2222' },
    { id: 3, nome: 'Lucas Pereira', especialidade: 'Software', telefone: '(11) 99999-3333' }
  ];

  constructor() {}

  // ---------- Chamados ----------

  adicionarChamado(chamado: any): void {
    chamado.id = this.chamados.length > 0
      ? Math.max(...this.chamados.map(c => c.id)) + 1
      : 1;
    this.chamados.push(chamado);
  }

  listarChamados(): any[] {
    return this.chamados;
  }

  excluirChamado(id: number): void {
    this.chamados = this.chamados.filter(c => c.id !== id);
  }

  atualizarStatus(id: number, status: string, observacao: string): void {
    const chamado = this.chamados.find(c => c.id === id);
    if (chamado) {
      chamado.status = status;
      chamado.observacao = observacao;
    }
  }

  // ---------- Técnicos ----------

  adicionarTecnico(tecnico: any): void {
    tecnico.id = this.tecnicos.length > 0
      ? Math.max(...this.tecnicos.map(t => t.id)) + 1
      : 1;
    this.tecnicos.push(tecnico);
  }

  listarTecnicos(): any[] {
    return this.tecnicos;
  }

  excluirTecnico(id: number): void {
    this.tecnicos = this.tecnicos.filter(t => t.id !== id);
  }
}
