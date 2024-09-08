import { Component } from '@angular/core';
import {ToolbarModule} from "primeng/toolbar";
import {Button} from "primeng/button";
import {TableModule} from "primeng/table";

@Component({
  selector: 'app-exchanges-apis',
  standalone: true,
  imports: [
    ToolbarModule,
    Button,
    TableModule
  ],
  templateUrl: './exchanges-apis.component.html',
  styleUrl: './exchanges-apis.component.scss'
})
export class ExchangesApisComponent {

}
