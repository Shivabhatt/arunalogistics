'use client';

import dynamic from 'next/dynamic';
import { LottieComponentProps } from 'lottie-react';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

interface LottieWrapperProps extends Omit<LottieComponentProps, 'animationData'> {
  animationData: object;
  className?: string;
}

export default function LottieWrapper({ animationData, className = '', ...props }: LottieWrapperProps) {
  return (
    <div className={className}>
      <Lottie animationData={animationData} loop={true} {...props} />
    </div>
  );
}
