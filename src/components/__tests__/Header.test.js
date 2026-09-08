
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

it("Should load header comp with a login button", () => {
    // This will give error as It contains "useSelector" - from react-redux , but it can read only JSX.
    // render(<Header/>);
    // Another error will come in LINK . from react-router-dom
    

    render(
        <Provider store={appStore}>
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        </Provider>
    );

    const button = screen.getByText(/Login/);
    expect(button).toBeInTheDocument();

});

it("Should load header comp with a cart", () => {
    render(
        <Provider store={appStore}>
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        </Provider>
    );

    const cart = screen.getByText(/Cart/);
    expect(cart).toBeInTheDocument();
});

// How to simulate a CLICK event.
it("Should simulate a click event on the login button", () => {    

    render(
        <Provider store={appStore}>
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        </Provider>
    );

    const button = screen.getByText(/Login/);

    fireEvent.click(button); // This will simulate a click event on the button.

    const button2 = screen.getByText(/Logout/);

    expect(button2).toBeInTheDocument();

});

