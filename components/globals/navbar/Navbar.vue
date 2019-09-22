<template>
    <header id="header">
        <nuxt-link class="logo" to="/">Herolo Cinema</nuxt-link>
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
        <ul class="menu">
            <li><nuxt-link to="/">List</nuxt-link></li>
            <li><nuxt-link to="/add">Add movie</nuxt-link></li>
        </ul>
    </header>
</template>

<style lang="scss" scoped>
    #header {
        background-color: rgb(86, 129, 185);
        box-shadow: 1px 2px 5px 0 rgba(0, 0, 0, 0.3);
        position: fixed;
        width: 100%;
        z-index: 3;
        top: 0;

        a {
            color: white;
        }
        ul {
            margin: 0;
            padding: 0;
            list-style: none;
            overflow: hidden;
            background-color: rgb(86, 129, 185);

            li a {
                display: block;
                padding: 20px 20px;
                // border-right: 1px solid rgb(86, 129, 185);
                text-decoration: none;

                &:hover {
                      background-color: rgb(78, 108, 148);
                }
            }
        }

        .menu-btn:hover {
            background-color: rgb(78, 108, 148);
        }
        .logo {
            display: block;
            float: left;
            font-size: 2em;
            padding: 10px 20px;
            text-decoration: none;
        }
        .menu {
            clear: both;
            max-height: 0;
            transition: max-height .2s ease-out;
        }
        .menu-icon {
            cursor: pointer;
            display: inline-block;
            float: right;
            padding: 28px 20px;
            position: relative;
            user-select: none;

            .navicon {
                background: white;
                display: block;
                height: 2px;
                position: relative;
                transition: background .2s ease-out;
                width: 18px;

                &:before, &:after {
                    background: white;
                    content: '';
                    display: block;
                    height: 100%;
                    position: absolute;
                    transition: all .2s ease-out;
                    width: 100%;
                }
                &:before {
                    top: 5px;
                }
                &:after {
                    top: -5px;
                }
            }
        }
        .menu-btn {
            display: none;

            &:checked ~ {
                .menu {
                    max-height: 240px;
                }
                .menu-icon {
                    .navicon {
                        background: transparent;

                        &:before {
                            transform: rotate(-45deg);
                        }
                        &:after {
                            transform: rotate(45deg);
                        }
                    }
                    &:not(.steps) .navicon {
                        &:before, &:after {
                            top: 0;
                        }
                    }
                }
            }
        }
        @media (min-width: 48em) {
            li {
                float: left;
                
                a {
                    padding: 20px 30px;
                }
            }
            .menu {
                clear: none;
                float: right;
                max-height: none;
            }
            .menu-icon {
                display: none;
            }
        }
    }
</style>