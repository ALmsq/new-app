import React from 'react';
import { StyledMenu } from './Menu.styled';
import { bool } from 'prop-types'

const Menu = ({open}) => {
  return (
    <StyledMenu open={open}>
      <a href="/">
        <span role="img" aria-label="about us">&#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;</span>
        this
      </a>
      <a href="/">
        <span role="img" aria-label="price">&#x1f4b8;</span>
        that
      </a>
      <a href="/">
        <span role="img" aria-label="contact">&#x1f4e9;</span>
        and the third
        </a>
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired
}
export default Menu;
