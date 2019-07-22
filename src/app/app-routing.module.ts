import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './libs/game/game.component';


const routes: Routes = [
  // { path:  '', redirectTo:  'contacts', pathMatch:  'full' },
  { path:  'game', component: GameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
