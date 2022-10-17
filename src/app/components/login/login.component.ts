import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/Services/UserService/userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  registerForm:FormGroup
  submitted = false;

  constructor(private formBuilder: FormBuilder,private userService:UserserviceService,private router:Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
  });
  }

  login(){
    console.log("Logged In working")
    if(this.registerForm.valid){
      this.userService.login(this.registerForm.value).subscribe((res:any) =>{
        console.log(res)
        localStorage.setItem('token',res.data)
        this.router.navigateByUrl('/dashboard/notes')
      },error =>{
        console.log(error)
      })
    }
  }
}
