
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>📤 Upload PDF</h2>
    <input type="file" (change)="upload($event)" />
    <p *ngIf="uploadStatus">{{ uploadStatus }}</p>
  `
})
export class UploadComponent {
  uploadStatus = '';

  constructor(private http: HttpClient) {}

  upload(event: any) {
    const file: File = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    this.uploadStatus = 'Uploading...';

    this.http.post('/api/ingest', formData).subscribe({
      next: (res) => this.uploadStatus = 'Uploaded and indexed ✅',
      error: () => this.uploadStatus = 'Error during upload ❌'
    });
  }
}
