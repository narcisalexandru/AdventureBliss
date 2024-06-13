<!-- NavbarDesktop.vue -->
<template>
    <div class="card">
        <div class="flex flex-column md:flex-row md:justify-content-between row-gap-3">
            <Menubar class="w-full justify-content-between align-items-center border-none border-noround" :model="items">
                <template #start>
                    <router-link to="/">
                        <img class="w-2 h-2" src="@/assets/images/logo.png" alt="logo" />
                    </router-link>
                </template>
                <template #item="{ item, props, hasSubmenu }">
                    <router-link v-if="item.route" :to="item.route" custom>
                        <a v-ripple :href="item.route" v-bind="props.action">
                            <span class="ml-2">{{ item.label }}</span>
                        </a>
                    </router-link>
                    <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
                        <span class="ml-2">{{ item.label }}</span>
                        <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down"/>
                    </a>
                </template>
            </Menubar>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            items: [
                {
                    label: 'Cursuri',
                    icon: 'pi pi-home',
                    items: [
                        {
                            label: 'Curs - 1',
                            route: '/cursuri/curs-1'
                        },
                        {
                            label: 'Curs - 2',
                            route: '/cursuri/curs-2'
                        },
                        {
                            label: 'Curs - 3',
                            route: '/cursuri/curs-3'
                        },
                        {
                            label: 'Curs - 4',
                            route: '/cursuri/curs-4'
                        },
                        {
                            label: 'Curs - 5',
                            route: '/cursuri/curs-5'
                        }
                    ]
                },
                {
                    label: 'Despre noi',
                    icon: 'pi pi-link',
                    route: '/despre-noi'
                },
                {
                    label: 'Intrebari frecvente',
                    icon: 'pi pi-link',
                    route: '/intrebari-frecvente'
                },
            ]
        };
    }
});
</script>

<style>
.p-menubar {
    background-color: #233E2F;
    margin: 2px;
}
.p-submenu-list {
    background-color: #233E2F;
    border: 1;
    border-color: #F9F6E7;
}
.p-menuitem-content {
    background-color: #233E2F;
}
.p-menuitem-content:hover {
    background-color: #F9F6E7;
}
.p-menuitem-link:hover {
    color: #233E2F;
}
.p-menuitem-link {
    color: #F9F6E7;
}
</style>
