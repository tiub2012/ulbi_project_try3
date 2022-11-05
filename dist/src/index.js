import { jsx as _jsx } from "react/jsx-runtime";
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import App from './app/App';
import './shared/config/i18n/i18n';
render(_jsx(BrowserRouter, { children: _jsx(ThemeProvider, { children: _jsx(App, {}, void 0) }, void 0) }, void 0), document.getElementById('root'));
