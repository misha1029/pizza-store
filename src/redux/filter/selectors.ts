import {RootState } from '../store'

export const selectFilter = (state: RootState) => state.filter;

export const selectorSort = (state: RootState) => state.filter.sort;