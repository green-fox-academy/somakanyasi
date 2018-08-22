'use strict';

export abstract class Instrument {
  protected name: string;

  abstract play(): void;
}

