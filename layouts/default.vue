<script lang="ts" setup>
const theme = useTheme();
</script>
<template>
    <div>
        <header>
            <div class="layout mx-auto">
                <div class="flex">
                    <nuxt-link to="/" class="flex items-center mr-4">Site Name</nuxt-link>
                    <div>
                        <select v-model="theme" class="border w-24 h-8">
                            <option value="system">System</option>
                            <option value="light">Light</option>
                            <option value="dark">Dark</option>
                        </select>
                    </div>
                </div>
            </div>
        </header>
        <main>
            <div class="layout">
                <slot></slot>
            </div>
        </main>
        <footer>
            <div class="layout">
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet architecto commodi
                    corporis, facere facilis, inventore ipsam nam, nostrum odio quae quaerat repellat veniam. Commodi
                    ducimus harum impedit numquam qui?
                </div>
            </div>
        </footer>
    </div>
</template>
<style lang="scss">
@use 'sass:math';
@import 'assets/scss/default.scss';
.layout {
    @apply max-w-full mx-auto;
    @screen md {
        max-width: 768px + math.div(768px, 10px);
    }
    @screen lg {
        max-width: 1024px + math.div(1024px, 10px);
    }
    @screen xl {
        max-width: 1440px + math.div(1440px, 10px);
    }
}
</style>
