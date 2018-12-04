/// <reference types="@rematch/core" />
/// <reference types="node" />

declare namespace App.Store {
  export interface Model<T> extends rematch.ModelConfig<T> {
    state: T;
    reducers: {
      [key: string]: (state: T, payload: any) => T;
    };
    effects?(dispatch: any): { [key: string]: Effect };
  }

  export interface Effect {
    (payload: any, state: any): Promise<void>;
  }
}

declare namespace App {
  export interface Store extends rematch.RematchStore {}
}
