/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import Favorites from '.';

it("renders favorites button", () => {
    render(<Favorites />)

    expect(screen.getByRole("button")).toBeInTheDocument();
})