<script setup>

</script>

<template>
    <main class="centrado">
        <h1>¿Que vista de las desarrolladas quieres ver?</h1>
        <div class="botones">
            <a href="/login">Acceso a la aplicación</a>
            <a href="/inicio">Inicio del usuario</a>
            <a href="/valorar">Valorar una actividad</a>
        </div>
    </main>
</template>

<style scoped>

    a {
        font-size: 18px;
        border-radius: 12px;
        background-color: #0071e3;
        box-sizing: border-box;
        font-family: "Arial Bold", "Arial Normal", "Arial", sans-serif;
        font-weight: 700;
        color: #ffffff;
        text-align: center;
        line-height: normal;
        height: 40px;
        border: 0;
        cursor: pointer;
        padding: 10px 40px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .botones {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 100%;
        margin-top: 40px;
    }

    .centrado {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding-left: 470px;
        padding-right: 470px;
    }

    h1 {
        font-family: "Arial", sans-serif;
        font-size: 28px;
        color: #333333;
        text-align: left;
        line-height: normal;
        font-weight: 700;
        margin-bottom: 12px;
        margin-top: 20px;
    }
</style>
