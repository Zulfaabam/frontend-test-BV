import React, { useEffect, useState } from 'react'
import Loader from '../../components/utility/loader'
import HelperText from '../../components/utility/helper-text'
import {
  GuestDetailsListStyleWrapper,
  GuestDetailsStyleWrapper,
} from './guestDetails.style'

const guestSearchApi = `https://bv-online-assessment.herokuapp.com/api/bookings`

function SearchList(result) {
  return (
    <GuestDetailsListStyleWrapper className="isoGithubResultList">
      {result.booking_name}
      {/* {result.map((item) => {
        const onClick = () => {
          window.open(item.html_url, '_blank')
        }
        const updateDate = new Date(item.updated_at).toDateString()
        return (
          <div key={item.id} className="isoSingleRepository">
            <div className="titleAndLanguage">
              <h3>
                <a onClick={onClick} href="# ">
                  {`${item.full_name} `}
                </a>
              </h3>

              {item.language ? (
                <span className="language">{item.language}</span>
              ) : (
                ''
              )}
              {item.stargazers_count ? (
                <span className="totalStars">{item.stargazers_count}</span>
              ) : (
                ''
              )}
            </div>
            {item.description ? <p>{item.description}</p> : ''}
            <span className="updateDate">Updated on {updateDate}</span>
          </div>
        )
      })} */}
    </GuestDetailsListStyleWrapper>
  )
}

export default function guestDetails({ GuestSearch }) {
  const { searchText, result, loading, error } = GuestSearch
  if (!searchText) {
    return <div />
  }
  if (loading) {
    return <Loader />
  }
  if (error) {
    return <HelperText text="THERE ARE SOME ERRORS" />
  }
  if (Object.keys(result).length === 0) {
    return <HelperText text="No Result Found" />
  }
  //   const [data, setData] = useState()

  //   useEffect(() => {
  //     const getData = async () =>
  //       await fetch(`${guestSearchApi}/${searchText}`, { method: 'GET' })
  //         .then((res) => res.json())
  //         .then((res) => setData(res))
  //         .catch((error) => error)

  //     getData()
  //   }, [searchText])
  //   console.log(data)

  return (
    <div>
      <h1>guest details</h1>
      {SearchList(result)}
    </div>
  )
}
