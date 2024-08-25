import React from 'react'

interface Props {
  children: React.ReactNode
  fallback?: React.ReactNode
}

interface State {
  hasError: boolean
}

export class ErrorBoundary extends React.Component<Props, State> {
  state: Readonly<State> = {
    hasError: false,
  }

  static getDerivedStateFromError(_error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  /*
  componentDidCatch(error, errorInfo) {
    // Log the error to an error reporting service, or log locally
  }
  */

  render(): React.ReactNode {
    if (this.state.hasError) {
      // Render any custom fallback UI
      return this.props.fallback || null
    }

    return this.props.children
  }
}
