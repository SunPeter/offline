import * as React from 'react';
import './index.scss';

const defaultProps = Object.freeze({});

export type ErrorPagePropTypes = typeof defaultProps & {};

const ErrorPage: React.SFC<ErrorPagePropTypes> = props => {
  return (
    <div className="errorpage-container">
      <h1>404 Not Found</h1>
    </div>
  );
};
export default ErrorPage;
