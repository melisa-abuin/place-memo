import { render, screen } from '@testing-library/react'
import { BottomSheet } from '..'
import userEvent from '@testing-library/user-event'
import { ComponentProps } from 'react'

const locationMock = {
  id: '1',
  title: 'title',
  content: 'content',
  xCoordinate: 12.12,
  yCoordinate: 13.0,
}

const renderComponent = (
  props?: Partial<ComponentProps<typeof BottomSheet>>
) => {
  const defaultProps = {
    title: locationMock.title,
    onCloseButtonClick: jest.fn(),
    onPrimaryButtonClick: jest.fn(),
    onSecondaryButtonClick: jest.fn(),
  }

  return render(<BottomSheet {...defaultProps} {...props} />)
}

describe('BottomSheet', () => {
  it('renders info correctly', async () => {
    renderComponent()

    expect(screen.getByText(locationMock.title)).toBeInTheDocument()
  })

  it('calls onClose function correctly', async () => {
    const onClickMock = jest.fn()
    renderComponent({ onCloseButtonClick: onClickMock })

    await userEvent.click(screen.getByRole('dialog'))

    expect(onClickMock).toHaveBeenCalled()
  })

  it('calls onClose function correctly', async () => {
    const onPrimaryButtonClickMock = jest.fn()
    renderComponent({ onPrimaryButtonClick: onPrimaryButtonClickMock })

    await userEvent.click(screen.getByText('Edit'))

    expect(onPrimaryButtonClickMock).toHaveBeenCalled()
  })

  it('calls onClose function correctly', async () => {
    const onSecondaryButtonClickMock = jest.fn()
    renderComponent({ onSecondaryButtonClick: onSecondaryButtonClickMock })

    await userEvent.click(screen.getByText('Delete'))

    expect(onSecondaryButtonClickMock).toHaveBeenCalled()
  })
})
