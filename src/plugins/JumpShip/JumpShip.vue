<template>
    <v-btn @click="jumpShip" :title="buttonLabel">
      {{ buttonLabel }}
    </v-btn>
</template>

<script>
'use strict';

import { mapActions } from 'vuex'

var printers = ['Cube', 'Genius'];
function otherPrinter() {
        var path = window.DWC_PROXY_PATH || printers[0].toLowerCase();
        return printers.find(x => !path.toLowerCase().includes(x.toLowerCase()));
}

export default {
        data: function() {
                return {
                        buttonLabel: otherPrinter(),
                }
        },
        methods: {
                ...mapActions(['connect', 'disconnect']),
                async jumpShip() {
                        this.buttonLabel = window.DWC_PROXY_PATH || printers[0];
                        window.DWC_PROXY_PATH = otherPrinter().toLowerCase();
                        await this.disconnect();
                        await this.connect();
                },
        },
};
</script>
