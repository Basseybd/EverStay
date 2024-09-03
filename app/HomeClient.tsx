import React from "react";
import Container from "./components/Container";
import ListingCard from "./components/listing/ListingCard";
import { SafeListing, SafeUser } from "./types";

interface HomeClientProps {
  listings: SafeListing[];
  currentUser: SafeUser | null;
}

const HomeClient: React.FC<HomeClientProps> = ({ listings, currentUser }) => {
  return (
    <Container>
      <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {listings.map((listing) => (
          <ListingCard
            key={listing.id}
            data={listing}
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  );
};

export default HomeClient;
