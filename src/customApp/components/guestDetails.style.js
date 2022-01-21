import styled from 'styled-components'

const GuestDetailsStyleWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 1rem;
  width: 500px;

  img {
    border-radius: 50%;
    width: 300px;
    height: 300px;
    align-self: center;
  }

  strong,
  span,
  h3 {
    margin: 0 0.5rem;
  }
`

export { GuestDetailsStyleWrapper }
