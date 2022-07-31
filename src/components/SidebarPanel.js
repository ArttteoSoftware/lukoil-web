
import React, { useState, Fragment, useEffect, useContext, useRef, Children } from 'react';
import styled from 'styled-components';

const SidebarPanel = ({children}) => {

    return (
        <LLSitebar>
            <View>
                <LLSideBarContainer>
                    <Sidebar>
                        <RightPanel style={{width: 406}}>
                            <RightPanelScroll>
                                <RightPanelContent>
                                    {children}
                                </RightPanelContent>
                            </RightPanelScroll>
                        </RightPanel>
                    </Sidebar>
                </LLSideBarContainer>
            </View>
        </LLSitebar>
    )
}
const View = styled.div `
`
const LLSitebar = styled.div `
    display: flex;
    height: calc(100vh - 56px);
    -webkit-box-pack: end;
    justify-content: flex-end;
    position: sticky;
    top: 0px;
`
const LLSideBarContainer = styled.div `
    display: flex;
    height: 100vh;
    position: sticky;
    -webkit-box-pack: end;
    justify-content: flex-end;
`
const Sidebar = styled.div `
    overflow: hidden;
    width: 100%;
`
const RightPanel = styled.div `
    display: flex;
    min-width: 64px;
    height: 100%;
    width: 100%;
    background-color: #F2F2F2;
    transition: all 0.2s ease-out 0s;
    outline: none;
`
const RightPanelScroll = styled.div `
    margin-right: -17px;
    overflow-y: scroll;
    padding-right: 17px;
`
const RightPanelContent = styled.div `
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 32px 32px;
    width: 406px;

`
export default SidebarPanel;