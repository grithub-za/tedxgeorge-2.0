"use server"

import { ticketList } from "@/lib/ticketList";
import { doc } from "@/services/google/googleSheets"


async function getTicketCount(){
    try{
        await doc.loadInfo();

        const sheet = doc.sheetsByIndex[0];
        const rows = await sheet.getRows()
        const types = {}
        
        ticketList.forEach(ticket => {
            types[ticket.type] = 0
        })

        rows.forEach(row => {
            types[row.get("type")] = types[row.get("type")] + 1
        })

        return types

    }catch(err){
        console.error(err)
        return 0
    }
}

export default getTicketCount