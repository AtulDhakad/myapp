import { HeroDetailComponent } from './../hero-detail/hero-detail.component';
import { HeroesComponent } from './../heroes/heroes.component';
import { AuthGuard } from './../../guard/auth.guard';
import { HomeComponent } from './../home/home.component';
import { AboutusComponent } from './../aboutus/aboutus.component';
import { LayoutComponent } from './../layout/layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';




const routes: Routes = [ 
  {
    path: '', 
    component: LayoutComponent,
    canActivate:[AuthGuard],
    children: [
            {path: 'home', component: HomeComponent},
            {path: 'about', component: AboutusComponent},
            {path: 'heroes', component: HeroesComponent},
            {path: 'heroesdetails', component: HeroDetailComponent},
            {path: '', redirectTo: 'home', pathMatch: 'full'}
     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MynewmodulesRoutingModule { }
