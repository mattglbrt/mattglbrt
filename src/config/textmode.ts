export type TextmodeConfig = {
  columns: number;
  bodyWidth: number;
  textIndent: number;
  articleArtIndent: number;
  volumeArtIndent: number;
  volumeRightColumn: number;
  mobileFitBreakpoint: number;
};

export const textmodeConfig: TextmodeConfig = {
  columns: 90,
  bodyWidth: 49,
  textIndent: 4,
  articleArtIndent: 28,
  volumeArtIndent: 28,
  volumeRightColumn: 51,
  mobileFitBreakpoint: 760
};
