import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import NewPoll from './NewPoll';
import { Provider } from 'react-redux';
import { store } from '../store';
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";

describe('NewPoll', () => {
    it('will enable the submit button', () => {
        const wrapper = render(
            <Provider store={store}>
                <MemoryRouter>
                    <NewPoll />
                </MemoryRouter>
            </Provider>
        );

        const firstOption = wrapper.getByTestId('first-option');
        const secondOption = wrapper.getByTestId('second-option');
        const submitBtn = wrapper.getByTestId('submit-btn');

        expect(submitBtn).toBeDisabled();
        fireEvent.change(firstOption, { target: { value: 'First Option' } });
        fireEvent.change(secondOption, { target: { value: 'Second Option' } });

        expect(submitBtn).toBeEnabled();
    });

    it('will not enable the submit button if the first option is empty', () => {
        const wrapper = render(
            <Provider store={store}>
                <MemoryRouter>
                    <NewPoll />
                </MemoryRouter>
            </Provider>
        );

        const secondOption = wrapper.getByTestId('second-option');
        const submitBtn = wrapper.getByTestId('submit-btn');

        expect(submitBtn).toBeDisabled();
        fireEvent.change(secondOption, { target: { value: 'Second Option' } });

        expect(submitBtn).toBeDisabled();
    });
});