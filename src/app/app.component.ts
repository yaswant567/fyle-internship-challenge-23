import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userInput: string = "";
  userData : any = {};
  errorMessage: boolean = true;
  isLoading: boolean = false;

  constructor(
    private apiService: ApiService
  ) {}

  private getUserData(){
    this.isLoading = true;
    if(this.userInput !== ""){
      this.apiService.getUser(this.userInput).subscribe((res) =>{
        this.userData = res;
        console.log(this.userData);
        this.errorMessage = true;
      }, (error) => {
        this.errorMessage = false;
        this.isLoading = false;
        this.userData = {};
        setTimeout(() => {
          this.errorMessage = true;
        }, 10000);
      },() =>{
        this.isLoading = false;
      })
    }
  }
 
  
  getUserInput(userInput: string){
    this.userInput = userInput;
    this.getUserData();
  }
}
