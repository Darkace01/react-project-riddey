import * as React from 'react';
import { progressBarFillStyles, progressBarStyles } from './progress.css';

interface Props {
  board: number;
  maxBoard: number;
}
const ProgressBar = ({ board, maxBoard }: Props) => {
  const fillWidth = `${(board / maxBoard) * 100}%`;
  return (
    <div className={progressBarStyles}>
      <div className={progressBarFillStyles} style={{ width: fillWidth }} />
    </div>
  );
};

export default ProgressBar;
