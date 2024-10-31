// button-delete.component.ts
import { Component } from '@angular/core';

interface Projeto {
  nome: string;
  fase: string;
  progresso: number;
  inicio: string;
  entrega: string;
  selected: boolean;
}

@Component({
  selector: 'app-button-delete',
  templateUrl: './button-delete.component.html',
  styleUrls: ['./button-delete.component.scss'],
})
export class ButtonDeleteComponent {
  projetos: Projeto[] = [
    {
      nome: 'Projeto A',
      fase: 'Planejamento',
      progresso: 30,
      inicio: '2024-01-01',
      entrega: '2024-06-01',
      selected: false,
    },
    // Adicione outros projetos conforme necessário
  ];

  // Método para alternar a seleção de um projeto
  toggleSelection(projeto: Projeto): void {
    projeto.selected = !projeto.selected;
  }

  // Método para contar os projetos selecionados
  get selectedCount(): number {
    return this.projetos.filter(projeto => projeto.selected).length;
  }

  // Método para excluir projetos selecionados
  deleteSelected(): void {
    this.projetos = this.projetos.filter(projeto => !projeto.selected);
  }
}
