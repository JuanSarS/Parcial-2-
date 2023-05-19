import { Component, OnInit } from '@angular/core';
import { BandasDetail } from '../bandas-detail';
import { BandasService } from '../bandas.service';

@Component({
  selector: 'app-bandas-list',
  templateUrl: './bandas-list.component.html',
  styleUrls: ['./bandas-list.component.css']
})


export class BandasListComponent implements OnInit {

  bandas: Array<BandasDetail> = [];
  arg:boolean= false;
  antigua!: BandasDetail;
  selectedBanda!: BandasDetail;
  selected: boolean = false;

  constructor(private bandaService: BandasService) { }

  getBandas(): void{
    this.bandaService.getBandas().subscribe(banda=>{
      this.bandas=banda;
    });
    this.getAntigua();
  }
  getAntigua(){

    this.bandas.forEach((banda)=>{
      if(this.arg){
        if(banda.foundation_year<this.antigua.foundation_year){
            this.antigua=banda;
        }
      }
      else {
        this.antigua=banda;
        this.arg=true;
      }

    });
  }


  onSelected(banda: BandasDetail):void{
    this.selected = true;
    this.selectedBanda = banda;
  }


  ngOnInit() {
    console.log("asdasd");
    this.getBandas();
  }

}
