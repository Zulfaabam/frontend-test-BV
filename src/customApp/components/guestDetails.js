import React, { useEffect, useState } from 'react'
import Loader from '../../components/utility/loader'
import HelperText from '../../components/utility/helper-text'
import { GuestDetailsStyleWrapper } from './guestDetails.style'

function SearchList(result) {
  return (
    <GuestDetailsStyleWrapper className="isoGithubResultList">
      <img src={result.profile_picture} alt={result.guest_name} />
      <p>{result.guest_name}</p>
      <p>thank you</p>
      <p>{result.property_name}</p>
      <div>
        <span>{result.check_in_date}</span>
        <span>{result.check_out_date}</span>
      </div>
      <p>
        {result.arrival_time === ''
          ? 'Please set your arrival time'
          : result.arrival_time}
      </p>
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

    getData()
  }, [searchText])
  console.log(data)
  console.log(searchText)

  return <div>{data === undefined ? <Loader /> : SearchList(data)}</div>
}
