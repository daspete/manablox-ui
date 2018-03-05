<template>
    <v-list class="pt-0">
        <template v-for="item in items">
            <v-list-tile :key="item.title" v-if="item.type == 'link'" v-on:click="OnLinkClick(item)">

                <v-list-tile-action>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                    <v-list-tile-title>{{ item.label }}</v-list-tile-title>
                </v-list-tile-content>

            </v-list-tile>

            <v-divider v-if="item.type == 'divider'"></v-divider>

            <v-subheader v-if="item.type == 'sectionlabel'">{{ item.label }}</v-subheader>

        </template>
        
        
    </v-list>
</template>

<script>
export default {
    props: ['items'],

    methods: {
        OnLinkClick(item){
            this.$emit('link-click', item);
        }
    }
};
</script>