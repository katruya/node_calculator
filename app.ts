import Render from './utils/Render.js';

// first contruct the interface
// then Render(interface)
// then place into DOM
const UI = (uiDefinition: string) => {
    const app: Element = document.getElementById('app');
    app.innerHTML = Render(uiDefinition, app);
}

export default UI;
