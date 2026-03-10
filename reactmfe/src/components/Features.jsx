import React from 'react';
import './Dashboard.css';

const Features = () => {
    const reactFeatures = [
        { id: 1, title: 'Server Components', description: 'Zero-bundle-size components that run only on the server.', icon: '🖥️' },
        { id: 2, title: 'Server Actions', description: 'Seamlessly call server-side functions from client components.', icon: '⚡' },
        { id: 3, title: 'The "use" API', description: 'New hook for consuming promises and context directly in render.', icon: '🎣' },
        { id: 4, title: 'Actions & useActionState', description: 'Official support for form actions and state management.', icon: '📝' },
        { id: 5, title: 'Document Metadata', description: 'Built-in support for rendering <title> and <meta> tags.', icon: '🌐' },
        { id: 6, title: 'Asset Loading', description: 'Optimized APIs for loading Stylesheets, Scripts, and Fonts.', icon: '📦' },
        { id: 7, title: 'Ref as a Prop', description: 'Refs can now be passed as regular props without forwardRef.', icon: '🔗' },
        { id: 8, title: 'Optimistic UI', description: 'New useOptimistic hook for better user perceived performance.', icon: '✨' },
        { id: 9, title: 'Form Actions', description: 'Native support for standard HTML form action attributes.', icon: '📥' },
        { id: 10, title: 'Transition API', description: 'Keep UI responsive during heavy state updates with useTransition.', icon: '⏳' },
        { id: 11, title: 'Automatic Batching', description: 'Group multiple state updates into a single re-render.', icon: '🗂️' },
        { id: 12, title: 'Concurrent Rendering', description: 'Interruptible rendering for smoother user experiences.', icon: '🚄' }
    ];

    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <h2>React Modern Features</h2>
                <p>Exploring the latest innovations in the React ecosystem</p>
            </header>
            <div className="cards-grid">
                {reactFeatures.map(feature => (
                    <div key={feature.id} className="service-card">
                        <div className="card-content">
                            <h3 style={{fontSize: '1.5rem'}}>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Features;
