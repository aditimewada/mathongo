import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { CreateQuestionComponent } from './create-question/create-question.component';
import { GetQuestionsComponent } from './get-questions/get-questions.component';
import { GetQuizzesComponent } from './get-quizzes/get-quizzes.component';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { AdminService } from './admin.service';
import {HttpClientModule, HttpClient} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    CreateQuestionComponent,
    GetQuestionsComponent,
    GetQuizzesComponent,
    CreateQuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AdminService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
