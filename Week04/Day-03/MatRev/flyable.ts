'use strict';

export interface Flyable {
  fly(): void;
  takeOff(): void;
  landing(): void;
  manouvering?(): void;
}