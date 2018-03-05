<template>
    <v-card flat>
        <v-toolbar card prominent>
            <v-toolbar-title class="body-2 grey--text">{{ title }}</v-toolbar-title>
            
            <v-spacer></v-spacer>
            
            <slot name="header"></slot>
        </v-toolbar>
        <v-divider></v-divider>
        <v-card-text>
            <slot name="content"></slot>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    props: [
        'title'
    ]
}
</script>
