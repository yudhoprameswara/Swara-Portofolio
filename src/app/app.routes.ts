import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AboutDetailsComponent } from './about/about-details/about-details.component';

export const routes: Routes = [
    {
        path:'',
        component:AboutComponent,
    },
    {
        path:'About',
        component:AboutDetailsComponent
    }
];
