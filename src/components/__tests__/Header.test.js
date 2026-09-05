
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
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

    // expect(screen.getByText(/Login/i)).toBeInTheDocument();

})