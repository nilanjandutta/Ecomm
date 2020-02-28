import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private as : AuthService) { }

  isOpen : boolean= false;
  
  toggleNavBar(){
    this.isOpen = !this.isOpen;
  }

  ngOnInit(): void {
  }

  logout()
  {
    this.as.logout();
  }

}
