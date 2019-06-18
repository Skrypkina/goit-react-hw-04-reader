import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import Publication from './Publication';
import Controls from './Controls';
import Counter from './Counter';

const getItemFromLocation = props =>
  queryString.parse(props.location.search).item;

class Reader extends Component {
  componentDidMount() {
    const itemNumber = getItemFromLocation(this.props);

    if (!itemNumber) {
      this.props.history.replace({
        pathname: this.props.location.pathname,
        search: `item=1`,
      });
    }
  }

  handleIncrement = () => {
    const currentPageNumber = Number(getItemFromLocation(this.props));

    this.props.history.push({
      ...this.props.location,
      search: `item=${currentPageNumber + 1}`,
    });
  };

  handleDecrement = () => {
    const currentPageNumber = Number(getItemFromLocation(this.props));

    this.props.history.push({
      ...this.props.location,
      search: `item=${currentPageNumber - 1}`,
    });
  };

  render() {
    const pageNumber = Number(getItemFromLocation(this.props));
    return (
      <div>
        {pageNumber && <Publication item={this.props.items[pageNumber - 1]} />}
        <Counter current={pageNumber} total={this.props.items.length} />
        <Controls
          currentPageNumber={pageNumber}
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default withRouter(Reader);
