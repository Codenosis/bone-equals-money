<script setup lang="ts">
import upgrades from './Upgrades'
</script>

<template>
    <ul>
        <li v-for="upgrade in upgrades">
            <button type="button">
                <div>
                    {{ upgrade.name }}
                </div>
                <div>
                    {{ upgrade.basePrice }}
                </div>
            </button>
        </li>
    </ul>
</template>

<style scoped>
ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}
</style>