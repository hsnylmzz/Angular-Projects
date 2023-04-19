import { Component,OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  registerForm = new FormGroup({
    name : new FormControl(null,[
      Validators.required,
      Validators.minLength(3)
    ]),
    street: new FormControl(null,[
      Validators.required
    ]),
    city: new FormControl(null,[
      Validators.required
    ]),
    zip: new FormControl(null,[
      Validators.required
    ])

  })
  constructor() {}
  ngOnInit(): void {

  }
  onSubmit()
  {
    console.log("Seçmen Kaydı Oluşturuldu");
    console.log("Adı : ",this.registerForm.value.name);
    console.log("Adres : ",this.registerForm.value.street);
    console.log("Şehir : ",this.registerForm.value.city);
    console.log("Posta Kodu : ",this.registerForm.value.zip);
  }
  ResetForm()
  {
    this.registerForm.reset();
  }
}
