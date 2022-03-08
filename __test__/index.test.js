import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import ColorBlock from '../component/ColorBlock'
import CopyRight from '../component/CopyRight'
import PreLoader from '../component/PreLoader'
import HomePage from '../pages/index'
import PreLoaderRight from '../component/PreLoaderRight'
import { debug } from 'console'

describe('preload', () => {
  it('should show preloader img (not to have fade-out class)', () => {
    render(<PreLoader isLoading={true} />)
    const preLoader = screen.getByTestId('preloader')
    expect(preLoader).not.toHaveClass('fade-out')
  })

  it('should hide preloader img (have fade-out class)', () => {
    render(<PreLoader isLoading={false} />)
    const preLoader = screen.getByTestId('preloader')
    expect(preLoader).toHaveClass('fade-out')
  })

  it('should hide PreLoaderRight when rendering', () => {
    render(<PreLoaderRight isLoading={true} />)
    const preLoaderRight = screen.getByTestId('preloader-right')
    expect(preLoaderRight).not.toHaveClass('slide-right')
  })

  it('should show PreLoaderRight after rendered', () => {
    render(<PreLoaderRight isLoading={false} />)
    const preLoaderRight = screen.getByTestId('preloader-right')
    expect(preLoaderRight).toHaveClass('slide-right')
  })
})

describe('menu-container', () => {
  beforeEach(() => render(<HomePage />))
  it('render menu-container after click menublock', () => {
    const resumeMenuBlock = screen.getByTestId('menu-block-resume')
    const resumeContent = screen.getByTestId('resume')
    resumeContent.scroll = jest.fn()

    fireEvent.click(resumeMenuBlock)

    const menuContainer = screen.getByTestId('menu-container')
    expect(menuContainer).toHaveClass('showx')
  })
  it('click menu-container show target page', () => {
    const resumeMenuBlock = screen.getByTestId('menu-block-resume')
    const resumeContent = screen.getByTestId('resume')
    resumeContent.scroll = jest.fn()

    fireEvent.click(resumeMenuBlock)

    // portfolio
    const menuContainerPortfolio = screen.getByTestId('menu-container-portfolio')
    const portfolioContent = screen.getByTestId('portfolio')
    portfolioContent.scroll = jest.fn()
    fireEvent.click(menuContainerPortfolio)
    expect(portfolioContent).toHaveClass('showx')

    // blog
    const menuContainerBlog = screen.getByTestId('menu-container-blog')
    const blogContent = screen.getByTestId('blog')
    blogContent.scroll = jest.fn()
    fireEvent.click(menuContainerBlog)
    expect(blogContent).toHaveClass('showx')

    // contact
    const menuContainerContact = screen.getByTestId('menu-container-contact')
    const contactContent = screen.getByTestId('contact')
    contactContent.scroll = jest.fn()
    fireEvent.click(menuContainerContact)
    expect(contactContent).toHaveClass('showx')

    // resume
    const menuContainerResume = screen.getByTestId('menu-container-resume')
    fireEvent.click(menuContainerResume)
    expect(resumeContent).toHaveClass('showx')
  })
})

describe('home', () => {
  it('after renders preloader has fade-out class', async () => {
    render(<HomePage />)
    const preLoader = screen.getByTestId('preloader')
    await waitFor(() => {
      expect(preLoader).toHaveClass('fade-out')
    })
  })

  it('renders a ColorBlock', () => {
    render(<ColorBlock />)

    const colorBlock = screen.getByTestId('color-block')
    expect(colorBlock).toBeInTheDocument()
  })

  it('renders a copy right', () => {
    render(<CopyRight />)
    const copyRight = screen.getByTestId('copy-right')
    expect(copyRight).toHaveTextContent('© 2022 Eason Lin.digital')
  })
})

describe('menu block ', () => {
  beforeEach(() => render(<HomePage />))
  const arr = ['resume', 'portfolio', 'blog', 'contact']
  it.each(arr)('should show each item content and scroll to top', (target) => {
    const menuBlock = screen.getByTestId(`menu-block-${target}`)
    const content = screen.getByTestId(target)
    content.scroll = jest.fn()

    fireEvent.click(menuBlock)
    expect(content).toHaveClass('showx')
    expect(content.scroll).toHaveBeenCalledWith({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })

    const closeBtn = screen.getByTestId('close')
    fireEvent.click(closeBtn)

    const menuContainer = screen.getByTestId('menu-container')
    expect(content).not.toHaveClass('showx')
    expect(menuContainer).not.toHaveClass('showx')
  })

  it.each(arr)('should close when clicked name block ', (target) => {
    const menuBlock = screen.getByTestId(`menu-block-${target}`)
    const content = screen.getByTestId(target)
    content.scroll = jest.fn()

    fireEvent.click(menuBlock)

    const nameBlock = screen.getByTestId('name-block')

    fireEvent.click(nameBlock)

    const menuContainer = screen.getByTestId('menu-container')
    expect(content).not.toHaveClass('showx')
    expect(menuContainer).not.toHaveClass('showx')
    expect(nameBlock).not.toHaveClass('reverse')
  })
})
