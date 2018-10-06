import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule , MatListModule, MatCardModule ,
  MatSidenavModule, MatToolbarModule, MatDialogModule, MatFormFieldModule,
  MatSnackBarModule, MatExpansionModule , MatInputModule, MatDividerModule,
MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatIconModule,
MatBadgeModule
} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatListModule , MatCardModule, MatSidenavModule , MatToolbarModule,
    MatDialogModule, MatFormFieldModule, MatSnackBarModule, MatExpansionModule,
    MatInputModule, MatDividerModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatIconModule,
    MatBadgeModule],
  exports: [MatButtonModule, MatCheckboxModule , MatListModule , MatCardModule , MatSidenavModule , MatToolbarModule,
    MatDialogModule, MatFormFieldModule, MatSnackBarModule, MatExpansionModule,
    MatInputModule, MatDividerModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatIconModule,
    MatBadgeModule],
})
export class MyOwnCustomMaterialModule {}
