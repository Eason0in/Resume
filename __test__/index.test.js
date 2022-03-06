import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import ColorBlock from '../component/ColorBlock'
import CopyRight from '../component/CopyRight'
import PreLoader from '../component/PreLoader'
import HomePage from '../pages/index'
import PreLoaderRight from '../component/PreLoaderRight'
import { act } from 'react-dom/test-utils'
import { debug } from 'console'

describe('home', () => {
  it('renders preloader', () => {
    render(<PreLoader />)
    const preLoader = screen.getByTestId('preloader')
    expect(preLoader).toBeInTheDocument()
  })

  it('after renders preloader has fade-out class', async () => {
    render(<PreLoader />)
    const preLoader = screen.getByTestId('preloader')
    await waitFor(() => {
      expect(preLoader).toHaveClass('fade-out')
    })
  })

  it('renders preloader-right', () => {
    render(<PreLoaderRight />)
    const preLoaderRight = screen.getByTestId('preloader-right')
    expect(preLoaderRight).toBeInTheDocument()
  })

  it('after renders preloader-right has slide-right class', async () => {
    render(<PreLoaderRight />)
    const preLoaderRight = screen.getByTestId('preloader-right')
    await waitFor(() => {
      expect(preLoaderRight).toHaveClass('slide-right')
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

describe('menu click', () => {
  it('click resume', async () => {
    render(<HomePage />)
    const resumeMenuBlock = screen.getByTestId('menu-block-resume')
    const resumeContent = screen.getByTestId('resume')
    resumeContent.scroll = jest.fn()

    fireEvent.click(resumeMenuBlock)
    expect(resumeContent).toHaveClass('showx')
  })
  it('scroll after click resume', async () => {
    render(<HomePage />)
    const resumeMenuBlock = screen.getByTestId('menu-block-resume')
    const resumeContent = screen.getByTestId('resume')
    resumeContent.scroll = jest.fn()

    fireEvent.click(resumeMenuBlock)
    expect(resumeContent.scroll).toHaveBeenCalledWith({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  })
})
