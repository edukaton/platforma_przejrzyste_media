import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing';
import { SharedModule } from '../shared/shared.module';

import { TestComponent } from './test/test.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SummaryComponent } from './guide/summary/summary.component';
import { FakenewsIntroComponent } from './guide/intro/fakenews-intro/fakenews-intro.component';
import { FakenewsSlidesComponent } from './guide/slides/fakenews-slides/fakenews-slides.component';
import { CardComponent } from './guide/card/card.component';
import { TutorialContainerComponent } from './guide/tutorial-container/tutorial-container.component';
import { TutorialNavComponent } from './guide/tutorial-nav/tutorial-nav.component';
import { RouterModule } from '@angular/router';
import { FakeNewsSlideContainerComponent } from './guide/slide-containers/fake-news-slide-container/fake-news-slide-container.component';
import { SocialmediaIntroComponent } from './guide/intro/socialmedia-intro/socialmedia-intro.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    StudentRoutingModule,
  ],
  declarations: [
    TestComponent,
    DashboardComponent,
    SummaryComponent,
    FakenewsIntroComponent,
    FakenewsSlidesComponent,
    CardComponent,
    TutorialContainerComponent,
    TutorialNavComponent,
    FakeNewsSlideContainerComponent,
    SocialmediaIntroComponent
  ],
  exports: [
    TestComponent,
    DashboardComponent,
    SummaryComponent,
    FakenewsIntroComponent,
    FakenewsSlidesComponent,
    CardComponent
  ]
})
export class StudentModule { }
