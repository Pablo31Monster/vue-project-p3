<script setup>
    import { ref, computed } from 'vue';
    import { useRoute } from 'vue-router';

    const route = useRoute();
    const basic = computed(() => {
        return route.path === '/login' || route.path === '/';
    });
    const classNav = computed(() => {
        return basic.value ? 'nav-basic' : 'nav';
    });

    /*User display menu*/
    const isDropdownOpen = ref(false);
    const isDropdownNavOpen = ref(false);

    const toggleDropdown = () => {
        isDropdownOpen.value = !isDropdownOpen.value;
        if (isDropdownOpen.value) {
            isDropdownNavOpen.value = false; // Cierra el menú de navegación si el menú de usuario está abierto
        }
    };

    const toggleNavMenu = () => {
        isDropdownNavOpen.value = !isDropdownNavOpen.value;
        console.log('isDropdownNavOpen:', isDropdownNavOpen.value); 
        if (isDropdownNavOpen.value) {
            isDropdownOpen.value = false; // Cierra el menú de usuario si el menú de navegación está abierto
        }
    };

    const closeDropdown = () => {
        isDropdownOpen.value = false;
    };

    const closeNavMenu = () => {
        isDropdownNavOpen.value = false;
    };
</script>

<template>
    <nav>
        <div :class="classNav">
            <img class="menu-icon" src="../assets/openNav.png" alt="Open nav Menu" @click="toggleNavMenu" />

            <a class="nav-link" href="/">
                <img class="logo" src="../assets/logo.png" alt="Logo SportTraining" />
            </a>

            <div class="nav-items"  v-if="!basic && !isDropdownNavOpen">
                <a class="nav-item">Inicio</a>
                <a class="nav-item">Centros deportivos</a>
                <a class="nav-item">Instalaciones deporitivas</a>
                <a class="nav-item">Actividades deportivas</a>
                <a class="nav-item">Ayuda</a>
                <a class="nav-item">Soporte</a>
            </div>

            <img class="user-icon" src="../assets/user_icon.png" alt="user profile picture" v-if="!basic" @click="toggleDropdown"/>
        </div>
        <div :class="['desplegable', { active: isDropdownOpen }]">
            <div class="fondo" @click="closeDropdown"></div>
            <div class="panel">
                <a class="nav-item">Cambiar idioma</a>
                <a class="nav-item">Cambiar a modo oscuro</a>
                <a class="nav-item">Cerrar sesión</a>
            </div>
        </div>
        <div :class="['dropdownnav', { active: isDropdownNavOpen }]">
            <img class="menu-close-icon" src="../assets/closeNav.png" alt="Close nav menu" @click="toggleNavMenu" />

            <a class="nav-item" @click="closeNavMenu">Inicio</a>
            <a class="nav-item" @click="closeNavMenu">Centros deportivos</a>
            <a class="nav-item" @click="closeNavMenu">Instalaciones deportivas</a>
            <a class="nav-item" @click="closeNavMenu">Actividades deportivas</a>
            <a class="nav-item" @click="closeNavMenu">Ayuda</a>
            <a class="nav-item" @click="closeNavMenu">Soporte</a>
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
        margin-right: 40px;
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

    .menu-icon{
        display: none;
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

    .dropdownnav, .dropdownnav.active {
        display: none;
    }


    @media (max-width: 700px) {
        .nav{
            padding: 0px 2.5%;
        }

        .nav-items {
            display: none; /* Oculta el menú de navegación en pantallas pequeñas */
        }

        .panel{
            padding: 5px;
            height: 200px;
        }

        .menu-icon{
            display: inline;
            width: 40px;
            height: 40px;
        }

        .user-icon{
            margin: 0;
        }
        
        .dropdownnav {
            display: none; /* Ocultado por defecto */
            flex-direction: column; /* Organiza los ítems en columna */
            position: fixed; /* Para ocupar toda la pantalla */
            top: 0;
            left: 0;
            width: 100%; /* Ancho completo de la pantalla */
            height: 100%; /* Altura completa de la pantalla */
            background-color: white;
            z-index: 100; 
            padding: 2.5% 6%;
            transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
        }

        .dropdownnav.active {
            display: flex;
            opacity: 1; /* Asegúrate de que sea visible */
            visibility: visible;
        }

        .menu-close-icon{
            width: 40px;
            height: 40px;
            margin-bottom: 30px;
        }

        .dropdownnav .nav-item{
            padding: 7px 0px;
        }

    }
</style>
