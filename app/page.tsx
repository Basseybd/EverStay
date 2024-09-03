import React from "react";
import getCurrentUser from "./actions/getCurrentUser";
import getListings, { IListingsParams } from "./actions/getListings";
import ClientOnly from "./components/ClientOnly";
import EmptyState from "./components/EmptyState";
import HomeClient from "./HomeClient";

interface HomeProps {
  searchParams: IListingsParams;
}

// export const dynamic = "force-dynamic";

const Home = async ({ searchParams }: HomeProps) => {
  const listings = await getListings(searchParams);
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <HomeClient listings={listings} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default Home;
