import React, { useState, Fragment, useEffect, useContext, useRef } from 'react';
import styled from 'styled-components';
import { LoggedMobileheader, Cards} from 'components';
import GassBlack from 'assets/media/GassBlack.svg';
import ExchangeIcon from 'assets/media/exchange.svg';

const MainScreen = ({history}) => {
    const [isLoading, setLoading] = useState(false);

    return (
       <ContainerBlock>
        <LoggedMobileheader/>
        <View>
            <BodyBlock>
                <View><img src={ExchangeIcon}/></View>
            </BodyBlock>
            <View style={{paddingLeft: 16, marginTop: -10, paddingRight: 16}}>
                <Cards/>
            </View>
        </View>
                <View style={{marginTop: 30, paddingLeft: 16, paddingRight: 16}}>
                    <Grid>
                        <Block>
                            <img src={GassBlack}/>
                            <View style={{marginTop: 20}}>
                                <TextS>Super Ecto 100</TextS>
                                <TextM>28.20L</TextM>
                            </View>
                        </Block>
                        <Block>
                            <img src={GassBlack}/>
                            <View style={{marginTop: 20}}>
                                <TextS>Super Ecto</TextS>
                                <TextM>28.20L</TextM>
                            </View>
                        </Block>
                        <Block>
                            <img src={GassBlack}/>
                            <View style={{marginTop: 20}}>
                                <TextS>Premium Avangard</TextS>
                                <TextM>28.20L</TextM>
                            </View>
                        </Block>
                        <Block>
                            <img src={GassBlack}/>
                            <View style={{marginTop: 20}}>
                                <TextS>Euro Regular</TextS>
                                <TextM>28.20L</TextM>
                            </View>
                        </Block>
                        <Block>
                            <img src={GassBlack}/>
                            <View style={{marginTop: 20}}>
                                <TextS>Euro Diesel</TextS>
                                <TextM>28.20L</TextM>
                            </View>
                        </Block>
                    </Grid>
                </View>
                <div style={{height: 80}}></div>
       </ContainerBlock>
    )
}
const View = styled.div `
    & > img {
        width: 40px;
        height: 40px;
    }
`
const BodyBlock = styled.div `
    padding: 20px 16px 0px 16px;
    display: flex;
    justify-content: flex-end;
`
const Grid = styled.div `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: -15px;
`
const Block = styled.div `
    @media only screen and (min-width:300px) and (max-width:375px){
        width: 100%;
        height: 170px;
        padding: 30px;
    }
    @media only screen and (min-width:376px) and (max-width:768px){
        width: 182px;
        height: 170px;
        padding: 30px;
    }
    border: 1px solid #e5e5e5;
    border-radius: 8px;
    width: 219px;
    height: 195px;
    margin-left: 15px;
    margin-bottom: 15px;
    background-color: #fff;
    padding: 40px;
`
const TextS = styled.div `
    font-family: 'Plus Jakarta Sans';
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: -0.2800000011920929px;
    text-align: left;
    color: #000000;
    opacity: 0.6;
`
const TextM = styled.div `
    font-family: 'Plus Jakarta Sans';
    font-size: 16px;
    font-weight: 800;
    line-height: 25px;
    letter-spacing: -0.2800000011920929px;
    text-align: left;
    color: #000000;
    margin-top: 4px;
`
const ContainerBlock = styled.div `
    height: 100vh;
`
const Layout = styled.div `

`

export default MainScreen;