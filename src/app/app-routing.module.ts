import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegistrationViewPanelComponent} from './components/registration-view-panel/registration-view-panel.component';
import {UsersViewPanelComponent} from './components/users-view-panel/users-view-panel.component';
import {ManagersViewPanelComponent} from './components/managers-view-panel/managers-view-panel.component';
import {AdministratorsViewPanelComponent} from './components/administrators-view-panel/administrators-view-panel.component';

const routes: Routes = [
  { path: '', component: RegistrationViewPanelComponent },
  { path: 'registration', component: RegistrationViewPanelComponent },
  { path: 'users-view', component: UsersViewPanelComponent },
  { path: 'managers-view', component: ManagersViewPanelComponent },
  { path: 'administrators-view', component: AdministratorsViewPanelComponent },
  { path: '**', component: RegistrationViewPanelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
