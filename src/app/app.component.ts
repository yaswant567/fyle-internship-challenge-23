import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  userInput: string = "";
  userData: Object = {};
  errorMessage: boolean = true;

  constructor(
    private apiService: ApiService
  ) {}

  private getUserData(){
    if(this.userInput !== ""){
      this.apiService.getUser(this.userInput).subscribe((res) =>{
        this.userData = res;
        this.errorMessage = true;
      }, (error) => {
        this.errorMessage = false;
        this.userData = {};
        setTimeout(() => {
          this.errorMessage = true;
        }, 10000);
      })
    }
  }
 
  ngOnInit() {
     this.getUserData();
  }
  
  getUserInput(userInput: string){
    this.userInput = userInput;
    this.getUserData();
  }
}
