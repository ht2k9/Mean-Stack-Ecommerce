import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormArray, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Product } from '../product.modal';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  editMode = false;

  tags: string[];
  productForm: FormGroup;
  selectedProduct: Product;
  selectedProductID : number;

  constructor(private dataSrv: ProductService,
    private sharedService: SharedService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router) {}

  ngOnInit() {
    this.tags = this.sharedService.tags;

    this.productForm = this.fb.group({
      title: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      mainImage: ['', Validators.required],
      colors: this.fb.array([]),
      tags: this.fb.array(this.sharedService.tags),
      sizes: this.fb.array([]),
      images: this.fb.array([]),
    });

    this.route.params.subscribe((param: Params) => {
      if(param.id){
        this.selectedProduct = param.id;
        this.dataSrv.getProductById(this.selectedProductID).subscribe((data: Product) => {
          this.selectedProduct = data;
          const { title, price, description, mainImage, colors, sizes, images} = data;
          this.editMode = true;
          this.productForm = this.fb.group({
            title: title,
            price: price,
            description: description,
            mainImage: mainImage,
            colors: this.fb.array(colors),
            tags: this.fb.array(this.tags),
            sizes: this.fb.array(sizes),
            images: this.fb.array(images),
          })
        });
      }
    });
  }

  onComplete(){
    if(this.editMode){
      this.dataSrv.editProduct(this.productForm.value, this.selectedProductID).subscribe((productData:Product) => {
        console.log(productData);
      });
    } else{
      this.dataSrv.addProduct(this.productForm.value).subscribe((productData: Product) => {
        console.log(productData);
      });
    }
    this.router.navigate(['/']);
  }

  shouldCheck(tag: string): boolean{
    if(!this.editMode){
      return false;
    }

    if(this.selectedProduct.tags.includes(tag)){
      return true;
    }

    return false;
  }

  get allSizes() {
    return this.productForm.get('sizes') as FormArray;
  }
  get allColors() {
    return this.productForm.get('colors') as FormArray;
  }
  get allImages() {
    return this.productForm.get('images') as FormArray;
  }

  addSize(){
    this.allSizes.push(this.fb.control('', Validators.required));
  }
  addColor(){
    this.allColors.push(this.fb.control('', Validators.required));
  }
  addImage(){
    this.allImages.push(this.fb.control('', Validators.required));
  }
}
