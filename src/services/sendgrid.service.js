import sgMail from "@sendgrid/mail"


export default class SendgridService{
    constructor({ to, subject, html, id, first_name, last_name, type, occupation, makes_me_happy  }){
        sgMail.setApiKey(process.env.sendgrid_api_key);

        this.emails = [
            {
                from: process.env.server_email,
                to,
                subject,
                html
            },
            {
                from: process.env.server_email,
                to: "tedxgeorge@gmail.com",
                subject: `TEDx ${type} Registration: ${first_name} ${last_name}`,
                text: `
                    Name: ${first_name} ${last_name}
                    Email: ${to}
                    Occupation: ${occupation}
                    Makes me happy: ${makes_me_happy}
                    Type: ${type}
                    ID: ${id}
                `
            }

        ]
    }

    async send(){
        return await sgMail.send(this.emails).then(data => data)
    }
}