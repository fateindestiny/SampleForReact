import {Component} from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      errorInfo: '',
    };
  }

  static getDerivedStateFromError(error) {
    return {hasError: true};
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: !!error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      return <div>Error : {this.state.errorInfo}</div>;
    }

    return this.props.children;
  }
}
