import React from 'react';
import {render} from '@testing-library/react';
import {theme} from "../Assets/styles/theme";
import { ThemeProvider } from 'styled-components';
import UsersProvider from '../Providers/UsersProvider';

export const RenderWithProviders = (component) => {
    return render(<ThemeProvider theme={theme}>
        <UsersProvider>
        component
        </UsersProvider>
        </ThemeProvider>)
};