import * as React from 'react';
import { connect } from 'react-redux';
import './index.css';

class Index extends React.Component<any, any> {
  public componentDidMount() {
    window.a = 'hello';
  }
  private _increase = () => {
    const { count } = this.props;
    this.props.increaseSuccess(count);
  };
  private _increaseSync = () => {
    const { count } = this.props;
    this.props.increaseAsync(count);
  };
  public render() {
    const { count } = this.props;
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={this._increase}>add</button>
        <button onClick={this._increaseSync}>addSync</button>
      </div>
    );
  }
}

const mapState = ({ count }: RootModel) => {
  return {
    ...count
  };
};

const mapDispatch = (dispatch: any) => ({
  increaseAsync: dispatch.count.increaseAsync,
  increaseSuccess: dispatch.count.increaseSuccess
});

export default connect(
  mapState,
  mapDispatch
)(Index);
