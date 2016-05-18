/* ************************************************************************** */
/*                                                                            */
/* 每位工程师都有保持代码优雅和整洁的义务                                             */
/*                                                                            */
/* ************************************************************************** */
/**
 * Created by saber on 16/5/18.
 */
import validator from 'validator';
export function validate(data){
  const errors ={};
  console.log('开始校验');
  if(!data.code) {
    errors.code = 'please, enter your invite code ';
  }else if(!validator.isUUID(data.code)){
    errors.code = 'Invalid invite code';
  }
  return errors;
}