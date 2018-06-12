import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateComponent } from './template.component';

const routes: Routes = [
    {
        path: '', component: TemplateComponent,
        children: [
            {
                path: 'dashboard', loadChildren:'../dashboard/dashboard.module#DashboardModule',
                data: {title: "Dashboard"}
            },
            {
                path: 'issueme/:id', loadChildren: '../issueme/issueme.module#IssuemeModule',
                data: {title: "Issue Book"}
            }
            // { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            // { path: 'inquiry', loadChildren: './inquiry/inquiry.module#InquiryModule' },
            // { path: 'license', loadChildren: './license/license.module#LicenseModule' },
            // { path: 'users', loadChildren: './user/user.module#UserModule' },
            // //{ path: 'channels', loadChildren: './channel/channel.module#ChannelModule' },
            // { path: 'organizations', loadChildren: './organization/organization.module#OrganizationModule' },
            // { path: 'profile', loadChildren: './myinfo/edit_info.module#EditInfoModule' },
            // { path: 'termConditions', loadChildren: './term_conditions/term_conditions.module#TermConditionsModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TemplateRoutingModule { }
