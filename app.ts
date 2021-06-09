import Render from './utils/Render.js';

// first contruct the interface
// then Render(interface)
const UI = (uiDefinition: string): string => {
    return Render(uiDefinition);
};

export default UI;
