import { Ticket } from "@/components/registration/YourTicket";




function YourTicket({ searchParams }){
    return(
        <section className="container text-center d-flex justify-content-center my-5 py-5">
            <Ticket 
                id={searchParams.id}
                first_name={searchParams.first_name}
                last_name={searchParams.last_name}
                type={searchParams.type}
            />
        </section>
    )
}

export default YourTicket;