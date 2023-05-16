declare interface W1SensorResponse {
  sensor: string;
  temperature: number;
}

declare interface SCD30Mesurement {
  co2Concentration: number;
  temperature: number;
  relativeHumidity: number;
}

declare interface NavigationItem {
  label: string;
  icon: string;
  to: string;
}
