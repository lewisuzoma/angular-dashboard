import { Component } from '@angular/core';

@Component({
  selector: 'app-risk-tag',
  standalone: true,
  imports: [],
  template: `
    <div class="mt-8 pt-4 border-t border-gray-200 flex flex-wrap gap-4 justify-start">
      <span class="px-3 py-1 text-sm rounded-full space-x-2 text-red-700 font-bold flex items-center">
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 12.5C0 5.59644 5.59644 0 12.5 0C19.4036 0 25 5.59644 25 12.5C25 19.4036 19.4036 25 12.5 25C5.59644 25 0 19.4036 0 12.5Z" fill="#E6372B"/>
            <g clip-path="url(#clip0_1_717)">
            <path d="M14.2358 10.4825L10.7635 14.2441M10.7635 10.4825L14.2358 14.2441M18.0552 13.1156C18.0552 16.8772 15.6246 18.758 12.7358 19.8489C12.5845 19.9044 12.4202 19.9017 12.2705 19.8413C9.37465 18.758 6.94409 16.8772 6.94409 13.1156V7.84944C6.94409 7.64992 7.01726 7.45856 7.14749 7.31747C7.27772 7.17639 7.45436 7.09713 7.63854 7.09713C9.02742 7.09713 10.7635 6.19435 11.9719 5.05083C12.119 4.91466 12.3061 4.83984 12.4996 4.83984C12.6932 4.83984 12.8803 4.91466 13.0274 5.05083C14.2427 6.20187 15.9719 7.09713 17.3608 7.09713C17.5449 7.09713 17.7216 7.17639 17.8518 7.31747C17.982 7.45856 18.0552 7.64992 18.0552 7.84944V13.1156Z" stroke="#FFF8F7" stroke-width="1.46" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_1_717">
            <rect width="17.5" height="17.5" fill="white" transform="translate(3.75 3.75)"/>
            </clipPath>
            </defs>
          </svg>

          <span>Lorem</span>
      </span>
      <span class="px-3 py-1 text-sm rounded-full space-x-2 text-yellow-700 font-bold flex items-center">
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 12.5C0 5.59644 5.59644 0 12.5 0C19.4036 0 25 5.59644 25 12.5C25 19.4036 19.4036 25 12.5 25C5.59644 25 0 19.4036 0 12.5Z" fill="#FF9500"/>
            <g clip-path="url(#clip0_1_725)">
            <path d="M14.2358 10.4825L10.7635 14.2441M10.7635 10.4825L14.2358 14.2441M18.0552 13.1156C18.0552 16.8772 15.6246 18.758 12.7358 19.8489C12.5845 19.9044 12.4202 19.9017 12.2705 19.8413C9.37465 18.758 6.94409 16.8772 6.94409 13.1156V7.84944C6.94409 7.64992 7.01726 7.45856 7.14749 7.31747C7.27772 7.17639 7.45436 7.09713 7.63854 7.09713C9.02742 7.09713 10.7635 6.19435 11.9719 5.05083C12.119 4.91466 12.3061 4.83984 12.4996 4.83984C12.6932 4.83984 12.8803 4.91466 13.0274 5.05083C14.2427 6.20187 15.9719 7.09713 17.3608 7.09713C17.5449 7.09713 17.7216 7.17639 17.8518 7.31747C17.982 7.45856 18.0552 7.64992 18.0552 7.84944V13.1156Z" stroke="#FFF8F7" stroke-width="1.46" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_1_725">
            <rect width="17.5" height="17.5" fill="white" transform="translate(3.75 3.75)"/>
            </clipPath>
            </defs>
          </svg>

          <span>Lorem</span>
      </span>
      <span class="px-3 py-1 text-sm rounded-full space-x-2 text-green-700 font-bold flex items-center">
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 12.5C0 5.59644 5.59644 0 12.5 0C19.4036 0 25 5.59644 25 12.5C25 19.4036 19.4036 25 12.5 25C5.59644 25 0 19.4036 0 12.5Z" fill="#02983E"/>
            <g clip-path="url(#clip0_1_732)">
            <path d="M14.2766 11.0935L12.2597 14.1283L10.897 13.2311M18.3337 13.2311C18.3337 16.877 15.7816 18.6999 12.7482 19.7572C12.5894 19.811 12.4169 19.8084 12.2597 19.7499C9.21908 18.6999 6.66699 16.877 6.66699 13.2311V8.12696C6.66699 7.93357 6.74382 7.7481 6.88056 7.61136C7.01731 7.47461 7.20277 7.39779 7.39616 7.39779C8.85449 7.39779 10.6774 6.52279 11.9462 5.41446C12.1006 5.28248 12.2971 5.20996 12.5003 5.20996C12.7035 5.20996 12.9 5.28248 13.0545 5.41446C14.3305 6.53008 16.1462 7.39779 17.6045 7.39779C17.7979 7.39779 17.9833 7.47461 18.1201 7.61136C18.2568 7.7481 18.3337 7.93357 18.3337 8.12696V13.2311Z" stroke="#FFF8F7" stroke-width="1.46434" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_1_732">
            <rect width="17.5" height="17.5" fill="white" transform="translate(3.75 3.75)"/>
            </clipPath>
            </defs>
          </svg>

          <span>Lorem</span>
      </span>
  </div>
  `,
  styles: ``
})
export class RiskTagComponent {

}
