import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserserviceService } from 'src/app/Services/UserService/userservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  registerForm:FormGroup
  submitted:false
  resetToken:any

  constructor(private formBuilder: FormBuilder,private userService:UserserviceService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
  });
  this.resetToken =this.route.snapshot.paramMap.get('token')
  }
  resetPassword(){
    console.log("reset password working")
    //console.log(this.route.snapshot.params)
    let newpassword = {
      pass:this.registerForm.value.password
    }
    
    if(this.registerForm.valid){
      this.userService.resetPassword(newpassword,this.resetToken).subscribe((res:any) =>{
        console.log(res)
      },error =>{
        console.log(error)
      })
    }
  }
}
