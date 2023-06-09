import React, { useState, Fragment, useEffect, useContext, useRef } from 'react';
import styled from 'styled-components';
import { LoggedMobileheader } from 'components';
import { Link } from 'react-router-dom';
import ArrowLeftIcon from 'assets/media/arrow-right.svg';
import InfoCircleIcon from 'assets/media/info-circle.svg';
import CardsIcon from 'assets/media/cards.svg';

const MainScreen = ({history}) => {
    const [isLoading, setLoading] = useState(false);

    return (
       <ContainerBlock>
            <LoggedMobileheader/>
            <ProfileContainer>
                <MenuBlockContainer>
                    <BlockHeaderText>Account information</BlockHeaderText>
                    <MenuBlock onClick={() => history.push('/profile/personal-info')}>
                        <Block>
                            <BlockIcon src={InfoCircleIcon}/>
                            <BlockText>Personal Info</BlockText>
                        </Block>
                        <ArrowLeft src={ArrowLeftIcon}/>
                    </MenuBlock>
                    <MenuBlock onClick={() => history.push('/profile/cards')}>
                        <Block>
                            <BlockIcon src={CardsIcon}/>
                            <BlockText>Payment methods</BlockText>
                        </Block>
                        <ArrowLeft src={ArrowLeftIcon}/>
                    </MenuBlock>
                </MenuBlockContainer>
                <MenuBlockContainer>
                    <BlockHeaderText>Settings</BlockHeaderText>
                    <MenuBlock>
                        <Block>
                            <BlockText>English</BlockText>
                        </Block>
                        <ArrowLeft src={ArrowLeftIcon}/>
                    </MenuBlock>
                    <MenuBlock>
                        <Block>
                            
                            <BlockText>Log out</BlockText>
                        </Block>
                        <ArrowLeft src={ArrowLeftIcon}/>
                    </MenuBlock>
                </MenuBlockContainer>
            </ProfileContainer>
       </ContainerBlock>
    )
}
const MenuBlockContainer = styled.div `
    margin-top: 24px;
`
const BlockHeaderText = styled.div `
    margin-bottom: 16px;
    font-family: 'Plus Jakarta Sans';
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: -0.2800000011920929px;
    text-align: left;
    color: #000000;
`
const MenuBlock = styled.a `
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    padding: 13px;
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
    margin-right: 10px;
    width: 17px;
    height: 17px;
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
    font-size: 20px;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: -0.2800000011920929px;
    text-align: left;
    color: #000;
`
const ContainerBlock = styled.div `
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