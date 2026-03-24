/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import Newsletter from '../Newsletter';

it("renders newsletter", () => {
    render(<Newsletter label="Test" />)
    expect(screen.getByRole("button")).toBeInTheDocument();
})