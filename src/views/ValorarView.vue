<script setup>
import { ref } from 'vue';

const comentario = ref('');
const valoracion = ref(1);

const cambiarValoracion = (nuevaValoracion) => {
    valoracion.value = nuevaValoracion;
};

const validarFormulario = (event) => {
    event.preventDefault();

    alert('Formulario enviado correctamente.');
};
</script>

<template>
    <main>
        <div class="hola">
            <h1 class="hola-h">Salsa</h1>
            <h2 class="hola-h2">Centro deportivo La Alquibla</h2>
        </div>

        <div class="center">
            <div class="migas">
                <a href="/" class="miga miga-enlace">Inicio</a>
                <span class="miga">/</span>
                <span class="miga">Valorar una actividad o instalación deportiva</span>
            </div>
            <form @submit="validarFormulario">
                <h2>Valoración</h2>
                <p>Selecciona una valoración para la instalación deportiva</p>
                <div>
                    <div class="estrellas">
                        <div class="estrella-block" v-for="n in 5">
                            <img
                                :key="n"
                                :src="n <= valoracion ? '/star_filled.png' : '/star.png'"
                                @click="cambiarValoracion(n)"
                                class="estrella"
                                alt="estrella"
                            />
                            <span>{{ n }}</span>
                        </div>
                    </div>
                </div>
                <h2>Comentario adicional</h2>
                <textarea
                    class="comentario"
                    name="comentario"
                    id="comentario"
                    placeholder="Introduce un comentario adicional..."
                    v-model="comentario"
                ></textarea>
                <div class="submit-div">
                    <a href="/" class="boton-volver" >Volver</a>
                    <button type="submit" class="boton-guardar">Guardar</button>
                </div>
            </form>
        </div>
    </main>
</template>

<style scoped>
    .submit-div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 450px;
        margin-top: 25px;
    }

    button {
        width: 185px;
        height: 43px;
    }

    .boton-guardar {
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
    }

    .boton-volver {
        font-size: 18px;
        width: 185px;
        height: 43px;
        padding: 2px 2px 2px 2px;
        border-radius: 12px;
        background-color: #ffffff;
        box-sizing: border-box;
        font-family: "Arial Bold", "Arial Normal", "Arial", sans-serif;
        font-weight: 700;
        color: #797979;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #797979;
        text-align: center;
        line-height: normal;
        height: 40px;
        cursor: pointer;
    }

    span {
        font-family: "Arial", sans-serif;
        color: #333333;
        text-align: left;
        line-height: normal;
        font-size: 16px;
        margin-top: 8px;
        padding: 0;
        margin: 0;
    }

    .estrellas {
        display: flex;
        flex-direction: row;
        justify-content: start;
        margin-bottom: 24px;
    }

    .estrella-block {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .estrella {
        width: 80px;
        height: 80px;
        cursor: pointer;
    }

    .comentario {
        width: 448px;
        height: 198px;
        border-radius: 12px;
        background-color: #f2f2f2;
        font-family: "Arial", sans-serif;
        color: #333333;
        box-sizing: border-box;
        border: 0;
        font-size: 18px;
        padding: 10px;
    }

    .miga-enlace {
        color: #333333;
        cursor: pointer;
        text-decoration: underline
    }

    .miga {
        box-sizing: border-box;
        font-family: "Arial", sans-serif;
        color: #333333;
        text-align: left;
        line-height: normal;
        font-size: 18px;
        margin-right: 16px;
    }

    .migas {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }

    .center {
        display: flex;
        flex-direction: column;
        padding-top: 40px;
        padding-bottom: 40px;
        padding-left: 470px;
        padding-right: 470px;
    }

    .hola {
        display: flex;
        flex-direction: column;
        height: 150px;
        background-color: #f2f2f2;
        padding-left: 470px;
        padding-right: 470px;
    }

    .hola-h {
        margin-top: 80px;
        margin-bottom: 0;
    }

    .hola-h2 {
        margin: 0;
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

    h2 {
        font-family: "Arial", sans-serif;
        font-size: 22px;
        color: #333333;
        text-align: left;
        line-height: normal;
        font-weight: 700;
        margin-bottom: 12px;
        margin-top: 16px;
    }

    h3 {
        font-family: "Arial", sans-serif;
        font-size: 18px;
        color: #333333;
        text-align: left;
        line-height: normal;
        font-weight: 700;
        margin-bottom: 4px;
    }

    p {
        font-family: "Arial", sans-serif;
        color: #333333;
        text-align: left;
        line-height: normal;
        font-size: 18px;
        margin-bottom: 16px;
    }

    @media (max-width: 1000px) {
        .center {
            padding-top: 30px;
            padding-bottom: 30px;
            padding-left: 18px;
            padding-right: 18px;
        }

        .hola {
            padding-left: 18px;
            padding-right: 18px;
            height: 82px;
            height: 82px;
        }

        .hola-h {
            margin-top: 20px;
        }

        h1 {
            font-size: 26px;
        }

        h2 {
            font-size: 20px;
        }

        p {
            font-size: 16px;
        }

        span {
            font-size: 16px;
        }

        .estrella {
            width: 60px;
            height: 60px;
        }

        .estrella-block {
            width: 100%;
        }

        .miga {
            font-size: 16px;
            margin-right: 10px;
        }

        .comentario {
            width: 100%;
            height: 150px;
            font-size: 16px;
        }

        .submit-div {
            width: 100%;
        }

        .boton-volver {
            width: 45%;
            font-size: 16px;
        }

        .boton-guardar {
            width: 45%;
            font-size: 16px;
        }
    }
</style>
