import { render, screen } from '@testing-library/react'
import { Input } from '..'
import userEvent from '@testing-library/user-event'

describe('Input', () => {
  it('renders a label with input name', () => {
    render(<Input id="testId" name="testName" onChange={() => {}} />)

    expect(screen.getByText('testName')).toBeInTheDocument()
  })

  it('calls on change function when user types', async () => {
    const onChangeMock = jest.fn()

    render(<Input id="testId" name="testName" onChange={onChangeMock} />)

    const input = screen.getByLabelText('testName')
    await userEvent.type(input, 'Hello')

    expect(onChangeMock).toHaveBeenCalled()
  })
})
