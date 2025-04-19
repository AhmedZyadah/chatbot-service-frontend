import { Component } from '@angular/core';
import { UploadComponent } from './components/upload.component';
import { ChatComponent } from './components/chat.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, UploadComponent, ChatComponent],
  template: `
    <div style="padding: 2rem">
      <h1>📄 Chatbot Document Service</h1>
      <app-upload></app-upload>
      <hr />
      <app-chat></app-chat>
    </div>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chatbot-service-frontend';
}