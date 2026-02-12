import { Component, OnInit } from '@angular/core';
interface Technology {
    name: string;
    icon: string;
    version: string;
    description: string;
    color: string;
    tags: string[];
}
@Component({
    selector: 'app-childmfe',
    templateUrl: './childmfe.component.html',
    styleUrls: ['./childmfe.component.scss']
})
export class ChildMfeComponent implements OnInit {
    features: Technology[] = [
        {
            name: 'Signals',
            icon: '📡',
            version: '17+',
            description: 'Granular reactivity for fine-grained state management and better performance.',
            color: 'bg-amber-50 text-amber-600',
            tags: ['Reactive', 'Performance', 'Core']
        },
        {
            name: 'Standalone Components',
            icon: '🧩',
            version: '15+',
            description: 'Simplified architecture without NgModules. Import what you need directly.',
            color: 'bg-cyan-50 text-cyan-600',
            tags: ['Architecture', 'Simplicity', 'Modern']
        },
        {
            name: 'Control Flow',
            icon: '🔀',
            version: '17+',
            description: 'New built-in syntax for if, for, and switch. Up to 90% faster runtime.',
            color: 'bg-emerald-50 text-emerald-600',
            tags: ['Syntax', 'DX', 'Performance']
        },
        {
            name: 'Deferred Views',
            icon: '⏳',
            version: '17+',
            description: 'Declarative lazy loading with @defer block. Prioritize critical content.',
            color: 'bg-indigo-50 text-indigo-600',
            tags: ['Lazy Loading', 'Performance', 'UX']
        },
        {
            name: 'SSR & Hydration',
            icon: '💧',
            version: '16+',
            description: 'Non-destructive hydration for faster LCP and better SEO out of the box.',
            color: 'bg-purple-50 text-purple-600',
            tags: ['SEO', 'Server Side', 'Speed']
        },
        {
            name: 'Zoneless',
            icon: '⚡',
            version: '18+',
            description: 'Experimental API to build apps without Zone.js for smaller bundles.',
            color: 'bg-rose-50 text-rose-600',
            tags: ['Experimental', 'Lightweight', 'Future']
        }
    ];
    constructor() { }
    ngOnInit(): void {
    }
}
