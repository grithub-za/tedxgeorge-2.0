"use server"

export default async function getCheckoutUrl(body){
    const response = await fetch("https://payments.yoco.com/api/checkouts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.yoco_secret}`
        },
        body: JSON.stringify(body),
    })

    const data = await response.json()

    return data
}