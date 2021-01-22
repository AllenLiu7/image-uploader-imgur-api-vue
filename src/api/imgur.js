// https://api.imgur.com/oauth2/authorize?
// client_id=YOUR_CLIENT_ID
// &response_type=REQUESTED_RESPONSE_TYPE
// &state=APPLICATION_STATE
import qs from "qs"

const CLIENT_ID = process.env.VUE_APP_IMGUR_CLIENT_ID
const IMGUR_API = 'https://api.imgur.com'

export default {
    login(){
        const querystring = {
            client_id: CLIENT_ID,
            response_type: 'token'
        }
        window.location = `${IMGUR_API}/oauth2/authorize?${qs.stringify(querystring)}`
    }
}