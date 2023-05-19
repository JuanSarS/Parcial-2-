import { Component, Input, OnInit } from '@angular/core';
import { BandasDetail } from '../bandas-detail';
import { BandasService } from '../bandas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bandas-detail',
  templateUrl: './bandas-detail.component.html',
  styleUrls: ['./bandas-detail.component.css']
})
export class BandasDetailComponent implements OnInit {
  @Input() bandaDetail!: BandasDetail;

  bandaId!: string;

  constructor(private route: ActivatedRoute, private bandaService: BandasService) { }

  getBanda(){
    this.bandaService.getBanda(this.bandaId).subscribe(banda=>{
      this.bandaDetail = banda;
    })
  }
  ngOnInit() {
    if(this.bandaDetail === undefined){
      this.bandaId = this.route.snapshot.paramMap.get('id')!
      if (this.bandaId){
        this.getBanda()
      }
    }
  }
}
