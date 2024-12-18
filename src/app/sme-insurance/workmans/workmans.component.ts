import { Component } from '@angular/core';

@Component({
  selector: 'app-workmans',
  templateUrl: './workmans.component.html',
  styleUrls: ['./workmans.component.css']
})
export class WorkmansComponent {
  public Worksmens_policy:any;
  // need help ------------------------------------------------------------------
  public showHelpMenu: boolean = false;

  toggleHelpMenu(): void {
    this.showHelpMenu = true;
  }

  closetoggleHelpMenu(){
    this.showHelpMenu = false;
  }

  // need help action ----------------------------------------------------------
  public showActionhelp :boolean =false;

  openCallbackForm(): void {
    this.showActionhelp = true;
  }

  // Function to close the modal
closeModal() {
  this.showActionhelp = false;
}
  

  // Open Write Form
  openWriteForm(): void {
    this.showActionhelp = true;
  }

//  request form ----------------------------------------------
public reqFormData:any;
showTimeSlot: boolean = false;     // Toggle time slot visibility
selectedDay: string = 'today';     // Default day selection
selectedTime: string = '10:00 AM - 11:00 AM';
userName: string = '';
mobileNumber: string = '';
userEmail: string = '';


// Available time slots
timeSlots: string[] = [
  '10:00 AM - 11:00 AM',
  '11:00 AM - 12:00 PM',
  '1:00 PM - 2:00 PM',
  '2:00 PM - 3:00 PM',
  '4:00 PM - 5:00 PM'
];

// Toggle time slot section
toggleTimeSlot() {
  this.showTimeSlot = !this.showTimeSlot;
}

// Select Day
selectDay(day: string) {
  this.selectedDay = day;
}

constructor(){
  
}

// Send Request
sendRequest() {
  console.log('Callback Request Submitted:');
  console.log('Name:', this.userName);
  console.log('Mobile Number:', this.mobileNumber);
  console.log('Email:', this.userEmail);
  console.log('Day:', this.selectedDay);
  console.log('Time Slot:', this.selectedTime);
  alert('Your callback request has been sent!');  
  this.showActionhelp = false;
}

// claimfield------------------------------------------------------

  toggleClaimField(show:any) {
    const claimField = document.getElementById('claim-field');
    if (claimField) { // Check if claimField exists
        claimField.style.display = show ? 'block' : 'none';
    } else {
        console.warn("Claim field element not found!");
    }
  }

  


}
