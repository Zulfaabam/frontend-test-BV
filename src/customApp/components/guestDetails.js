import React, { useEffect, useState } from 'react'
import Loader from '../../components/utility/loader'
import HelperText from '../../components/utility/helper-text'
import { GuestDetailsStyleWrapper } from './guestDetails.style'
import IntlMessages from '../../components/utility/intlMessages'
import { TimePicker } from 'antd'
// import moment from 'moment'

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

  //fetching API data from booking code
  useEffect(() => {
    const getData = async () =>
      await fetch(
        `https://bv-online-assessment.herokuapp.com/api/bookings/${searchText}`,
        { method: 'GET' }
      )
        .then((res) => res.json())
        .then((res) => {
          setData(res)
        })
        .catch((error) => error)

    getData()
  }, [searchText])

  console.log(data)
  // console.log(searchText)

  // update ETA
  const updateEta = async (time, timeString) => {
    console.log(time, timeString)
    await fetch(
      `https://bv-online-assessment.herokuapp.com/api/bookings/${searchText}/update-eta`,
      { method: 'PUT', body: { arrival_time: timeString } }
    )
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((error) => error)
    // console.log(data)
  }

  return (
    <div>
      {data === undefined ? (
        <Loader />
      ) : (
        <GuestDetailsStyleWrapper>
          <img src={data.profile_picture} alt={data.guest_name} />
          <h3>Hi, {data.guest_name}!</h3>
          <IntlMessages id="guest.thanks" />
          <div>
            <IntlMessages id="guest.property.name" />
            <strong>{data.property_name}</strong>
          </div>
          <div>
            <IntlMessages id="guest.check.in.date" />
            <strong>{data.check_in_date}</strong>
            <IntlMessages id="guest.check.out.date" />
            <strong>{data.check_out_date}</strong>
          </div>
          <div>
            <IntlMessages id="guest.arrival.time" />
            <span>
              <TimePicker format="HH:mm" onChange={updateEta} />
              {data.arrival_time === '' ? (
                <IntlMessages id="guest.arrival.time.notset" />
              ) : (
                ''
              )}
            </span>
          </div>
        </GuestDetailsStyleWrapper>
      )}
    </div>
  )
}
