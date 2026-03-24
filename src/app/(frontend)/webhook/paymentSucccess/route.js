import { headers } from 'next/headers'
import crypto from 'crypto'

export async function POST(request){
    try{
        const req = await request.json()
        const requestBody = req.rawBody;

        const headersList = headers()
        const id = headersList.get('webhook-id')
        const timestamp = headersList.get('webhook-timestamp')
        const webHookSignature = headersList.get('webhook-signature')

        const signedContent = `${id}.${timestamp}.${requestBody}`;

        const secretBytes = Buffer.from(process.env.yoco_secret.split('_')[1], "base64");
        
        const expectedSignature = crypto
            .createHmac('sha256', secretBytes)
            .update(signedContent)
            .digest('base64');

        // Compare the signatures
        const signature = webHookSignature.split(' ')[0].split(',')[1]

        if (crypto.timingSafeEqual(Buffer.from(expectedSignature), Buffer.from(signature))) {
            // process webhook event: https://developer.yoco.com/online/api-reference/webhooks/events/successful-payment
            // get the id of the ticket from the metadata object in the request

            // here we update the google sheet with a confirmed payment status
            // checkout_status
            // checkout_createdDate
            // checkout_id

            return new Response("OK", { status: 200 })
        }

        // do not process webhook event
        return new Response("Not Allowed", { status: 403 })

    }catch(err){
        return new Response(`Error ${err.message}`, { status: 400 })
    }

}