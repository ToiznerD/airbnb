import { NextResponse} from 'next/server';
import getCurrentUser from '@/app/actions/getCurrentUser';
import prisma from '@/app/libs/prismadb';
import getListingById from '@/app/actions/getListingById';
import { Listing, Reservation } from '@prisma/client';
import { SafeListing, SafeReservation, SafeUser } from '@/app/types';

interface Props {
    reservationId?: string;
}

export async function DELETE(request: Request, {params} : { params: Props }){
    const currentUser = await getCurrentUser();

    if(!currentUser){
        return NextResponse.error();
    }

    const {reservationId} = params;

    if(!reservationId || typeof reservationId !== 'string'){
    
        throw new Error('Invalid ID');
    }

    const reservation = await prisma.reservation.deleteMany({
        where:{
            id: reservationId,
            OR: [
                { userId: currentUser.id },
                { listing: { userId: currentUser.id }}
            ]
        }
    })

    return NextResponse.json(reservation);
}