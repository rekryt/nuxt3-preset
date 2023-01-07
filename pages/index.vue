<script lang="ts">
export default {
    setup() {
        const count = ref(1);
        const incCount = () => (count.value = count.value + 1);
        const double = computed(() => count.value * 2);
        return { count, incCount, double };
    },
};
</script>

<template>
    <div class="cardList">
        <div v-for="i in 12" :key="i" class="cardList-wrapper">
            <div class="cardList-item">
                <img
                    class="cardList-itemImage"
                    src="https://tailwindcss.com/img/card-top.jpg"
                    alt="Sunset in the mountains"
                />
                <div class="cardList-itemContent">
                    <div class="cardList-itemLabel">The Coldest Sunset</div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
                        perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
                <div class="cardList-itemTags">
                    <span class="cardList-itemTagsBadge">#photography</span>
                    <span class="cardList-itemTagsBadge">#travel</span>
                    <span class="cardList-itemTagsBadge">#winter</span>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.cardList {
    @apply flex flex-wrap -mx-2;
    &-wrapper {
        @apply px-2;
        @apply flex-12;
        @screen md {
            @apply flex-6;
        }
        @screen lg {
            @apply flex-4;
        }
        @screen xl {
            @apply flex-3;
        }
    }
    &-item {
        @apply dark:bg-gray-100;
        @apply rounded overflow-hidden shadow-lg;
        @apply mb-4;
        &Image {
            @apply w-full;
        }
        &Content {
            @apply px-6 py-4 pb-2 text-base;
        }
        &Label {
            @apply font-bold text-xl mb-2;
        }
        &Tags {
            @apply px-6 py-4;
            &Badge {
                @apply mr-2;
                &:last-child {
                    @apply mr-0;
                }
            }
        }
    }
}
</style>
