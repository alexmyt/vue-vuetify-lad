export interface ComponentProps {
  forecast: ForecastItem[];
}

export interface ForecastItem {
  day: string;
  icon: string;
  temp: number;
}
