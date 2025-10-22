import { NgClass } from '@angular/common';
import { Component, computed, effect, inject, signal } from '@angular/core';
import { PaginationService } from '@app-shared/services/pagination.service';

export interface Asset {
  name: string;
  ip: string;
  risk: string;
  riskColor: 'red' | 'orange' | 'yellow' | 'green' | 'blue';
}

@Component({
  selector: 'app-contextual-risk',
  standalone: true,
  imports: [
    NgClass
  ],
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
                @for (asset of visibleAssets(); track asset.ip) {
                    <!-- Asset Row 1 -->
                    <div class="grid grid-cols-1 md:grid-cols-2 items-center py-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                        <div class="flex items-center space-x-3 col-span-1 ">
                            <!-- Icon -->
                            <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <img src="assets/icons/server-sm.svg" />
    
                            </div>
                            <!-- Text -->
                            <div>
                                <p class="text-sm font-medium text-gray-700 leading-tight">{{ asset.name }}</p>
                                <p class="text-xs text-gray-500">{{ asset.ip }}</p>
                            </div>
                        </div>
                        <!-- Risk Badge -->
                        <div class="col-span-1 text-right">
                            <span class="inline-block px-3 py-1 text-xs font-bold rounded-full " [ngClass]="getBadgeClasses(asset.riskColor)">
                                {{ asset.risk }}
                            </span>
                        </div>
                    </div>
                } @empty {
                    <div class="text-center py-6 text-gray-500">No assets found.</div>
                }
            </div>

            <!-- Pagination/Status Footer -->
            <div class="flex justify-center items-center mt-4 pt-3 border-t border-gray-100 text-xs text-gray-500">
                <button
                    (click)="paginationService.goToPrevPage()" 
                    [disabled]="paginationService.isFirstPage()"
                    class="flex items-center p-1 rounded-md transition-colors"
                    [ngClass]="{'cursor-pointer hover:text-gray-800 text-gray-600': !paginationService.isFirstPage(), 'cursor-not-allowed opacity-50 text-gray-400': paginationService.isFirstPage()}"
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 cursor-pointer text-gray-400 hover:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <span>{{ paginationService.paginationStatus() }}</span>
                <button 
                (click)="paginationService.goToNextPage()" 
                [disabled]="paginationService.isLastPage()"
                class="flex items-center p-1 rounded-md transition-colors"
                [ngClass]="{'cursor-pointer hover:text-gray-800 text-gray-600': !paginationService.isLastPage(), 'cursor-not-allowed opacity-50 text-gray-400': paginationService.isLastPage()}">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2 cursor-pointer text-gray-400 hover:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
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
                        <span class="font-bold mr-1">{{paginationService.riskSummary().Critical}}</span> Critical
                    </li>
                    <li class="flex items-center">
                        <span class="w-2 h-2 rounded-full bg-red-400 mr-2"></span>
                        <span class="font-bold mr-1">{{paginationService.riskSummary().High}}</span> High
                    </li>
                    <li class="flex items-center">
                        <span class="w-2 h-2 rounded-full bg-yellow-500 mr-2"></span>
                        <span class="font-bold mr-1">{{paginationService.riskSummary().Medium}}</span> Medium
                    </li>
                    <li class="flex items-center">
                        <span class="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                        <span class="font-bold mr-1">{{paginationService.riskSummary().Low}}</span> Low
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
                    <span class="text-2xl font-semibold text-gray-700 z-10">{{paginationService.riskSummary().Total}}</span>
                </div>
            </div>

        </div>

    </div>
</div>

  `,
  styles: ``
})
export class ContextualRiskComponent {

    public paginationService = inject(PaginationService);

    visibleAssets = this.paginationService.assetsForCurrentPage;

    
    // private allAssets = signal<Asset[]>([
    //     { name: 'Loremipsumdolorsit', ip: '192.168.1.1', risk: 'Critical', riskColor: 'red' },
    //     { name: 'Loremipsumdolorsit002', ip: '192.168.1.2', risk: 'Critical', riskColor: 'red' },
    //     { name: 'Database-Server-01', ip: '10.0.0.10', risk: 'High', riskColor: 'orange' },
    //     { name: 'Web-Proxy-03', ip: '172.16.5.25', risk: 'Medium', riskColor: 'yellow' },
    //     { name: 'File-Storage-09', ip: '192.168.50.3', risk: 'Low', riskColor: 'green' },
    //     { name: 'Backup-Node-A', ip: '10.0.1.44', risk: 'Critical', riskColor: 'red' },
    //     { name: 'Test-VM-Alpha', ip: '10.1.1.1', risk: 'Low', riskColor: 'green' },
    //     { name: 'DMZ-Firewall', ip: '1.1.1.1', risk: 'High', riskColor: 'orange' },
    //     { name: 'Web-App-Service', ip: '172.16.1.100', risk: 'Medium', riskColor: 'yellow' },
    //     { name: 'Load-Balancer-01', ip: '10.0.0.5', risk: 'Low', riskColor: 'green' },
    // ]);
    
    // currentPage = signal(1);
    // pageSize = signal(2);

    // totalPages = computed(() => {
    //     return Math.ceil(this.allAssets().length / this.pageSize());
    // });

    // isFirstPage = computed(() => this.currentPage() === 1);

    // isLastPage = computed(() => this.currentPage() === this.totalPages());

    // assetsForCurrentPage = computed(() => {
    //     const start = (this.currentPage() - 1) * this.pageSize();
    //     const end = start + this.pageSize();
    //     return this.allAssets().slice(start, end);
    // });

    // paginationStatus = computed(() => {
    //     const total = this.allAssets().length;
    //     if (total === 0) return 'No assets to display';
        
    //     const start = (this.currentPage() - 1) * this.pageSize() + 1;
    //     const end = Math.min(this.currentPage() * this.pageSize(), total);
    //     return `Showing ${start}-${end} of ${total}`;
    // });

    // goToPrevPage() {
    //     this.currentPage.update(page => Math.max(1, page - 1));
    // }

    // goToNextPage() {
    //     this.currentPage.update(page => Math.min(this.totalPages(), page + 1));
    // }

    getBadgeClasses(color: Asset['riskColor']) {
        const baseClasses = 'bg-red-100 text-red-700'; 
        switch (color) {
        case 'red': return 'bg-red-100/70 text-red-700';
        case 'orange': return 'bg-orange-100/70 text-orange-700';
        case 'yellow': return 'bg-yellow-100/70 text-yellow-700';
        case 'green': return 'bg-green-100/70 text-green-700';
        default: return baseClasses;
        }
    }

}
