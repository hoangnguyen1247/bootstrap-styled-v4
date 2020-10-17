/**
 * Testing our PaginationItem component
 */

import { mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from 'bt-styled-provider/lib/BootstrapProvider';
import PaginationItem from '../PaginationItem';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => mount(
  <PaginationItem
    className={props.className}
  >
    {props.children}
  </PaginationItem>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <PaginationItem
      className={props.className}
    >
      {props.children}
    </PaginationItem>
  </BootstrapProvider>
);


describe('<PaginationItem />', () => {
  it('should render an <PaginationItem> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('li').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <PaginationItem> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('PaginationItem').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
