import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Wheather', cols: 1, rows: 1 },
          { title: 'Graph', cols: 1, rows: 1 },
          { title: 'Health Care', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Weather', cols: 1, rows: 1 },
        { title: 'Graph', cols: 1, rows: 2 },
        { title: 'Health Care', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) { }
}
