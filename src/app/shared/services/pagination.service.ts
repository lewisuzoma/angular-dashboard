import { computed, Injectable, signal } from "@angular/core";

interface Asset {
  name: string;
  ip: string;
  risk: string;
  riskColor: 'red' | 'orange' | 'yellow' | 'green' | 'blue';
}

export interface RiskSummary {
  Critical: number;
  High: number;
  Medium: number;
  Low: number;
  Total: number;
}

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

    private allAssets = signal<Asset[]>([
        { name: 'Loremipsumdolorsit', ip: '192.168.1.1', risk: 'Critical', riskColor: 'red' },
        { name: 'Loremipsumdolorsit002', ip: '192.168.1.2', risk: 'Critical', riskColor: 'red' },
        { name: 'Database-Server-01', ip: '10.0.0.10', risk: 'High', riskColor: 'orange' },
        { name: 'Web-Proxy-03', ip: '172.16.5.25', risk: 'Medium', riskColor: 'yellow' },
        { name: 'File-Storage-09', ip: '192.168.50.3', risk: 'Low', riskColor: 'green' },
        { name: 'Backup-Node-A', ip: '10.0.1.44', risk: 'Critical', riskColor: 'red' },
        { name: 'Test-VM-Alpha', ip: '10.1.1.1', risk: 'Low', riskColor: 'green' },
        { name: 'DMZ-Firewall', ip: '1.1.1.1', risk: 'High', riskColor: 'orange' },
        { name: 'Web-App-Service', ip: '172.16.1.100', risk: 'Medium', riskColor: 'yellow' },
        { name: 'Load-Balancer-01', ip: '10.0.0.5', risk: 'Low', riskColor: 'green' },
    ]);
    
    currentPage = signal(1);
    pageSize = signal(2);

    totalPages = computed(() => {
        return Math.ceil(this.allAssets().length / this.pageSize());
    });

    isFirstPage = computed(() => this.currentPage() === 1);

    isLastPage = computed(() => this.currentPage() === this.totalPages());

    assetsForCurrentPage = computed(() => {
        const start = (this.currentPage() - 1) * this.pageSize();
        const end = start + this.pageSize();
        return this.allAssets().slice(start, end);
    });

    riskSummary = computed<RiskSummary>(() => {
        const summary: RiskSummary = { Critical: 0, High: 0, Medium: 0, Low: 0, Total: 0 };
        
        // assetsForCurrentPage is a signal, so we call it to get the array
        const assets = this.assetsForCurrentPage(); 

        for (const asset of assets) {
        if (asset.risk in summary) {
            // TypeScript safe way to check and increment 
            summary[asset.risk as keyof RiskSummary]++;
        }
        summary.Total++;
        }
        return summary;
    });

    paginationStatus = computed(() => {
        const total = this.allAssets().length;
        if (total === 0) return 'No assets to display';
        
        const start = (this.currentPage() - 1) * this.pageSize() + 1;
        const end = Math.min(this.currentPage() * this.pageSize(), total);
        return `Showing ${start}-${end} of ${total}`;
    });

    goToPrevPage() {
        this.currentPage.update(page => Math.max(1, page - 1));
    }

    goToNextPage() {
        this.currentPage.update(page => Math.min(this.totalPages(), page + 1));
    }
}