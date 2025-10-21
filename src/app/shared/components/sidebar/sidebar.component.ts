import { Component, computed, inject, signal } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  template: `
    <div class="flex h-screen sticky">
      <aside class="w-20 md:flex bg-white shadow-md flex flex-col justify-between transition-all duration-300 relative"
        [class.w-20]="isCollapsed() || isMobileView()"
        [class.w-62]="!isCollapsed() && !isMobileView()">
        <div>
          
          <!-- Top Nav Items -->
          
          <nav class="mt-4 space-y-2">
            @if(isCollapsed() || isMobileView()) { 
              <div class="flex justify-center" >
                <img src="assets/images/logo.jpg" /> 
              </div>
            }
            <!-- Menu Item -->
             @for (item of navItems(); let i = $index; track $index) {
               <a href="#" class="flex items-center mx-4 py-3 rounded-md text-gray-500 hover:text-gray-800 hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                [class.bg-success-50]="item.active"
                [class.bg-green-50]="item.active"
                [class.text-green-700]="item.active"
                [class.justify-center]="isCollapsed() || isMobileView()"
                [class.px-2]="isCollapsed() || isMobileView()"
                [class.px-3]="!isCollapsed() && !isMobileView()"
                (click)="setActive(i)">
                
                <div class="w-5 h-5 flex items-center justify-center mr-0" [class.md:mr-3]="!isCollapsed()">
                    <div [innerHTML]="saftHTML(item.icon)"></div>
                </div>
                <span class="text-sm font-medium transition-opacity duration-200" [class.md:inline]="!isCollapsed()" [class.opacity-0]="isCollapsed() || isMobileView()" [class.hidden]="isCollapsed() || isMobileView()">{{ item.label }}</span>
               </a>
             }

          </nav>
        </div>

        <!-- Bottom Section -->
        <div class="border-t border-gray-100">
          <nav class="py-3 space-y-2">
            @for (item of bottomItems(); track $index) {
              <a href="#" class="flex items-center mx-3 py-2 rounded-xl text-gray-500 hover:text-gray-800 hover:bg-gray-50 transition-colors cursor-pointer"
                 [class.justify-center]="isCollapsed() || isMobileView()"
                 [class.px-2]="isCollapsed() || isMobileView()"
                 [class.px-3]="!isCollapsed() && !isMobileView()">
                <!-- Icon -->
                <div class="w-5 h-5 flex items-center justify-center mr-0" [class.md:mr-3]="!isCollapsed() && !isMobileView()">
                    <div [innerHTML]="saftHTML(item.icon)"></div>
                </div>
                <!-- Label -->
                <span class="text-sm font-medium transition-opacity duration-200" [class.md:inline]="!isCollapsed()" [class.opacity-0]="isCollapsed() ||isMobileView()" [class.hidden]="isCollapsed() || isMobileView()">{{ item.label }}</span>
              </a>
            }

          </nav>

          <!-- User Profile -->
          <div class="border-t border-gray-100 pt-3">
            <div class="flex items-center py-2" [class.justify-center]="isCollapsed() || isMobileView()" [class.px-3]="!isCollapsed() && !isMobileView()">
              <!-- Avatar -->
              <div class="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              
              <!-- User Info and Logout Button -->
              <div class="flex-grow flex items-center justify-between ml-3" [class.hidden]="isCollapsed() || isMobileView()">
                <div>
                  <p class="text-sm font-medium text-gray-800">Lorem</p>
                  <p class="text-xs text-gray-500">Lorem</p>
                </div>
                <!-- Logout Button -->
                <button class="text-gray-500 hover:text-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

        </div>
        <!-- Collapse Button -->
        <button (click)="toggleCollapse()" class="absolute top-5 right-[-15px] bg-green-700 text-white rounded-full w-6 h-6 flex items-center justify-center cursor-pointer shadow-md">
          @if (isCollapsed() || isMobileView()) {
            <i class="pi pi-chevron-right text-sm"></i>
          } @else {
            <i class="pi pi-chevron-left text-sm"></i>
          }
        </button>
      </aside>
    </div>
  `,
  styles: ``
})
export class SidebarComponent {
  isCollapsed = signal(false);
  isMobile = signal(false);

  isMobileView = computed(() => this.isMobile());
  
