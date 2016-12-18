import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        NavComponent,
        RouterModule
        ],
    declarations: [NavComponent],
    providers: [],
})
export class CoreModule { }
