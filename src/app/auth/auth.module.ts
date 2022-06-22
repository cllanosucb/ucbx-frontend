import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

@NgModule({
    declarations: [LoginComponent],
    imports: [
        CommonModule,
        AuthRoutingModule,
        PrimeNgModule,
        ReactiveFormsModule
    ],
})
export class AuthModule {}
