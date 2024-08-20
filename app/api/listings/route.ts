import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();
  const body = await request.json();
  const {
    title,
    description,
    imageSrc,
    category,
    location,
    roomCount,
    bathroomCount,
    guestCount,
    price,
  } = body;

  // Validation: Check if required fields are present
  if (
    !title ||
    !description ||
    !imageSrc ||
    !category ||
    !location ||
    !roomCount ||
    !bathroomCount ||
    !guestCount ||
    !price ||
    !currentUser?.id
  ) {
    return NextResponse.error();
  }

  const listing = await prisma.listing.create({
    data: {
      title,
      description,
      imageSrc,
      category,
      locationValue: location.value,
      roomCount,
      bathroomCount,
      guestCount,
      price: parseInt(price, 10),
      userId: currentUser.id,
    },
  });
  return NextResponse.json(listing);
}
