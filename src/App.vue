<template>
    <div>
        <Activity></Activity>
    </div>
</template>

<script>
    import Activity from './components/Activity';
    import Crypto from 'crypto-js';
    import {getBrowser} from 'detect-browser';
    import axios from 'axios';

    export default {
        components: {Activity},
        data() {
            return {
                browserInfo : null,
                fingerprintHash: null,
            }
        },
        created() {
            this.browserInfo = getBrowser();
            console.log(this.browserInfo);
            this.fingerprintHash = Crypto.SHA384(this.browserInfo).toString();
            axios({
                method:'post',
                url:'http://localhost:3300/fingerprint/create',
                data: {
                    fingerprint : this.browserInfo,
                    fingerprintHash : this.fingerprintHash
                }
            })
        }
    }

</script>
