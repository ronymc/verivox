import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { TariffFilter } from './tariff-filter';

@Component({
  selector: 'app-tariff-filter',
  templateUrl: './tariff-filter.component.html',
  styleUrls: ['./tariff-filter.component.scss'],
})
export class TariffFilterComponent implements OnInit {
  @Output() filterSelected = new EventEmitter<TariffFilter>();
  minSpeed = 10;
  maxPrice = 250;
  isYoungPeopleTariff = false;
  filter = {};

  speedOptions = [10, 50, 100, 250, 500];
  priceOptions = [10, 25, 50, 100, 250];

  ngOnInit(): void {
    this.filter = {
      minSpeed: this.minSpeed,
      maxPrice: this.maxPrice,
      isYoungPeopleTariff: this.isYoungPeopleTariff,
    };
  }

  filterApplied(): void {
    this.filterSelected.emit({
      minSpeed: this.minSpeed,
      maxPrice: this.maxPrice,
      isYoungPeopleTariff: this.isYoungPeopleTariff,
    });
  }
}
