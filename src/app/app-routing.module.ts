import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { MusicCreateComponent } from './components/pages/music-create/music-create.component';
import { SendLyricComponent } from './components/pages/contributions/music-send/send-lyric/send-lyric.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contribuicoes/nome-do-artista/nome-da-musica/enviar/letra', component: SendLyricComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
