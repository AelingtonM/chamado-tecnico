import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ChamadoService } from '../services/chamado.service';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonButtons,
  IonBackButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonBadge,
  IonIcon,
  IonText
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-detalhes-chamado',
  templateUrl: 'detalhes-chamado.page.html',
  styleUrls: ['detalhes-chamado.page.scss'],
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonButtons,
    IonBackButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonLabel,
    IonBadge,
    IonIcon,
    IonText
  ]
})
export class DetalhesChamadoPage implements OnInit {

  chamado: any = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private chamadoService: ChamadoService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.chamado = this.chamadoService.listarChamados().find((c: any) => c.id === id);
  }

  atualizarStatus(): void {
    if (this.chamado) {
      this.router.navigate(['/atualizar-status', this.chamado.id]);
    }
  }

  voltar(): void {
    this.router.navigate(['/lista-chamados']);
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
      case 'Em Andamento': return 'warning';
      case 'Concluído': return 'success';
      case 'Cancelado': return 'danger';
      default: return 'medium';
    }
  }
}
