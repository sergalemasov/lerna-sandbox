import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstLibraryModule } from '@lerna-sandbox/first-library';

@NgModule({
  imports: [
    CommonModule,
    FirstLibraryModule
  ]
})
export class SecondLibraryModule { }
