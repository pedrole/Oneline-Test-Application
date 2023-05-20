import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuizComponent } from './quiz/quiz.component';
import { HttpClientModule } from '@angular/common/http';
import { ResultComponent } from './result/result.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FormsModule } from '@angular/forms';
import { SelectedPipe } from './selected.pipe';
import { CorrectedPipe } from './corrected.pipe';
import { PointsPipe } from './points.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    ResultComponent,
    WelcomeComponent,
    SelectedPipe,
    CorrectedPipe,
    PointsPipe
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule, HttpClientModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
