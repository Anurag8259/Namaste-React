import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import mock_data from "../MOCK_DATA/mock_data.json";

it("Should render Restaurant Card component with props", () => {
    render(<RestaurantCard resList={mock_data} />);

    const name = screen.getByText(/Faasos/i);
    expect(name).toBeInTheDocument();
});


// Try it out
// it("Should render Restaurant Card with Label", () => {
// });
