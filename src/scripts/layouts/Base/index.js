/* ************************************************************************** */
/*                                                                            */
/* 每位工程师都有保持代码优雅和整洁的义务                                             */
/*                                                                            */
/* ************************************************************************** */
/**
 * Created by saber on 16/5/9.
 */
import React, { Component } from 'react';
export default class Base extends Component {
  render(){
    const { children } = this.props;
    return (
        <div>
          {children}
        </div>
    );
  }
}