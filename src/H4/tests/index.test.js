/**
 * Testing our H4 component
 */
import { mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from 'bt-styled-provider/lib/BootstrapProvider';
import H4 from '../index';

const children = <p>Test</p>;

const renderComponent = (props = {}) => mount(
  <H4 {...props}>
    {props.children}
  </H4>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <H4 {...props}>

      {props.children}
    </H4>
  </BootstrapProvider>
);


describe('<H4 />', () => {
  it('should render an <H4> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('H4Unstyled').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <H4> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('H4').length).toBe(1);
  });
  it('should have an attribute color', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      color: 'primary',
    });
    expect(renderedComponent.find('H4').props().color).toBe('primary');
  });
  it('should have a classname lead', () => {
    const renderedComponent = renderComponentUsingTheme({
      lead: true,
    });
    expect(renderedComponent.find('h4').hasClass('lead'));
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
