import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private as : AngularFirestore) 
  { }

  addNewUser(id, name, address)
  {
    return this.as.doc("users/" + id).set({
      name : name, 
      address: address,
      
    })
  }
}
