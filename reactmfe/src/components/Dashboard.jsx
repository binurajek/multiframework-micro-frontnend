import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
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
        { id: 12, title: 'Concurrent Rendering', description: 'Interruptible rendering for smoother user experiences.', icon: '🚄' },
        { id: 13, title: 'Suspense', description: 'Declaratively wait for anything to load, not just code.', icon: '⏳' },
        { id: 14, title: 'Strict Mode 2.0', description: 'Enhanced checks for side effects and memory leaks.', icon: '🛡️' },
        { id: 15, title: 'Custom Elements', description: 'Full support for Web Components and custom elements.', icon: '🧩' },
        { id: 16, title: 'Error Boundaries', description: 'Better error recovery and fallback UI handling.', icon: '🩹' },
        { id: 17, title: 'Portals', description: 'Render children into a different part of the DOM tree.', icon: '�' },
        { id: 18, title: 'Fragments', description: 'Group elements without adding extra nodes to the DOM.', icon: '⚛️' },
        { id: 19, title: 'Context API', description: 'Improved state sharing across the component tree.', icon: '🌳' },
        { id: 20, title: 'Hydration Error Fixes', description: 'Much better error messaging for SSR mismatches.', icon: '�️' },
        { id: 21, title: 'Lazy Loading', description: 'React.lazy for code splitting and dynamic imports.', icon: '�' },
        { id: 22, title: 'Profiler API', description: 'Measure rendering performance of React trees.', icon: '�' },
        { id: 23, title: 'Memoization', description: 'useMemo and useCallback for fine-grained control.', icon: '🧠' },
        { id: 24, title: 'Compiler (Upcoming)', description: 'Automatic memoization with the new React Compiler.', icon: '🦾' },
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
                        <div className="card-icon">{feature.icon}</div>
                        <div className="card-content">
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
