import { MyFeatureStoreEffects } from './../shared/store/effects/get-live-data.effect';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { featureReducer } from '../shared/store/reducer/reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { GameComponent } from './libs/game/game.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('state', featureReducer),
    EffectsModule.forRoot([MyFeatureStoreEffects]),
    StoreDevtoolsModule.instrument({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
