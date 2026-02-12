import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

@Component({
    selector: 'app-mfe-wrapper',
    template: `
      <div #reactContainer *ngIf="!hasError"></div>
      <app-remote-error *ngIf="hasError"></app-remote-error>
    `,
})
export class MfeWrapperComponent implements OnInit, OnDestroy {
    @ViewChild('reactContainer', { static: false }) reactContainer!: ElementRef;

    @Input() remoteEntry!: string;
    @Input() remoteName!: string;
    @Input() exposedModule!: string;
    @Input() componentName!: string;

    root: any;
    hasError = false;

    constructor(private route: ActivatedRoute) { }

    async ngOnInit() {
        const data = this.route.snapshot.data;
        this.remoteEntry = this.remoteEntry || data['remoteEntry'];
        this.remoteName = this.remoteName || data['remoteName'];
        this.exposedModule = this.exposedModule || data['exposedModule'];
        this.componentName = this.componentName || data['componentName'];

        if (!this.remoteEntry) return; // Wait for inputs or handle default

        try {
            const Component = await loadRemoteModule({
                remoteEntry: this.remoteEntry,
                remoteName: this.remoteName,
                exposedModule: this.exposedModule,
            }).then(m => m[this.componentName] || m.default);

            this.root = ReactDOM.createRoot(this.reactContainer.nativeElement);
            this.root.render(React.createElement(Component));
        } catch (error) {
            console.error('Error loading React component:', error);
            this.hasError = true;
        }
    }

    ngOnDestroy() {
        if (this.root) {
            this.root.unmount();
        }
    }
}
