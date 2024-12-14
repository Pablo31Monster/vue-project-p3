<script setup>

</script>

<template>
    <div class="footer">
        <a class="text info border-superior">Acerca de SportTraining</a>
        <a class="text info border-superior border-inferior">Valores de SportTraining</a>

        <div class="data-intermedia text">
            <a class="data-item text">
                Politica de privacidad
            </a>
            <a class="data-item data-tag text">
                Uso de cookies
            </a>
            <a class="data-item data-tag text">
                Condiciones de uso
            </a>
            <a class="data-item data-tag text">
                Reembolsos
            </a>
            <a class="data-item data-tag text">
                Avisos legales
            </a>
        </div>

        <span class="text info">Copyright © 2024 SportTraining SL</span>
    </div>
</template>

<style scoped>
    .footer {
        height: 265px;
        width: 100%;
        padding-top: 20px;
        padding-bottom: 20px;
        background-color: #f2f2f2;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .data-intermedia {
        width: 980px;
        display: flex;
        margin-top: 35px;
        margin-bottom: 35px;
        
    }

    .data-item {
        padding-right: 15px;
        background-color: #f2f2f2;
        padding-top: 0;
        padding-bottom: 0;
    }

    .data-tag {
        padding: 0 15px 0 15px;
        border-left: 1px solid #555555;
    }

    .text {
        font-size: 18px;
        font-family: "Arial", sans-serif;
        color: #555555;
    }

    .border-superior {
        border-top: 1px solid #aaaaaa;
    }

    .border-inferior {
        border-bottom: 1px solid #aaaaaa;
    }

    .info {
        display: flex;
        align-items: center;
        width: 980px;
        height: 34px;
        padding: 2px 2px 2px 2px;
        background-color: #f2f2f2;
        box-sizing: border-box;
        text-align: left;
        line-height: normal;
    }

    @media (max-width: 1000px) {
        .text {
            font-size: 16px;
        }
        .info {
            width: 338px;
            height: 34px;
        }
        .footer {
            height: fit-content;
        }

        .data-item {
            margin-bottom: 3px;
        }

        .data-intermedia {
            width: 338px;
            flex-wrap: wrap;
            justify-content: start;
            align-items: center;
        }
    }
</style>
