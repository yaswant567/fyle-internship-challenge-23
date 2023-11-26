import { ApiService } from './../../services/api.service';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnChanges{
  @Input() getUserData : any;
  totalPages: number = 1;
  perPage: number = 10;
  getPageNo: number = 1;


  ngOnChanges(changes: SimpleChanges): void {
      if(changes['getUserData'] && !changes['getUserData'].isFirstChange())
      {
        this.totalPages = this.getUserData.public_repos/10;
        console.log("totalPages",this.totalPages+1);
      }
  }

  handlePerPage(event: any){
    this.perPage = event.target.value;
    if(this.perPage >= 10){
      this.totalPages = this.getUserData.public_repos / this.perPage;
      console.log("total", this.totalPages);
    }
  }

  getPageRange(value: number): number[] {
    return Array.from({ length: value }, (_, index) => index + 1);
  }

  handlePageNo(pageNo: number){
    if(pageNo <= this.totalPages && pageNo>0)
      this.getPageNo = pageNo;
  }
}
