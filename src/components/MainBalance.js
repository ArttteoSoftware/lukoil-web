import React, { useState, Fragment, useEffect, useContext, useRef } from 'react';
import styled from 'styled-components';
import ExchangeIcon from 'assets/media/exchange.svg';
import TransferIcon from 'assets/media/transfer.svg';
import EditName from 'assets/media/editName.svg';
import GassIcon from 'assets/media/Gass.svg';
import { Tranfer } from 'components'
const MainBalance = ({showCard}) => {
    const [showButton, setShowButton] = useState(false);
    

    return (
        <MainbalanceContainer>
            <MainBalanceheader>
                <View>
                    <Text style={{marginBottom: 5}}>Balance</Text>
                    <TextPrice>432.00L</TextPrice>
                </View>
                <ExchangeButton onClick={() => setShowButton((old) => old ? false : true)}><img src={showButton ? TransferIcon : ExchangeIcon}/></ExchangeButton>
            </MainBalanceheader>
            {
                showCard &&
                <MainCard>
                    <ViewBlock>
                        <CardBlockText>
                            <TextM>Card name</TextM>
                            <TextBlock>
                                <TextT>My card</TextT>
                                <EditIcon src={EditName}/>
                            </TextBlock>
                        </CardBlockText>
                        <BlockGassIcon src={GassIcon}/>
                    </ViewBlock>
                </MainCard>
            }

            <View style={{marginTop: 30}}>
                <Block>
                    <Text>Super Ecto 100</Text>
                    <TextPriceM>280.20 L</TextPriceM>
                </Block>
                <Block>
                    <Text>Super Ecto</Text>
                    <TextPriceM>520.00 L</TextPriceM>
                </Block>
                <Block>
                    <Text>Premium Avangard</Text>
                    <TextPriceM>0.00 L</TextPriceM>
                </Block>
                <Block>
                    <Text>Euro Regular</Text>
                    <TextPriceM>0.00 L</TextPriceM>
                </Block>
                <Block>
                    <Text>Euro Diesel</Text>
                    <TextPriceM>0.00 L</TextPriceM>
                </Block>
            </View>
            {showButton && <Tranfer/>}
        </MainbalanceContainer>        
    )
}
const ExchangeButton = styled.div `
cursor: pointer;
`
const MainCard = styled.div `
    background: #DB2B36;
    border-radius: 12px;
    height: 196px;
    width: 342px;
    padding: 32px;
    margin-top: 20px;
`
const ViewBlock = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const CardBlockText = styled.div `

`
const TextM = styled.div `
    font-family: 'Plus Jakarta Sans';
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: -0.2800000011920929px;
    text-align: left;
    color: #FFFFFF;
    opacity: 0.8;
`
const TextBlock = styled.div `
    display: flex;
    align-items: center;
`
const TextT = styled.div `
    font-family: 'Plus Jakarta Sans';
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: -0.2800000011920929px;
    text-align: left;
    color: #FFFFFF;
`
const EditIcon = styled.img `
    width: 16px;
    width: 16px;
    margin-left: 8px;
    margin-top: 1px;
`
const BlockGassIcon = styled.img `
    width: 40px;
    width: 40px;
`

const MainbalanceContainer = styled.div `

`
const MainBalanceheader = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const View = styled.div `

`
const Text = styled.div `
    font-family: 'Plus Jakarta Sans';
    font-size: 14px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: -0.2800000011920929px;
    text-align: left;
`
const TextPrice = styled.div `
    font-family: 'Plus Jakarta Sans';
    font-size: 16px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: -0.2800000011920929px;
    text-align: left;

`
const Block = styled.div  `
    margin-top: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const TextPriceM = styled.div `
    font-family: 'Plus Jakarta Sans';
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    letter-spacing: -0.2800000011920929px;
    text-align: left;
    opacity: .9;

`

export default MainBalance;