import { render , screen} from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom";

beforeAll(()=>{
    console.log("Before All Tests");
});

beforeEach(()=>{
    console.log("Before Each Test");
});

afterEach(()=>{
    console.log("After Each Test");
});

afterAll(()=>{
    console.log("After All Tests");
});

test("Should load contact us component" , () => {
    render(<Contact/>);

    // we can write many func like getByRole , getByPlaceholderText , 
    const heading = screen.getByText("Thank You !!");

    // Assertion
    expect(heading).toBeInTheDocument();
})

test("Should load 2 or more component" , () => {
    render(<Contact/>);

    const heading = screen.getAllByRole("heading");

    // heading is an array[2] , It comes in the form of Obj (Virtual DOM / React Element)
    expect(heading.length).toBe(2);

})