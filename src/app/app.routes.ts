import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';



const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home'},
   

];

  
export const app_routing = RouterModule.forRoot(APP_ROUTES);
