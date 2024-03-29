import { SyntheticEvent } from 'react';
import { BaseComponent } from '../../../types/baseComponent';
import { placement } from '../../../types/placement';
interface TooltipProps extends BaseComponent {
    disableMouseDown?: boolean;
    options?: Record<string, unknown>;
    placement?: placement;
    tag?: React.ComponentProps<any>;
    tooltipTag?: React.ComponentProps<any>;
    title?: React.ReactNode;
    wrapperProps?: Record<string, unknown>;
    wrapperClass?: string;
    onOpen?: (e: SyntheticEvent) => any;
    onClose?: (e: SyntheticEvent) => any;
    onMouseEnter?: (e: SyntheticEvent) => any;
    onMouseLeave?: (e: SyntheticEvent) => any;
}
export type { TooltipProps };
