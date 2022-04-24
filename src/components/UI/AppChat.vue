<template>
    <div class="chat">
        <div class="chat__activator">
            <svg class="chat__svg" width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.16667 65.3333H16.3333V81.9974L37.1624 65.3333H57.1667C61.6706 65.3333 65.3333 61.6706 65.3333 57.1667V24.5C65.3333 19.9961 61.6706 16.3333 57.1667 16.3333H8.16667C3.66275 16.3333 0 19.9961 0 24.5V57.1667C0 61.6706 3.66275 65.3333 8.16667 65.3333Z" fill="#00A23D"/>
                <path d="M73.5 0H24.5C19.9961 0 16.3333 3.66275 16.3333 8.16667H65.3333C69.8372 8.16667 73.5 11.8294 73.5 16.3333V49C78.0039 49 81.6666 45.3372 81.6666 40.8333V8.16667C81.6666 3.66275 78.0039 0 73.5 0Z" fill="#00A23D"/>
            </svg>
            <AppButton class="chat__button">
                Написать нам
            </AppButton>
        </div>
        <div class="chat__container">
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
                <span class="chat__menu"></span>
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

        }
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
.chat__activator {
    display: flex;
    align-items: center;
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