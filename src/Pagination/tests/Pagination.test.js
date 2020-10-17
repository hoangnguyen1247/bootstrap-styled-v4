/**
 * Testing our Pagination component
 */

import { mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from 'bt-styled-provider/lib/BootstrapProvider';
import Pagination from '../index';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => mount(
  <Pagination
    className={props.className}
  >
    {props.children}
  </Pagination>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <Pagination
      className={props.className}
    >
      {props.children}
    </Pagination>
  </BootstrapProvider>
);


describe('<Pagination />', () => {
  it('should render an <Pagination> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('PaginationUnstyled').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <Pagination> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('Pagination').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
