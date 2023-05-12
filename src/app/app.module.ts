import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from "./material/material.module";
import {VarkTestComponent} from './vark-test/vark-test.component';
import {PersonalityTestComponent} from './personality-test/personality-test.component';
import {LoginComponent} from './login/login.component';
import {AppRoutingModule} from "./services/app-routing/app-routing.module";
import {VarkFormComponent} from './vark-test/vark-form/vark-form.component';
import {QuestionAnswersComponent} from "./vark-test/vark-form/question-answers/question-answers.component";
import {PersonalityFormComponent} from './personality-test/personality-form/personality-form.component';
import {UserHomeComponent} from './user-home/user-home.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {VarkStatsComponent} from './vark-test/vark-stats/vark-stats.component';
import {PersonalityStatsComponent} from './personality-test/personality-stats/personality-stats.component';
import {TableComponent} from './personality-test/personality-form/table/table.component';
import {VarkResultComponent} from './vark-test/vark-result/vark-result.component';
import {VisualComponent} from "./vark-test/vark-result/visual/visual.component";
import {AuralComponent} from "./vark-test/vark-result/aural/aural.component";
import {ReadComponent} from "./vark-test/vark-result/read/read.component";
import {KinestheticComponent} from "./vark-test/vark-result/kinesthetic/kinesthetic.component";
import {PersonalityResultComponent} from './personality-test/personality-result/personality-result.component';

@NgModule({
    declarations: [
        AppComponent,
        UserHomeComponent,

        // Login
        LoginComponent,

        // Vark Test
        VarkTestComponent,
        VarkFormComponent,
        VarkStatsComponent,
        QuestionAnswersComponent,
        VarkResultComponent,
        VisualComponent,
        AuralComponent,
        ReadComponent,
        KinestheticComponent,

        // Personality Test
        PersonalityTestComponent,
        PersonalityFormComponent,
        PersonalityStatsComponent,
        PersonalityResultComponent,
        TableComponent,
    ],
    imports: [
        BrowserModule,
        NoopAnimationsModule,
        FormsModule,
        ReactiveFormsModule,

        // Angular Material
        MaterialModule,

        // App Routing
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
