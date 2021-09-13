import React, { CSSProperties } from 'react';

export type Props = {
  className?: string;
  children?: React.ReactNode;
} & FlexOptions;

export type FlexOptions = {
  align?: CSSProperties['alignItems'];
  justify?: CSSProperties['justifyContent'];
  wrap?: CSSProperties['flexWrap'];
  direction?: CSSProperties['flexDirection'];
  basis?: CSSProperties['flexBasis'];
  grow?: CSSProperties['flexGrow'];
  shrink?: CSSProperties['flexShrink'];
  flex?: CSSProperties['flex'];
};

const Flex: React.FC<Props> = ({
  className,
  children,
  align,
  justify,
  wrap,
  direction,
  basis,
  grow,
  shrink,
  flex,
}) => {
  const styles = {
    display: `flex`,
    flexDirection: direction,
    alignItems: align,
    justifyContent: justify,
    flexWrap: wrap,
    flexBasis: basis,
    flexGrow: grow,
    flexShrink: shrink,
    flex,
  };
  return (
    <div className={className} style={styles}>
      {children}
    </div>
  );
};

export default Flex;
