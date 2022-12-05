import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.scss']
})
export class IniciarSesionComponent implements OnInit {
  formularioLogin!: FormGroup;

  constructor(private readonly loginForm: FormBuilder) {}

  ngOnInit(): void {
    this.formularioLogin = this.initForm();
  };

  initForm(): FormGroup {
    return this.loginForm.group({
      email: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required]]
    })
  }

  onSubmit(): void {
    console.log('Form ->');
  }
}
