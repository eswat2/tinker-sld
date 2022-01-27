interface StoreDef {
  count: number;
  pick: string;
  values: number[];
}

interface ActionsDef {
  refresh: () => void;
  reset: () => void;
  updatePick: (pick: string) => void;
}

interface BarObj {
  id: number;
  height: number;
  width: number;
  x: number;
  y: number;
  maskId: string;
  maskUri: string;
  mask: string;
  matrix: string;
  points: string;
}

interface FunnelObj {
  id: number;
  height: number;
  width: number;
  x: number;
  y: number;
  drop: number;
}

interface ColorDict {
  [index: string]: string;
}

type CreateFn = (props: FunnelObj) => BarObj;

export type { StoreDef, ActionsDef, BarObj, FunnelObj, ColorDict, CreateFn };
