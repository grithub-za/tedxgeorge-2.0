/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import Backdrop from '.';

it("renders backdrop", () => {
    render(<Backdrop show />)
    expect(screen.getByRole("presentation")).toBeInTheDocument();
})