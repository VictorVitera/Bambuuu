import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ProjectCard',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent {
  @Input() projectTitle: string = 'Projeto Exemplo';
  @Input() startDate: Date = new Date();
  @Input() endDate: Date = new Date();
  @Input() progress: number = 0;
  @Input() modoExclusao: boolean = false; // Novo @Input para ativar modo de exclusão
  @Output() checkboxChange = new EventEmitter<boolean>(); // Evento para informar o componente pai

  constructor(private router: Router) {}

  getProgresso(): number {
    return (this.progress / 4) * 100;
  }

  abrirDetalhesProjeto() {
    if (!this.modoExclusao) {
      this.router.navigate(['/detalhes-projeto', this.projectTitle]);
    }
  }

  mostrarInfo(event: Event) {
    event.stopPropagation();
    // Lógica para exibir informações adicionais
  }

  onCheckboxChange(event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.checkboxChange.emit(isChecked);
  }
}
