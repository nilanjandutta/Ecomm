import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  errorMessage: string = '';

  constructor(private as : AuthService, private user : UserService, private router : Router) { }

  ngOnInit(): void {
  }

  signUp(form)
  {
   
    this.as.signUp(form.value.email,form.value.password )
    .then( data =>{
        this.user.addNewUser(data.user.uid, form.value.name, form.value.address)
        this.errorMessage = ''
        this.router.navigate(['/'])

    })
    .catch(err => this.errorMessage = err)
  }

}
