/**
 * Testing our NavDropdown component
 */
import { mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from 'bt-styled-provider/lib/BootstrapProvider';
import NavDropdown from '../NavDropdown';

const children = (<span>Test</span>);

const renderComponent = (props = {}) => mount(
  <NavDropdown
    {...props}
  />
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <NavDropdown
      {...props}
    />
  </BootstrapProvider>
);


describe('<NavDropdown />', () => {
  it('should render an <NavDropdown> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
      toggle: jest.fn(),
      isOpen: false,
    });
    expect(renderedComponent.find('span').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
      toggle: jest.fn(),
      isOpen: false,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <NavDropdown> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      toggle: jest.fn(),
      isOpen: false,
    });
    expect(renderedComponent.find('NavDropdown').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponent({
      children,
      toggle: jest.fn(),
      isOpen: false,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
