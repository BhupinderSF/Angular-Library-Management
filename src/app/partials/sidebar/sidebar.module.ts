import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }   from '@angular/router';
import { SidebarComponent } from './sidebar.component';


// const routes: Routes= [
//     {
//       path:'',component:SidebarComponent
//     }
//   ];

@NgModule({
    imports:[
        CommonModule,
        // RouterModule.forChild(routes)
    ],
    declarations: [
        SidebarComponent
    ],
    providers:[],
    exports: [SidebarModule]
})

export class SidebarModule {}