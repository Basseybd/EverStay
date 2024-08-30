import React, { Suspense } from "react";
import getCurrentUser from "./actions/getCurrentUser";
import getListings, { IListingsParams } from "./actions/getListings";
import ClientOnly from "./components/ClientOnly";
import Container from "./components/Container";
import EmptyState from "./components/EmptyState";
import ListingCard from "./components/listing/ListingCard";
import Loading from "./loading";

export const dynamic = "force-dynamic";

interface HomeProps {
  searchParams: IListingsParams;
}

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

  // Generate a key based on the searchParams to retrigger Suspense
  const suspenseKey = JSON.stringify(searchParams);

  return (
    <ClientOnly>
      <Suspense
        key={suspenseKey}
        fallback={<Loading />} // Use your loading component here
      >
        <Container>
          <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
            {listings.map((listing) => {
              return (
                <ListingCard
                  currentUser={currentUser}
                  key={listing.id}
                  data={listing}
                />
              );
            })}
          </div>
        </Container>
      </Suspense>
    </ClientOnly>
  );
};

export default Home;
