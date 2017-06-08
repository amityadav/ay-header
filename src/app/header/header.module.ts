import { BrowserModule } from '@angular/platform-browser';
import {NgModule, ModuleWithProviders} from '@angular/core';

import {AmitHeaderComponent} from './header.component';

@NgModule({
  declarations: [
    AmitHeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AmitHeaderComponent]
})

export class AmitHeaderModule {
    public static forRoot(): ModuleWithProviders {
        return {ngModule: AmitHeaderModule, providers: []};
    }
}