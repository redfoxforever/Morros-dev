<template>
    <button class="join-btn yellow-btn">{{ btnText }}</button>  
</template>

<script>

export default {
    name: 'Join Button',
    props: {
        btnText: {
            type: String,
            default: 'join now'
        }
    }
}

</script>

<style lang="scss" scoped>
</style>