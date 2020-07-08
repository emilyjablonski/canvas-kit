import React from 'react';
import styled from '@emotion/styled';
import {type} from '@workday/canvas-kit-react-core';

export type CurrentCrumbProps = React.HTMLAttributes<HTMLLIElement>;

export const CurrentCrumb = styled('li')<CurrentCrumbProps>({
  ...type.body,
  fontWeight: 'bold',
});
