import type { APIRoute } from "astro"
import { Resend } from "resend"

const resend =  new Resend(import.meta.env.RESEND_API_KEY)

export const  GET: APIRoute = async ({params, request}) => {

    const send = await resend.emails.send({
        from: 'sergioexpositodev@sergioem.dev',
        to: "sergioexpositodev@sergioem.dev",
        subject: "Test",
        html: "<h1>Test</h1>",
        text: "Test",
    })

    if(send.data ){
        return new Response(
            JSON.stringify({
              message: send.data,
            }),
            {
                status: 200,
                statusText: "OK",
            }
          )
    }else { 
        return new Response(
            JSON.stringify({
              message: send.error,
            }),
            {
                status: 500,
                statusText: "Internal Server Error",
            }
          )
    }
  }