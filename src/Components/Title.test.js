import Title from "./Title";
import { render,screen } from "@testing-library/react";

//smoke test
test("Title renders",() => {
    render(<Title />);
});

//snapshot text
test("Title snapshot",() => {
    const {asFragment} = render(<Title />);
    expect(asFragment()).toMatchSnapshot();
})

//contains the intended title
it("contains the title 'Infinite Scroll'",() =>{
    render(<Title />);
    expect(screen.getByText("Infinite Scroll")).toBeInTheDocument();
});