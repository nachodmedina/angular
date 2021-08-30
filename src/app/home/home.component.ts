import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

productos:any=[]

  constructor(private productosService: ProductosService) { 
    this.getProductos()
  }
  
  async getProductos() {
    this.productos = await this.productosService.getAll()
  }

  ngOnInit(): void {
  }

}
