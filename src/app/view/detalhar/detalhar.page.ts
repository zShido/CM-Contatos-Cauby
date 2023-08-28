import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Contato from 'src/app/model/entities/Contato';
import { ContatoService } from 'src/app/model/services/contato.service';

@Component({
  selector: 'app-detalhar',
  templateUrl: './detalhar.page.html',
  styleUrls: ['./detalhar.page.scss'],
})
export class DetalharPage implements OnInit {
  nome: string;
  telefone: number;
  contato: Contato;
  indice: number;
  edicao: boolean = true;

  constructor(private actRoute : ActivatedRoute,
    private router: Router,
    private contatoService: ContatoService) { }

  ngOnInit() {
    this.actRoute.params.subscribe((parametros) => {
      if(parametros["indice"]){
       this.indice = parametros["indice"];
       this.contato =
       this.contatoService.obterPorIndice(this.indice);
      }
    })
    this.nome = this.contato.nome;
    this.telefone = this.contato.telefone;
  }

  habilitar(){
    if(this.edicao){
      this.edicao = false;
    }else{
      this.edicao = true;
    }
  }

  editar(){
    let novo: Contato = new Contato(this.nome, this.telefone);
    this.contatoService.editar(this.indice, novo);
    this.router.navigate(["/home"]);
  }

  excluir(){
    this.contatoService.excluir(this.indice);
    this.router.navigate(["/home"]);
  }

}
