import { Vector3, Euler } from "three";

export enum ThingType {
  TILE = 'TILE',
  STICK = 'STICK',
  MARKER = 'MARKER',
}

export const Size = {
  TILE: new Vector3(6, 9, 4),
  STICK: new Vector3(20, 2, 1),
  MARKER: new Vector3(12, 6, 1),
};

export interface Place {
  position: Vector3;
  rotation: Euler;
  size: Vector3;
}

export interface ThingInfo {
  slotName: string;
  rotationIndex: number;
  claimedBy: number | null;
  heldRotation: { x: number; y: number; z: number };
  shiftSlotName: string | null;
}

export interface MatchInfo {
  dealer: number;
  honba: number;
  tileSet: TileSet;
}

export interface Game {
  gameId: string;
  num: number;
  secret: string;
}

export enum DealType {
  INITIAL = 'INITIAL',
  WINDS = 'WINDS',
  HANDS = 'HANDS',
}

export type Fives = '000' | '111' | '121';

export interface TileSet {
  back: number; // 0 or 1
  fives: Fives;
}

export namespace TileSet {
  export function initial(): TileSet {
    return { back: 0, fives: '111' };
  }

  export function equals(a: TileSet, b: TileSet): boolean {
    return a.back === b.back && a.fives === b.fives;
  }
}

export interface MouseInfo {
  held: {x: number; y: number; z: number} | null;
  mouse: {x: number; y: number; z: number; time: number} | null;
}

export enum SoundType {
  DISCARD = 'DISCARD',
  STICK = 'STICK',
};

export interface SoundInfo {
  type: SoundType;
  seat: number;
  side: number | null;
}

export interface SeatInfo {
  seat: number | null;
}
