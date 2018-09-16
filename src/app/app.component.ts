import { Component, Input } from '@angular/core';
import { SearchBox } from './search-box-form/search-box';
import { CallBackEndService } from './call-back-end.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  formContent: SearchBox;
  service:CallBackEndService;
  gridResult:any;
  mapResult:any;



  constructor(service:CallBackEndService){
    this.service=service;
  }

  onEmitData(formData: SearchBox){
    console.log("hi there",formData);
    this.mapResult= this.service.callBackEndMapPoints();
    this.gridResult= this.service.callBackEndTwitter();
    this.formContent=formData;
    
  }
}
