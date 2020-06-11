import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import Login from '../components/Login'
import reducers from '../reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
)

afterEach(cleanup)

describe('Change email input', () => {
  it('correctly updates on change', () => {
    const { queryByPlaceholderText } = render(
      <Provider store={store}>
        <Router>
          <Login />
        </Router>
      </Provider>
    )

    const emailInput = queryByPlaceholderText('example@gmail.com')

    fireEvent.change(emailInput, { target: { value: 'akhmedov.jama@mail.ru' } })

    expect(emailInput.value).toBe('akhmedov.jama@mail.ru')
  }),
    it('incorrectly updates on change', () => {
      const { queryByPlaceholderText } = render(
        <Provider store={store}>
          <Router>
            <Login />
          </Router>
        </Provider>
      )

      const emailInput = queryByPlaceholderText('example@gmail.com')

      fireEvent.change(emailInput, { target: { value: 'jamal' } })

      expect(emailInput.value).not.toBe('akhmedov.jama@mail.ru')
    })
})

describe('Page check', () => {
  it('is signin page', () => {
    // const history = createMemoryHistory()
    render(
      <Provider store={store}>
        <Router>
          <Login />
        </Router>
      </Provider>
    )
    expect(document.querySelector('h1').textContent).toBe('Вход')
  })
})