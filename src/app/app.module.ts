import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { GetDataService } from './get-data.service';
import { HttpClientModule } from '@angular/common/http';
import { CardComponentComponent } from './card-component/card-component.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent, CardComponentComponent],
  bootstrap: [AppComponent],
  providers: [GetDataService],
})
export class AppModule {}
