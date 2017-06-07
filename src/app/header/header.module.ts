import { BrowserModule } from '@angular/platform-browser';
import {NgModule, ModuleWithProviders} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {AmitHeaderComponent} from './header.component';

@NgModule({
  declarations: [
    AmitHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AmitHeaderComponent]
})

export class HeaderModule {
    static forRoot(): ModuleWithProviders {
        return {ngModule: HeaderModule, providers: []};
    }
}