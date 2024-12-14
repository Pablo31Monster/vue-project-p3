<script setup>
    import { ref } from "vue";

    const correo = ref("");
    const contrasena = ref("");
    const error = ref("");

    const validarFormulario = (event) => {
        event.preventDefault();
        error.value = "";

        if (!correo.value || !contrasena.value) {
            error.value = "Por favor, completa todos los campos.";
            return;
        }

        alert("Formulario enviado correctamente.");
    };
</script>

<template>
    <main>
        <h1>Accede a tu cuenta</h1>
        <form @submit="validarFormulario" >
            <div class="inputs">
                <input v-model="correo" id="correo-electrónico" type="email" placeholder="Correo electrónico">
                <input v-model="contrasena" id="contrasena" type="password" placeholder="Contraseña">

                <button class="button-submit" type="submit">
                    <img class="img-submit" src="../assets/arrow.png" alt="Flecha">
                </button>
            </div>
            <div id="sesion">
                <input type="checkbox" id="sesion-input">
                <label for="sesion-input">Mantener la sesión abierta</label>
            </div>
            <p v-if="error" class="error">{{ error }}</p>
            <div class="ayuda">
                <p>¿Has olvidado tu contraseña?<span>Recuperala</span></p>
                <p>¿No tienes una cuenta de SportTraining aún?<span>Crea una ahora</span></p>
            </div>
        </form>
    </main>
</template>

<style scoped>
    .error {
        font-family: "Arial", sans-serif;
        color: #ff3b3b;
        text-align: center;
        line-height: normal;
        font-size: 18px;
        margin-top: 10px;
    }

    #sesion {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .img-submit {
        width: 18px;
        height: 18px;
    }

    .button-submit {
        position: absolute;
        bottom: 14px;
        right: 17px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100%;
        width: 26px;
        height: 26px;
        padding: 2px 2px 2px 2px;
        border: 1px solid #797979;
        box-sizing: border-box;
        background-color: #ffffff;
    }

    .ayuda {
        margin-top: 68px;
    }

    p {
        font-family: "Arial", sans-serif;
        font-size: 18px;
        color: #333333;
        text-align: center;
        line-height: normal;
        margin-bottom: 8px;
    }
    span {
        font-family: "Arial", sans-serif;
        text-decoration: underline;
        font-size: 18px;
        color: #0071e3;
        text-align: left;
        line-height: normal;
        margin-left: 6px;
    }
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    label {
        font-family: "Arial", sans-serif;
        font-size: 18px;
        color: #333333;
        margin-left: 6px;
    }

    .inputs input {
        width: 532px;
        height: 54px;
        background-color: #ffffff;
        font-size: 20px;
    }

    .inputs {
        position: relative;
        display: flex;
        flex-direction: column;
        margin-top: 30px;
        margin-bottom: 30px;
    }

    #correo-electrónico {
        width: 532px;
        height: 54px;
        padding: 2px 2px 2px 12px;
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
        border: 1px solid #797979;
        background-color: #ffffff;
        box-sizing: border-box;
        font-family: "Arial", sans-serif;
        color: #999999;
        text-align: left;
    }
    #correo-electrónico {
        box-sizing: border-box;
        color: #999999;
    }
    #correo-electrónico:disabled {
        background-color: #f0f0f0;
        box-sizing: border-box;
    }

    #contrasena {
        width: 532px;
        height: 54px;
        padding: 2px 2px 2px 12px;
        border-bottom-left-radius: 12px;
        border-bottom-right-radius: 12px;
        border: 1px solid #797979;
        border-top: 0;
        background-color: #ffffff;
        box-sizing: border-box;
        font-family: "Arial", sans-serif;
        color: #999999;
        text-align: left;
    }
    #contrasena {
        box-sizing: border-box;
        color: #999999;
    }
    #contrasena:disabled {
        background-color: #f0f0f0;
        box-sizing: border-box;
    }

    h1 {
        box-sizing: border-box;
        font-family: "Arial Bold", "Arial Normal", "Arial", sans-serif;
        font-weight: 700;
        color: #333333;
        text-align: center;
        line-height: normal;
        font-size: 36px;
    }

    @media (max-width: 1000px) {
        .inputs input {
            width: 100% !important;
            font-size: 18px !important;
        }

        .inputs {
            margin-left: 18px;
            margin-right: 18px;
        }

        .button-submit {
            right: 18px;
        }

        .ayuda {
            padding-left: 18px;
            padding-right: 18px;
        }
    }
</style>
