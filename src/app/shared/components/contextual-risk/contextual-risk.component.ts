import { Component } from '@angular/core';

@Component({
  selector: 'app-contextual-risk',
  standalone: true,
  imports: [],
  template: `
    <div class=" bg-white w-full max-w-7xl mx-auto">
    <h2 class="text-xl font-semibold text-green-700 my-3">Lorem Ipsum Dolor Sit</h2>

    <div class="flex flex-col md:flex-row gap-4 overflow-hidden">

        <!-- 1. Asset List (Left Side) -->
        <div class="flex-1 p-4 md:p-6 border border-gray-200 rounded-lg bg-white">
            <div class="grid grid-cols-2 text-xs font-normal text-gray-500 border-b border-gray-200 pb-2 mb-3">
                <div class="col-span-1">Asset</div>
                <div class="col-span-1 text-right">Contextual Risk</div>
            </div>

            <div class="space-y-3">
                <!-- Asset Row 1 -->
                <div class="grid grid-cols-1 md:grid-cols-2 items-center py-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                    <div class="flex items-center space-x-3 col-span-1 ">
                        <!-- Icon -->
                        <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <img src="assets/icons/server-sm.svg" />

                        </div>
                        <!-- Text -->
                        <div>
                            <p class="text-sm font-medium text-gray-700 leading-tight">Loremipsumdolorsit</p>
                            <p class="text-xs text-gray-500">192.168.1.1</p>
                        </div>
                    </div>
                    <!-- Risk Badge -->
                    <div class="col-span-1 text-right">
                        <span class="inline-block px-3 py-1 text-xs font-bold rounded-full bg-red-100 text-red-700">
                            Critical
                        </span>
                    </div>
                </div>

                <!-- Asset Row 2 -->
                <div class="grid grid-cols-1 md:grid-cols-2 items-center py-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                    <div class="flex items-center space-x-3 col-span-1">
                        <!-- Icon -->
                        <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <img src="assets/icons/server-sm.svg" />
                          
                        </div>
                        <!-- Text -->
                        <div>
                            <p class="text-sm font-medium text-gray-700 leading-tight">Loremipsumdolorsit002</p>
                            <p class="text-xs text-gray-500">192.168.1.2</p>
                        </div>
                    </div>
                    <!-- Risk Badge -->
                    <div class="col-span-1 text-right">
                        <span class="inline-block px-3 py-1 text-xs font-bold rounded-full bg-red-100 text-red-700">
                            Critical
                        </span>
                    </div>
                </div>
            </div>

            <!-- Pagination/Status Footer -->
            <div class="flex justify-center items-center mt-4 pt-3 border-t border-gray-100 text-xs text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 cursor-pointer text-gray-400 hover:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                <span>Showing 1-2 of 2</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2 cursor-pointer text-gray-400 hover:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </div>
        </div>

        <!-- Responsive break: adds top border on mobile, left border on desktop -->
        <div class="w-full rounded-lg md:w-1/3 p-4 md:p-6 bg-gray-50 border border-gray-200 flex flex-col items-center">
            
            <h4 class="text-md font-semibold text-gray-700 mb-4 self-start">Contextual Risk</h4>
            
            <div class="flex  items-center justify-between w-full mb-6 md:flex-col-reverse lg:flex-row">
                <!-- Risk Status List -->
                <ul class="space-y-4 text-sm text-gray-700 md:text-xs">
                    <li class="flex items-center">
                        <span class="w-2 h-2 rounded-full bg-red-600 mr-2"></span>
                        <span class="font-bold mr-1">2</span> Critical
                    </li>
                    <li class="flex items-center">
                        <span class="w-2 h-2 rounded-full bg-red-400 mr-2"></span>
                        <span class="font-bold mr-1">0</span> High
                    </li>
                    <li class="flex items-center">
                        <span class="w-2 h-2 rounded-full bg-yellow-500 mr-2"></span>
                        <span class="font-bold mr-1">0</span> Medium
                    </li>
                    <li class="flex items-center">
                        <span class="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                        <span class="font-bold mr-1">0</span> Low
                    </li>
                </ul>

                <!-- Circular Risk Score -->
                <div class="relative w-24 h-24 flex items-center justify-center flex-shrink-0">
                    <!-- SVG for the red circle outline -->
                    <svg class="w-full h-full transform -rotate-90 absolute" viewBox="0 0 100 100" aria-hidden="true">
                        <!-- Background ring (gray or white) -->
                        <circle cx="50" cy="50" r="45" fill="none" stroke="#f3f4f6" stroke-width="10" />
                        <!-- Foreground ring (Red) -->
                        <circle cx="50" cy="50" r="45" fill="none" stroke="#dc2626" stroke-width="10" 
                                stroke-dasharray="282.74" 
                                stroke-dashoffset="0" /> <!-- 282.74 is the circumference for r=45 -->
                    </svg>
                    <span class="text-2xl font-semibold text-gray-700 z-10">2</span>
                </div>
            </div>

        </div>

    </div>
</div>

  `,
  styles: ``
})
export class ContextualRiskComponent {

}
