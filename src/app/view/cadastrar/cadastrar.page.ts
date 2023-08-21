import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import Contato from 'src/app/model/entities/Contato';
import { ContatoService } from 'src/app/model/services/contato.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {
  public nome! :string;
  public telefone! : number;

  constructor(private alertController: AlertController,
    private router : Router, private contatoService: ContatoService)  { }

  ngOnInit() {
  }

  cadastrar(){
    if(this.nome && this.telefone){
      let novo : Contato = new Contato(this.nome, this.telefone);
      this.contatoService.cadastrar(novo);
      this.presentAlert("Sucesso", "Contato Salvo!");
      this.router.navigate(["/home"]);
    }else{
     this.presentAlert("Erro", "Campos Obrigatórios!");
    }
  }

  async presentAlert(subHeader : string, message : string) {
    const alert = await this.alertController.create({
      header: 'Agenda de Contatos',
      subHeader: subHeader,
      message: message,
      buttons: ['OK'],
    });
    await alert.present();
  }

}
