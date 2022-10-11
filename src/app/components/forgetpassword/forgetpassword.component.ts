import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserserviceService } from 'src/app/Services/UserService/userservice.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit {
  registerForm:FormGroup
  submitted:false

  constructor(private formBuilder: FormBuilder,private userService:UserserviceService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
  });
  }
  forgetPassword(){
    console.log("Forget password working")
    if(this.registerForm.value){
      this.userService.forgetPassword(this.registerForm.value).subscribe((res:any) =>{
        console.log(res)
      },error =>{
        console.log(error)
      })
    }
  }
}
