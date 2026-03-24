import {
    MjmlText,
    MjmlSection,
    MjmlColumn,
    MjmlImage,
    MjmlButton
  } from "mjml-react";


function EmailTicket({ name, type, id, qrImage }){
    return(
        <MjmlSection>
            <MjmlColumn width="100%" backgroundColor="#111">
                <MjmlImage align="left" width="300px" src={`${process.env.NEXT_PUBLIC_URL}/assets/TEDx_Logo_Short_George-white.png`} href={`${process.env.NEXT_PUBLIC_URL}`} />
            </MjmlColumn>

            <MjmlColumn width="100%" backgroundColor="#fff">
                <MjmlText fontSize="30px" lineHeight="1" paddingBottom="4">
                    <h1 style={{ margin: 0 }}>
                        {name}
                    </h1>
                </MjmlText>

                

                <MjmlText font-size="50px" paddingTop="4">
                    {type}
                </MjmlText>
            </MjmlColumn>
        </MjmlSection>
    )
}

export default EmailTicket;