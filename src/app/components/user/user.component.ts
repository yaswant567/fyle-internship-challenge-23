import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent{
  @Input() userData : any=  null;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['userData']) {
       console.log(this.userData.type)
    }
  }
  
}
