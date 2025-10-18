import { Component } from '@angular/core';

@Component({
  selector: 'app-lists',
  standalone: true,
  imports: [],
  template: `
    <div class="space-y-2 text-sm">
      <div class="flex items-center">
          <span class="font-medium text-gray-800">Lorem Ipsum Dolor</span>
          <span class="text-gray-600 ms-6">10/19/2017</span>
      </div>
      <div class="flex items-center">
          <span class="font-medium text-gray-800">Lorem Ipsum Dolor</span>
          <span class="text-gray-600 ms-6">Ut</span>
      </div>
      <div class="flex items-center">
          <span class="font-medium text-gray-800">Lorem Ipsum Dolor</span>
          <span class="text-gray-600 ms-6">Eros</span>
      </div>
      <div class="flex items-center">
          <span class="font-medium text-gray-800">Lorem Ipsum Dolor</span>
          <span class="text-gray-600 ms-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="text-green-500 h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Yes
          </span>
      </div>
      <div class="flex items-center">
          <span class="font-medium text-gray-800">Lorem Ipsum Dolor</span>
          <span class="ms-6 text-gray-600">Sit</span>
      </div>
      <div class="flex items-center">
          <span class="font-medium text-gray-800">Lorem Ipsum Dolor</span>
          <span class="ms-6 text-gray-600">Lorem Ipsum Dolor</span>
      </div>
      <div class="flex items-center lg:text-md">
          <span class="font-medium text-gray-800">Lorem Ipsum Dolor</span>
          <span class="ms-6 text-gray-600">Lorem Ipsum Dolor</span>
      </div>
  </div>
  `,
  styles: ``
})
export class ListsComponent {

}
