import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';
import { RouterLink } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    CommonModule,
    RouterLink,
    MatTooltipModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatButtonModule
  ],
  exports: [ToolbarComponent]
})
export class ToolbarModule { }
