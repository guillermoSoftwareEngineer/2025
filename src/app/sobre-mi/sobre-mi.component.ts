import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sobre-mi',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sobre-mi.component.html',
  styleUrl: './sobre-mi.component.css'
})
export class SobreMiComponent {
  isMuted: boolean = true; // Estado inicial: el video está muteado

  // Función para alternar el mute
  toggleMute(): void {
    const video = document.querySelector('.video') as HTMLVideoElement;
    if (video) {
      video.muted = !video.muted;
      this.isMuted = video.muted;
    }
  }
}
