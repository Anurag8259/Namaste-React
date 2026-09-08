import { act } from "react";
import RestaurantMenu from "../RestaurantMenu";
import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../MOCK_DATA/mock_res_menu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA),
    })
);


it("Should Load restaurant menu comp" , async () => {
    await act(async () => {
        render(
            <BrowserRouter>
            <Provider store = {appStore}>
            <Header/>
            <RestaurantMenu />
            <Cart/>
            </Provider>
            </BrowserRouter>
        );
    });

    const accordionHeading = screen.getByText(/Non Veg Gravies/i);
    fireEvent.click(accordionHeading); 
    // This will give an error : As it cannot access the redux store. So we add Provider.

    const menuItems = screen.getAllByTestId("foodItem");
    expect(menuItems.length).toBe(6);

    const addBtn = screen.getAllByRole("button" , { name : "Add +"});

    console.log(addBtn.length);

    fireEvent.click(addBtn[0]); // This will add the first item to the cart.

    const cart = screen.getByText("Cart (1 items)");
    
    expect(cart).toBeInTheDocument();

    fireEvent.click(addBtn[1]);

    const cart2 = screen.getByText("Cart (2 items)");
    
    expect(cart2).toBeInTheDocument();

    fireEvent.click(cart2);

    const cartItem = screen.getAllByTestId("foodItem");

    expect(cartItem.length).toBe(2+menuItems.length);
    
    const clear = screen.getByText("Clear Button");

    fireEvent.click(clear);
    
    expect(screen.getAllByTestId("foodItem").length).toBe(6);

});