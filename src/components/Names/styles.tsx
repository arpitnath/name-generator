import styled from 'styled-components'

export const Item = styled.div`
  display: flex;
  padding: 50px 5%;
  color: white;
  overflow: hidden;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1100px;
  height: 24vh;
  width: 45vw;
  flex-direction: row;
  border: 8px solid #222;
  color: #fff;
  margin-top: 20px;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`

export const Heading = styled.h1`
  font-size: 40px;
  line-height: 1.1;
  color: #fff;
  @media (max-width: 600px) {
    font-size: 28px;
  }
`

export const Pane = styled.div`
  width: 50%;
  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 45px;
    text-align: center;
  }
`
