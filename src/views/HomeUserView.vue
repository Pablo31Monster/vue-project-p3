<script setup>
    import LinkItem from '@/components/LinkItem.vue';
    import Modal from '@/components/Modal.vue';
    import { ref } from 'vue';

    const showPropuestas = ref(false);
    const showIdioma = ref(false);
</script>

<template>
    <main>
        <Modal :show="showPropuestas" @close="showPropuestas = false">
            <template #title>
                <h2>Todas tus propuestas</h2>
            </template>
            <template #body>
                <p>Estas son tus propuestas de programas de entrenamiento</p>
                <LinkItem class="mb-2" title="Futbol y más" sub-title="Comienza el 03/02/2025" icon="⚽"></LinkItem>  
                <LinkItem title="Keep dancing" sub-title="Quedan 2 días" icon="💃"></LinkItem>
                
            </template>
        </Modal>

        <Modal :show="showIdioma" @close="showIdioma = false">
            <template #title>
                <h2>Cambia tus ajustes de accesibilidad</h2>
            </template>
            <template #body>
                <p>Los cambios realizados se mantienen entre sesiones</p>
                <h3>Idioma</h3>
                <select>
                    <option value="es">Castellano</option>
                    <option value="en">Inglés (EE.UU.)</option>    
                    <option value="fr">Francés</option>
                    <option value="de">Alemán</option>
                </select>
                <div class="submit-div">
                    <button class="boton-guardar" @click="showIdioma = false">Guardar</button>
                    <p class="boton-cancelar" @click="showIdioma = false">Cancelar</p>
                </div>             
            </template>
        </Modal>

        <div class="hola">
            <h1 class="hola-h">Hola, Pablo</h1>
        </div>

        <div class="programas">
            <h1>Crear nuevo programa</h1>
            <LinkItem img="/src/assets/add.png"></LinkItem>  
            <h1>Tus programas</h1>
            <p>Actualmente tienes 5 programas de entrenamiento</p>

            <div class="flex-row">
                <LinkItem title="Fuerza a tope" icon="🦾‍"></LinkItem>  
                <LinkItem title="Velocidad extrema" sub-title="Comienza el 18/12/2024" icon="🏃‍"></LinkItem>  
            </div>
            <div class="flex-row">
                <LinkItem title="Futbol y más" sub-title="Comienza el 03/02/2025" icon="⚽"></LinkItem>  
            </div>
            <p class="link">Ver todos</p>
            <h1>Propuestas de programas</h1>
            <div class="rel">
                <LinkItem @click="showPropuestas = true" title="Ver todas las propuestas"></LinkItem>
                <div class="notis">2</div>
            </div>
        </div>

        <div class="puntos-estrella-div">
            <div class="bloque-puntos-estrella">
                <h1>Puntos estrella: 100 pts</h1>
                <p>Gana puntos estrella al registrarte y pagar tus entrenamientos. Canjéalos en las cantinas de nuestros centros por productos y servicios. ¡Aprovecha tus beneficios!</p>
                <p class="link">
                    Gestiona tus puntos
                </p>
            </div>
        </div>

        <div class="ajustes">
            <h1>Ajustes de la cuenta</h1>
            <h2>Pago</h2>
            <div class="pagos">
                <div class="pago">
                    <h3>Dirección de facturación</h3>
                    <p class="link">Editar</p>
                </div>
                <div>
                    <h3>Forma de pago</h3>
                    <p class="link">Editar</p>
                </div>
            </div>
            
            <h2>Privacidad</h2>
            <h3>Datos personales</h3>
            <p>Tú tienes el control de tus datos personales y puedes gestionarlos o borrar tu cuenta cuando quieras. Nos comprometemos a proteger tu privacidad.</p>
            <p class="link">Gestionar mis datos personales</p>
            <h2>Accesibilidad</h2>
            <h3>Idioma</h3>
            <p>Castellano</p>
            <p @click="showIdioma = true" class="link">Editar</p>
            <h2>Perfil</h2>
            <h3>Información de contacto</h3>
            <p>
                Pablo Ballesta Galvez<br>
                Calle mortero 2<br>
                30003 Murcia, Murcia,<br>
                España<br>
            </p>
            <p class="link">Editar</p>
            <h3>Correo electrónico</h3>
            <p>pablo.ballestar@um.es</p>
            <p class="link">Editar</p>
        </div>
    </main>
</template>

<style scoped>
    .submit-div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-top: 16px;
    }

    .boton-guardar {
        font-size: 18px;
        padding: 2px 2px 2px 2px;
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

    .boton-cancelar {
        font-size: 18px;
        padding: 2px 2px 2px 2px;
        background-color: rgba(255, 255, 255, 0);
        box-sizing: border-box;
        font-family: "Arial", sans-serif;
        color: #1e98d7;
        text-align: center;
        line-height: normal;
        margin-top: 10px;
        cursor: pointer;
    }

    select {
        padding: 2px 2px 2px 16px;
        border-radius: 12px;
        border: 1px solid #797979;
        background-color: #ffffff;
        box-sizing: border-box;
        font-family: "Arial", sans-serif;
        color: #000000;
        font-size: 18px;
        height: 50px;
    }


    .mb-2 {
        margin-bottom: 8px;
    }

    .pago{
        margin-right: 60px;
    }

    .pagos {
        display: flex;
        flex-direction: row;
    }

    .bloque-puntos-estrella {
        width: 510px;
        background-color: #ffffff;
        border-radius: 12px;
        padding: 24px;
    }

    .puntos-estrella-div {
        width: 100%;
        height: 308px;
        background-color: #f2f2f2;
        margin-top: 50px;
        margin-bottom: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .rel {
        position: relative;
        width: fit-content;
    }

    .notis {
        font-family: "Arial Bold", "Arial Normal", "Arial", sans-serif;
        font-weight: 700;
        color: #ffffff;
        text-align: center;
        line-height: normal;
        position: absolute;
        top: -10px;
        right: -10px;
        width: 36px;
        height: 36px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100%;
        font-size: 20px;
        padding: 2px 2px 2px 2px;
        background-color: #0071e3;
    }

    .link {
        color: #0071e3;
        text-decoration: underline;
        cursor: pointer;
    }

    .flex-row {
        position: relative;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-bottom: 16px;
    }

    p {
        font-family: "Arial", sans-serif;
        color: #333333;
        text-align: left;
        line-height: normal;
        font-size: 18px;
        margin-bottom: 16px;
    }

    .ajustes{
        width: 100%;
        display: flex;
        flex-direction: column;
        padding-left: 470px;
        padding-right: 470px;
        margin-bottom: 50px;
    }

    .programas {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding-left: 470px;
        padding-right: 470px;
    }

    .hola {
        display: flex;
        height: 150px;
        background-color: #f2f2f2;
        padding-left: 470px;
        padding-right: 470px;
    }

    .hola-h {
        margin-top: 90px;
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
    @media (max-width: 1000px) {
        .hola{
            padding: 0px 6.25%;
            height: 82px;
        }

        .hola-h {
            margin-top: 40px;
        }

        .programas{
            padding: 0px 6.25%;
        }

        .bloque-puntos-estrella {
            width: auto;
            margin: 0px 3.125%;
            padding: 24px 3.125%;
        }
        .ajustes{
            padding: 0px 6.25%;
        }
        
        .flex-row {
            flex-direction: column;
            margin-bottom: 0;
        }

        .link-item{
            margin-bottom: 16px;
        }
    }
</style>
