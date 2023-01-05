import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  width: 360px;
  margin-bottom: 45px;
  cursor: pointer;
`

const Image = styled.img`
  width: 100%;
  height: 202px;
  background-color: #999;
`

const Details = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 12px;
`

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
`

const Texts = styled.div`
  
`

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 10px 0px;
`

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`

const Card = () => {
  return (
    <Link to="/video/test" style={{textDecoration: "none"}}>
      <Container>
        <Image src='https://t1.daumcdn.net/cfile/tistory/992E9A335A293B1709' />
        <Details>
          <ChannelImage src='https://yt3.googleusercontent.com/ytc/AMLnZu8-IjE5bsn90NUm8sfcQgLtfbfQgBAzcnFEKA=s88-c-k-c0x00ffffff-no-rj' />
          <Texts>
            <Title>미미일소흔경성 7,8,9회</Title>
            <ChannelName>이다인</ChannelName>
            <Info>조회수 72만회 · 4년전</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  )
}

export default Card
