<template>
    <div class="ld-object" :class="{ bnode: bnode }">
        <ld-card v-if="bnode">
            <slot></slot>
        </ld-card>
        <slot v-else></slot>
    </div>
</template>

<script>
    export default {
        props: {
            bnode: Boolean
        },
        data() {
            return {
            }
        }
    }
</script>

<style lang="scss">
@import "../css/_variables";

.ld-object {
    display: block;
    line-height: 24px;
    margin: 0 12px;
    padding: 4px 0 6px 0;
    overflow: hidden;
    text-decoration: none;
    text-overflow: ellipsis;

    + .ld-object {
        border-top: 1px solid $grey;
    }

    &.bnode {
        overflow: visible;

        > .ld-card {
            padding: 8px;
        }
    }
}

</style>
