import { Component } from '@angular/core';

@Component({
  selector: 'app-home-com-projetos',
  templateUrl: './home-com-projetos.page.html',
  styleUrls: ['./home-com-projetos.page.scss'],
})
export class HomeComProjetosPage {
  project = {
    title: 'Casa de Praia',
    startDate: new Date('2023-06-20'), // Convertendo para tipo Date
    endDate: new Date('2030-02-01'), // Convertendo para tipo Date
    progress: 3,
  };

  modoExclusao: boolean = false; // Para controlar o modo de exclusão
  projetosSelecionados: string[] = []; // Para armazenar projetos selecionados

  ativarModoExclusao() {
    this.modoExclusao = true;
  }

  desativarModoExclusao() {
    this.modoExclusao = false;
    this.projetosSelecionados = []; // Limpa a seleção ao sair do modo de exclusão
  }

  atualizarSelecionados(isChecked: boolean, projectTitle: string) {
    if (isChecked) {
      this.projetosSelecionados.push(projectTitle);
    } else {
      this.projetosSelecionados = this.projetosSelecionados.filter(
        (title) => title !== projectTitle
      );
    }
  }

  deletarSelecionados() {
    // Implemente a lógica de exclusão aqui
    console.log('Projetos a serem deletados:', this.projetosSelecionados);
    // Após a exclusão, desative o modo de exclusão
    this.desativarModoExclusao();
  }
}
