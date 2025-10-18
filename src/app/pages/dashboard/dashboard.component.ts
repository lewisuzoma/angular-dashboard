import { Component, signal } from '@angular/core';
import { SidebarComponent } from "@app-shared/components/sidebar/sidebar.component";
import { CardComponent } from "@app-shared/components/card/card.component";
import { ContextualRiskComponent } from "@app-shared/components/contextual-risk/contextual-risk.component";
import { FlowDiagramComponent } from "@app-shared/components/flow-diagram/flow-diagram.component";
import { ListsComponent } from "@app-shared/components/lists/lists.component";
import { TextWrapperComponent } from "@app-shared/components/text-wrapper/text-wrapper.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    SidebarComponent,
    CardComponent,
    ContextualRiskComponent,
    FlowDiagramComponent,
    ListsComponent,
    TextWrapperComponent
],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  cardSignal = signal([
    { title: 'Lorem P', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt '},
    { title: 'Lorem S', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum'},
    { title: 'Lorem T', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt '}
  ]);
}
