import React from 'react';
import styled from '@emotion/styled';

export type BreadcrumbsListProps = React.HTMLAttributes<HTMLOListElement>;

const StyledBreadcrumbsList = styled('ol')<BreadcrumbsListProps>({
  display: 'inline-flex',
  alignItems: 'center',
  listStyle: 'none',
  padding: 0,
  margin: 0,
});

export const BreadcrumbsList = React.forwardRef(
  (props: BreadcrumbsListProps, ref: React.RefObject<HTMLOListElement>) => {
    return <StyledBreadcrumbsList role="list" ref={ref} {...props} />;
  }
);
