/**
 * 头部组件
 */
import styles from './style.css';
import css from 'react-css-modules';
//import { Dropdown, Menu, Icon } from 'antd';

console.log(styles);



@css(styles)
export default class Header extends Component {
  render() {
    return (
      <header styleName="header" className = {this.props.class}>

      </header>
    );
  }
}
