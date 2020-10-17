/**
 * Testing our link component
 */
import React from 'react';
import { mount } from 'enzyme';
import BootstrapProvider from 'bt-styled-provider/lib/BootstrapProvider';
import A from '../index';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => mount(
  <A {...props}>
    {children}
  </A>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <A {...props}>
      {children}
    </A>
  </BootstrapProvider>
);

describe('<A />', () => {
  it('should render an <A> tag without a theme', () => {
    const renderedComponent = renderComponent({
      href: 'https://bootstrap-styled.kopaxgroup.com/',
      children,
      type: 'text/html',
      target: '_blank',
    });
    expect(renderedComponent.find('AUnstyled').length).toBe(1);
  });
  it('should have an href attribute without a theme', () => {
    const renderedComponent = renderComponent({
      href: 'https://bootstrap-styled.kopaxgroup.com/',
      children,
    });
    expect(renderedComponent.props().href).toEqual('https://bootstrap-styled.kopaxgroup.com/');
  });
  it('should adopt a target attribute without a theme', () => {
    const renderedComponent = renderComponent({
      target: '_blank',
      href: 'https://bootstrap-styled.kopaxgroup.com/',
      children,
    });
    expect(renderedComponent.props().target).toEqual('_blank');
  });
  it('should adopt a type attribute without a theme', () => {
    const renderedComponent = renderComponent({
      type: 'text/html',
      href: 'https://bootstrap-styled.kopaxgroup.com/',
      children,
    });
    expect(renderedComponent.props().type).toEqual('text/html');
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      target: '_blank',
      href: 'https://bootstrap-styled.kopaxgroup.com/',
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render an <a> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      target: '_blank',
      href: 'https://bootstrap-styled.kopaxgroup.com/',
      children,
    });
    expect(renderedComponent.find('a').length).toBe(1);
    expect(renderedComponent.find('A').length).toBe(1);
  });
  it('should render a href attribute of <A> with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      href: 'https://bootstrap-styled.kopaxgroup.com/',
      children,
      type: 'text/html',
      target: '_blank',
    });
    expect(renderedComponent.find('a').props().href).toEqual('https://bootstrap-styled.kopaxgroup.com/');
  });
  it('should render an type attribute of <A> with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      href: 'https://bootstrap-styled.kopaxgroup.com/',
      children,
      type: 'text/html',
      target: '_blank',
    });
    expect(renderedComponent.find('a').props().type).toEqual('text/html');
  });
  it('should render a target attribute of <A> with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      href: 'https://bootstrap-styled.kopaxgroup.com/',
      children,
      type: 'text/html',
      target: '_blank',
    });
    expect(renderedComponent.find('a').props().target).toEqual('_blank');
  });
  it('should have an attribute color', () => {
    const renderedComponent = renderComponentUsingTheme({
      href: 'https://bootstrap-styled.kopaxgroup.com/',
      children,
      color: 'white',
    });
    expect(renderedComponent.find('a').hasClass('text-white')).toBe(true);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      target: '_blank',
      href: 'https://bootstrap-styled.kopaxgroup.com/',
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('className should set a class', () => {
    const renderedComponent = renderComponentUsingTheme({
      className: 'btn',
      target: '_blank',
      href: 'https://bootstrap-styled.kopaxgroup.com/',
      children,
    });
    expect(renderedComponent.find('a').hasClass('btn')).toBe(true);
  });
  it('color should set a class', () => {
    const renderedComponent = renderComponentUsingTheme({
      className: 'btn',
      target: '_blank',
      href: 'https://bootstrap-styled.kopaxgroup.com/',
      children,
      color: 'primary',
    });
    expect(renderedComponent.find('a').hasClass('text-primary')).toBe(true);
  });
});
