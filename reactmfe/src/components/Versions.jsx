import React from 'react';
import './Dashboard.css';

const Versions = () => {
    const reactVersions = [
        { id: 1, version: 'v19', year: '2024', description: 'Server Components, Actions, use API', color: 'bg-blue-50 text-blue-600' },
        { id: 2, version: 'v18', year: '2022', description: 'Concurrent Rendering, Automatic Batching, Transitions', color: 'bg-purple-50 text-purple-600' },
        { id: 3, version: 'v17', year: '2020', description: 'No New Features, Gradual Upgrades, New JSX Transform', color: 'bg-green-50 text-green-600' },
        { id: 4, version: 'v16', year: '2017', description: 'Fiber Architecture, Error Boundaries, Portals, Hooks (16.8)', color: 'bg-orange-50 text-orange-600' },
    ];

    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <h2>React Versions</h2>
                <p>A history of major React releases and features</p>
            </header>
            <div className="cards-grid">
                {reactVersions.map(v => (
                    <div key={v.id} className="service-card">
                        <div className="card-content" style={{textAlign: 'center'}}>
                            <h2 style={{fontSize: '3rem', fontWeight: '900', margin: '0 0 10px 0', color: '#1e293b'}}>{v.version}</h2>
                            <p style={{fontWeight: 'bold', color: '#16a34a', marginBottom: '10px'}}>Released: {v.year}</p>
                            <p style={{fontSize: '0.9rem'}}>{v.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Versions;
