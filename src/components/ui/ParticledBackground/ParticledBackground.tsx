import { useRef } from 'react';
import { StyledContainer, StyledCanvas } from './ParticledBackground.styles';
import { useBackgroundProcessing } from './useBackgroundProcessing';

export const ParticledBackgroundNodes = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  useBackgroundProcessing(canvasRef, containerRef);

  return (
    <StyledContainer ref={containerRef}>
      <StyledCanvas ref={canvasRef} />
    </StyledContainer>
  );
};
