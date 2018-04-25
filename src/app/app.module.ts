import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes }   from '@angular/router';

import { AppComponent } from './app.component';
// Custom components
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// Custom Services
import { LoginService } from './services/login.service';
import { BooklistingService } from './services/booklisting.service';

const appRoutes: Routes= [
  {
    path:'login',component:LoginComponent
  },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path:'dashboard',component:DashboardComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes,{ enableTracing: true }),
    BrowserModule,
    FormsModule,
  ],
  providers:[LoginService, BooklistingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
