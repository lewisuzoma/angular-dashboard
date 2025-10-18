import { Component, input } from '@angular/core';

@Component({
  selector: 'app-text-wrapper',
  standalone: true,
  imports: [],
  template: `
    <h2 class="text-xl font-semibold mb-4 text-primary">{{data()?.title}}</h2>
    <p class="text-sm text-gray-600 mb-6">
        {{data()?.content}}
    </p>
  `,
  styles: ``
})
export class TextWrapperComponent {
  data = input<{ title: string; content: string}>();
}
