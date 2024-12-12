<script setup>
    import { computed } from 'vue';
    import { useRoute } from 'vue-router';

    const route = useRoute();
    const basic = computed(() => {
        return route.path === '/login';
    });
    const link = computed(() => {
        return basic.value ? '/login' : '/';
    });
    const classNav = computed(() => {
        return basic.value ? 'nav-basic' : 'nav';
    });
</script>

<template>
    <nav :class="classNav">
        <a :href="link">
            <img class="logo" src="../assets/logo.png" alt="SportTraining" />
        </a>

        <div class="nav-items"  v-if="basic === false">
            <a class="nav-item">Inicio</a>
            <a class="nav-item">Centros deportivos</a>
            <a class="nav-item">Instalaciones deporitivas</a>
            <a class="nav-item">Actividades deportivas</a>
            <a class="nav-item">Ayuda</a>
            <a class="nav-item">Soporte</a>
        </div>

        <img class="user-icon" src="../assets/user_icon.png" alt="SportTraining"  v-if="basic === false"/>
    </nav>
</template>

<style scoped>
    .nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 55px;
        padding: 2px 2px 2px 2px;
        border-bottom: 1px solid #797979;
        background-color: #ffffff;
        box-sizing: border-box;
    }

    .nav-basic {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 55px;
        padding: 2px 2px 2px 2px;
        border-bottom: 1px solid #797979;
        background-color: #ffffff;
        box-sizing: border-box;
    }

    .nav-items {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .nav-item {
        padding: 0 44px 0 0;
        background-color: rgba(255, 255, 255, 0);
        box-sizing: border-box;
        font-family: "Arial Bold", "Arial Normal", "Arial", sans-serif;
        font-weight: 700;
        font-size: 24px;
        color: #333333;
        text-align: left;
        line-height: normal;
    }

    .logo {
        width: 149px;
        height: 24px;
        margin-left: 40px;
    }

    .user-icon {
        width: 38px;
        height: 38px;
        margin-right: 60px;
    }
</style>
