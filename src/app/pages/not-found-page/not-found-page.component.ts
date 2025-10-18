import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
// import { AppLayoutComponent } from '@app-shared/components/layouts/app-layout.component';

@Component({
  selector: 'app-not-found-page',
  standalone: true,
  imports: [
    // AppLayoutComponent,
    RouterLinkWithHref,
  ],
  templateUrl: './not-found-page.component.html',
  styleUrl: './not-found-page.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NotFoundPageComponent {

}
