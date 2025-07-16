import {RowID, RowElement } from './interface'

export function inserRow(row: RowElement): number;
export function deleteRow(rowId: RowID): void;
export function updateRow(row: RowID, row: RowElement): number;