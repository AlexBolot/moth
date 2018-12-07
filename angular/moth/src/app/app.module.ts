import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatGridListModule, MatIconModule, MatListModule, MatMenuModule, MatPaginatorModule, MatSidenavModule, MatSortModule, MatTableModule, MatToolbarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// https://github.com/crisbeto/angular-svg-round-progressbar
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RoundProgressbarComponent } from './components/round-progressbar/round-progressbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { IndexComponent } from './index/index.component';
import { MaterialModule } from './material-module';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AppComponent,
    ChatbotComponent,
    SidebarComponent,
    DashboardComponent,
    RoundProgressbarComponent
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
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
