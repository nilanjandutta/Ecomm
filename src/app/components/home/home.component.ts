import { ProductsService } from './../../products.service';
import { Product } from './../../Interface/products.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Products : Array<any> = [
    // { Name : "Aloe ‘Black Beauty’", Price :400, Description : "ALOE Vera", ProductPath:'./assets/images/Aloe ‘Black Beauty’.jpg'},
    // { Name : "Aloe ‘Christmas Carol’", Price :400, Description : "ALOE Vera", ProductPath:'./assets/images/Aloe ‘Christmas Carol’.jpg'},
    // { Name : "Aeonium Sunburst", Price :300, Description : "Succulent", ProductPath:'./assets/images/Aeonium ‘Sunburst’.jpg'},
    // { Name : "Adromischus Cristatus", Price :300, Description : "Succulent", ProductPath:'./assets/images/Adromischus Cristatus.jpg'},
    // { Name : "Adromischus Mardi gras", Price :300, Description : "Succulent", ProductPath:'./assets/images/Aeonium Mardigas.jpg'},
    // { Name : "Aloe Doran", Price :300, Description : "Succulent", ProductPath:'./assets/images/Aloe Doran.jpg'},
   
    

  ]
  constructor(private ps : ProductsService) { }

  ngOnInit(){
    this.ps.getAllProducts().subscribe(
    data => this.Products = data
    )
  }

  addToCart(index)
  {
    console.log("Added", this.Products[index]);
  }

}
