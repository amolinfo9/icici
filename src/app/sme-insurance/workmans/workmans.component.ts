import { Component } from '@angular/core';
import { WrokmansService } from 'Shared/wrokmans.service';

@Component({
  selector: 'app-workmans',
  templateUrl: './workmans.component.html',
  styleUrls: ['./workmans.component.css']
})
export class WorkmansComponent {
  // need help ------------------------------------------------------------------
  public showHelpMenu: boolean = false;

  toggleHelpMenu(): void {
    this.showHelpMenu = true;
  }

  closetoggleHelpMenu() {
    this.showHelpMenu = false;
  }

  // need help action ----------------------------------------------------------
  public showActionhelp: boolean = false;

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
  public reqFormData: any;

  id: number = 1;
  userName: string = '';
  mobileNumber: string = '';
  userEmail: string = '';



  showTimeSlot: boolean = false;
  selectedDay: string = '';
  selectedTime: string = '';

  // Available time slots
  timeSlots: string[] = [
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '1:00 PM - 2:00 PM',
    '2:00 PM - 3:00 PM',
    '4:00 PM - 5:00 PM'
  ];

  toggleTimeSlot() {
    this.showTimeSlot = !this.showTimeSlot;
  }

  selectDay(day: string) {
    this.selectedDay = day;
  }

  constructor(private dtService: WrokmansService) {

  }

  // Send Request
  sendRequest(data: any) {
    if (this.userName && this.mobileNumber && this.userEmail) {
      const formData = data.value; // Extract only form values        
      this.dtService.getRequestFormData(formData).subscribe({
        next: () => console.log("Data sent successfully."),
        error: (err) => console.error("Error sending data", err),
        complete: ()=> console.log("All done.......")
      });

      this.id++;
    }
    alert('Your callback request has been sent!');
    this.showActionhelp = false;
    data.resetForm();
  }

  // 2nd form
  public Workmens_policy: any;

  saveWorkMensPolicy(data: any) {
     const formData = data.value;
    //  console.log(formData)
     this.dtService.getWorkMens_Comp(formData).subscribe({
      next: () => console.log("Data sent successfully."),
      error: (err) => console.error("Error sending data", err),
      complete: ()=> console.log("All done.......")
    });
      alert('Your responce submited!');
      data.resetForm();
  }


}
