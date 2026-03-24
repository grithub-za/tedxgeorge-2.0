import QRCode from "react-qr-code"

export const dynamic = 'force-dynamic'

export async function GET(request){
    const searchParams = request.nextUrl.searchParams
    const id = searchParams.get('id')

    return new Response(<QRCode value={id} />, {
        headers: {
            "Content-Type": "text/html"
        }
    })
}