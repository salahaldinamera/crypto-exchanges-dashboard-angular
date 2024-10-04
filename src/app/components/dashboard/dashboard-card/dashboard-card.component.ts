import {Component, input} from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import {TranslationKeys} from "@app/core/enums/translations.enum";

@Component({
  selector: 'app-dashboard-card',
  standalone: true,
  imports: [
    TranslateModule
  ],
  templateUrl: './dashboard-card.component.html',
  styleUrl: './dashboard-card.component.scss'
})
export class DashboardCardComponent {
  title = input<string>('');
  content = input<string>('');

  titleIcon = input<string>('');
  contentIcon = input<string>('');
}
