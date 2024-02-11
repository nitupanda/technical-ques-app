import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import SidebarOptions from '../components/sidebarOptions'


test('renders SidebarOptions component', () => {
  const onTypeSelect = jest.fn();
  render(<SidebarOptions onTypeSelect={onTypeSelect} />);
  const buttonHTML = screen.getByText('CSS');
  
  fireEvent.click(buttonHTML);
  expect(onTypeSelect).toHaveBeenCalledWith('CSS');
});