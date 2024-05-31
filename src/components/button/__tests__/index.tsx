import { render, screen } from '@testing-library/react'
import { Button } from '..'
import userEvent from '@testing-library/user-event'

describe('Button', () => {
  it('renders children correctly', async () => {
    const onClickMock = jest.fn()
    render(<Button onClick={onClickMock}>test</Button>)

    screen.getByText('test')

    expect(screen.getByText('test')).toBeInTheDocument()
  })
  it('calls onclick function correctly', async () => {
    const onClickMock = jest.fn()
    render(<Button onClick={onClickMock}>test</Button>)

    await userEvent.click(screen.getByText('test'))

    expect(onClickMock).toHaveBeenCalled()
  })
})
