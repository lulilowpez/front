import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { EstadoCocherasComponent } from './pages/estado-cocheras.component';
import { DashboardContainerComponent } from './pages/dashboard-container/dashboard-container.component';
import { ReportesComponent } from './pages/reportes/reportes.component';

export const routes: Routes = [
    {
        path: '',
        component: DashboardContainerComponent,
        children: [
            {
                path: 'estado-cocheras',
                component: EstadoCocherasComponent
            },
            {
                path: 'reportes',
                component: ReportesComponent
            }
        ]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'not-found',
        component: NotFoundComponent
    }
];
