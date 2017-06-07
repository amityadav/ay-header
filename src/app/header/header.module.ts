import {NgModule, ModuleWithProviders} from '@angular/core';
import {HeaderComponent} from './header.component';
/**
 * The Hello World component is an example how to write components in the correct way.
 *
 * @author Daniele Zurico
 */
@NgModule({
    declarations: [HeaderComponent],
    exports: [HeaderComponent]
})

export class HeaderModule {
    static forRoot(): ModuleWithProviders {
        return {ngModule: HeaderModule, providers: []};
    }
}