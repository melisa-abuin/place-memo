import { render, screen } from '@testing-library/react'
import { Modal } from '..'

describe('Modal', () => {
  it('returns null if modal state is false', () => {
    const { container } = render(
      <Modal
        modalState={false}
        onCrossClick={jest.fn()}
        onLeftButtonClick={jest.fn()}
        onRightButtonClick={jest.fn()}
      />
    )

    expect(container.firstChild).toBeNull()
  })
})
