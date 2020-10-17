/**
 * Testing our Row component
 */
import { mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from 'bt-styled-provider/lib/BootstrapProvider';

import Row from '../index';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => mount(
  <Row {...props} />
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <Row {...props} />
  </BootstrapProvider>
);


describe('<Row />', () => {
  it('should render an <Row> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('RowUnstyled').length).toBe(1);
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
    expect(renderedComponent.find('div').length).toBe(2);
    expect(renderedComponent.find('Row').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should have props noGutters with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      noGutters: true,
    });
    expect(renderedComponent.find('div').at(1).hasClass('no-gutters')).toBe(true);
  });
});
