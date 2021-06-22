import React, { Component, ErrorInfo, ReactNode } from 'react'
import Error from './Error'
// import Error from './Error'

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
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error: error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <Error error={this.state.error} />
    }

    return this.props.children
  }
}

export default ErrorBoundary
