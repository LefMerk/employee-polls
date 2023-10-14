import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Login from './Login';
import { Provider } from 'react-redux';
import { store } from '../store';
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";

jest.mock('../assets/login_poll.png', () => 'login_poll.png');

describe('NewPoll', () => {
    it('will show the error message', async () => {
        const wrapper = render(
            <Provider store={store}>
                <MemoryRouter>
                    <Login />
                </MemoryRouter>
            </Provider>
        );

        const username = wrapper.getByTestId('user');
        const password = wrapper.getByTestId('password');

        fireEvent.change(username, { target: { value: 'merkouriou' } });
        fireEvent.change(password, { target: { value: '123' } });
        fireEvent.click(wrapper.getByTestId('login-btn'));

        expect(wrapper.getByTestId('error-msg')).toBeInTheDocument();
    });

    it('will login correctly and redirect to the dashboard', async () => {
        const wrapper = render(
            <Provider store={store}>
                <MemoryRouter>
                    <Login />
                </MemoryRouter>
            </Provider>
        );

        const username = wrapper.getByTestId('user');
        const password = wrapper.getByTestId('password');

        fireEvent.change(username, { target: { value: 'tylermcginnis' } });
        fireEvent.change(password, { target: { value: 'abc321' } });
        fireEvent.click(wrapper.getByTestId('login-btn'));

        expect(wrapper.getByTestId('user')).toBeVisible();
    });
});