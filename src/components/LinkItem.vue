<script setup>
    defineProps({
        title: String,
        subTitle: String,
        icon: String
    });
</script>

<template>
    <div class="link-item">
        <div class="link-item-content">
            <div class="link-item-text">
                <h3 class="link-item-text-title">{{ title }}</h3>
                <p class="link-item-text-subtitle">{{ subTitle }}</p>
            </div>
            <span v-if="icon" class="link-item-icon">{{icon}}</span>
        </div>  
    </div>
</template>

<style scoped>
    .link-item {
        width: 475px;
        height: 75px;
        padding: 2px 2px 2px 2px;
        display: flex;
        justify-content: start;
        align-items: center;
        border-radius: 12px;
        background-color: #f2f2f2;
        box-sizing: border-box;

        transition: all 0.15s ease-in-out ;
    }

    .link-item:hover {
        scale: 1.02;
    }

    .link-item-content {
        padding-left: 30px;
        padding-right: 30px;
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .link-item-icon {
        font-size: 36px
    }

    .link-item-text {
        
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    .link-item-text-title {
        font-family: "Arial", sans-serif;
        color: #333333;
        font-weight: 700;
        font-size: 22px;
        line-height: normal;
    }

    .link-item-text-subtitle {
        font-family: "Arial", sans-serif;
        color: #333333;
        font-size: 18px;
        line-height: normal;
    }
</style>