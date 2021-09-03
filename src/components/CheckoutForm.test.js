import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render (<CheckoutForm/>)
});

test("shows success message on submit with form details", async () => {
    render (<CheckoutForm/>)

    const firstNameInput = screen.getByLabelText(/first name/i)
    const lastNameInput = screen.getByLabelText(/last name:/i)
    const addressInput = screen.getByLabelText(/address:/i)
    const cityInput = screen.getByLabelText(/city:/i)
    const stateInput = screen.getByLabelText(/state:/i)
    const zipInput = screen.getByLabelText(/zip:/i) 
    const button = screen.getByRole("button")

    expect(firstNameInput).toBeInTheDocument()
    expect(lastNameInput).toBeInTheDocument()
    expect(addressInput).toBeInTheDocument()
    expect(cityInput).toBeInTheDocument()
    expect(stateInput).toBeInTheDocument()
    expect(zipInput).toBeInTheDocument()
    expect(button).toBeInTheDocument()

    userEvent.type(firstNameInput, "Seymour")
    userEvent.type(lastNameInput, 'Krelborn')
    userEvent.type(addressInput, '1313 Mushnik Ave')
    userEvent.type(cityInput, 'New York')
    userEvent.type(stateInput, 'NY')
    userEvent.type(zipInput, '123456')
    userEvent.click(button)
    
    await waitFor(() => {
        
        const successMessage = screen.getByTestId('successMessage')
        const fullName = screen.queryByText(/seymour krelborn/i)
        const addressLineOne = screen.queryByText('1313 Mushnik Ave')
        const addressLineTwo = screen.queryByText('New York, NY 123456')
        
        expect(successMessage).toBeInTheDocument()
        expect(fullName).toBeInTheDocument()
        expect(addressLineOne).toBeInTheDocument()
        expect(addressLineTwo).toBeInTheDocument()

    })

});
