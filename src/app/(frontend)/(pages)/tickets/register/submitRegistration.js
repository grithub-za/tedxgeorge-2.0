"use server"

import { doc } from "@/services/google/googleSheets"


async function submitRegistration( registration = [] ){
    try{
        await doc.loadInfo();
        const sheet = doc.sheetsByIndex[0];

        for await (const item of registration){
            const registrationItem = {
                register_date: new Date(),
            }

            Object.keys(item).forEach((key) => {
                if( 
                    key !== "price" ||
                    key !== "quantity" ||
                    key !== "isDone"
                ){
                    if( key === "options" ){
                        return Object.keys(item[key]).forEach((optionKey) => {
                            registrationItem[optionKey] = item[key][optionKey]
                        })

                    }else{
                        registrationItem[key] = item[key]
                    }
                }
            })

            await sheet.addRow(registrationItem)
        }

        return "done"


    }catch(err){
        console.error(err)
        return false
    }

}

export default submitRegistration