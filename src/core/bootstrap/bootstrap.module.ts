import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { PopoverModule } from 'ngx-bootstrap/popover';

@NgModule({
    imports: [
        CommonModule,
        BsDropdownModule.forRoot(),
        TooltipModule.forRoot(),
        ModalModule.forRoot(),
        TabsModule.forRoot(),
        PopoverModule.forRoot()
    ],
    exports: [BsDropdownModule, TooltipModule, ModalModule, TabsModule, PopoverModule]
})
export class BootstrapModule { }