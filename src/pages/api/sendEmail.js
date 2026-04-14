import StandardEmail from '@/components/emails/StandardEmail';
import SendgridService from '@/services/sendgrid.service';
import { render } from 'mjml-react';


export default async function handler(req, res) {
    const { heading, message, to, subject, id, first_name, last_name, type, occupation, makes_me_happy } = req.body;

    const { html } = render(StandardEmail({ 
        heading, 
        message, 
        id, 
        first_name, 
        last_name, 
        type 
    }), { validationLevel: 'soft' })

    const sendgrid = new SendgridService({ to, subject, html, id, first_name, last_name, type, occupation, makes_me_happy })

    if( req.method === "POST" ){
        await sendgrid.send()
            .then((data) => {
                res.status(200).json(data)
            })
            .catch((err) => {
                // res.status(400).json(err)
            })

    }else{
        res.status(500).json({ message: "Method not allowed" })
    }
}