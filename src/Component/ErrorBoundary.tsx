import React from 'react';
import crashlytics from '@react-native-firebase/crashlytics';

import ErrorFallbackUI from '@component/ErrorFallBackUI';

import {crashesErrors} from '@static/errorMessages';

import {ErrorInterface} from '@utils/interface';

export default class ErrorBoundary extends React.Component<
  {props?: any},
  {hasError: boolean}
> {
  constructor(props: any) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError() {
    return {hasError: true};
  }

  componentDidCatch(error: ErrorInterface) {
    //Todo :- Need to check how the second parameter shows in Firebase first
    //, errorInfo: any
    console.log('===>1 ErrorBoundary');

    crashlytics().log('Application crahed : Error Boundary');
    if (error) {
      crashlytics().recordError(
        new Error(
          `Error Name :- ${error.name} & Error Message :- ${error.message}`,
          //   [{...error, errorInfo}],
        ),
      );
    } else {
      crashlytics().recordError(
        new Error(
          `Error information not available`,
          // [{...error}]
        ),
      );
    }
  }

  onRetry = () => {
    this.setState({hasError: false});
  };

  render() {
    const {children} = this.props;
    const {hasError} = this.state;
    if (hasError) {
      return (
        <ErrorFallbackUI
          onRetry={this.onRetry}
          content={crashesErrors.applicationCrash}
          buttonText="Retry"
          accessibiltyText="btnRetryEB"
        />
      );
    } else {
      return children;
    }
  }
}
