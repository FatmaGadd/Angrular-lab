import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {NavbarComponent} from './component/navbar/navbar.component';
import { ContentComponent } from './component/content/content.component';
import { FooterComponent } from './component/footer/footer.component';
import { SliderComponent } from './component/slider/slider.component';
import { ProductsComponent } from './component/products/products.component';
import { GalleryComponent } from './componentsD2/gallery/gallery.component';
import { TodosComponent } from './componentsD2/todos/todos.component';
import { StudentComponent } from './componentsD2/student/student.component';
import { ItiTracksComponent } from './componentsD2/iti-tracks/iti-tracks.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    FooterComponent,
    SliderComponent,
    ProductsComponent,
    GalleryComponent,
    TodosComponent,
    StudentComponent,
    ItiTracksComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
