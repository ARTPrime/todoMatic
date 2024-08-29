import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { EffectsModule } from '@ngrx/effects';
import { ToDoMaticEffects } from './store/effects';
import { ToDoMaticReducer } from './store/reducers';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        StoreModule.forRoot({ toDoMatic: ToDoMaticReducer }),
        EffectsModule.forRoot([ToDoMaticEffects]),
    ],
    providers: [provideAnimationsAsync(), provideHttpClient()],
    bootstrap: [AppComponent],
})
export class AppModule {}
