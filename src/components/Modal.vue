<script setup>
    defineProps({
        show: Boolean
    })
</script>

<template>
    <div :class="['modal', { active: show }]">
        <div class="fondo" @click="$emit('close')"></div>
        <div class="panel">
            <div class="cerrar">
                <img src="../assets/cross.png" alt="Cerrar" @click="$emit('close')"/>
            </div>
            <slot class="title" name="title">Title</slot>
            <slot class="body" name="body">Body</slot>
        </div>
    </div>
</template>

<style scoped>
    img {
        width: 22px;
        height: 22px;
    }

    .title {
        font-size: 24px;
        font-weight: bold;
        color: #333333;
        margin-bottom: 20px;
    }

    .cerrar {
        cursor: pointer;
        width: 32px;
        height: 32px;
        background-color: #e8e8ed;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 24px;
        right: 24px;
    }

    .modal {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 10;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.35s ease-in-out, visibility 0.35s ease-in-out;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .modal.active {
        opacity: 1;
        visibility: visible;
    }

    .fondo {
        z-index: 11;
        width: 100%;
        height: 100%;
        background-color: #d7d7d7;
        opacity: 0.6;
        left: 0;
        top: 0;
        position: absolute;
    }

    .panel {
        position: relative;
        z-index: 12;
        padding: 32px;
        padding-top: 48px;
        border-radius: 24px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        background-color: #ffffff;
        width: fit-content;
    }

    @media (max-width: 700px) {

        .modal {
            align-items: self-end;
        }
        
        .panel{
            width: 100%;
            height: 95%;
            border-radius: 24px 24px 0px 0px;
            display: block;
        }


    }

</style>
