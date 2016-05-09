import { connect } from 'react-redux';
import css from 'react-css-modules';

import styles from './style.css';
//import headerStyle from './header.css';
// const { func, string, object } = PropTypes;
//@css(styles)
export class App extends Component {
  // static propTypes = {
  //   logout: func.isRequired,
  //   replacePath: func.isRequired,
  //   reset: func.isRequired
  // };
  render() {
    const { children } = this.props;
    // styles={headerStyle}
    return (
        <div styleName='app'>

          <div styleName='app-aside'></div>
          <div styleName='app-content'>

            {children}

          </div>

        </div>
    );
  }
}
export default App;
