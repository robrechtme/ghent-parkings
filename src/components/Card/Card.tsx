import cx from 'classnames';
import type { ReactNode } from 'react';
import styles from './Card.module.css';

type Props = {
  className?: string;
  children?: ReactNode;
};

const Card = ({ children, className }: Props) => <div className={cx(styles.card, className)}>{children}</div>;

const Content = ({ children, className }: Props) => (
  <div className={cx(styles.content, className)}>{children}</div>
);

const ContentHeader = ({ children, className }: Props) => (
  <h3 className={cx(styles.header, className)}>{children}</h3>
);

const Aside = ({ children, className }: Props) => (
  <div className={cx(styles.aside, className)}>{children}</div>
);

const Label = ({ children, className }: Props) => (
  <div className={cx(styles.label, className)}>{children}</div>
);

Card.Content = Content;
Card.ContentHeader = ContentHeader;
Card.Aside = Aside;
Card.Label = Label;

export default Card;
