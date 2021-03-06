import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes }   from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
// Custom components
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './login/logout.component';
import { IssueComponent } from './book/issue.component';
import { TemplateComponent } from './template/template.component';
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
  {
    path: 'pages',
    loadChildren: './template/template.module#TemplateModule'
  },
  {
    path: 'logout',
    component: LogoutComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IssueComponent,
    LogoutComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes,{ enableTracing: true }),
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers:[LoginService, BooklistingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
