import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      redirectTimer: 30, // 5 minutes (300 seconds)
    };
  }

  static getDerivedStateFromError(error) {
    return { error: error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });


    this.startRedirectCountdown();
  }

  startRedirectCountdown() {
    this.redirectInterval = setInterval(() => {
      this.setState((prevState) => ({
        redirectTimer: prevState.redirectTimer - 1,
      }), () => {
        if (this.state.redirectTimer <= 0) {
          clearInterval(this.redirectInterval);
          this.redirectToHomePage();
        }
      });
    }, 1000);
  }

  redirectToHomePage() {
      window.location.href = '/';
    console.log('Redirecting to the home page');
  }

  componentWillUnmount() {
    clearInterval(this.redirectInterval);
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <div style={errorContainerStyle}>
          <h1 style={headingStyle}>Oops! Something went wrong.</h1>
          <p style={errorMessageStyle}>
            {this.state.error && this.state.error.toString()}
          </p>
          <details style={detailsStyle}>
            {this.state.errorInfo.componentStack}
          </details>
          <p style={redirectMessageStyle}>
            Redirecting in {this.state.redirectTimer} seconds...
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

const errorContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  fontSize: '1.5rem',
  textAlign: 'center',
  color: '#333',
  backgroundColor: '#f8d7da',
};

const headingStyle = {
  color: '#721c24',
};

const errorMessageStyle = {
  color: '#721c24',
};

const detailsStyle = {
  marginTop: '20px',
  whiteSpace: 'pre-wrap',
};

const redirectMessageStyle = {
  color: '#721c24',
  marginTop: '20px',
};
