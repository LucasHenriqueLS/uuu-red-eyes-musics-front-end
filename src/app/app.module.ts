import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MusicHomeComponent } from './components/pages/music-home/music-home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/pages/about/about.component';
import { HomeComponent } from './components/pages/home/home.component';
import { MusicCreateComponent } from './components/pages/music-create/music-create.component';
import { SendLyricComponent } from './components/pages/contributions/music-send/send-lyric/send-lyric.component';
import { ContributionsComponent } from './components/pages/contributions/contributions.component';
import { LyricFormComponent } from './components/lyric-form/lyric-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MusicHomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    MusicCreateComponent,
    SendLyricComponent,
    ContributionsComponent,
    LyricFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
