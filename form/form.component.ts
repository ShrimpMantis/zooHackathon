import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-my-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class ContactFormData {
  text: string;
}

export class MyFormComponent implements OnInit {
  messageFormGroup: FormGroup;
  @Output() sendDataToParent:  EventEmitter<ContactFormData> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    const formValue= this.messageFormGroup.value;
    this.sendDataToParent.emit(formValue);
  }

}
