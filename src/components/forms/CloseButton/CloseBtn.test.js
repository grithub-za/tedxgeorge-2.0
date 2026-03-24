/**
 * @jest-environment jsdom
 */

import { render, fireEvent, screen } from '@testing-library/react'
import CloseBtn from '.';


const defaultProps = {
    shouldClose: jest.fn()
}


// check render
it("renders a close button", () => {
    render(<CloseBtn {...defaultProps} />)
    const btn = screen.queryAllByTitle("close")

    expect(btn).toBeTruthy()
});



it("calls the close callback", () => {
    const onClick = jest.fn();

    render(<CloseBtn shouldClose={onClick} />)
    fireEvent.click(screen.getByRole("button"))
    
    expect(onClick).toHaveBeenCalled()
})




