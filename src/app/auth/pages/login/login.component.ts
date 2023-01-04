import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AppConfig } from 'src/app/api/appconfig';
import { ConfigService } from 'src/app/service/app.config.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Message } from 'primeng/api';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
    config: AppConfig;
    subscription: Subscription;

    formLogin: FormGroup = this.fb.group({
        usuario: ['', [Validators.required, Validators.email]],
        clave: ['', [Validators.required, Validators.minLength(6)]],
    });
    type: string = 'password';
    msgs: Message[] = [];
    loading: boolean;

    constructor(
        public configService: ConfigService,
        private fb: FormBuilder,
        private router: Router,
        private authService: AuthService
    ) {}

    ngOnInit(): void {
        this.config = this.configService.config;
        this.subscription = this.configService.configUpdate$.subscribe(
            (config) => {
                this.config = config;
            }
        );
    }

    ngOnDestroy(): void {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    verPass() {
        this.type = this.type === 'text' ? 'password' : 'text';
    }

    login() {
        this.loading = true;
        const { usuario, clave } = this.formLogin.value;
        this.authService.login(usuario, clave).subscribe(
            (resp) => {
                this.loading = false;
                this.router.navigate(['/index']);
            },
            (err) => {
                this.loading = false;
                this.errorApi(err);
            }
        );
    }

    errorApi(error) {
        this.msgs = [];
        this.msgs.push({
            severity: 'error',
            summary: 'Error Message',
            detail: error.error.msg,
        });
    }
}
