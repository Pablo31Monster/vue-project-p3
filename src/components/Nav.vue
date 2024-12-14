<script setup>
    import { ref, computed } from 'vue';
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

    const isDropdownOpen = ref(false);

    const toggleDropdown = () => {
        isDropdownOpen.value = !isDropdownOpen.value;
    };

    const closeDropdown = () => {
        isDropdownOpen.value = false;
    };
</script>

<template>
    <nav>
        <div :class="classNav">
            <a class="nav-link" :href="link">
                <img class="logo" src="../assets/logo.png" alt="SportTraining" />
            </a>

            <div class="nav-items"  v-if="!basic">
                <a class="nav-item">Inicio</a>
                <a class="nav-item">Centros deportivos</a>
                <a class="nav-item">Instalaciones deporitivas</a>
                <a class="nav-item">Actividades deportivas</a>
                <a class="nav-item">Ayuda</a>
                <a class="nav-item">Soporte</a>
            </div>

            <img class="user-icon" src="../assets/user_icon.png" alt="SportTraining" v-if="!basic" @click="toggleDropdown"/>
        </div>
        <div :class="['desplegable', { active: isDropdownOpen }]">
            <div class="fondo" @click="closeDropdown"></div>
            <div class="panel">
                <a class="nav-item">Cambiar idioma</a>
                <a class="nav-item">Cambiar a modo oscuro</a>
                <a class="nav-item">Cerrar sesión</a>
            </div>
        </div>
    </nav>
</template>

<style scoped>
    .nav {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 55px;
        padding: 2px 2px 2px 2px;
        border-bottom: 1px solid #797979;
        background-color: #ffffff;
        box-sizing: border-box;
        z-index: 5;
    }
    .nav-link {
        display: flex;
        justify-content: center;
        align-items: center;
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
        cursor: pointer;
    }

    .desplegable {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 4;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.35s ease-in-out, visibility 0.35s ease-in-out;
    }
    
    .desplegable.active {
        opacity: 1;
        visibility: visible;
    }

    .fondo {
        z-index: 3;
        width: 100%;
        height: 100%;
        background-color: #d7d7d7;
        opacity: 0.6;
        left: 0;
        top: 0;
        position: absolute;
    }

    .panel {
        z-index: 4;
        display: flex;
        padding: 47px 0 47px 370px;
        justify-content: space-around;
        flex-direction: column;
        position: absolute;
        height: 210px;
        width: 100%;
        background-color: #ffffff;
        top: 55px;
        left: 0;
    }
</style>
