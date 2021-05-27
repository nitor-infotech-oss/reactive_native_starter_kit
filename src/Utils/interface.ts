export interface ErrorInterface {
  name: string;
  message: string;
}

export interface IconsInterface {
  name: string;
  size: number;
  color?: string;
}

export interface ReduxAction {
  type: string | number;
  payload: object | string | number;
}
