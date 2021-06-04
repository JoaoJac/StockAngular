import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'exemploAngular';
  ivas = [6,13,23];

  productForm = new FormGroup({
    price: new FormControl(''),
    iva: new FormControl(''),
    discount: new FormControl(''),
  });

  productValue = "";

  constructor(
    private http : HttpClient
  ){}

  setProductValue(product:any){
    this.productValue = JSON.stringify(this.productForm.value);
  }

  createProduct(){
    this.http.post("http://127.0.0.1:8080/stockMaven/api/products", this.productForm.value).subscribe(
      (res:any) => this.setProductValue(res)
    );
  }
}
