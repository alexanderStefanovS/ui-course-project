import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UsersViewPanelComponent } from './components/users-view-panel/users-view-panel.component';
import { AdministratorsViewPanelComponent } from './components/administrators-view-panel/administrators-view-panel.component';
import { ManagersViewPanelComponent } from './components/managers-view-panel/managers-view-panel.component';
import { RegistrationViewPanelComponent } from './components/registration-view-panel/registration-view-panel.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { AddEventComponent } from './dialogs/add-event/add-event.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersViewPanelComponent,
    AdministratorsViewPanelComponent,
    ManagersViewPanelComponent,
    RegistrationViewPanelComponent,
    AddEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
