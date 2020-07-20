import React from 'react';
import cx from 'classnames';
import styles from './Card.module.css';

type Props = {
  className?: string;
};

type Subcomponents = {
  Content: React.FC<Props>;
  ContentHeader: React.FC<Props>;
  Aside: React.FC<Props>;
  Label: React.FC<Props>;
};

const Card: React.FC<Props> & Subcomponents = ({ children, className }) => (
  <div className={cx(styles.card, className)}>{children}</div>
);

const Content: React.FC<Props> = ({ children, className }) => (
  <div className={cx(styles.content, className)}>{children}</div>
);

const ContentHeader: React.FC<Props> = ({ children, className }) => (
  <h3 className={cx(styles.header, className)}>{children}</h3>
);

const Aside: React.FC<Props> = ({ children, className }) => (
  <div className={cx(styles.aside, className)}>{children}</div>
);

const Label: React.FC<Props> = ({ children, className }) => (
  <div className={cx(styles.label, className)}>{children}</div>
);

Card.Content = Content;
Card.ContentHeader = ContentHeader;
Card.Aside = Aside;
Card.Label = Label;

export default Card;
