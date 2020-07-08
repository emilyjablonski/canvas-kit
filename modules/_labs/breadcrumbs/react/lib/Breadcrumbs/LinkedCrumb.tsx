import React from 'react';
import styled from '@emotion/styled';
import {type} from '@workday/canvas-kit-react-core';
import {TooltipContainer} from '@workday/canvas-kit-react-tooltip';
import {Popper} from '@workday/canvas-kit-react-popup';

// maximum width before truncating
const MAX_WIDTH = 350;

export interface LinkedCrumbProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  maxWidth?: number | string;
}

export const StyledLinkedCrumb = styled('a')<LinkedCrumbProps>(
  {
    display: 'inline-block',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    ...type.body,
    ...type.variant.link,
  },
  ({maxWidth}) => ({
    maxWidth,
  })
);

export const LinkedCrumb = ({maxWidth = MAX_WIDTH, children, ...props}: LinkedCrumbProps) => {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLAnchorElement>(null);

  const openTooltip = (event: React.SyntheticEvent<HTMLElement>) => {
    const link = event.currentTarget;
    // if the link text is truncated, show the tooltip
    if (link.scrollWidth > link.clientWidth) {
      setOpen(true);
    }
  };

  const closeTooltip = () => {
    setOpen(false);
  };

  return (
    <>
      <StyledLinkedCrumb
        ref={ref}
        maxWidth={maxWidth}
        onMouseEnter={openTooltip}
        onMouseLeave={closeTooltip}
        onFocus={openTooltip}
        onBlur={closeTooltip}
        {...props}
      >
        {children}
      </StyledLinkedCrumb>
      <Popper open={open} anchorElement={ref} placement="top">
        <TooltipContainer>{children}</TooltipContainer>
      </Popper>
    </>
  );
};
