import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserserviceService } from 'src/app/Services/UserService/userservice.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  input = 'password'

  constructor(private formBuilder: FormBuilder, private userService:UserserviceService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  registration() {
    console.log("Its working")
    if(this.registerForm.valid){
      console.log(this.registerForm.value)
      this.userService.registration(this.registerForm.value).subscribe((res:any) =>{
        console.log(res)
      },(error:any) =>{
        console.log(error)
      })
    }
  }

  ShowPassword(change: any) {
    if (change.checked) {
      this.input = 'text'
    } else {
      this.input = 'password'
    }
  }
}