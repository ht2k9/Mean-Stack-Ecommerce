import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormArray, FormBuilder, Validators, FormGroup } from '@angular/forms';

import { Product } from '../product.modal';
import { ProductService } from '../product.service';
import { SharedService } from '../../shared/shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();
  editMode = false;

  tags: string[];
  productForm: FormGroup;
  selectedProduct: Product;
  selectedProductID : string;

  constructor(private productService: ProductService,
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
      tags: this.fb.array(this.tags),
      sizes: this.fb.array([]),
      images: this.fb.array([]),
    });

    this.route.params.subscribe((param: Params) => {
      if(param.id){
        this.selectedProductID = param.id;
        this.selectedProduct = this.productService.selectedProduct;
        this.editMode = true;

        const { title, price, description, mainImage, colors, sizes, images} = this.selectedProduct;
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
        
      }
    });
  }

  onComplete(){
    const tempVals = [];

    for (let i = 0; i < this.allTags.controls.length; i++) {
      const element = this.allTags.controls[i];
      
      if(element.value == true){
        tempVals.push(this.tags[i]);
      }else {
        
      }
    }

    this.allTags.reset();
    tempVals.forEach(tag => {
      this.addTag(tag);
    })

    if(this.editMode){
      this.subscription.add(this.productService.editProduct(this.productForm.value, this.selectedProductID).subscribe((productData:Product) => {
        this.router.navigate(['/']);
      }));
    } else{
      this.subscription.add(this.productService.addProduct(this.productForm.value).subscribe((productData: Product) => {
        this.router.navigate(['/']);
      }));
    }
    
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
  get allTags() {
    return this.productForm.get('tags') as FormArray;
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
  addTag(tagVal){
    this.allTags.push(this.fb.control(tagVal));
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
