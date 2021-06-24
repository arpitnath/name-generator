import React, { Component, ErrorInfo, ReactNode } from 'react'
import StylishButton from '../StylishButton'
import Error from './Error'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error: Error | string
}

class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
    error: ''
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error: error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <Error>
          <StylishButton
            onClick={() => window.location.reload()}
            text={'Reload 🔄'}></StylishButton>
        </Error>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
