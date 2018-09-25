import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';

import { SlideshowModule } from 'ng-simple-slideshow';

import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';
import { InstagramComponent } from './instagram/instagram.component';
import { TwitterComponent } from './twitter/twitter.component';
import { InteriorDesignComponent } from './interior-design/interior-design.component';
import { MusicComponent } from './music/music.component';
import { RandomComponent } from './random/random.component';
import { BioComponent } from './bio/bio.component';
import { ProjectsComponent } from './projects/projects.component';
import { TwitchComponent } from './twitch/twitch.component';
import { ResumeComponent } from './resume/resume.component';
import { HomeComponent } from './home/home.component';

import { ReferenceDataService } from './reference-data-service.service';

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    InstagramComponent,
    TwitterComponent,
    InteriorDesignComponent,
    MusicComponent,
    RandomComponent,
    BioComponent,
    ProjectsComponent,
    TwitchComponent,
    ResumeComponent,
    HomeComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    SlideshowModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'games', component: InstagramComponent },
      { path: 'twitter', component: TwitterComponent },
      { path: 'interior-design', component: InteriorDesignComponent },
      { path: 'music', component: MusicComponent },
      { path: 'random', component: RandomComponent },
      { path: 'bio', component: BioComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'twitch', component: TwitchComponent },
      { path: 'resume', component: ResumeComponent },
    ], {useHash: true})
  ],
  providers: [ReferenceDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }