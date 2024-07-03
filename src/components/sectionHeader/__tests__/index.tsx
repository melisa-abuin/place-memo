import { render, screen } from '@testing-library/react'
import { SectionHeader } from '..'
import userEvent from '@testing-library/user-event'

const data = {
  id: 'id',
  image: {
    alt: 'foo',
    height: 12,
    onClick: jest.fn(),
    width: 12,
  },
  subtitle: 'subtitle',
  title: 'title',
}

describe('SectionHeader', () => {
  it('renders title correctly', async () => {
    render(<SectionHeader {...data} />)

    expect(screen.getByText('title')).toBeInTheDocument()

    expect(screen.getByText('subtitle')).toBeInTheDocument()
  })

  it('calls onclick function correctly', async () => {
    render(<SectionHeader {...data} />)

    await userEvent.click(screen.getByAltText('foo'))

    expect(data.image.onClick).toHaveBeenCalled()
  })
})
