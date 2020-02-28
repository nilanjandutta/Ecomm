import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMsg: string = '';
  constructor(private as : AuthService, private route : Router) { }

  ngOnInit(): void {
  }

  login(form)
  {
    this.as.login(form.value.email, form.value.password)
    .then(data=>{ 
      this.route.navigate(['/']);
      this.errorMsg = '';

    })
    .catch(err => this.errorMsg = err)
  }

}
