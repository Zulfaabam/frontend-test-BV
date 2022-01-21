import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'antd'
import PageHeader from '../../../components/utility/pageHeader'
import Box from '../../../components/utility/box'
import LayoutWrapper from '../../../components/utility/layoutWrapper'
import IntlMessages from '../../../components/utility/intlMessages'
import notification from '../../../components/notification'
import GuestDetails from '../../components/guestDetails'
import basicStyle from '../../../settings/basicStyle'
import actions from '../../redux/guestSearch/actions'
import validate from '../../components/formValidation'
import { Form, Input } from 'antd'

const { Search } = Input

const { guestSearch } = actions

function guestPortal({ GuestSearch }) {
  const { rowStyle, colStyle, gutter } = basicStyle

  const [valid, setValid] = useState({})

  const onSearch = (value) => {
    if (value && value.length > 0) {
      guestSearch(value)
      validate(value)
      setValid({ ...validate(value) })
      GuestSearch.searchText = value
      // console.log(guestSearch(value))
      // console.log(validate(value))
    } else {
      notification('error', 'Please type something')
    }
  }
  console.log(GuestSearch)

  useEffect(() => {
    onSearch(GuestSearch.searchText)
  }, [])

  return (
    <LayoutWrapper>
      <PageHeader>
        <IntlMessages id="sidebar.guestPortal" />
      </PageHeader>
      <Row style={rowStyle} gutter={gutter} justify="center">
        <Col md={24} sm={24} xs={24} style={colStyle}>
          <Box style={{ minHeight: 400 }}>
            <h2 style={{ textAlign: 'center' }}>
              <IntlMessages id="forms.input.booking" />
            </h2>
            <Form>
              <Form.Item
                validateStatus={valid.validateStatus}
                help={valid.errorMsg}
                style={{
                  width: '500px',
                  display: 'block',
                  margin: '1rem auto',
                }}
              >
                <Search onSearch={onSearch} />
              </Form.Item>
            </Form>
            <GuestDetails GuestSearch={GuestSearch} />
          </Box>
        </Col>
      </Row>
    </LayoutWrapper>
  )
}

function mapStateToProps(state) {
  return { GuestSearch: state.guestSearch }
}

export default connect(mapStateToProps, { guestSearch })(guestPortal)
