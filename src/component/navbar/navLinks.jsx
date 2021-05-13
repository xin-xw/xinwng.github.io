import React, { Component } from "react";
import styled from "styled-components";
import Scrollchor from "react-scrollchor";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  style: sticky;
  padding-right: 230px;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
`;

const LinkItem = styled.li`
  height: 100%;
  padding: 0 1.2em;
  color: black;
  font-weight: 1000;
  font-size: 1.02em;
  font-family: Circular;
  align-items: center;
  justify-content: center;
  display: flex;
  border-top: 2px solid transparent;
  transition: all 250ms ease-in-out;

  &:hover {
    border-top: 2px solid;
    }
`;

const Link = styled.a`
  text-decoration: none;
  color: black;
  font-size: inherit;
`;

export function NavLinks(props) {
  return (
    <NavLinksContainer>
      <LinksWrapper>
        <LinkItem>
          <Scrollchor to="#about" style={{ color: '#000' }}>about me</Scrollchor>
        </LinkItem>
        <LinkItem>
          <Scrollchor to="#projects" style={{ color: '#000' }}>featured works</Scrollchor>
        </LinkItem>
        <LinkItem>
         <a rel="noopener" href="https://docs.google.com/document/d/1HOYeD80rtpC4gh9snpv8D2WQO3I6cw504W4nwCqYXKI/" target="_blank" style={{ color: '#000' }}>resume</a>
        </LinkItem>
        <LinkItem>
          <Scrollchor to="#contacts" style={{ color: '#000' }}>let's connect</Scrollchor>
        </LinkItem>
      </LinksWrapper>
    </NavLinksContainer>
  );
}