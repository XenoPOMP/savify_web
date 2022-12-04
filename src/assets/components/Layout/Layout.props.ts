import { ChildrenProps } from '../../functions/ChildrenProps';

export type lProps = {
  useLayout: boolean,
};

export interface LayoutProps extends ChildrenProps {
  outerProps: lProps;
}