  navItems = signal([
    { label: 'Lorem', icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.8333 2.5V7.5H17.5V2.5M10.8333 17.5H17.5V9.16667H10.8333M2.5 17.5H9.16667V12.5H2.5M2.5 10.8333H9.16667V2.5H2.5V10.8333Z" fill="#A3A9B6"/>
</svg>
`, active: false },
    { label: 'Lorem', icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.0861 14.6816L11.5787 3.42086C10.8771 2.19305 9.12305 2.19305 8.40391 3.42086L1.91405 14.6816C1.21244 15.8919 2.08945 17.4179 3.49266 17.4179H16.4899C17.9107 17.4179 18.7877 15.8919 18.0861 14.6816ZM10.0001 6.22729C10.5613 6.22729 10.9999 6.68333 10.9999 7.22707V7.29724L10.6666 12.3137C10.649 12.6645 10.3509 12.9452 10.0001 12.9452C9.64926 12.9452 9.35108 12.6645 9.33354 12.3137L9.00027 7.29724C8.96519 6.71841 9.42124 6.22729 10.0001 6.22729ZM10.0001 15.5937C9.42124 15.5937 8.94765 15.1201 8.94765 14.5413C8.94765 13.9625 9.42124 13.4889 10.0001 13.4889C10.5789 13.4889 11.0525 13.9625 11.0525 14.5413C11.0525 15.1201 10.5789 15.5937 10.0001 15.5937Z" fill="#A3A9B6"/>
</svg>
`, active: false },
    { label: 'Lorem', icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_3047_103)">
<path d="M8.80116 2.66626L2.99866 8.46693H11.2065L17.009 2.66626H8.80116Z" fill="#A3A9B6"/>
<path d="M11.5387 17.0069L17.3394 11.2062V2.99841L11.5387 8.79908V17.0069Z" fill="#A3A9B6"/>
<path d="M11.0732 8.93457H2.66919V17.3331H11.0732V8.93457Z" fill="#A3A9B6"/>
</g>
<defs>
<clipPath id="clip0_3047_103">
<rect width="14.6703" height="14.6667" fill="white" transform="translate(2.6665 2.66663)"/>
</clipPath>
</defs>
</svg>
`, active: false },
    { label: 'Lorem', icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.2501 1.7417L17.4251 2.9167L13.6751 6.6667H16.6667V8.33337H10.8334V2.50003H12.5001V5.4917L16.2501 1.7417ZM17.4251 15.4167L16.2501 16.5917L12.5001 12.8417V15.8334H10.8334V10H16.6667V11.6667H13.6751L17.4251 15.4167ZM3.75007 1.7417L7.50007 5.4917V2.50003H9.16674V8.33337H3.33341V6.6667H6.32507L2.57507 2.9167L3.75007 1.7417ZM2.57507 15.4167L6.32507 11.6667H3.33341V10H9.16674V15.8334H7.50007V12.8417L3.75007 16.5917L2.57507 15.4167Z" fill="#00481D"/>
<path d="M16.2501 1.7417L17.4251 2.9167L13.6751 6.6667H16.6667V8.33337H10.8334V2.50003H12.5001V5.4917L16.2501 1.7417ZM17.4251 15.4167L16.2501 16.5917L12.5001 12.8417V15.8334H10.8334V10H16.6667V11.6667H13.6751L17.4251 15.4167ZM3.75007 1.7417L7.50007 5.4917V2.50003H9.16674V8.33337H3.33341V6.6667H6.32507L2.57507 2.9167L3.75007 1.7417ZM2.57507 15.4167L6.32507 11.6667H3.33341V10H9.16674V15.8334H7.50007V12.8417L3.75007 16.5917L2.57507 15.4167Z" fill="black" fill-opacity="0.2"/>
<path d="M16.2501 1.7417L17.4251 2.9167L13.6751 6.6667H16.6667V8.33337H10.8334V2.50003H12.5001V5.4917L16.2501 1.7417ZM17.4251 15.4167L16.2501 16.5917L12.5001 12.8417V15.8334H10.8334V10H16.6667V11.6667H13.6751L17.4251 15.4167ZM3.75007 1.7417L7.50007 5.4917V2.50003H9.16674V8.33337H3.33341V6.6667H6.32507L2.57507 2.9167L3.75007 1.7417ZM2.57507 15.4167L6.32507 11.6667H3.33341V10H9.16674V15.8334H7.50007V12.8417L3.75007 16.5917L2.57507 15.4167Z" fill="black" fill-opacity="0.2"/>
<path d="M16.2501 1.7417L17.4251 2.9167L13.6751 6.6667H16.6667V8.33337H10.8334V2.50003H12.5001V5.4917L16.2501 1.7417ZM17.4251 15.4167L16.2501 16.5917L12.5001 12.8417V15.8334H10.8334V10H16.6667V11.6667H13.6751L17.4251 15.4167ZM3.75007 1.7417L7.50007 5.4917V2.50003H9.16674V8.33337H3.33341V6.6667H6.32507L2.57507 2.9167L3.75007 1.7417ZM2.57507 15.4167L6.32507 11.6667H3.33341V10H9.16674V15.8334H7.50007V12.8417L3.75007 16.5917L2.57507 15.4167Z" fill="black" fill-opacity="0.2"/>
<path d="M16.2501 1.7417L17.4251 2.9167L13.6751 6.6667H16.6667V8.33337H10.8334V2.50003H12.5001V5.4917L16.2501 1.7417ZM17.4251 15.4167L16.2501 16.5917L12.5001 12.8417V15.8334H10.8334V10H16.6667V11.6667H13.6751L17.4251 15.4167ZM3.75007 1.7417L7.50007 5.4917V2.50003H9.16674V8.33337H3.33341V6.6667H6.32507L2.57507 2.9167L3.75007 1.7417ZM2.57507 15.4167L6.32507 11.6667H3.33341V10H9.16674V15.8334H7.50007V12.8417L3.75007 16.5917L2.57507 15.4167Z" fill="black" fill-opacity="0.2"/>
<path d="M16.2501 1.7417L17.4251 2.9167L13.6751 6.6667H16.6667V8.33337H10.8334V2.50003H12.5001V5.4917L16.2501 1.7417ZM17.4251 15.4167L16.2501 16.5917L12.5001 12.8417V15.8334H10.8334V10H16.6667V11.6667H13.6751L17.4251 15.4167ZM3.75007 1.7417L7.50007 5.4917V2.50003H9.16674V8.33337H3.33341V6.6667H6.32507L2.57507 2.9167L3.75007 1.7417ZM2.57507 15.4167L6.32507 11.6667H3.33341V10H9.16674V15.8334H7.50007V12.8417L3.75007 16.5917L2.57507 15.4167Z" fill="black" fill-opacity="0.2"/>
<path d="M16.2501 1.7417L17.4251 2.9167L13.6751 6.6667H16.6667V8.33337H10.8334V2.50003H12.5001V5.4917L16.2501 1.7417ZM17.4251 15.4167L16.2501 16.5917L12.5001 12.8417V15.8334H10.8334V10H16.6667V11.6667H13.6751L17.4251 15.4167ZM3.75007 1.7417L7.50007 5.4917V2.50003H9.16674V8.33337H3.33341V6.6667H6.32507L2.57507 2.9167L3.75007 1.7417ZM2.57507 15.4167L6.32507 11.6667H3.33341V10H9.16674V15.8334H7.50007V12.8417L3.75007 16.5917L2.57507 15.4167Z" fill="black" fill-opacity="0.2"/>
<path d="M16.2501 1.7417L17.4251 2.9167L13.6751 6.6667H16.6667V8.33337H10.8334V2.50003H12.5001V5.4917L16.2501 1.7417ZM17.4251 15.4167L16.2501 16.5917L12.5001 12.8417V15.8334H10.8334V10H16.6667V11.6667H13.6751L17.4251 15.4167ZM3.75007 1.7417L7.50007 5.4917V2.50003H9.16674V8.33337H3.33341V6.6667H6.32507L2.57507 2.9167L3.75007 1.7417ZM2.57507 15.4167L6.32507 11.6667H3.33341V10H9.16674V15.8334H7.50007V12.8417L3.75007 16.5917L2.57507 15.4167Z" fill="black" fill-opacity="0.2"/>
<path d="M16.2501 1.7417L17.4251 2.9167L13.6751 6.6667H16.6667V8.33337H10.8334V2.50003H12.5001V5.4917L16.2501 1.7417ZM17.4251 15.4167L16.2501 16.5917L12.5001 12.8417V15.8334H10.8334V10H16.6667V11.6667H13.6751L17.4251 15.4167ZM3.75007 1.7417L7.50007 5.4917V2.50003H9.16674V8.33337H3.33341V6.6667H6.32507L2.57507 2.9167L3.75007 1.7417ZM2.57507 15.4167L6.32507 11.6667H3.33341V10H9.16674V15.8334H7.50007V12.8417L3.75007 16.5917L2.57507 15.4167Z" fill="black" fill-opacity="0.2"/>
<path d="M16.2501 1.7417L17.4251 2.9167L13.6751 6.6667H16.6667V8.33337H10.8334V2.50003H12.5001V5.4917L16.2501 1.7417ZM17.4251 15.4167L16.2501 16.5917L12.5001 12.8417V15.8334H10.8334V10H16.6667V11.6667H13.6751L17.4251 15.4167ZM3.75007 1.7417L7.50007 5.4917V2.50003H9.16674V8.33337H3.33341V6.6667H6.32507L2.57507 2.9167L3.75007 1.7417ZM2.57507 15.4167L6.32507 11.6667H3.33341V10H9.16674V15.8334H7.50007V12.8417L3.75007 16.5917L2.57507 15.4167Z" fill="black" fill-opacity="0.2"/>
<path d="M16.2501 1.7417L17.4251 2.9167L13.6751 6.6667H16.6667V8.33337H10.8334V2.50003H12.5001V5.4917L16.2501 1.7417ZM17.4251 15.4167L16.2501 16.5917L12.5001 12.8417V15.8334H10.8334V10H16.6667V11.6667H13.6751L17.4251 15.4167ZM3.75007 1.7417L7.50007 5.4917V2.50003H9.16674V8.33337H3.33341V6.6667H6.32507L2.57507 2.9167L3.75007 1.7417ZM2.57507 15.4167L6.32507 11.6667H3.33341V10H9.16674V15.8334H7.50007V12.8417L3.75007 16.5917L2.57507 15.4167Z" fill="black" fill-opacity="0.2"/>
</svg>
`, active: true },
    { label: 'Lorem', icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.8333 6.25004C18.5 6.91671 18.5 8.00004 17.8333 8.58337L15.5 10.9167L8.99996 4.41671L11.3333 2.08337C12 1.41671 13.0833 1.41671 13.6666 2.08337L15.1666 3.58337L17.6666 1.08337L18.8333 2.25004L16.3333 4.75004L17.8333 6.25004ZM13 11.0834L11.8333 9.91671L9.49996 12.25L7.74996 10.5L10.0833 8.16671L8.91663 7.00004L6.58329 9.33337L5.33329 8.16671L2.99996 10.5C2.33329 11.1667 2.33329 12.25 2.99996 12.8334L4.49996 14.3334L1.16663 17.6667L2.33329 18.8334L5.66663 15.5L7.16663 17C7.83329 17.6667 8.91663 17.6667 9.49996 17L11.8333 14.6667L10.6666 13.5L13 11.0834Z" fill="#A3A9B6"/>
</svg>
`, active: false },
    { label: 'Lorem', icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0286 3.61153V1.66663H5.56208C4.79123 1.66663 4.16663 2.29168 4.16663 3.06208V16.2304C4.16663 17.0013 4.79123 17.6259 5.56208 17.6259H13.8875C14.6584 17.6259 15.283 17.0008 15.283 16.2304V4.92103H13.3381C12.6158 4.92103 12.0286 4.33333 12.0286 3.61153ZM12.9119 13.512H6.53768C6.47063 13.512 6.41663 13.458 6.41663 13.3909V12.9301C6.41663 12.8631 6.47108 12.8091 6.53768 12.8091H12.9119C12.979 12.8091 13.033 12.8635 13.033 12.9301V13.3909C13.033 13.458 12.9785 13.512 12.9119 13.512ZM12.9119 10.8741H6.53768C6.47063 10.8741 6.41663 10.8196 6.41663 10.7526V10.2922C6.41663 10.2252 6.47108 10.1712 6.53768 10.1712H12.9119C12.979 10.1712 13.033 10.2256 13.033 10.2922V10.7526C13.033 10.8196 12.9785 10.8741 12.9119 10.8741ZM12.9119 8.23663H6.53768C6.47063 8.23663 6.41663 8.18218 6.41663 8.11558V7.65478C6.41663 7.58773 6.47108 7.53373 6.53768 7.53373H12.9119C12.979 7.53373 13.033 7.58818 13.033 7.65478V8.11558C13.033 8.18263 12.9785 8.23663 12.9119 8.23663Z" fill="#A3A9B6"/>
</svg>
`, active: false },
    { label: 'Lorem', icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.66663 4.16663H8.33329V1.66663H9.99996V18.3333H8.33329V15H4.99996V12.5H8.33329V10.8333H3.33329V8.33329H8.33329V6.66663H1.66663V4.16663ZM11.6666 4.16663H14.1666V6.66663H11.6666V4.16663ZM11.6666 8.33329H15.8333V10.8333H11.6666V8.33329ZM11.6666 12.5H18.3333V15H11.6666V12.5Z" fill="#A3A9B6"/>
</svg>
`, active: false },
  ]);

  bottomItems = signal([
    { label: 'Settings', icon: `<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.10778 11.25C7.33423 11.25 6.59236 10.9427 6.04538 10.3957C5.4984 9.84875 5.19111 9.10688 5.19111 8.33333C5.19111 7.55978 5.4984 6.81792 6.04538 6.27094C6.59236 5.72396 7.33423 5.41667 8.10778 5.41667C8.88132 5.41667 9.62319 5.72396 10.1702 6.27094C10.7172 6.81792 11.0244 7.55978 11.0244 8.33333C11.0244 9.10688 10.7172 9.84875 10.1702 10.3957C9.62319 10.9427 8.88132 11.25 8.10778 11.25ZM14.2994 9.14167C14.3328 8.875 14.3578 8.60833 14.3578 8.33333C14.3578 8.05833 14.3328 7.78333 14.2994 7.5L16.0578 6.14167C16.2161 6.01667 16.2578 5.79167 16.1578 5.60833L14.4911 2.725C14.3911 2.54167 14.1661 2.46667 13.9828 2.54167L11.9078 3.375C11.4744 3.05 11.0244 2.76667 10.4994 2.55833L10.1911 0.35C10.1578 0.15 9.98278 0 9.77444 0H6.44111C6.23278 0 6.05778 0.15 6.02444 0.35L5.71611 2.55833C5.19111 2.76667 4.74111 3.05 4.30778 3.375L2.23278 2.54167C2.04944 2.46667 1.82444 2.54167 1.72444 2.725L0.0577763 5.60833C-0.050557 5.79167 -0.000556918 6.01667 0.157776 6.14167L1.91611 7.5C1.88278 7.78333 1.85778 8.05833 1.85778 8.33333C1.85778 8.60833 1.88278 8.875 1.91611 9.14167L0.157776 10.525C-0.000556918 10.65 -0.050557 10.875 0.0577763 11.0583L1.72444 13.9417C1.82444 14.125 2.04944 14.1917 2.23278 14.125L4.30778 13.2833C4.74111 13.6167 5.19111 13.9 5.71611 14.1083L6.02444 16.3167C6.05778 16.5167 6.23278 16.6667 6.44111 16.6667H9.77444C9.98278 16.6667 10.1578 16.5167 10.1911 16.3167L10.4994 14.1083C11.0244 13.8917 11.4744 13.6167 11.9078 13.2833L13.9828 14.125C14.1661 14.1917 14.3911 14.125 14.4911 13.9417L16.1578 11.0583C16.2578 10.875 16.2161 10.65 16.0578 10.525L14.2994 9.14167Z" fill="#A3A9B6"/>
</svg>
`},
    { label: 'Comments', icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.4166 6.66671C17.025 6.66671 18.3333 5.35837 18.3333 3.75004C18.3333 2.14171 17.025 0.833374 15.4166 0.833374C13.8083 0.833374 12.5 2.14171 12.5 3.75004C12.5 5.35837 13.8083 6.66671 15.4166 6.66671ZM15.4166 8.33337C15.8333 8.33337 16.25 8.27504 16.6666 8.15837V13.3334C16.6666 15.6334 14.8 17.5 12.5 17.5H5.83329C3.53329 17.5 1.66663 15.6334 1.66663 13.3334V6.66671C1.66663 4.36671 3.53329 2.50004 5.83329 2.50004H11.0083C10.8916 2.91671 10.8333 3.33337 10.8333 3.75004C10.8333 6.28337 12.8833 8.33337 15.4166 8.33337Z" fill="#A3A9B6"/>
</svg>
` }
  ]);

  private sanitizer = inject(DomSanitizer)

  ngOnInit() {
    this.checkScreenSize();
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', () => this.checkScreenSize());
    }
  }

  checkScreenSize() {
    if (typeof window !== 'undefined') {
      this.isMobile.set(window.innerWidth < 768);
      this.isCollapsed.set(window.innerWidth < 768);
    }
  }

  setActive(index: number) {
    this.navItems.update(items =>
      items.map((item, i) => ({
        ...item,
        active: i === index
      }))
    );
  }

  toggleCollapse() {
    this.isCollapsed.update(val => !val);
    this.isMobile.update(val => !val);
  }

  saftHTML(value: string) {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
}
