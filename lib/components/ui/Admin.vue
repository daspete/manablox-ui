<template>
    <v-app dark>
        <v-navigation-drawer
            :mini-variant.sync="admin.sidebarMini"
            :clipped="admin.fullWidthTopbar"
            v-model="admin.sidebarOpen"
            fixed
            app
        >
            <slot name="navigation-content"></slot>
        </v-navigation-drawer>
        <v-toolbar fixed app  dense :clipped-left="admin.fullWidthTopbar">
            <v-toolbar-side-icon @click="admin.sidebarOpen = !admin.sidebarOpen"></v-toolbar-side-icon>
           
            <v-toolbar-title v-text="admin.title"></v-toolbar-title>

            <v-spacer></v-spacer>

            <slot name="topbar-content"></slot>

            <v-btn v-if="admin.showQuickEditToggle"
                icon
                @click.stop="admin.quickEditOpen = !admin.quickEditOpen"
            >
                <v-icon>menu</v-icon>
            </v-btn>
        </v-toolbar>
    
        <v-content>
            <div class="px-4 py-4">
                <slot name="content"></slot>
            </div>
        </v-content>
    
        <v-navigation-drawer
            temporary
            :right="true"
            v-model="admin.quickEditOpen"
            fixed
        >
            <slot name="quickedit-content"></slot>
        </v-navigation-drawer>

        <v-footer :fixed="admin.footerFixed" app>
            <slot name="footer-content"></slot>
        </v-footer>
    </v-app>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'manablox-ui-admin'
        },
        fullWidthTopbar: {
            type: Boolean,
            default: true
        },
        sidebarOpen: {
            type: Boolean,
            default: true
        },
        sidebarMini: {
            type: Boolean,
            default: false
        },
        footerFixed: {
            type: Boolean,
            default: true
        },
        showQuickEditToggle: {
            type: Boolean,
            default: false
        },
        quickEditOpen: {
            type: Boolean,
            default: false
        }
    },

    watch: {
        title(value){
            this.admin.title = value;
        },
        fullWidthTopbar(value){
            this.admin.fullWidthTopbar = value;
        },
        sidebarOpen(value){
            this.admin.sidebarOpen = value;
        },
        sidebarMini(value){
            this.admin.sidebarMini = value;
        },
        footerFixed(value){
            this.admin.footerFixed = value;
        },
        showQuickEditToggle(value){
            this.admin.showQuickEditToggle = value;
        },
        quickEditOpen(value){
            this.admin.quickEditOpen = value;
        },
        
    },

    data(){
        return {
            admin: {
                title: this.title,
                fullWidthTopbar: this.fullWidthTopbar,
                sidebarOpen: this.sidebarOpen,
                sidebarMini: this.sidebarMini,
                footerFixed: this.footerFixed,
                showQuickEditToggle: this.showQuickEditToggle,
                quickEditOpen: this.quickEditOpen
            }
        }
    }
}
</script>
