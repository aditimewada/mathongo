import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import {CreateQuestionComponent} from './create-question/create-question.component';
import { GetQuestionsComponent } from './get-questions/get-questions.component';
import { GetQuizzesComponent } from './get-quizzes/get-quizzes.component';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';

const routes: Routes = [
  {
        path: '',
        component: AdminComponent,
  },
  {
        path: 'create-question',
        component: CreateQuestionComponent,
  },
  {
        path: 'all-questions',
        component: GetQuestionsComponent,
  },
  {
        path: 'create-quiz',
        component: CreateQuizComponent,
  },
  {
        path: 'all-quizzes',
        component: GetQuizzesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
