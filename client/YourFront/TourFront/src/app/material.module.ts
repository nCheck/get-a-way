import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule , MatListModule, MatCardModule ,
  MatSidenavModule, MatToolbarModule, MatDialogModule, MatFormFieldModule,
  MatSnackBarModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatListModule , MatCardModule, MatSidenavModule , MatToolbarModule,
    MatDialogModule, MatFormFieldModule, MatSnackBarModule],
  exports: [MatButtonModule, MatCheckboxModule , MatListModule , MatCardModule , MatSidenavModule , MatToolbarModule,
    MatDialogModule, MatFormFieldModule, MatSnackBarModule],
})
export class MyOwnCustomMaterialModule {}
