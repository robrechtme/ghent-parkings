import React from 'react';
import cx from 'classnames';
import styles from './Card.module.css';

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

type CardSubcomponents = {
  Content: React.FC<CardProps>;
  ContentHeader: React.FC<CardProps>;
  Aside: React.FC<CardProps>;
  Label: React.FC<CardProps>;
};

const Card: React.FC<CardProps> & CardSubcomponents = ({ children, className }: CardProps): React.ReactElement => (
  <div className={cx(styles.card, className)}>{children}</div>
);

const Content = ({ children, className }: CardProps) => <div className={cx(styles.content, className)}>{children}</div>;

const ContentHeader = ({ children, className }: CardProps) => (
  <h3 className={cx(styles.header, className)}>{children}</h3>
);

const Aside = ({ children, className }: CardProps) => <div className={cx(styles.aside, className)}>{children}</div>;

const Label = ({ children, className }: CardProps) => <div className={cx(styles.label, className)}>{children}</div>;

Card.Content = Content;
Card.ContentHeader = ContentHeader;
Card.Aside = Aside;
Card.Label = Label;

export default Card;
