import React, { useState } from "react";
import styled from "styled-components";
import Scrollchor from "react-scrollchor";
import { MenuToggle } from "./menuToggle";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
  background-color: #fff;
  width: 100%;
  flex-direction: column;
  position: fixed;
  top: 65px;
  left: 0;
`;

const LinkItem = styled.li`
  width: 100%;
  padding: 0 1.1em;
  color: #222;
  font-weight: 1000;
  font-size: 16px;
  font-family: Lotion;
  display: flex;
  margin-bottom: 10px;
`;

const Marginer = styled.div`
  height: 2em;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`;

export function MobileNavLinks(props) {
    const [isOpen, setOpen] = useState(false);
  return (
    <NavLinksContainer>
         <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
         {isOpen && (
      <LinksWrapper>
        <LinkItem>
          <Scrollchor to="#about" style={{ color: '#000' }}>about me</Scrollchor>
        </LinkItem>
        <LinkItem>
          <Scrollchor to="#projects" style={{ color: '#000' }}>personal projects</Scrollchor>
        </LinkItem>
        <LinkItem>
         <a rel="noopener" href="https://docs.google.com/document/d/1HOYeD80rtpC4gh9snpv8D2WQO3I6cw504W4nwCqYXKI/" target="_blank" style={{ color: '#000' }}>resume</a>
        </LinkItem>
        <LinkItem>
          <Scrollchor to="#contacts" style={{ color: '#000' }}>let's connect</Scrollchor>
        </LinkItem>
      </LinksWrapper>
      )}
    </NavLinksContainer>
  );
}