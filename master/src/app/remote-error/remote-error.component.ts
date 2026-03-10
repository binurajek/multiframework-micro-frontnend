import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-remote-error',
  template: `
    <div class="flex flex-col items-center justify-center min-h-[60vh] p-8 text-center animate-in fade-in duration-500">
      <div class="bg-red-50 p-6 rounded-full border border-red-100 mb-6 shadow-sm">
        <mat-icon class="text-red-500 !text-6xl !w-16 !h-16 flex items-center justify-center">error_outline</mat-icon>
      </div>
      <h2 class="text-3xl font-extrabold text-slate-800 tracking-tight mb-3">Module Failed to Load</h2>
      <p class="text-lg text-slate-500 max-w-md mb-8">
        The requested micro-frontend could not be loaded. Please verify the remote application is running and try again.
      </p>
      <button (click)="retry()" class="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl shadow-md transition-colors flex items-center gap-2">
        <mat-icon class="text-sm">refresh</mat-icon>
        Reload Page
      </button>
    </div>
  `,
  styles: [`:host { display: block; width: 100%; height: 100%; }`]
})
export class RemoteErrorComponent {
  retry() {
    window.location.reload();
  }
}
