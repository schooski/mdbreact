import React from 'react';
import clsx from 'clsx';
import type { CardSubTitleProps } from './types';

const MDBCardSubTitle: React.FC<CardSubTitleProps> = React.forwardRef<HTMLAllCollection, CardSubTitleProps>(
  ({ className, children, tag: Tag = 'p', ...props }, ref) => {
    const classes = clsx('card-subtitle', className);

    return (
      <Tag className={classes} {...props} ref={ref}>
        {children}
      </Tag>
    );
  }
);

MDBCardSubTitle.displayName = 'MDBCardSubTitle';
export default MDBCardSubTitle;
