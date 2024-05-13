import type { StoreApi, UseBoundStore } from 'zustand';
import { create } from 'zustand';
import { flattenEntityResponseCollection } from 'strapi-flatten-graphql';
import { first } from 'radash';

import type { OrganizationsQuery } from '@/__generated__/graphql';

type Organizations = ReturnType<
  typeof flattenEntityResponseCollection<NonNullable<OrganizationsQuery['organizations']>>
>;

interface GlobalState {
  organizations: Organizations;
  organization: Organizations[0];
}

export let useGloablStore: UseBoundStore<StoreApi<GlobalState>>;

export function initGloablStore(data: OrganizationsQuery) {
  const organizations = flattenEntityResponseCollection(data!.organizations!);

  useGloablStore = create<GlobalState>(() => ({
    organizations,
    organization: first(organizations)!,
  }));
}
