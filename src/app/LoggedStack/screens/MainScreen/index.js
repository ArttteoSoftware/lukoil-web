import React, { useState, Fragment, useEffect, useContext, useRef } from 'react';
import styled from 'styled-components';
import { MainOrders, MainBalance, LoggedHeader, Cards } from 'components';
import GassBlack from 'assets/media/GassBlack.svg';


const MainScreen = ({history}) => {
    const [isLoading, setLoading] = useState(false);

    return (
       <ContainerBlock>
            <Layout>
                <LoggedHeader showRightSide/>
                <Cards/>
                <View style={{marginTop: 30}}>
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
            </Layout>
            <RightPanel>
                <MainBalance/>
                <MainOrders/>
            </RightPanel>
       </ContainerBlock>
    )
}
const View = styled.div `

`
const Grid = styled.div `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: -15px;
`
const Block = styled.div `
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
    display: flex;
    height: 100vh;
`
const Layout = styled.div `
    flex: 1;
    padding: 32px;
`
const RightPanel = styled.div `
    padding: 32px;
    width: 406px;
    background-color: #F2F2F2;
`
export default MainScreen;