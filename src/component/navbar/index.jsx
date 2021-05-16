import React from "react";
import styled from "styled-components";
import { Logo } from "../logo";
import { MobileLogo } from "../logo/mobileLogo";
import { NavLinks } from "./navLinks";
import { MobileNavLinks } from "./mobileNavLinks";
import { useMediaQuery } from "react-responsive";
import { DeviceSize } from "../responsive";

const NavbarContainer = styled.div`
    width: 100%;
    height: 60px;
    box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
    display: flex;
    align-items: center;
    padding: 0 1.5em;
    position: sticky;
    top: 0;
    background-color: #fff;
    z-index: 9999;
`;

const LeftSection = styled.div`
    // margin-left: 250px;    
    display: flex;
`;

const MiddleSection = styled.div`
    display: flex;
    flex: 2;
    height: 100%;
    justify-content: center;
`;

const RightSection = styled.div`
    display: flex;
    height: 100%;
`;

export function Navbar(props)
{
    const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
    return <NavbarContainer>
        <LeftSection>
            {!isMobile && <Logo />}
            {isMobile && <MobileLogo />}
        </LeftSection>
        <MiddleSection>
        </MiddleSection>
        <RightSection>
            {!isMobile && <NavLinks />}
            {isMobile && <MobileNavLinks />}
        </RightSection>
    </NavbarContainer>
}