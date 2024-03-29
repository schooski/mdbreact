import React from 'react';
import clsx from 'clsx';
import type { CardProps } from './types';

const MDBCard: React.FC<CardProps> = React.forwardRef<HTMLAllCollection, CardProps>(
  ({ className, children, border, background, tag: Tag = 'div', shadow, alignment, ...props }, ref) => {
    const classes = clsx(
      'card',
      border && `border border-${border}`,
      background && `bg-${background}`,
      shadow && `shadow-${shadow}`,
      alignment && `text-${alignment}`,
      className
    );

    return (
      <Tag className={classes} ref={ref} {...props}>
        {children}
      </Tag>
    );
  }
);

MDBCard.displayName = 'MDBCard';
export default MDBCard;
