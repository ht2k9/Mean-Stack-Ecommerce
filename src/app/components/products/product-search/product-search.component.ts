import { Component, Input, Output, EventEmitter, OnChanges, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

import { SharedService } from '../../shared/shared.service';
import { Product } from '../product.modal';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnChanges, OnInit {
  @Input() filteredProducts: Product[];
  @Output() searchResults = new EventEmitter<{}>();
  @Output() selectedPage = new EventEmitter<number>()

  allTags = [];
  searchForm = new FormGroup({
    maxPrice: new FormControl(320),
    tags: new FormArray([])
  });

  pages: number[];

  constructor(public sharedService: SharedService) {}

  ngOnInit(){
    this.allTags = this.sharedService.tags;
    this.allTags.forEach(tag => {
      this.addTag(false);
    });
  }

  ngOnChanges() {
    const pagesNumber = Math.floor(this.filteredProducts.length / 6);

    this.pages = Array(pagesNumber+1).fill(0).map((x,i)=>i);
  }

  submitSearch(){
    let selectedTags = [];
    for (let i = 0; i < this.allTags.length; i++) {
      if(this.tags.controls[i].value == true){
        selectedTags.push(this.allTags[i])
      }
    }

    this.searchResults.emit({
      tags: selectedTags,
      maxPrice: this.searchForm.value.maxPrice
    });
  }

  get tags() {
    return this.searchForm.get('tags') as FormArray;
  }

  addTag(tag: boolean){
    this.tags.push(new FormControl(tag));
  }

  onSwitchPage(index: number){
    this.selectedPage.emit(index);
  }
}
