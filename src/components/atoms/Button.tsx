import React from 'react';
import styled from 'styled-components';
import { Theme } from 'types/common';

export const Button = styled.button`
  background: ${({ theme }: { theme: Theme }) => theme.primary};
  color: ${({ theme }: { theme: Theme }) => theme['base-100']};
  border-color: ${({ theme }: { theme: Theme }) => theme.primary};
`;
