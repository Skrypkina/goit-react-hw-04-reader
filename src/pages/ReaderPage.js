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
    idx: 1,
  };

  componentDidMount() {
    // const location = this.props.location.search;
    const qs = getItemFromLocation(this.props);
    const index = Number(qs);
    const item = index - 1;

    if (!qs) {
      return this.props.history.push({
        pathname: this.props.location.pathname,
        search: `item=1`,
      });
    }
    if (!qs) {
      return this.setState({ article: publications[0] });
    }
    this.setState({ article: publications[item], idx: index });
  }

  handleIncrement = () => {
    const index = Number(getItemFromLocation(this.props));
    const number = index + 1;

    this.setState(state => ({
      idx: this.state.idx + 1,
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
    // console.log(index);
    const item = number - 1;

    this.setState(state => ({
      idx: this.state.idx - 1,
      article: publications[item],
    }));
    this.props.history.push({
      ...this.props.location,
      search: `item=${number}`,
    });
  };

  render() {
    const { idx, article } = this.state;

    return (
      <div>
        {article && <Publication item={article} />}
        <Counter number={number} idx={idx} />

        <Controls
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
          idx={idx}
        />
      </div>
    );
  }
}
