import { Component, OnInit } from '@angular/core';
import { IProduct } from "./Product";
import { ProductService } from "./product.service";
@Component({
   
    templateUrl: './product-list.component.html',
    styleUrls : ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  pageTitle:string= "Product List";
  showImage : boolean = false;
  imageWidth: number = 30;
  imageMargin: number = 2;
  _listFillter : string ;
  errorMessage: string;
  get listFillter() : string{
      return this._listFillter;
  }
  set listFillter(value:string){
      this._listFillter = value;
      this.filteredProducts = this.listFillter ? this.performFilter(this.listFillter): this.products;
  }
  filteredProducts: IProduct[];
  products: IProduct[] =[];
onRatingClicked(message: string): void{
    this.pageTitle = 'Product List: ' + message;
}
constructor(private _productService: ProductService){
    
}
performFilter(filterBy : string): IProduct[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct)=>
    product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
}
toggleImage(): void
{ this.showImage =! this.showImage;}
ngOnInit(): void{
     this._productService.getProducts()
     .subscribe(products =>{
         this.products = products;
         this.filteredProducts = this.products;
     },
          error =>this.errorMessage =<any>error);
    
}

}

