import * as React from 'react';
import './index.css';

const defaultProps = Object.freeze({});

export type ErrorPagePropTypes = typeof defaultProps & {};

const ErrorPage: React.SFC<ErrorPagePropTypes> = props => {
  return <h1>404 Not Found</h1>;
};
export default ErrorPage;
