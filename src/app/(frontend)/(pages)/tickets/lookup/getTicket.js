"use server"
import { doc } from "@/services/google/googleSheets"


async function getTicket(id){
    try{
        await doc.loadInfo();

        const sheet = doc.sheetsByIndex[0];
        const rows = await sheet.getRows()

        const rowData = {}

        rows.forEach(row => {
            const firsName = row.get("first_name").trim()
            const lastName = row.get("last_name").trim()
            const ticketId = row.get("id").trim()

            if(
                ticketId === id || 
                firsName === id || 
                lastName === id || 
                `${firsName} ${lastName}` === id
            ){
                rowData[ticketId] = {
                    id: ticketId,
                    type: row.get("type"),
                    title: row.get("title"),
                    first_name: firsName,
                    last_name: lastName,
                    email: row.get("email"),
                    phone: row.get("phone"),
                    city: row.get("city"),
                    makes_me_happy: row.get("makes_me_happy"),
                    kids_zone: row.get("kids_zone"),
                }
            }
        })

        return rowData


    }catch(err){
        console.error(err)
        return null
    }
}

export default getTicket