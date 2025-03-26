import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'  // Makes the service available application-wide
})
export class SharedDataService {
  private selectedCompanySource = new BehaviorSubject<string>('Home');
  selectedCompany$ = this.selectedCompanySource.asObservable();

  updateSelectedCompany(company: string) {
    this.selectedCompanySource.next(company);
  }
}
