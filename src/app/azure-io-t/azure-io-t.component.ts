import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-azure-io-t', // Cambia el selector si es necesario
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './azure-io-t.component.html',
  styleUrls: ['./azure-io-t.component.css'],
})
export class AzureComponent {}
