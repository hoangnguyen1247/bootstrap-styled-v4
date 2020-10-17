/**
 * Testing our ListGroup component
 */

import { mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from 'bt-styled-provider/lib/BootstrapProvider';
import ListGroup from '../index';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => mount(
  <ListGroup {...props}>
    {props.children}
  </ListGroup>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <ListGroup {...props}>
      {props.children}
    </ListGroup>
  </BootstrapProvider>
);


describe('<ListGroup />', () => {
  it('should render an <ListGroup> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('ListGroupUnstyled').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <ul> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('ul').length).toBe(1);
    expect(renderedComponent.find('ListGroup').length).toBe(1);
  });
  it('should have class .caption by default with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('ul').hasClass('list-group')).toBe(true);
  });
  it('should have a class list-group-flush with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      flush: true,
    });
    expect(renderedComponent.find('ul').hasClass('list-group-flush')).toBe(true);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
