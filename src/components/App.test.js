import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from '../store';
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";

jest.mock('../assets/login_poll.png', () => 'login_poll.png');

describe('App', () => {
    it('will render without crashing', () => {
        const wrapper = render(
            <Provider store={store}>
                <MemoryRouter>
                    <App />
                </MemoryRouter>
            </Provider>
        );

        expect(wrapper).toMatchSnapshot();
    });

    it('will render the login page', () => {
        const wrapper = render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/login']}>
                    <App />
                </MemoryRouter>
            </Provider>
        );

        expect(wrapper.getByTestId('login-btn')).toBeInTheDocument();
    });
});