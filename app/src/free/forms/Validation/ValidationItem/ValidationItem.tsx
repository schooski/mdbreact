'use client';

import React, { useEffect, useRef, useState } from 'react';
import type { ValidationItemProps } from './types';
import { createPortal } from 'react-dom';
import clsx from 'clsx';

const MDBValidationItem: React.FC<ValidationItemProps> = ({
  children,
  invalid,
  feedback = 'Looks good!',
  tooltip,
  tag: Tag = 'div',
  ...props
}) => {
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);
  const itemRef = useRef<HTMLDivElement>(null);

  const itemClasses = clsx(
    invalid ? `invalid-${tooltip ? `tooltip` : `feedback`}` : `valid-${tooltip ? `tooltip` : `feedback`}`
  );

  useEffect(() => {
    const inputWrapper = itemRef.current?.querySelector('input, textarea')?.parentElement;

    inputWrapper && setPortalElement(inputWrapper);
  }, []);

  return (
    <Tag ref={itemRef} {...props}>
      {portalElement && createPortal(<div className={itemClasses}>{feedback}</div>, portalElement)}
      {children}
    </Tag>
  );
};

export default MDBValidationItem;
