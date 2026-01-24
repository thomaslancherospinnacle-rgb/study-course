
const APPDB = "https://script.google.com/macros/s/AKfycbwSqs-q-ZLMq_H4UAFxDJ9Enjbvw_2urr-7kTuop_6rbsU38hR-9-_mPizNXJFVYPcn/exec";

const REFDB = "https://script.google.com/macros/s/AKfycbzuFjkPfGRiHFXs_nKioy27mEZLMMarVNUXfhcoBHsYj4rKCn8ncBkfuMyGI9aoOjTZFw/exec";

const CFWORKER = "https://closing-coalition-api.thomaslancheros06.workers.dev";

const API_URL = CFWORKER.replace(/\/$/, "");
const LEADSDB = API_URL + "/leadsdb";     // Routes to LEADDB Google Apps Script
const AUTH = CFWORKER;                     // Routes to CFWORKER/AUTH Google Apps Script

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        CFWORKER,
        APPDB,
        REFDB,
        LEADSDB,
        AUTH
    };
}
