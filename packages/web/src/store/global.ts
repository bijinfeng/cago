import type { StoreApi, UseBoundStore } from 'zustand';
import { create } from 'zustand';
import type { OrganizationsQuery } from '@/__generated__/graphql';

interface GlobalState {
  organizations: OrganizationsQuery;
}

export let useGloablStore: UseBoundStore<StoreApi<GlobalState>>;

export function initGloablStore(organizations: OrganizationsQuery) {
  useGloablStore = create<GlobalState>(() => ({
    organizations,
  }));
}
