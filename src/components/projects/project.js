import React from "react";
import styled from "styled-components";
import { tint } from "polished";
import { Link } from "react-static";

import Button from "../utils/button.js";

import Icon from "./icon";

const LinkButton = styled(Button)`
  right: 15px;
  top: 15px;
  position: absolute;
  transition: 200ms ease-out;
  transition-property: transform, opacity;
  opacity: 0;
  transform: translateX(-15px);
`;

const Arrow = styled(Link)`
  opacity: var(--faded);
  color: var(--link);
  display: inline-block;
  transition-property: transform;
  transition: 200ms ease-out;
  transform: translateX(0);
`;

const Project = styled(Link)`
  min-height: ${p => (p.featured ? "320px" : "120px")};
  min-width: 160px;
  @media (max-width: 600px) {
    ${p =>
      p.featured &&
      `
      min-height: 250px;
      min-width: 300px;
    `};
  }
  margin: 0 10px 10px 0;
  flex: ${p => p.flex || 1};
  order: ${p => -(p.flex || 0)};
  box-shadow: inset 0 0 0 1px var(--outline);
  border-radius: 6px;
  position: relative;
  overflow: hidden;
  opacity: 1;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  &:hover {
    opacity: 1;
    background: rgb(250, 250, 250);
  }
  a {
    &:hover ${Arrow}, &:active ${Arrow} {
      transform: translateX(3px);
    }
  }
`;

const Title = styled.span`
  font-weight: 600;
  line-height: 2rem;
  font-size: 1rem;
`;

const ImageWrapper = styled.div`
  flex: 3;
  display: flex;
  position: relative;
  background-color: white;
  border-radius: 6px 6px 0 0;
  background: ${p => (p.color ? tint(0.05, p.color) : "#FFF")};
  box-shadow: inset 0 0 0 1px
    ${p => (p.color ? tint(0.1, p.color) : "var(--outline)")};
  justify-content: center;
  align-items: center;
  opacity: 1;
  &:hover ${LinkButton}, &:active ${LinkButton} {
    opacity: 1;
    transform: translateX(0);
  }
  &:hover {
    opacity: 1;
  }
  @media print {
    box-shadow: inset 0 0 0 1px var(--outline);
  }
`;

const Wrapper = styled.div`
  padding: 10px;
`;

const DescWrapper = styled(Wrapper)`
  ${p => p.featured && "flex: 1.2"};
`;
const Desc = styled.div`
  color: rgb(10, 10, 10);
  opacity: var(--faded);
  font-size: 0.9rem;
`;

const Iconbar = styled.div`
  background: rgba(0, 0, 0, 0);
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default props => (
  <Project flex={props.flex} featured={props.featured} to={`/${props.slug}/`}>
    {props.image && (
      <ImageWrapper color={props.color}>
        <img src={props.image} alt={props.title} />
        {props.featured ? (
          <LinkButton
            className="mobile-hidden"
            color={props.color}
            to={`/${props.slug}/`}
          >
            Read →
          </LinkButton>
        ) : (
          <span />
        )}
      </ImageWrapper>
    )}
    <DescWrapper featured={props.featured}>
      <Link scrollToTop={true} to={`/${props.slug}/`}>
        <Title color={props.color}>{props.title}</Title>{" "}
        <Arrow className={props.featured && "desktop-hidden"}>→</Arrow>
      </Link>
      <Desc>{props.desc}</Desc>
    </DescWrapper>
    <Wrapper>
      <Footer>
        <Iconbar>
          {props.types.map(type => (
            <Icon key={type} type={type} />
          ))}
        </Iconbar>
      </Footer>
    </Wrapper>
  </Project>
);
