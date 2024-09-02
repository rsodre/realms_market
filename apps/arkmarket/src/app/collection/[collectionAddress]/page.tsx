import { notFound } from "next/navigation";

import getCollection from "~/lib/getCollection";
import Collection from "./components/collection";
import { notFound } from "next/navigation";
import { CollectionDescription } from "~/config/homepage";

interface CollectionPageProps {
  params: {
    collectionAddress: string;
  };
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  const { collectionAddress } = params;
  const collection = await getCollection({ collectionAddress });

  const collection = CollectionDescription[collectionAddress];
  if (!collection) {
    return notFound();
  }


  // const collectionTokensInitialData = await getCollectionTokens({
  //   collectionAddress,
  //   sortDirection: direction,
  //   sortBy: sort,
  // });

  // if (!collectionTokensInitialData.data.length) {
  //   // TODO @YohanTz: Handle case when a collection contract is deployed but no tokens in it
  //   notFound();
  // }

  return (
    <Collection
      collectionAddress={collectionAddress}
      collectionInitialData={collectionInitialData}
    // collectionTokensInitialData={collectionTokensInitialData}
    />
  );
}
