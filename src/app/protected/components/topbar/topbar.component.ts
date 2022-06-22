import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { IndexComponent } from '../../pages/index/index.component';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
    selector: 'app-topbar',
    templateUrl: './topbar.component.html',
    styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
    
    items: MenuItem[];

    @Input() username;

    constructor(
        public appMain: IndexComponent,
        private router: Router,
        private authService: AuthService
    ) {}

    ngOnInit(): void {}

    logout() {
        this.router.navigateByUrl('/auth/login')
        this.authService.logout();
    }

}
