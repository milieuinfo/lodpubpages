<template>
    <header class="department-header">
        <div class="breadcrumbs">
            <a href="https://www.vlaanderen.be/nl" class="logo"></a>
            <slot></slot>
        </div>
        <div class="banner">
            <div class="banner-contents">
                <a class="logo" href="https://www.lne.be/"></a>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        data() {
            return {
            }
        }
    }
</script>

<style lang="scss">
    @import "../css/_variables";

    .department-header {
        @include box-shadow();

        .breadcrumbs {
            width: 100%;
            background-color: $white;
            line-height: 44px;
            height: 45px;

            font-family: $font-header-light;
            font-weight: bold;
            font-size: 15px;
            color: $header-color;
            border-bottom: 1px solid $border-color-dark;
            white-space: nowrap;
            overflow: hidden;

            a {
                color: $header-link-color !important;
                text-decoration: none;
                display: inline-block;
                vertical-align: middle;
                position: relative;
                padding-left: 1.5em;
                line-height: 45px;

                +a {
                    margin-left: 0.7em;

                    &:before {
                        display: block;
                        content: ' ';
                        position: absolute;
                        left: 0;
                        top: 10px;
                        bottom: 10px;
                        width: 1px;
                        background-color: $border-color-dark;
                        transform: rotate(-20deg);
                        transform-origin: top left;
                    }
                }

                &.logo {
                    background: transparent url(../img/breadcrumbs-logo.png) right -1px no-repeat;
                    background-size: contain;
                    height: 27px;
                    width: 28px;
                    padding: 0;
                    margin: 0;

                    +a {
                        margin-left: 0;

                        &:before {
                            left: -2px;
                            top: 0;
                            bottom: 0;
                        }
                    }
                }
            }
        }

        .banner {
            height: 132px;
            background: #fff url(../img/website-header-bg.png) center top no-repeat;
            overflow: hidden;

            @media (max-width: 845px) {
                background: #fff;
                border-bottom: 1px solid $border-color-green;
            }

            .banner-contents {
                @include layout();
                padding-top: 30px;

                .logo {
                    display: block;
                    background: transparent url(../img/logo-lne.png) 0 0 no-repeat;
                    width: 389px;
                    height: 76px;
                }
            }
        }
    }
</style>
