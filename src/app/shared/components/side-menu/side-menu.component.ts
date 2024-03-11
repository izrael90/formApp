import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface MenuItem {
  title: string;
  router: string;
}

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './side-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuComponent {
  public reactiveMenu: MenuItem[] = [
    { title: 'Básicos', router: './reactive/basic' },
    { title: 'Dinámicos', router: './reactive/dynamic' },
    { title: 'Switches', router: './reactive/switches' },
  ];

  public authMenu: MenuItem[] = [{ title: 'Registro', router: './auth' }];
}
