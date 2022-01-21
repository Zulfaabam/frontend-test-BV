import React, { useEffect, useState } from 'react'
import Loader from '../../components/utility/loader'
import HelperText from '../../components/utility/helper-text'
import { GuestDetailsStyleWrapper } from './guestDetails.style'
import IntlMessages from '../../components/utility/intlMessages'
import { TimePicker } from 'antd'

const etaApi = `https://bv-online-assessment.herokuapp.com/api/bookings/:booking_code/update-eta`

function SearchList(result, onChange) {
  // const [value, setValue] = useState(null)

  // const onChange = (time) => {
  //   setValue(time)
  // }
  // function onChange(time, timeString) {
  //   console.log(time, timeString)
  // }

  return (
    <GuestDetailsStyleWrapper>
      <img src={result.profile_picture} alt={result.guest_name} />
      <h3>Hi, {result.guest_name}!</h3>
      <IntlMessages id="guest.thanks" />
      <div>
        <IntlMessages id="guest.property.name" />
        <span>{result.property_name}</span>
      </div>
      <div>
        <IntlMessages id="guest.check.in.date" />
        <span>{result.check_in_date}</span>
        <IntlMessages id="guest.check.out.date" />
        <span>{result.check_out_date}</span>
      </div>
      <div>
        <IntlMessages id="guest.arrival.time" />
        <span>
          <TimePicker
            value={result.arrival_time === '' ? '' : result.arrival_time}
            // value={value}
            onChange={onChange}
          />
          {result.arrival_time === '' ? (
            <IntlMessages id="guest.arrival.time.notset" />
          ) : (
            ''
          )}
        </span>
      </div>
    </GuestDetailsStyleWrapper>
  )
}

export default function guestDetails({ GuestSearch }) {
  const { searchText, loading, error } = GuestSearch
  if (!searchText) {
    return <div />
  }
  if (loading) {
    return <Loader />
  }
  if (error) {
    return <HelperText text="THERE ARE SOME ERRORS" />
  }

  const [data, setData] = useState()

  useEffect(() => {
    const getData = async () =>
      await fetch(
        `https://bv-online-assessment.herokuapp.com/api/bookings/${searchText}`,
        { method: 'GET' }
      )
        .then((res) => res.json())
        .then((res) => setData(res))
        .catch((error) => error)

    const updateEta = async () =>
      await fetch(
        `https://bv-online-assessment.herokuapp.com/api/bookings/${searchText}/updateEta`,
        { method: 'PUT', body: 'arrival_time = 13:00' }
          .then((res) => res.json())
          .then((res) => setData(res))
          .catch((error) => error)
      )

    getData()
  }, [searchText])

  // console.log(data)
  // console.log(searchText)

  return <div>{data === undefined ? <Loader /> : SearchList(data)}</div>
}
