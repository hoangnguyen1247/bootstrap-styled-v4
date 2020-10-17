/**
 * Testing our InputGroup component
 */
import { mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from 'bt-styled-provider/lib/BootstrapProvider';
import InputGroup from '../index';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => mount(
  <InputGroup {...props}>
    {props.children}
  </InputGroup>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <InputGroup {...props}>
      {props.children}
    </InputGroup>
  </BootstrapProvider>
);


describe('<InputGroup />', () => {
  it('should render an <InputGroup> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('InputGroupUnstyled').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <div> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('InputGroup').length).toBe(1);
  });
  it('should have a class input-group-size-lg with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      size: 'lg',
    });
    expect(renderedComponent.find('InputGroup').hasClass('input-group-size-lg'));
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
