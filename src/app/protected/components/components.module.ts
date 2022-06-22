import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { PrimeNgModule } from '../../prime-ng/prime-ng.module';
import { MenuitemComponent } from './menuitem/menuitem.component';

@NgModule({
    declarations: [
        TopbarComponent,
        MenuComponent,
        FooterComponent,
        MenuitemComponent,
    ],
    exports: [
        TopbarComponent,
        MenuComponent,
        FooterComponent,
        MenuitemComponent,
    ],
    imports: [CommonModule, PrimeNgModule],
})
export class ComponentsModule {}
