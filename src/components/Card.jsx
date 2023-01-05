import React from 'react'
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
    <Container>
      <Image src='https://t1.daumcdn.net/cfile/tistory/992E9A335A293B1709' />
      <Details>
        <ChannelImage src='https://mblogthumb-phinf.pstatic.net/MjAyMDAyMDFfMjYz/MDAxNTgwNTY2MDA4NjM5.A2jklfg06tC_6c0IjK6Y_5hd3Rsidevs7Yj0e11iZ50g.M-XuEj68HH1gEaabsm-Jfyb24BPtBA9a0gKFaocUgZwg.JPEG.gibanyeee/1580566006580.jpg?type=w800' />
        <Texts>
          <Title>미미일소흔경성</Title>
          <ChannelName>미미</ChannelName>
          <Info>조회수 66만회 · 1일전</Info>
        </Texts>
      </Details>
    </Container>
  )
}

export default Card
