import {
    AfterViewInit,
    Component,
    OnDestroy,
    OnInit,
    Renderer2,
} from '@angular/core';
import {
    trigger,
    state,
    style,
    transition,
    animate,
} from '@angular/animations';
import { AppConfig } from 'src/app/api/appconfig';
import { Subscription } from 'rxjs';
import { AppComponent } from 'src/app/app.component';
import { ConfigService } from 'src/app/service/app.config.service';
import { UsuariosService } from '../../services/usuarios.service';
import { UsuarioClass } from '../../interfaces/usuarios';
import { Message } from 'primeng/api';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss'],
    animations: [
        trigger('submenu', [
            state(
                'hidden',
                style({
                    height: '0px',
                })
            ),
            state(
                'visible',
                style({
                    height: '*',
                })
            ),
            transition(
                'visible => hidden',
                animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')
            ),
            transition(
                'hidden => visible',
                animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')
            ),
        ]),
    ]
})
export class IndexComponent implements AfterViewInit, OnDestroy, OnInit {

    public menuInactiveDesktop: boolean;
    public menuActiveMobile: boolean;
    public overlayMenuActive: boolean;
    public staticMenuInactive: boolean = false;
    public profileActive: boolean;
    public topMenuActive: boolean;
    public topMenuLeaving: boolean;
    public theme: string;
    documentClickListener: () => void;
    menuClick: boolean;
    topMenuButtonClick: boolean;
    configActive: boolean;
    configClick: boolean;
    config: AppConfig;
    subscription: Subscription;

    usuario: UsuarioClass;
    username: string;
    loading: boolean = true;
    msgs: Message[] = [];

    constructor(
        public renderer: Renderer2,
        public app: AppComponent,
        public configService: ConfigService,
        private usuariosService: UsuariosService
    ) {}

    ngOnInit() {
        this.config = this.configService.config;
        this.subscription = this.configService.configUpdate$.subscribe(
            (config) => (this.config = config)
        );
        this.getUsuarioPorToken();
    }

    getUsuarioPorToken() {
        this.usuariosService.getUsuario()
            .subscribe(resp => {
                    console.log(resp);
                    this.loading = false;
                    this.usuario = resp.data.usuario;
                    this.username = `${this.usuario.nombre} ${this.usuario.primer_ap}${this.usuario.segundo_ap != null ? ` ${this.usuario.segundo_ap}` : ''}`;
                }, err => {
                    this.loading = false;
                    this.errorApi(err)
                });
    }

    errorApi(error) {
        this.msgs = [];
        this.msgs.push({ severity: 'error', summary: 'Error Message', detail: error.error.msg });
    }

    ngAfterViewInit() {
        // hides the overlay menu and top menu if outside is clicked
        this.documentClickListener = this.renderer.listen(
            'body',
            'click',
            (event) => {
                if (!this.isDesktop()) {
                    if (!this.menuClick) {
                        this.menuActiveMobile = false;
                    }

                    if (!this.topMenuButtonClick) {
                        this.hideTopMenu();
                    }
                } else {
                    if (!this.menuClick && this.isOverlay()) {
                        this.menuInactiveDesktop = true;
                    }
                    if (!this.menuClick) {
                        this.overlayMenuActive = false;
                    }
                }

                if (this.configActive && !this.configClick) {
                    this.configActive = false;
                }

                this.configClick = false;
                this.menuClick = false;
                this.topMenuButtonClick = false;
            }
        );
    }

    toggleMenu(event: Event) {
        this.menuClick = true;

        if (this.isDesktop()) {
            if (this.app.menuMode === 'overlay') {
                if (this.menuActiveMobile === true) {
                    this.overlayMenuActive = true;
                }

                this.overlayMenuActive = !this.overlayMenuActive;
                this.menuActiveMobile = false;
            } else if (this.app.menuMode === 'static') {
                this.staticMenuInactive = !this.staticMenuInactive;
            }
        } else {
            this.menuActiveMobile = !this.menuActiveMobile;
            this.topMenuActive = false;
        }

        event.preventDefault();
    }

    toggleProfile(event: Event) {
        this.profileActive = !this.profileActive;
        event.preventDefault();
    }

    toggleTopMenu(event: Event) {
        this.topMenuButtonClick = true;
        this.menuActiveMobile = false;

        if (this.topMenuActive) {
            this.hideTopMenu();
        } else {
            this.topMenuActive = true;
        }

        event.preventDefault();
    }

    hideTopMenu() {
        this.topMenuLeaving = true;
        setTimeout(() => {
            this.topMenuActive = false;
            this.topMenuLeaving = false;
        }, 1);
    }

    onMenuClick() {
        this.menuClick = true;
    }

    onConfigClick(event) {
        this.configClick = true;
    }

    isStatic() {
        return this.app.menuMode === 'static';
    }

    isOverlay() {
        return this.app.menuMode === 'overlay';
    }

    isDesktop() {
        return window.innerWidth > 992;
    }

    isMobile() {
        return window.innerWidth < 1024;
    }

    onSearchClick() {
        this.topMenuButtonClick = true;
    }

    ngOnDestroy() {
        if (this.documentClickListener) {
            this.documentClickListener();
        }

        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
