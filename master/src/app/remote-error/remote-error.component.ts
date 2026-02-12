import { Component } from '@angular/core';

@Component({
    selector: 'app-remote-error',
    template: `
    <div class="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
      <h3 class="font-bold text-lg mb-2">Remote Component Failed to Load</h3>
      <p class="mb-4">The remote service is currently unavailable. Please check your connection or try again later.</p>
      <button mat-raised-button color="warn" (click)="retry()">
        Retry Loading
      </button>
    </div>
  `,
    styles: [`:host { display: block; margin: 20px; }`]
})
export class RemoteErrorComponent {
    retry() {
        window.location.reload();
    }
}
