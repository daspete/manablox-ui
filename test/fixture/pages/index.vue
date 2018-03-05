<template>
<div>
    <admin
        title="ADMIN"
        :full-width-topbar="true"
        :sidebar-open="true"
        :sidebar-mini="false"
        :footer-fixed="true"
        :show-quick-edit-toggle="true"
        :quick-edit-open="false"
    >
        <template slot="topbar-content">
            TOPBAR
        </template>
        
        <template slot="navigation-content">
            <sidenav :items="sidenav" />
        </template>
        
        <template slot="quickedit-content">
            QUICKNAV
        </template>
        
        <template slot="footer-content">
            Footer
        </template>
        
        <template slot="content">
            CONTENT
        </template>
    </admin>
</div>
</template>

<script>
export default {
   data(){
       return {
           sidenav: [
                {
                    type: 'link',
                    label: 'Dashboard',
                    url: '/apibuilder',
                    icon: 'home'
                },
                {
                    type: 'link',
                    label: 'Users',
                    url: '/apibuilder/users',
                    icon: 'person'
                },
                {
                    type: 'link',
                    label: 'Roles',
                    url: '/apibuilder/roles',
                    icon: 'settings'
                },
                {
                    type: 'link',
                    label: 'Permissions',
                    url: '/apibuilder/permissions',
                    icon: 'lock'
                },
                
            ]
       }
   }
}
</script>