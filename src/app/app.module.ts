import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeatMapComponent } from './heat-map/heat-map.component';
import { TwitterComponent } from './twitter/twitter.component';
import { ResultsgridComponent } from './resultsgrid/resultsgrid.component';
import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';
import { MenuComponent } from './menu/menu.component';
import { HeatMapLayerComponent } from './heat-map/heat-map-layer/heat-map-layer.component';
import { SearchBoxFormComponent } from './search-box-form/search-box-form.component';
import { CallBackEndService } from './call-back-end.service';


@NgModule({
  declarations: [
    AppComponent,
    HeatMapComponent,
    TwitterComponent,
    ResultsgridComponent,
    jqxGridComponent,
    MenuComponent,
    HeatMapLayerComponent,
    SearchBoxFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CallBackEndService],
  bootstrap: [AppComponent]
})
export class AppModule { }
