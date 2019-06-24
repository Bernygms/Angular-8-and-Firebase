import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoInterface } from '../interfaces/producto.interface';
import { timeout } from 'q';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  cargando = true;
  productos =[];
  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos(){
    this.http.get('https://angular-html-45640.firebaseio.com/productos_idx.json')
    .subscribe((resp: ProductoInterface[]) =>{
      console.log(resp);
      this.productos = resp;
      this.cargando =  false;
    });
  }
}
