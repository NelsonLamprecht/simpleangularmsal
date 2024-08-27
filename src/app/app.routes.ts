import { Routes } from '@angular/router';

import { MsalGuard } from '@azure/msal-angular';

import { FailedComponent } from './failed/failed.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';

export const routes: Routes = [
    {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [MsalGuard]
    },
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'login-failed',
        component: FailedComponent
    },
    {
        path: 'logout',
        component: LogoutComponent
    }
];
