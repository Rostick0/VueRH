<template>
    <div class="chat">
        <div class="chat__activator">
            <svg class="chat__svg" width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.16667 65.3333H16.3333V81.9974L37.1624 65.3333H57.1667C61.6706 65.3333 65.3333 61.6706 65.3333 57.1667V24.5C65.3333 19.9961 61.6706 16.3333 57.1667 16.3333H8.16667C3.66275 16.3333 0 19.9961 0 24.5V57.1667C0 61.6706 3.66275 65.3333 8.16667 65.3333Z" fill="#00A23D"/>
                <path d="M73.5 0H24.5C19.9961 0 16.3333 3.66275 16.3333 8.16667H65.3333C69.8372 8.16667 73.5 11.8294 73.5 16.3333V49C78.0039 49 81.6666 45.3372 81.6666 40.8333V8.16667C81.6666 3.66275 78.0039 0 73.5 0Z" fill="#00A23D"/>
                <path d="M18.1429 37H13.8571L11 41.0625L13.8571 45.125H18.1429L21 41.0625L18.1429 37Z" fill="white"/>
                <path d="M35.1429 37H30.8571L28 41.0625L30.8571 45.125H35.1429L38 41.0625L35.1429 37Z" fill="white"/>
                <path d="M52.1429 37H47.8571L45 41.0625L47.8571 45.125H52.1429L55 41.0625L52.1429 37Z" fill="white"/>
            </svg>
            <AppButton class="chat__button" v-on:click="setShow">
                Написать нам
            </AppButton>
        </div>
        <div v-show="this.show" class="chat__container">
            <div class="chat__container_top">
                <div class="chat__img">
                    <img src="@/img/chat_avatar.png" alt="">
                </div>
                <div class="chat__">
                    <div class="chat__online">
                        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.57143 0H3.42857L0 5L3.42857 10H8.57143L12 5L8.57143 0Z" fill="#00A23D"/>
                        </svg>
                        <span>
                            Мы онлайн
                        </span>
                    </div>
                    <div class="chat__online_write">
                        Напишите нам
                    </div>
                </div>
                <span class="chat__menu">
                    <span></span>
                </span>
            </div>

            <div class="chat__messages">
                <div class="chat__message chat__message_for-me">
                    Здравствуйте! Чем я могу Вам 
                    помочь?
                </div>
                <div class="chat__message chat__message_from-me">
                    Здравствуйте) Хотела бы 
                    поблагодарить вас, за вкусный мед!
                </div>
                <div class="chat__message chat__message_for-me">
                    Спасибо) Мы рады, что мед 
                    пришелся Вам по вкусу! 
                </div>
            </div>

            <div class="chat__container_bottom">
                <AppInput class="chat__input" placeholder="Введите текст сообщения"></AppInput>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppChat',
    data() {
        return {
            show: false
        }
    },
    methods: {
        setShow() {
            return this.show = !this.show
        }
    }
}
</script>

<style lang="scss" scoped>
.chat {
    max-width: 20rem;

    @media (max-width: 576px) {
        & {
            display: none;
        }
    }
}

.chat__activator {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 1.5rem;

    transition: 2000ms;
}

.chat__svg {
    margin-right: 0.625rem;
}

.chat__button {
    padding: 1rem 1.25rem;
}

.chat__container {
    background: #FFFFFF;
    border: 2px solid #00A23D;
    border-radius: 5px;

    padding: 1.5rem 1.375rem;

    animation: appearance;
    animation-duration: 200ms;
}

@keyframes appearance {
    0% {
        height: 0;
        opacity: 0;
    }
    100% {
        height: 100%;
        opacity: 1;
    }
}

.chat__container_top {
    display: flex;
}

.chat__img {
    margin-right: 1rem;
}

.chat__online {
    margin-bottom: 0.31rem;
}

.chat__online_write {
    font-size: 0.875rem;
}

.chat__menu {
    cursor: pointer;

    display: flex;
    flex-direction: column;

    position: relative;

    margin-left: auto;

    span {
        background: #00A23D;

        margin-bottom: 0.31rem;

        width: 0.875rem;
        height: 2px;
    }

    &::before {
        content: "";

        background: #00A23D;

        display: block;
        
        margin-bottom: 0.31rem;

        width: 100%;
        height: 2px;
    }

    &::after {
        content: "";

        background: #00A23D;

        display: block;

        width: 100%;
        height: 2px;
    }
}

.chat__messages {
    display: flex;
    flex-direction: column;

    padding: 1.125rem 0;

    max-height: 17.5rem;

    overflow-y: auto;
}

.chat__message {
    border: 1px solid #00A23D;
    border-radius: 5px;

    margin-bottom: 1.25rem;
    padding: 0.625rem;

    width: 90%;

    &:last-child {
        margin-bottom: 0;
    }
}

.chat__message_from-me {
    background: #00A23D;
    color: #FFFFFF;

    margin-left: auto;
}

.chat__container_bottom {
    display: flex;
    align-items: center;

    position: relative;

    &::before {
        content: url("../../img/chat_smile.svg");
        display: block;

        right: 2.75rem;

        position: absolute;
    }

    &::after {
        content: url("../../img/chat_paper-clip.svg");
        display: block;

        right: 1.375rem;

        position: absolute;
    }
}

.chat__input {
    padding: 0.81rem 4rem 0.81rem 0.875rem;
}
</style>