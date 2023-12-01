import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/common/alert.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  formCadastrar:FormGroup

  constructor(private alertService : AlertService,
    private router : Router,
    private formBuilder: FormBuilder) { 
      this.formCadastrar = new FormGroup({
        email: new FormControl(''),
        senha: new FormControl(''),
        confSenha: new FormControl('')
      });
    }

  ngOnInit() {
    this.formCadastrar = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      confSenha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get errorControl(){
    return this.formCadastrar.controls;
  }


  submitForm() : boolean{
    if(!this.formCadastrar.valid){
      this.alertService.presentAlert("Erro","Erro ao Preencher os campos!");
      return false;
    }else{
      this.cadastrar();
      return true;
    }
  }

  private cadastrar(){
    this.alertService.presentAlert("Cadastro","Cadastro realizado com Sucesso!");
    this.router.navigate(["signin"])
  }
}
