import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import Action from '../../store/actions'
// import { QueueAnim, Table } from 'antd'
import { Link } from 'react-router';
import css from 'react-css-modules';
//import styles from './style';


// import Nodebar from '../../components/Nodebar/Nodebar'
// import TopicList from '../../components/TopicList/TopicList'
//
// import './Home.less'

// @connect(
//   state => ({...state}),
//   dispatch => bindActionCreators(Action, dispatch)
// )




export default class Home extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
  }

  render() {
    return (
      <div styleName="contain">
        这是一个about页面
      </div>
    );
  }
}
