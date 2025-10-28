import React from 'react';

interface ProgressBarProps {
  percentage: number;
  color?: string;
  backgroundColor?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  percentage,
  color = 'bg-accent-signal',
  backgroundColor = 'bg-neutral-200',
}) => {
  const clampedPercentage = Math.max(0, Math.min(100, percentage));

  return (
    <div className={`w-full ${backgroundColor} rounded-full h-1.5 overflow-hidden`}>
      <div
        className={`${color} h-1.5 rounded-full transition-all duration-500 ease-out`}
        style={{ width: `${clampedPercentage}%` }}
        role="progressbar"
        aria-valuenow={clampedPercentage}
        aria-valuemin={0}
        aria-valuemax={100}
      ></div>
    </div>
  );
};

export default ProgressBar;
