import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from 'redux/actions';
import s from './Filter.module.css';

const Filter = () => {
  const value = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const onChange = e => {
    dispatch(actions.changeFilter(e.target.value));
  };

  return (
    <label className={s.label}>
      Find contact by name
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export default Filter;
