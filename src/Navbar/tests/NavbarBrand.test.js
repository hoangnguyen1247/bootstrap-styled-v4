/**
 * Testing our NavbarBrand component
 */
import { mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from 'bt-styled-provider/lib/BootstrapProvider';
import NavbarBrand from '../NavbarBrand';

const children = (<span>Test</span>);

const renderComponent = (props = {}) => mount(
  <NavbarBrand
    className={props.className}
  >
    {props.children}
  </NavbarBrand>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <NavbarBrand
      className={props.className}
    >
      {props.children}
    </NavbarBrand>
  </BootstrapProvider>
);


describe('<NavbarBrand />', () => {
  it('should render an <NavbarBrand> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('a').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <NavbarBrand> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('NavbarBrand').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
