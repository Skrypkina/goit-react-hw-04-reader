import React, { Component } from 'react';
import queryString from 'query-string';
import publications from '../publications.json';
import Publication from '../components/Reader/Publication';
import Controls from '../components/Reader/Controls';
import Counter from '../components/Reader/Counter';

const number = publications.length;

const getItemFromLocation = props =>
  queryString.parse(props.location.search).item;

export default class ReaderPage extends Component {
  state = {
    article: {},
  };

  componentDidMount() {
    const location = this.props.location.search;
    const qs = getItemFromLocation(this.props);
    const index = Number(qs);
    const item = index - 1;

    if (!qs) {
      this.setState({ article: publications[0] });
      this.props.history.replace({
        pathname: location,
        search: `item=1`,
      });
    }

    this.setState({ article: publications[item] });
  }

  handleIncrement = () => {
    const index = Number(getItemFromLocation(this.props));
    const number = index + 1;

    this.setState(state => ({
      article: publications[index],
    }));

    this.props.history.push({
      ...this.props.location,
      search: `item=${number}`,
    });
  };

  handleDecrement = () => {
    const index = Number(getItemFromLocation(this.props));
    const number = index - 1;

    const item = number - 1;

    this.setState(state => ({
      article: publications[item],
    }));
    this.props.history.push({
      ...this.props.location,
      search: `item=${number}`,
    });
  };

  render() {
    const { article } = this.state;
    const page = Number(getItemFromLocation(this.props));

    return (
      <div>
        {article && <Publication item={article} />}
        <Counter number={number} idx={page} />
        <Controls
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
          idx={page}
        />
      </div>
    );
  }
}
