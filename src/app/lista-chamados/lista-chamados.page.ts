import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ChamadoService } from '../services/chamado.service';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonIcon,
  IonButtons,
  IonBackButton,
  IonBadge,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonText
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-lista-chamados',
  templateUrl: 'lista-chamados.page.html',
  styleUrls: ['lista-chamados.page.scss'],
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonButton,
    IonIcon,
    IonButtons,
    IonBackButton,
    IonBadge,
    IonItemSliding,
    IonItemOptions,
    IonItemOption,
    IonText
  ]
})
export class ListaChamadosPage implements OnInit {

  chamados: any[] = [];

  constructor(
    private chamadoService: ChamadoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.carregarChamados();
  }

  ionViewWillEnter(): void {
    this.carregarChamados();
  }

  carregarChamados(): void {
    this.chamados = this.chamadoService.listarChamados();
  }

  verDetalhes(id: number): void {
    this.router.navigate(['/detalhes-chamado', id]);
  }

  excluir(id: number): void {
    this.chamadoService.excluirChamado(id);
    this.carregarChamados();
  }

  concluir(id: number): void {
    const chamado = this.chamados.find(c => c.id === id);
    if (chamado) {
      // Passa a observação atual ou uma mensagem padrão para não sobrescrever com vazio
      const obs = chamado.observacao ? chamado.observacao : 'Chamado encerrado diretamente pela lista.';
      this.chamadoService.atualizarStatus(id, 'Concluído', obs);
      this.carregarChamados();
    }
  }

  corPrioridade(prioridade: string): string {
    switch (prioridade) {
      case 'Urgente': return 'danger';
      case 'Alta': return 'warning';
      case 'Média': return 'primary';
      case 'Baixa': return 'success';
      default: return 'medium';
    }
  }

  corStatus(status: string): string {
    switch (status) {
      case 'Aberto': return 'primary';
      case 'Em atendimento': return 'warning';
      case 'Concluído': return 'success';
      case 'Cancelado': return 'danger';
      default: return 'medium';
    }
  }
}
