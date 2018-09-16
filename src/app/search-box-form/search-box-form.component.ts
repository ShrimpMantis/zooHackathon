import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder,ReactiveFormsModule  } from '@angular/forms';

import { SearchBox } from './search-box';

@Component({
  selector: 'app-search-box-form',
  templateUrl: './search-box-form.component.html',
  styleUrls: ['./search-box-form.component.css']
})
export class SearchBoxFormComponent implements OnInit {
  formBuilder: FormBuilder;
  searchFormGroup: FormGroup;

  @Output() sendDataToParent: EventEmitter<SearchBox> = new EventEmitter();

  constructor(formBuilder: FormBuilder) {
    this.formBuilder = formBuilder;
    this.createForm();
  }

  private createForm() {
    this.searchFormGroup = this.formBuilder.group({
      text: ''
    });
  }

  ngOnInit() {
  }
  onSubmit(){
    const formValue= this.searchFormGroup.value;
    this.sendDataToParent.emit(formValue);
  }


}
