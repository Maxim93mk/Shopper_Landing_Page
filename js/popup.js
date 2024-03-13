const popup = document.createElement('div');

const content = `    
                <!-- welcome-popup -->
                <section>
                    <div class="welcome-popup">
                        <div class="welcome-popup__wrapper">
                            <h3 class="title_primary__h3 welcome-popup__wrapper_text">Приветствую! Добро пожаловать на маркетплейс!</h3>
                            <button class="btns_rect welcome-popup__wrapper_btn">Закрыть и больше не показывать</button>
                        </div>
                    </div>
                </section>
                `
popup.insertAdjacentHTML('afterbegin', content);
document.body.insertAdjacentHTML('afterbegin', popup);

const close_btn = document.querySelector('.welcome-popup__wrapper_btn')
