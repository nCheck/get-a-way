import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule , MatListModule, MatCardModule ,
  MatSidenavModule, MatToolbarModule, MatDialogModule, MatFormFieldModule,
  MatSnackBarModule, MatExpansionModule , MatInputModule, MatDividerModule,
MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatIconModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatListModule , MatCardModule, MatSidenavModule , MatToolbarModule,
    MatDialogModule, MatFormFieldModule, MatSnackBarModule, MatExpansionModule,
    MatInputModule, MatDividerModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatIconModule],
  exports: [MatButtonModule, MatCheckboxModule , MatListModule , MatCardModule , MatSidenavModule , MatToolbarModule,
    MatDialogModule, MatFormFieldModule, MatSnackBarModule, MatExpansionModule,
    MatInputModule, MatDividerModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatIconModule],
})
export class MyOwnCustomMaterialModule {}
