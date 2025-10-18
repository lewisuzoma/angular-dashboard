import { Component, input } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    AccordionModule
  ],
  template: `
  <p-accordion>
    <p-accordion-panel value="0" class="p-0 rounded-lg shadow-md border border-gray-200">
        <p-accordion-header toggleicon="">
          <div >
            <h4 class="text-md font-semibold text-gray-800 mb-4">{{data()?.title}}</h4>
            <div class="flex items-center space-x-4 bg-gray-50 p-2 rounded-md">
                <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center ">
                    <img src="assets/icons/server.svg" alt="Setting Icon" class="h-8 w-8" />
                </div>
                <div class=" border-r border-gray-300 flex-1">
                    <p class="text-xs font-normal text-gray-700">Server</p>
                    <p class="text-xs text-gray-500 font-light">Server</p>
                </div>
                <div class="flex-1">
                    <p class="text-xs font-light text-gray-500">Lorem Ipsum</p>
                    <p class="text-xs font-light text-gray-500">Dolor Sit Amet</p>
                    <p class="text-xs font-light text-gray-500">Consectetur.</p>
                </div>
            </div>
          </div>
        </p-accordion-header>
        <p-accordion-content>
            <p class="m-0 text-xs text-gray-500 font-light">
                {{data()?.content}}
            </p>
        </p-accordion-content>
    </p-accordion-panel>

</p-accordion>

  `,
  styles: `
  :host {
    .p-accordionheader {
      display: inline
    }
    .p-iconwrapper {
      display: none !important;
    }
  }
`
})
export class CardComponent {
  data = input<{ title: string; content: string}>();

}
