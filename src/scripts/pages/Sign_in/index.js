/* ************************************************************************** */
/*                                                                            */
/* 每位工程师都有保持代码优雅和整洁的义务                                             */
/*                                                                            */
/* ************************************************************************** */
/**
 * Created by saber on 16/5/9.
 */
import React, { Component } from 'react';
import Helmet from "react-helmet";
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
class SignIn extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
  }

  render() {
    const { fields: { firstName, lastName, email}, handleSubmit} = this.props;
    return (
        <div>
          <Helmet title="登录" />
          <form onSubmit={handleSubmit}>
            <div>
              <label>First Name</label>
              <input type="text" placeholder="First Name" {...firstName}/>
            </div>
            <div>
              <label>Last Name</label>
              <input type="text" placeholder="Last Name" {...lastName}/>
            </div>
            <div>
              <label>Email</label>
              <input type="email" placeholder="Email" {...email}/>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
    );
  }
}
const SignInForm = reduxForm({
  form: 'signin',                           // a unique name for this form
  fields: ['firstName', 'lastName', 'email'] // all the fields in your form
})(SignIn);
function select(state) {
  const { router } = state;
  return {
    router
  }
}
export default connect(select, {})(SignInForm);