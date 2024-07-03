import { render, screen } from '@testing-library/react'
import { BottomSheet } from '..'
import userEvent from '@testing-library/user-event'

const locationMock = {
  id: '1',
  title: 'title',
  content: 'content',
  xCoordinate: 12.12,
  yCoordinate: 13.0,
}

describe('BottomSheet', () => {
  it('renders info correctly', async () => {
    const onClickMock = jest.fn()
    render(<BottomSheet title={locationMock.title} onClose={onClickMock} />)

    expect(screen.getByText(locationMock.title)).toBeInTheDocument()
  })

  it('calls onClose function correctly', async () => {
    const onClickMock = jest.fn()
    render(<BottomSheet title={locationMock.title} onClose={onClickMock} />)

    await userEvent.click(screen.getByRole('dialog'))

    expect(onClickMock).toHaveBeenCalled()
  })
})
