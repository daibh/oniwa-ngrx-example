import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable()
export class ViewEffects {
  constructor(
    private router: Router
  ) {}
}
