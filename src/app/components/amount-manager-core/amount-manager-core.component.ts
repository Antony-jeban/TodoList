import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'amount-manager-core',
  templateUrl: './amount-manager-core.component.html',
  styleUrls: ['./amount-manager-core.component.css']
})
export class AmountManagerCoreComponent implements OnInit {

  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

}
