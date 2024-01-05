import React, { useState, useRef, useEffect } from 'react';
import { usePopper } from 'react-popper';
import { detectOverflow } from '@popperjs/core';

import ReactDOM from 'react-dom';
import styled from 'styled-components';

const MenuWrap = styled.div`
  background: var(--background-tertiary-color);
  border: 1px solid var(--separator-color);;
  padding: 5px;
  border-radius: 10px;
  min-width: 160px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
  z-index: 9996;
  max-height: 400px;
  overflow-y: auto;
`

const MenuItemWrap = styled.button`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 6px 10px;
  border-radius: 5px;
  background: transparent;
  border: 0;
  color: inherit;
  cursor: pointer;
  text-align: left;
  &:hover {
    background: var(--fill-gray-quaternary);
  }
  &:active {
    background: var(--fill-gray-tertiary);
  }
  svg {
    width: 16px;
    height: 16px;
  }
`

const MenuDivider = styled.hr`
  margin: 5px;
  border: 0;
  border-top: 1px solid var(--separator-color);;
  border-left: 1px solid var(--separator-color);;
`

const Menu = ({ trigger, children, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [triggerEl, setTriggerEl] = useState(null);
  const [popperEl, setPopperEl] = useState(null);

  const { styles, attributes } = usePopper(triggerEl, popperEl, {
    placement: 'bottom-end',
    strategy: 'fixed',
    modifiers: [
    {
      name: 'offset',
      options: {
        offset: [0, 5],
      },
    },
  ],
  });

  const menuTrigger = trigger();

  const TriggerComponent = React.cloneElement(menuTrigger, {
    ref: setTriggerEl,
    onClick: () => setIsOpen(true),
    style: {
      ...menuTrigger.props.style,
      ...(isOpen ? { pointerEvents: 'none' } : {})
    }
  });

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popperEl && !popperEl.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [popperEl]);

  const clonedChildren = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { onCloseMenu: () => setIsOpen(false) });
    }
    return child;
  });

  const menu = (
    <MenuWrap ref={setPopperEl} style={styles.popper} {...attributes.popper} {...props}>
      {clonedChildren}
    </MenuWrap>
  )

  return (
    <>
      {TriggerComponent}
      {isOpen ? (
        ReactDOM.createPortal(menu, document.body)
      ) : null}
    </>
  )
}

// MenuItem Component
const MenuItem = ({ icon: Icon, onClick, children, onCloseMenu }) => (
  <MenuItemWrap onClick={(e) => {
    onClick?.(e);
    onCloseMenu();
  }}>
    {Icon && <Icon />}
    {children}
  </MenuItemWrap>
);

export { Menu, MenuItem, MenuDivider };
