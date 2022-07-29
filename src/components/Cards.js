

import React, { useState, Fragment, useEffect, useContext, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import EditName from 'assets/media/editName.svg';
import GassIcon from 'assets/media/Gass.svg';


const Cards = () => {
    const [data, setData] = useState([{
        id: 1,
        name: 'Nikas card'
    },{
        id: 2,
        name: 'Nutsas card'
    },{
        id: 3,
        name: 'Teos card'
    },{
        id: 4,
        name: 'Family card'
    }]);



    return (
        <View style={{marginTop: 32, minWidth: 918, maxWidth: 918, overflowX: 'scroll'}}>
            <Slider>
                {
                    data.map((v,index) => {
                        return (
                            <CardStyle key={v.id}>
                                <BlockMargin style={{backgroundColor: index%2 != 1 ? '#DB2B36' : '#000'}}>
                                    <ViewBlock>
                                        <CardBlockText>
                                            <TextM>Card name</TextM>
                                            <TextBlock>
                                                <TextT>{v.name}</TextT>
                                                <EditIcon src={EditName}/>
                                            </TextBlock>
                                        </CardBlockText>
                                        <BlockGassIcon src={GassIcon}/>
                                    </ViewBlock>
                                    <View style={{marginTop: 25}}>
                                        <Grid>
                                            <GridItem>
                                                <GridItemName>Super Ecto 100</GridItemName>
                                                <GridItemPrice>28.20L</GridItemPrice>
                                            </GridItem>
                                            <GridItem>
                                                <GridItemName>Super Ecto</GridItemName>
                                                <GridItemPrice>0.00L</GridItemPrice>
                                            </GridItem>
                                            <GridItem>
                                                <GridItemName>Premium Avangard</GridItemName>
                                                <GridItemPrice>20.00L</GridItemPrice>
                                            </GridItem>
                                        </Grid>
                                        <Grid>
                                            <GridItem>
                                                <GridItemName>Euro Regular</GridItemName>
                                                <GridItemPrice>0.00L</GridItemPrice>
                                            </GridItem>
                                            <GridItem>
                                                <GridItemName>Euro Diesel</GridItemName>
                                                <GridItemPrice>0.00L</GridItemPrice>
                                            </GridItem>
                                        </Grid>
                                    </View>
                                </BlockMargin>
                            </CardStyle>
                        )
                    })
                }
            </Slider>
        </View>
    )
}
const Slider = styled.div `
    display: flex;
`
const Grid = styled.div `
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: flex-start;
    margin-top: 7px;
`
const GridItem = styled.div `
    width: 33.33%;
    margin-bottom: 10px;
`
const GridItemName = styled.div `
    font-family: 'Plus Jakarta Sans';
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: -0.2800000011920929px;
    text-align: left;
    color: #FFFFFF;
`
const GridItemPrice = styled.div `
    font-family: 'Plus Jakarta Sans';
    font-size: 13px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: -0.2800000011920929px;
    text-align: left;
    color: #FFFFFF;
    margin-top: 3px;
`
const View = styled.div `

`
const CardStyle = styled.div `
    height: 220px;
    min-width: 49%;
`
const BlockMargin = styled.div `
    margin-right: 10px !important;
    border-radius: 12px;
    height: 220px;
    padding: 32px;
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
const BlockGassIcon = styled.img `
    width: 40px;
    width: 40px;
`
const EditIcon = styled.img `
    width: 16px;
    width: 16px;
    margin-left: 8px;
    margin-top: 1px;
`
export default Cards;