import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChamadoService } from '../services/chamado.service';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonTextarea,
  IonButton,
  IonText,
  IonButtons,
  IonBackButton,
  IonBadge,
  IonIcon
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-atualizar-status',
  templateUrl: 'atualizar-status.page.html',
  styleUrls: ['atualizar-status.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonTextarea,
    IonButton,
    IonText,
    IonButtons,
    IonBackButton,
    IonBadge,
    IonIcon
  ]
})
export class AtualizarStatusPage implements OnInit {

  chamado: any = null;
  novoStatus: string = '';
  observacao: string = '';
  tentouSalvar: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private chamadoService: ChamadoService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.chamado = this.chamadoService.listarChamados().find((c: any) => c.id === id);
  }

  salvar(): void {
    this.tentouSalvar = true;

    if (!this.novoStatus) {
      return;
    }

    if (this.chamado) {
      this.chamadoService.atualizarStatus(this.chamado.id, this.novoStatus, this.observacao);
      this.router.navigate(['/detalhes-chamado', this.chamado.id]);
    }
  }

  cancelar(): void {
    if (this.chamado) {
      this.router.navigate(['/detalhes-chamado', this.chamado.id]);
    } else {
      this.router.navigate(['/lista-chamados']);
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
