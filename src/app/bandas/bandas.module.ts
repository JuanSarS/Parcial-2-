import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BandasListComponent } from './bandas-list/bandas-list.component';
import { BandasDetailComponent } from './bandas-detail/bandas-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[BandasListComponent],
  declarations: [BandasListComponent,BandasDetailComponent]
})
export class BandasModule { }
