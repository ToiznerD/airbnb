import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getListingById";
import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";
import ListingClient from "./ListingClient";
import getReservations from "@/app/actions/getReservations";

interface Params{
    listingId?: string;
}

const ListingPage = async ({ params } : { params: Params}) => {
    const listing = await getListingById(params);
    const currentUser = await getCurrentUser();
    const reservations = await getReservations(params);

    if(!listing){
        return (
            <ClientOnly>
                <EmptyState />
            </ClientOnly>
        )
    }

    return ( 
        <ClientOnly>
            <ListingClient 
                listing={listing}
                currentUser={currentUser}
                reservations={reservations}
            />
        </ClientOnly>
     )

}
 
export default ListingPage;