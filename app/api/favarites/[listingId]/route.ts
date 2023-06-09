import { NextResponse } from "next/server";

import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";

interface IParams {
  listingId?: string;
}

export async function POST(request: Request, { params }: { params: IParams }) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const { listingId } = params;

  if (!listingId || typeof listingId !== "string") {
    throw new Error("Invalid ID");
  }

  //   const listing = await prisma.listing.deleteMany({
  //     where: {
  //       id: listingId,
  //       userId: currentUser.id,
  //     },
  //   });

  const favariteIds = [...(currentUser.favariteIds || [])];

  favariteIds.push(listingId);

  const user = await prisma.user.update({
    where: {
      id: listingId,
    },
    data: { favariteIds },
  });

  return NextResponse.json(user);
}

export async function DELETE(
  request: Request,
  { params }: { params: IParams }
) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const { listingId } = params;

  if (!listingId || typeof listingId !== "string") {
    throw new Error("Invalid ID");
  }

  let favariteIds = [...(currentUser.favariteIds || [])];

  favariteIds = favariteIds.filter((id) => id !== listingId);

  const user = await prisma.user.update({
    where: {
      id: listingId,
    },
    data: { favariteIds },
  });

  return NextResponse.json(user);
}
