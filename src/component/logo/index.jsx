import React from "react";
import styled from "styled-components";
import logo from "./image/logo.svg";
import Scrollchor from "react-scrollchor";


const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const LogoImg = styled.div`
    width: 125px;
    height: 45px;
    img
    {
        width: 100%;
        height: 100px auto;
    }
`;

const LogoText = styled.h2`
    font-size: 16px;
    margin: 0;
    margin-left: 4px;
    color: #222;
    font-weight: 500;
`;

export function Logo(prop)
{
    return (
    <LogoWrapper>
        <Scrollchor to="intro">
        <LogoImg>
            <img
              src={logo}
              alt="xin wang"
            />
        </LogoImg>
        </Scrollchor>
        <LogoText></LogoText>
    </LogoWrapper>
    )
}