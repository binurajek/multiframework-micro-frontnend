import { Component, OnInit } from '@angular/core';

interface VersionInfo {
    version: string;
    year: string;
    description: string;
    color: string;
}

@Component({
  standalone: false,
  selector: 'app-versions',
  templateUrl: './versions.html',
  styleUrls: ['./versions.scss']
})
export class VersionsComponent implements OnInit {
    versions: VersionInfo[] = [
        { version: 'v21', year: '2025', description: 'Advanced Build Tooling, Extended Zoneless Stability.', color: 'border-emerald-400' },
        { version: 'v20', year: '2025', description: 'Complete Default Zoneless, Signal Form Integration.', color: 'border-orange-400' },
        { version: 'v19', year: '2024', description: 'Reactivity Primitives Stable, Local Template Variables.', color: 'border-cyan-400' },
        { version: 'v18', year: '2024', description: 'Zoneless API, Material 3, Default esbuild, Defer blocks.', color: 'border-blue-400' },
        { version: 'v17', year: '2023', description: 'Control Flow, Deferred Views, Signals out of DP.', color: 'border-purple-400' },
        { version: 'v16', year: '2023', description: 'Signals API Prefix, Non-destructive Hydration.', color: 'border-pink-400' },
        { version: 'v15', year: '2022', description: 'Standalone Components Stable, Esbuild Developer Preview.', color: 'border-red-400' }
    ];

  constructor() { }

  ngOnInit(): void {
  }
}
