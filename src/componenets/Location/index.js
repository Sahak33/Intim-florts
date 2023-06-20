import React from 'react';
import './Location.scss';
import {useForm} from "react-hook-form";
import {VALIDATION_MESSAGES} from "helpers/constants";
import {ReactComponent as Search} from "assets/images/icons/search.svg";
import Button from "../common/Button";
import Back from "../Back";
import {useDispatch} from "react-redux";
import {chooseLocation} from "store/app/appSlice";

const { FIELD_IS_REQUIRED } = VALIDATION_MESSAGES;

const Location = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(chooseLocation(data.location));
  }

  return (
    <form className='location' onSubmit={handleSubmit(onSubmit)}>
      <p>Your location will never be shared with third parties, you data is secure</p>
      <div className='location-box'>
        <input
          className='location-field'
          type='text'
          placeholder='Location'
          {...register('location', {
            required: FIELD_IS_REQUIRED,
          })}
        />
        <Search className='search' />
      </div>
      {errors.location && <p id='error'>{errors.location?.message}</p>}
      <Button title='Next' />
      <div className='location-back'>
        <Back />
      </div>
    </form>
  );
};

export default Location;
