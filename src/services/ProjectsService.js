import axios from 'axios'

const Axios = axios.create({
    baseURL: "https://api.airtable.com/v0/appMK6cIV36SBZzju/Table%201"
});

Axios.defaults.headers.common = { 'Authorization': `Bearer ` + "keyMLj3Y133PkUCCK" }

export default {
    getProjects() {
        return Axios.get()
    },
    getProject(slug) {
        return Axios.get("?filterByFormula={Slug}='" + slug + "'")
    }
}