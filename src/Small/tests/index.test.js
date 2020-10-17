/**
 * Testing our Small component
 */
import { mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from 'bt-styled-provider/lib/BootstrapProvider';

import Small from '../index';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => mount(
  <Small {...props}>
    {props.children}
  </Small>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <Small {...props}>
      {props.children}
    </Small>
  </BootstrapProvider>
);


describe('<Small />', () => {
  it('should render an <Small> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('SmallUnstyled').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <small> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('small').length).toBe(1);
    expect(renderedComponent.find('Small').length).toBe(1);
  });
  it('should have a class text-info with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      color: 'info',
    });
    expect(renderedComponent.find('small').hasClass('text-info')).toBe(true);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
