import React, { useState, Fragment, useEffect, useContext, useRef } from 'react';
import styled from 'styled-components';
import { LoggedMobileheader } from 'components';
import { Link } from 'react-router-dom';
import VisaSvgIcon from 'assets/media/visa.svg';
import MastercardSvgIcon from 'assets/media/mastercard.svg';
import DotsIcon from 'assets/media/dots.svg';

const CardsScreen = ({history}) => {
    const [isLoading, setLoading] = useState(false);

    return (
       <ContainerBlock>
            <LoggedMobileheader backButton/>
            <ProfileContainer>
                <View>
                    Payment methods
                </View>
                <MenuBlockContainer>
                    <MenuBlock>
                        <Block>
                            <BlockIcon src={VisaSvgIcon}/>
                            <BlockText>**** **** **** 6755</BlockText>
                        </Block>
                        <ArrowLeft src={DotsIcon}/>
                    </MenuBlock>
                    <MenuBlock>
                        <Block>
                            <BlockIcon src={MastercardSvgIcon}/>
                            <BlockText>**** **** **** 6672</BlockText>
                        </Block>
                        <ArrowLeft src={DotsIcon}/>
                    </MenuBlock>
                </MenuBlockContainer>
            </ProfileContainer>
       </ContainerBlock>
    )
}
const MenuBlockContainer = styled.div `
    margin-top: 24px;
`
const MenuBlock = styled.a `
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    padding: 8px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #000000;
    margin-bottom: 10px;
    &:hover {
        color: #000000;
        text-decoration: none;
    }
`
const Block = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`
const BlockIcon = styled.img `
    margin-right: 20px;
    width: 28px;
    height: 33px;
`
const BlockText = styled.div `
    font-family: 'Plus Jakarta Sans';
    font-size: 13px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -0.2800000011920929px;
    text-align: left;
    color: #000;
`
const ArrowLeft = styled.img `
    vertical-align: middle;
`
const ProfileContainer = styled.div `
    margin: 20px 16px 0px 16px;
`
const View = styled.div `
    font-family: 'Plus Jakarta Sans';
    font-size: 16px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: -0.2800000011920929px;
    text-align: left;
    color: #000;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
`
const ContainerBlock = styled.div `
    height: 100vh;
`
export default CardsScreen;