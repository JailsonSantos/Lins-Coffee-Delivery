import { ReactNode } from 'react';

import { AreaInfoItem } from './styles';

interface InfoItemProps {
  icon: string;
  title: string;
}

export function InfoItem({ icon, title }: InfoItemProps) {
  return (
    <AreaInfoItem>
      <img src={`${icon}`} />
      <span>{title}</span>
    </AreaInfoItem>
  )
}