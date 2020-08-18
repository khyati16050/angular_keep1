import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from 'src/app/app.component';



@NgModule({
  declarations: [ AppComponent,
  HeaderComponent ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    MatCardModule,
    MatChipsModule,
    HttpClientModule
   ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }