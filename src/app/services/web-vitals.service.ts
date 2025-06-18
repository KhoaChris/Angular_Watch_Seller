import { Injectable } from '@angular/core';
import {
  onCLS,
  onLCP,
  onFCP,
  onTTFB,
  type Metric
} from 'web-vitals/attribution';

@Injectable({ providedIn: 'root' })
export class WebVitalsService {
  constructor() {
    this.captureVitals();
  }

  private captureVitals(): void {
    const log = (metric: Metric) => {
      console.log(`[Web Vital] ${metric.name}: ${metric.value}`, metric);
    };

    onCLS(log);
    onLCP(log);
    onFCP(log);
    onTTFB(log);
  }
}
