// js/gptengineer.js

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');

    if (!root) {
        console.error('Root element not found!');
        return;
    }

    // Create and append header
    const header = document.createElement('header');
    header.innerHTML = `
        <a href="#" class="redeem-btn">Redeem</a>
    `;
    root.appendChild(header);

    // Create and append main content
    const main = document.createElement('main');
    main.innerHTML = `
        <div class="logo">R</div>
        <p class="tagline">The only script hub you'll ever need, experience the most feature-packed, high-quality script hub!</p>
        <div class="stats">
            <div class="stat-card">
                <div class="icon">👥</div>
                <div class="value">4K+</div>
                <div class="label">Active Users</div>
            </div>
            <div class="stat-card">
                <div class="icon">⏰</div>
                <div class="value">24/7</div>
                <div class="label">Uptime</div>
            </div>
            <div class="stat-card">
                <div class="icon">🎮</div>
                <div class="value">6+</div>
                <div class="label">Games</div>
            </div>
        </div>
        <div class="actions">
            <button class="btn btn-primary">Get Script</button>
            <button class="btn btn-secondary">Get Key</button>
            <button class="btn btn-secondary">Documentation</button>
            <button class="btn btn-secondary">Discord</button>
        </div>
        <div class="games-section">
            <h2>Supported Games</h2>
        </div>
    `;
    root.appendChild(main);
});
