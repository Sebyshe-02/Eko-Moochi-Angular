import { Component, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit{
  
  registerForm: FormGroup
  submitted=false;

  constructor(private formBuilder: FormBuilder ){}

  ngOnInit() {
    
    this.registerForm = new FormGroup({
      nombre:new FormControl ('',[Validators.required,Validators.maxLength(15)]),
      apellido:new FormControl ('',[Validators.required,Validators.maxLength(10)]),
      usuario:new FormControl ('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
      email:new FormControl ('',[Validators.required,Validators.email]),
      password:new FormControl ('', [Validators.required, Validators.minLength(6)]),
      confirmPassword:new FormControl ('', [Validators.required]),
    },{
      
    })
  
  }

  get control() {return this.registerForm.controls;}

  onSubmit() {
    this.submitted = true;

    // se detiene aqui si el formulario es invalido
    if (this.registerForm.invalid) {
        return;
    }

    // muestra si el formulario es valido
    alert('Valido!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
}

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
