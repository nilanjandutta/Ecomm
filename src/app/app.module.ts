import { environment } from './../environments/environment.prod';
import { AngularFirestore , AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogoutComponent } from './components/logout/logout.component';
import { CartComponent } from './components/cart/cart.component';
import { AccountComponent } from './components/account/account.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import 'firebase/firestore';
import { from } from 'rxjs';
import { AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    LogoutComponent,
    CartComponent,
    AccountComponent,
    OrdersComponent,
    ProductsComponent,
    NavbarComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule, 
    FormsModule,
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyDTpCcPUFIKPdJK04qOxL-tKDvs31218Gs",
    authDomain: "simply-grab.firebaseapp.com",
    databaseURL: "https://simply-grab.firebaseio.com",
    projectId: "simply-grab",
    storageBucket: "simply-grab.appspot.com",
    messagingSenderId: "592053869686",
    appId: "1:592053869686:web:c340856af4b0ea58f25357",
    measurementId: "G-GPS5BM0LER"
      }),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
