import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {PersonalityTestComponent} from "../personality-test/personality-test.component";
import {VarkFormComponent} from "../vark-test/vark-form/vark-form.component";
import {PersonalityFormComponent} from "../personality-test/personality-form/personality-form.component";
import {UserHomeComponent} from "../user-home/user-home.component";
import {VarkTestComponent} from "../vark-test/vark-test.component";
import {LoginComponent} from "../login/login.component";
import {VarkStatsComponent} from "../vark-test/vark-stats/vark-stats.component";

const appRoutes: Routes = [
    // {path: '', redirectTo: '/user-home', pathMatch: 'full'},
    {path: '', redirectTo: '/user-home/vark-test', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {
        path: 'user-home', component: UserHomeComponent,
        children: [
            {path: '', redirectTo: 'vark-test', pathMatch: 'full'},
            {path: 'vark-test', component: VarkTestComponent},
            {path: 'personality-test', component: PersonalityTestComponent},
        ]
    },
    {path: 'vark-form', component: VarkFormComponent},
    {path: 'vark-stats', component: VarkStatsComponent},
    {path: 'personality-form', component: PersonalityFormComponent}
]

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
