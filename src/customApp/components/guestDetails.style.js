import styled from 'styled-components'

const GuestDetailsStyleWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  img {
    border-radius: 50%;
    width: 300px;
    height: 300px;
  }

  strong,
  span {
    margin: 0 0.5rem;
  }
`

export { GuestDetailsStyleWrapper }
