import React from 'react';
import { DeviceDimenstions } from '../../../shared/constants';
import ContentLoader, { Rect, Circle, Path } from 'react-content-loader/native';
import { Theme } from '../../../shared/theme';

const TransactionsSkeleton = props => {
  const theme: Theme = props.theme;

  return (
    <ContentLoader
      uniqueKey="TransactionsSkeleton"
      speed={0.8}
      width={DeviceDimenstions.width - 48}
      height={DeviceDimenstions.height / 12}
      backgroundColor={theme.color.lightGray}
      foregroundColor={theme.color.darkGrey}>
      <Rect x="60" y="5" rx="12" ry="12" width="130" height="20" />
      <Rect x="60" y="35" rx="12" ry="12" width="100" height="14" />
      <Circle cx="26" cy="26" r="25" />
      <Rect x="242" y="13" rx="12" ry="12" width="100" height="30" />
    </ContentLoader>
  );
};

export default TransactionsSkeleton;
