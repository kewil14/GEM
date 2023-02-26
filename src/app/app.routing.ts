import { Routes } from '@angular/router';


export const AppRoutes: Routes = [{
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '',
        loadChildren:()=>import ('./view/espace-client/espace-client.module').then (x=>x.EspaceClientModule)
           
    }
]
        
        

