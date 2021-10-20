import React from 'react';
import {render} from '@testing-library/react';
import {theme} from "../Assets/styles/theme";
import { ThemeProvider } from 'styled-components';

const RenderWithThemeProvider = (component) => {
    return render(<ThemeProvider theme={theme}>component</ThemeProvider>)
};