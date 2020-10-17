/**
 * Testing our PaginationLink component
 */

import { mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from 'bt-styled-provider/lib/BootstrapProvider';
import PaginationLink from '../PaginationLink';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => mount(
  <PaginationLink {...props}>
    {props.children}
  </PaginationLink>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <PaginationLink {...props}>
      {props.children}
    </PaginationLink>
  </BootstrapProvider>
);


describe('<PaginationLink />', () => {
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <PaginationLink> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('A').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render previous', () => {
    const wrapper = mount(<PaginationLink previous />);
    expect(wrapper.find('A').prop('aria-label')).toBe('Previous');
    expect(wrapper.find({ 'aria-hidden': 'true' }).text()).toBe('\u00ab');
    expect(wrapper.find('.sr-only').text()).toBe('Previous');
  });

  it('should render next', () => {
    const wrapper = mount(<PaginationLink next />);

    expect(wrapper.find('A').prop('aria-label')).toBe('Next');
    expect(wrapper.find({ 'aria-hidden': 'true' }).text()).toBe('\u00bb');
    expect(wrapper.find('.sr-only').text()).toBe('Next');
  });
  it('should render custom caret', () => {
    const wrapper = mount(<PaginationLink next>Yo</PaginationLink>);

    expect(wrapper.find({ 'aria-hidden': 'true' }).text()).toBe('Yo');
  });
});
