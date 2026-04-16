import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

test('renders app text', () => {
  render(<App />)
  expect(screen.getByText(/Get started/i)).toBeInTheDocument()
})

test('renders counter button', () => {
  render(<App />)
  const button = screen.getByRole('button', { name: /count is 0/i })
  expect(button).toBeInTheDocument()
})

test('increments counter on button click', async () => {
  const user = userEvent.setup()
  render(<App />)
  const button = screen.getByRole('button', { name: /count is 0/i })
  
  await user.click(button)
  expect(screen.getByRole('button', { name: /count is 1/i })).toBeInTheDocument()
  
  await user.click(button)
  expect(screen.getByRole('button', { name: /count is 2/i })).toBeInTheDocument()
})

test('renders Vite and React logos', () => {
  render(<App />)
  expect(screen.getByAltText('Vite logo')).toBeInTheDocument()
  expect(screen.getByAltText('React logo')).toBeInTheDocument()
})