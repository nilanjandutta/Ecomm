import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fauth : AngularFireAuth) 
  {

   }

   signUp(email : string, password : string)
   {
     return this.fauth.createUserWithEmailAndPassword(email, password);
   }

   login(email: string , password: string)
   {
     return this.fauth.signInWithEmailAndPassword(email, password);
   }

   logout()
   {
     return this.fauth.signOut();
   }
}
