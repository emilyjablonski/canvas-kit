import React from 'react';

export type BreadcrumbsNavProps = React.HTMLAttributes<HTMLElement>;

export const BreadcrumbsNav = (props: BreadcrumbsNavProps) => (
  <nav role="navigation" aria-label="breadcrumbs" {...props} />
);
