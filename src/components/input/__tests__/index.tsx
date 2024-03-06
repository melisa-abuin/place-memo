import { render, screen } from '@testing-library/react'
import { Input } from '..'

describe('Input', () => {
  it('renders a label with input name', () => {
    render(<Input id="testId" name="testName" type="submit" />)

    expect(screen.getByText('testName')).toBeInTheDocument()
  })
})
