import { HeroDetailComponent } from './../hero-detail/hero-detail.component';
import { HeroesComponent } from './../heroes/heroes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './../header/header.component';
import { FooterComponent } from './../footer/footer.component';
import { AboutusComponent } from './../aboutus/aboutus.component';
import { LayoutComponent } from './../layout/layout.component';
import { HomeComponent } from './../home/home.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { MynewmodulesRoutingModule } from './mynewmodules-routing.module';


@NgModule({
  declarations: [ 
    HomeComponent,
    FooterComponent,
    AboutusComponent,
    HeaderComponent,
    LayoutComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  imports: [
    CommonModule,
    MynewmodulesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class MynewmodulesModule { }
