export interface Tariff {
    name: string;
    downloadSpeed: number;
    uploadSpeed: number;
    price: number;
    youngPeopleTarif: boolean;
    benefits: string[]
}