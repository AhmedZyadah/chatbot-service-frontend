import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
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