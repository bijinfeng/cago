import type { StoreApi, UseBoundStore } from 'zustand';
import { create } from 'zustand';
import { first } from 'radash';
import type { ResponseData } from '@/services/api';

interface GlobalState {
  organizations: KB.Organization[];
  organization: KB.Organization;
}

export let useGloablStore: UseBoundStore<StoreApi<GlobalState>>;

export function initGloablStore(data: {
  commonUsed: ResponseData<KB.CommonUsed[]>;
  organization: ResponseData<KB.Organization[]>;
}) {
  useGloablStore = create<GlobalState>(() => ({
    organizations: data.organization.data,
    organization: first(data.organization.data)!,
  }));
}
