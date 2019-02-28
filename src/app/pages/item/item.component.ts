import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../../interfaces/producto.interface';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: ProductoDescripcion;
  cod: string;

  constructor( private route: ActivatedRoute, 
    public productoService:ProductosService ) { }

  ngOnInit() {

    this.route.params
      .subscribe(parametros=>{

        this.productoService.getProducto(parametros['cod'])
          .subscribe(( producto: ProductoDescripcion) => {
            this.cod=parametros['cod']
            this.producto=producto;
          })

      });

  }

}
