import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChamadoService } from '../services/chamado.service';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonButtons,
  IonBackButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-resumo',
  templateUrl: 'resumo.page.html',
  styleUrls: ['resumo.page.scss'],
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
    IonButtons,
    IonBackButton
  ]
})
export class ResumoChamadosPage implements OnInit {

  totalChamados: number = 0;

  porStatus: { label: string; valor: number; cor: string; icone: string }[] = [];
  porPrioridade: { label: string; valor: number; cor: string; icone: string }[] = [];

  constructor(private chamadoService: ChamadoService) {}

  ngOnInit(): void {
    this.calcularResumo();
  }

  ionViewWillEnter(): void {
    this.calcularResumo();
  }

  calcularResumo(): void {
    const chamados = this.chamadoService.listarChamados();
    this.totalChamados = chamados.length;

    // Por status
    this.porStatus = [
      {
        label: 'Aberto',
        valor: chamados.filter((c: any) => c.status === 'Aberto').length,
        cor: '#3880ff',
        icone: 'folder-open-outline'
      },
      {
        label: 'Em atendimento',
        valor: chamados.filter((c: any) => c.status === 'Em atendimento' || c.status === 'Em Andamento').length,
        cor: '#ffc409',
        icone: 'construct-outline'
      },
      {
        label: 'Concluído',
        valor: chamados.filter((c: any) => c.status === 'Concluído').length,
        cor: '#2dd36f',
        icone: 'checkmark-circle-outline'
      },
      {
        label: 'Cancelado',
        valor: chamados.filter((c: any) => c.status === 'Cancelado').length,
        cor: '#eb445a',
        icone: 'close-circle-outline'
      }
    ];

    // Por prioridade
    this.porPrioridade = [
      {
        label: 'Baixa',
        valor: chamados.filter((c: any) => c.prioridade === 'Baixa').length,
        cor: '#2dd36f',
        icone: 'arrow-down-outline'
      },
      {
        label: 'Média',
        valor: chamados.filter((c: any) => c.prioridade === 'Média').length,
        cor: '#3880ff',
        icone: 'remove-outline'
      },
      {
        label: 'Alta',
        valor: chamados.filter((c: any) => c.prioridade === 'Alta').length,
        cor: '#ffc409',
        icone: 'arrow-up-outline'
      },
      {
        label: 'Urgente',
        valor: chamados.filter((c: any) => c.prioridade === 'Urgente').length,
        cor: '#eb445a',
        icone: 'alert-circle-outline'
      }
    ];
  }
}
