// returns the distance in degrees between two coordinates

type Coord = { y: number; x: number };

export function distance<T extends Coord, T1 extends Coord>(
  p1: T,
  p2: T1
): number {
  const dy = p1.y - p2.y;
  const dx = p1.x - p2.x;

  return Math.sqrt(dx * dx + dy * dy);
}

export function minElement<T>(
  elements: T[],
  getValue: (e: T) => number
): null | T {
  if (!elements.length) return null;

  let best = elements[0];
  let min = getValue(best);

  for (const e of elements) {
    const value = getValue(e);

    if (value < min) {
      min = value;
      best = e;
    }
  }

  return best;
}
