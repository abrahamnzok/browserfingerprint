<template>
    <div>
        <Activity></Activity>
    </div>
</template>

<script>
    import Activity from "./components/Activity";
    import Crypto from "crypto-js";
    import ClientJS from "clientjs";
    import axios from 'axios';

    export default {
        components: {Activity},
        data() {
            return {
                browserInfo : null,
                fingerprint: null,
            }
        },
        created() {
            const client = new ClientJS();
            this.browserInfo = client.getResult();
            this.fingerprint = Crypto.SHA256(this.browserInfo).toString();
            axios({
                method:'post',
                url:'http://localhost:3300/fingerprint/create',
                data: {
                    fingerprint : this.fingerprint
                }
            })
        }
    }

</script>
