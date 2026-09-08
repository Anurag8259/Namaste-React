import "@testing-library/jest-dom";
import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import Body from "../Body";
import mock_data from "../MOCK_DATA/mock_res_list.json";
import { BrowserRouter } from "react-router-dom";

beforeEach(() => {
    global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve(mock_data),
        })
    );
});

it("Should Search for Bowl Input", async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        );
    });

    const cards1 = screen.getAllByTestId("resCard");
    expect(cards1.length).toBe(16);

    const searchBtn = screen.getByRole("button", { name : /Search/});
    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput, { target: { value: "Bowl" } });
    fireEvent.click(searchBtn);

    // Screen should load 2 cards after the search is performed.
    const cards = await screen.findAllByTestId("resCard");
    expect(cards.length).toBe(2);

});
