import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../shared/database.service';
import { ActivatedRoute, Params } from '@angular/router';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  productForm : FormGroup;

  editMode = false;

  constructor(private dataSrv: DatabaseService, private route: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit() {
    this.route.params.subscribe((param: Params) => {
      if(param.id){
        this.dataSrv.getProductById(param.id).subscribe((data) => {
          this.editMode = true;
          this.productForm = this.fb.group({
            title: data['title'],
            price: data['price'],
            description: data['description'],
            mainImage: data['mainImage'],
            colors: this.fb.array(data['colors']),
            sizes: this.fb.array(data['sizes']),
            images: this.fb.array(data['images']),
          })
        });
      } else {
        this.productForm = this.fb.group({
          title: ['', Validators.required],
          price: ['', Validators.required],
          description: ['', Validators.required],
          mainImage: ['', Validators.required],
          colors: this.fb.array([]),
          sizes: this.fb.array([]),
          images: this.fb.array([]),
        })
      }
    });
    console.log(this.productForm.value)
  }

  onComplete(){
    console.log(this.productForm.value);
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