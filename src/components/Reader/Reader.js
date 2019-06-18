import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Publication from './Publication';
import Counter from './Counter';
import Controls from './Controls';
// import styles from './Reader.module.css';
import publications from '../../publications.json';

// export default class Reader extends Component {
//   static defaultProps = {
//     step: 1,
//     move: 0,
//   };

//   static propTypes = {
//     items: PropTypes.array,
//   };

//   state = {
//     items: [],
//     number: this.props.items.length,
//     idx: this.props.step,
//     arrayIdx: this.props.move,
//   };

//   handleIncrement = () => {
//     this.setState(state => ({
//       idx: state.idx + this.props.step,
//       arrayIdx: state.arrayIdx + 1,
//     }));
//   };

//   handleDecrement = () => {
//     this.setState(state => ({
//       idx: state.idx - this.props.step,
//       arrayIdx: state.arrayIdx - 1,
//     }));
//   };

//   render() {
//     const { arrayIdx, number, idx } = this.state;

//     return (
//       <div>
//         <Publication item={this.props.items[arrayIdx]} />

//         <Counter idx={idx} number={number} />
//         <Controls
//           handleDecrement={this.handleDecrement}
//           handleIncrement={this.handleIncrement}
//           idx={idx}
//         />
//       </div>
//     );
//   }
// }

const Reader = ({ items }) => (
  <div>
    // <Publication item={publications[0]} />
    {/* //         <Counter idx={} number={number} />
//         <Controls
          handleDecrement={this.handleDecrement}
          handleIncrement={this.handleIncrement}
          idx={idx}
        /> */}
  </div>
);

export default Reader;
