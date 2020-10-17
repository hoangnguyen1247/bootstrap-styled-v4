/**
 * Testing our Textarea component
 */

import { mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from 'bt-styled-provider/lib/BootstrapProvider';

import Textarea from '../index';

const renderComponent = (props = {}) => mount(
  <Textarea {...props} />
);

const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <Textarea {...props} />
  </BootstrapProvider>
);

describe('<Textarea />', () => {
  let onChange;

  beforeEach(() => {
    onChange = jest.fn();
  });

  it('should render an <Textarea> tag without a theme', () => {
    const renderedComponent = renderComponent({
      value: 'Insert text here',
      wrap: 'wrapString',
      onChange,
    });
    expect(renderedComponent.find('textarea').length).toBe(1);
  });

  it('should have a value attribute without a theme', () => {
    const renderedComponent = renderComponent({
      value: 'Insert text here',
      wrap: 'wrapString',
      onChange,
    });
    expect(renderedComponent.props().value).toEqual('Insert text here');
  });

  it('should adopt a wrap attribute without a theme', () => {
    const renderedComponent = renderComponent({
      value: 'Insert text here',
      wrap: 'wrapString',
      onChange,
    });
    expect(renderedComponent.props().wrap).toEqual('wrapString');
  });
  it('should render one <Textarea> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      value: 'Insert text here',
      wrap: 'wrapString',
      onChange,
    });
    expect(renderedComponent.find('textarea').length).toBe(1);
  });
  it('should render a value attribute of <Textarea> with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      value: 'Insert text here',
      wrap: 'wrapString',
      onChange,
    });
    expect(renderedComponent.find('textarea').props().value).toEqual('Insert text here');
  });
  it('should render an wrap attribute of <Textarea> with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      value: 'Insert text here',
      wrap: 'wrapString',
      onChange,
    });
    expect(renderedComponent.find('textarea').props().wrap).toEqual('wrapString');
  });
  it('should have content with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      value: 'Insert text here',
      onChange,
    });
    expect(renderedComponent.text()).toEqual('Insert text here');
  });
});
