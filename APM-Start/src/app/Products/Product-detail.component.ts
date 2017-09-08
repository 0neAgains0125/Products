
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { IProduct } from "./product";
@Component({
    selector: 'pm-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
    pageTitle: string ='Product Detail';
    product: IProduct;
    constructor(private _route: ActivatedRoute,
                private _router: Router){ }
    ngOnInit(){ 
        let id = +this._route.snapshot.paramMap.get('id');
        this.pageTitle +=`: ${id}`;
        this.product = {
            "productId": id,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
        }
    }
    onBack(): void{
        this._router.navigate(['/products']);
    }
}