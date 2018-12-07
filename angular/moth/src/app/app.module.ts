import {LayoutModule} from '@angular/cdk/layout';
import {NgModule} from '@angular/core';
import {AngularFireModule} from '@angular/fire';
import {FormsModule} from '@angular/forms';
import {
  MAT_CHECKBOX_CLICK_ACTION,
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatPaginatorModule,
  MatSidenavModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// https://github.com/crisbeto/angular-svg-round-progressbar
import { HttpClientModule } from '@angular/common/http';
import {RoundProgressModule} from 'angular-svg-round-progressbar';
import {environment} from 'src/environments/environment';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ChatbotComponent} from './components/chatbot/chatbot.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {RoundProgressbarComponent} from './components/round-progressbar/round-progressbar.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {IndexComponent} from './index/index.component';
import {MaterialModule} from './material-module';
import {TasksViewComponent} from './components/tasks-view/tasks-view.component';
import {TasksListComponent} from './components/tasks-list/tasks-list.component';
import {AngularFirestore} from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AppComponent,
    ChatbotComponent,
    SidebarComponent,
    DashboardComponent,
    RoundProgressbarComponent,
    TasksViewComponent,
    TasksListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    RoundProgressModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule
  ],
  providers: [
    AngularFirestore,
    {provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'check'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
