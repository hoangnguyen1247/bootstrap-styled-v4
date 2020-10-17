/**
 * Testing our H2 component
 */
import { mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from 'bt-styled-provider/lib/BootstrapProvider';
import H2 from '../index';

const children = <p>Test</p>;

const renderComponent = (props = {}) => mount(
  <H2 {...props}>
    {props.children}
  </H2>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <H2 {...props}>

      {props.children}
    </H2>
  </BootstrapProvider>
);


describe('<H2 />', () => {
  it('should render an <H2> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('H2Unstyled').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <H2> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('H2').length).toBe(1);
  });
  it('should have an attribute color', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      color: 'success',
    });
    expect(renderedComponent.find('H2').props().color).toBe('success');
  });
  it('should have a classname lead', () => {
    const renderedComponent = renderComponentUsingTheme({
      lead: true,
    });
    expect(renderedComponent.find('h2').hasClass('lead'));
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
