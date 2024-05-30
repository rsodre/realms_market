import type {
  CollectionSortBy,
  CollectionSortDirection,
} from "../../search-params";
import { env } from "~/env";

export async function getCollectionInfos() {
  return null;
}

const itemsPerPage = 50;
export interface CollectionToken {
  contract: string;
  token_id: string;
  owner: string;
  minted_at: number;
  updated_at: number;
  price: null | number;
}
export interface CollectionTokensApiResponse {
  data: CollectionToken[];
  next_page: number;
}
interface GetCollectionTokensParams {
  collectionAddress: string;
  page?: number;
  sortDirection: CollectionSortDirection;
  sortBy: CollectionSortBy;
}
export async function getCollectionTokens({
  collectionAddress,
  page,
  sortDirection,
  sortBy,
}: GetCollectionTokensParams) {
  const queryParams = [
    `items_per_page=${itemsPerPage}`,
    `sort=${sortBy}`,
    `direction=${sortDirection}`,
  ];

  if (page !== undefined) {
    queryParams.push(`page=${page}`);
  }

  const url = `${env.NEXT_PUBLIC_MARKETPLACE_API_URL}/collection/${collectionAddress}/tokens?${queryParams.join("&")}`;

  const response = await fetch(url);
  if (!response.ok) {
    return { data: [], next_page: 0 } as CollectionTokensApiResponse;
  }

  return response.json() as Promise<CollectionTokensApiResponse>;
}
