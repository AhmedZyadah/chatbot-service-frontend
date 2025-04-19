
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>💬 Chat</h2>
    <input [(ngModel)]="question" placeholder="Ask something..." style="width: 60%" />
    <button (click)="ask()">Ask</button>

    <div *ngIf="answer">
      <p><strong>Answer:</strong> {{ answer }}</p>
      <p *ngIf="sources.length"><strong>Sources:</strong>
        <span *ngFor="let src of sources">[Page {{ src.pages.join(', ') }}] </span>
      </p>
    </div>
  `
})
export class ChatComponent {
  question = '';
  answer = '';
  sources: any[] = [];

  constructor(private http: HttpClient) {}

  ask() {
    this.http.post<any>('/api/query', { question: this.question }).subscribe({
      next: res => {
        this.answer = res.answer;
        this.sources = res.sources || [];
      },
      error: () => this.answer = 'Something went wrong 😢'
    });
  }
}
