import { Component } from '@angular/core';

@Component({
  selector: 'app-workmans',
  templateUrl: './workmans.component.html',
  styleUrls: ['./workmans.component.css']
})
export class WorkmansComponent {
  public Worksmens_policy:any;

  toggleClaimField(show:any) {
    const claimField = document.getElementById('claim-field');
    if (claimField) { // Check if claimField exists
        claimField.style.display = show ? 'block' : 'none';
    } else {
        console.warn("Claim field element not found!");
    }
  }

  


}
