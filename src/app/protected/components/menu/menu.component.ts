import { Component, OnInit } from '@angular/core';
import { IndexComponent } from '../../pages/index/index.component';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
    model: any[];

    constructor(public appMain: IndexComponent) {}

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    {
                        label: 'Dashboard',
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['index'],
                    },
                ],
            },
            {
                label: 'Menú',
                items: [
                    {
                        label: 'Cursos',
                        icon: 'pi pi-book',
                        routerLink: ['cursos'],
                    },
                ],
            },
        ];
    }

    onKeydown(event: KeyboardEvent) {
        const nodeElement = <HTMLDivElement>event.target;
        if (event.code === 'Enter' || event.code === 'Space') {
            nodeElement.click();
            event.preventDefault();
        }
    }
}
