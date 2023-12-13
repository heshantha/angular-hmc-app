import { Routes } from '@angular/router';
import {ClientsComponent} from '../app/clients/clients.component';
import {TemplatesComponent} from '../app/templates/templates.component';
import {ReportsComponent} from '../app/reports/reports.component';
import {UsersComponent} from '../app/users/users.component';
import {SubscriptionsComponent} from '../app/subscriptions/subscriptions.component';
import {SettingsComponent} from '../app/settings/settings.component';

export const routes: Routes = [
    { path: '', redirectTo: '/Reports', pathMatch: 'full' },
    { path: 'Clients', component: ClientsComponent },
    { path: 'Templates', component: TemplatesComponent },
    { path: 'Users', component: UsersComponent },
    { path: 'Reports', component: ReportsComponent },
    { path: 'Subscriptions', component: SubscriptionsComponent },
    { path: 'Settings', component: SettingsComponent },
];
