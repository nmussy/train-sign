export const isQuadrilingualName = (
  name: BilangualName | QuadrilingualName,
): name is QuadrilingualName => !!(name as QuadrilingualName).hangul;
