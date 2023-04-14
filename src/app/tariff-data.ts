import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Tariff } from './tariff';

export class TariffData implements InMemoryDbService {
  createDb() {
    const tariffs: Tariff[] = [
      {
        downloadSpeed: 200,
        uploadSpeed: 8,
        name: 'Vodafone',
        price: 21.45,
        youngPeopleTarif: false,
        benefits: ['Tarif Benefit1', 'Tarif Benefit2', 'Tarif Benefit3'],
      },
      {
        downloadSpeed: 50,
        uploadSpeed: 8,
        name: 'T-Mobile',
        price: 75.45,
        youngPeopleTarif: false,
        benefits: ['Tarif Benefit1', 'Tarif Benefit2', 'Tarif Benefit3'],
      },
      {
        downloadSpeed: 25,
        uploadSpeed: 8,
        name: 'T-Mobile',
        price: 9.5,
        youngPeopleTarif: true,
        benefits: ['Young People Tariff', 'Tarif Benefit2', 'Tarif Benefit3'],
      },
      {
        downloadSpeed: 50,
        uploadSpeed: 8,
        name: 'Vodafone',
        price: 10.45,
        youngPeopleTarif: true,
        benefits: ['Young People Tariff', 'Tarif Benefit2', 'Tarif Benefit3'],
      },
      {
        downloadSpeed: 1000,
        uploadSpeed: 25,
        name: 'Vodafone',
        price: 120.45,
        youngPeopleTarif: false,
        benefits: ['Tarif Benefit1', 'Tarif Benefit2', 'Tarif Benefit3'],
      },
    ];
    return { tariffs };
  }
}
