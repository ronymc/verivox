import { Component, OnInit } from '@angular/core';
import { TariffService } from '../tariff.service';
import { Tariff } from '../tariff';
import { Observable, of, map } from 'rxjs';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { TariffFilter } from '../tariff-filter/tariff-filter';

@Component({
  selector: 'app-tarif-list',
  templateUrl: './tariff-list.component.html',
  styleUrls: ['./tariff-list.component.scss'],
})
export class TariffListComponent implements OnInit {
  tariffs$: Observable<Tariff[]> = of([]);
  faArrowDown = faArrowDown;
  faArrowUp = faArrowUp;

  constructor(private tariffService: TariffService) {}

  ngOnInit(): void {
    this.tariffs$ = this.tariffService.getTarifs$();
  }

  filterSelected(filter: TariffFilter) {
    this.tariffs$ = this.tariffService
      .getAllTarifs$()
      .pipe(
        map((tariffs) =>
          tariffs.filter(
            (tariff) =>
              tariff.price <= filter.maxPrice &&
              tariff.downloadSpeed >= filter.minSpeed &&
              (filter.isYoungPeopleTariff ? tariff.youngPeopleTarif : true)
          )
        )
      );
  }
}
