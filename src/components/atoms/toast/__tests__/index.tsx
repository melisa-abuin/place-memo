import { render, screen } from '@testing-library/react'
import { Toast } from '..'
import userEvent from '@testing-library/user-event'

describe('Button', () => {
  it('renders message correctly', async () => {
    const onClickMock = jest.fn()
    render(<Toast onClick={onClickMock} message="message" />)

    expect(screen.getByText('message')).toBeInTheDocument()
  })

  it('calls onclick function correctly', async () => {
    const onClickMock = jest.fn()
    const { container } = render(
      <Toast onClick={onClickMock} message="message" />
    )

    await userEvent.click(container.firstElementChild as Element)

    expect(onClickMock).toHaveBeenCalled()
  })
})
