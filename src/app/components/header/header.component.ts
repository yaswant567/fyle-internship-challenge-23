import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  userInput: string = "";
  @Output() newItemEvent = new EventEmitter<string>();

  handleSearch(){
    this.newItemEvent.emit(this.userInput);
  }
  handleInput(event:any){
    this.userInput = event.target.value;
  }
}
