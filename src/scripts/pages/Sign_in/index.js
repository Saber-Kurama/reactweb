/* ************************************************************************** */
/*                                                                            */
/* 每位工程师都有保持代码优雅和整洁的义务                                             */
/*                                                                            */
/* ************************************************************************** */
/**
 * Created by saber on 16/5/9.
 */
import React, { Component } from 'react';
import { autobind } from 'core-decorators';
import Helmet from "react-helmet";
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import Input from 'react-toolbox/lib/input';
import Button from 'react-toolbox/lib/button';
import Tooltip from 'react-toolbox/lib/tooltip';
import Snackbar from 'react-toolbox/lib/snackbar';

import * as authActions from 'modules/auth/actions';
import { validate } from './validtion';
import css from 'react-css-modules';
import style from './style';

import vkontakteIcon from './icons/vkontakte';
import soundcloudIcon from './icons/soundcloud';
import facebookIcon from './icons/facebook';
import twitterIcon from './icons/twitter';
import googleIcon from './icons/google';

const TooltipButton = Tooltip(Button);
const buttons = [
  { name: 'vkontakte', icon: vkontakteIcon, tooltip: 'Vkontakte' },
  { name: 'soundcloud', icon: soundcloudIcon, tooltip: 'SoundCloud' },
  { name: 'facebook', icon: facebookIcon, tooltip: 'Facebook' },
  { name: 'twitter', icon: twitterIcon, tooltip: 'Twitter' },
  { name: 'google', icon: googleIcon, tooltip: 'Google+', provider: 'google_oauth2' }
];

@css(style)
class SignIn extends Component {
  state = { showErrors: false};
  constructor() {
    super();
  }
  // 组件更新
  componentWillReceiveProps(nextProps){
    const {auth: {error}} = nextProps;
    const showErrors = Boolean(error);
    this.setState({showErrors});
  }
  componentWillMount() {
  }
  @autobind
  handleSubmit(e){
    // 取消默认事件
    e.preventDefault();
  }

  @autobind
  handleLogin(provider, code) {
    this.props.login(provider, code);
  }

  @autobind
  handleSnackbarTimeout() {
    console.log('xianshi s');
    this.setState({showErrors: false});
  }

  render() {
  //  const { fields: { firstName, lastName, email}, handleSubmit} = this.props;
    return (
        <div styleName="root">
          <Helmet title="登录" />
          <h1 styleName='title'>party rooms</h1>
          <p styleName='desc'>share, discover, enjoy</p>

          {this.renderForm()}
          {this.renderError()}
        </div>
    );
  }
  // 显示错误提示
  renderError(){
    return (
      <Snackbar
          timeout={2000}
          type="warning"
          active={this.state.showErrors}
          label={this.props.auth.error || ''}
          onClick={ () => { console.log('1111');return false;}}
          onTimeout={ () => {console.log('000000000'); this.setState({showErrors: false}); return false;}}
      />
    );
  }

  renderForm() {
    const { auth, fields:{ code }} = this.props;
    const valid = !code.error;
    const inputProps = {
      label: valid ? 'Welcome!' : 'Invite code',
      //icon: 'thumb_up'
    };
    return(
        <form styleName="form"  onSubmit={this.handleSubmit}>
          <div styleName="fields">
            <Input  {...inputProps} {...code} styleName="code" type="text" autoComplete="off" />
          </div>
          <div styleName="social">
            {
                buttons.map(({name, provider, icon, tooltip}) =>
                    <TooltipButton floating
                      key={name}
                      name="provider"
                      tooltip={tooltip}
                      onClick={() => this.handleLogin(provider || name, code.value)}
                      >
                    </TooltipButton>
                )
            }
          </div>
        </form>
    )
  }
}
const SignInFormPage = reduxForm({
  form: 'signin',                           // a unique name for this form
  fields: ['code'], // all the fields in your form
  validate
})(SignIn);
function select(state) {
  const { router, auth } = state;
  return {
    router,
    auth
  }
}
export default connect(select, {
  login: authActions.login
})(SignInFormPage);