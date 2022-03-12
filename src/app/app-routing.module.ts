import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FifthQuestionComponent } from './fifth-question/fifth-question.component';
import { FirstQuestionComponent } from './first-question/first-question.component';
import { FourthQuestionComponent } from './fourth-question/fourth-question.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RestartPageComponent } from './restart-page/restart-page.component';
import { SecondQuestionComponent } from './second-question/second-question.component';
import { ThirdQuestionComponent } from './third-question/third-question.component';
import { WinPageComponent } from './win-page/win-page.component';

const routes: Routes = [
  { path: 'main-page', component: MainPageComponent},
  { path: 'restart-page', component: RestartPageComponent},
  { path: 'first-question', component: FirstQuestionComponent},
  { path: 'second-question', component: SecondQuestionComponent},
  { path: 'third-question', component: ThirdQuestionComponent},
  { path: 'third-question', component: ThirdQuestionComponent},
  { path: 'fourth-question', component: FourthQuestionComponent},
  { path: 'fifth-question', component: FifthQuestionComponent},
  { path: 'win-page', component: WinPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  MainPageComponent, 
  FirstQuestionComponent, 
  SecondQuestionComponent, 
  ThirdQuestionComponent, 
  FourthQuestionComponent, 
  FifthQuestionComponent, 
  WinPageComponent,
  RestartPageComponent
];