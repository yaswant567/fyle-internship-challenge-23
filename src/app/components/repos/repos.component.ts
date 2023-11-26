import { Component,Input, OnChanges, SimpleChanges } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss']
})
export class ReposComponent implements OnChanges {
  @Input() userName : string = "";
  @Input() perPage : number = 10;
  @Input() pageNo : number = 1;
  userRepos : any;
  
  constructor(
    private apiService: ApiService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
      if((changes['userName'] && !changes['userName'].isFirstChange()) || (changes['perPage'] && !changes['perPage'].isFirstChange()) || (changes['pageNo'] && !changes['pageNo'].isFirstChange())) 
      {
        this.apiService.getRepos(this.userName, this.pageNo, this.perPage).subscribe((res) =>{
          this.userRepos = res;
          console.log("data:",this.userRepos);
        })
      }
  }

}
