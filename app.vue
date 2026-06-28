<script setup lang="ts">
const config = useRuntimeConfig()
const accent = config.public.accent as string
const showWorks = config.public.showWorks as boolean

const { telHref, phoneDisplay } = useContacts()

// The original component only overrode the --accent CSS variable; keep that behaviour.
// Injecting it via useHead avoids a flash of the default colour on SSR hydration.
useHead({
  style:
    accent && accent !== '#e0922a'
      ? [{ id: 'accent-override', innerHTML: `:root{--accent:${accent}}` }]
      : [],
})
</script>

<template>
  <TheHeader />

  <main id="top">
    <!-- HERO -->
    <section class="hero">
      <img class="hero-img" src="/assets/hero-gensets.png" alt="Дизельные генераторные установки" />
      <div class="hero-veil"></div>
      <div class="hero-veil2"></div>
      <div class="wrap hero-wrap">
        <div class="hero-inner">
          <span class="hero-loc"><b>●</b> Анапа и Анапский район</span>
          <h1 class="hero-h1">Монтаж, обслуживание и <span class="am">ремонт</span> дизельных генераторов</h1>
          <p class="hero-p">Дизельные генераторные установки мощностью свыше 15 кВт. Выезд, точная диагностика и устранение неисправностей — с гарантией результата.</p>
          <div class="hero-cta">
            <a class="btn btn-amber" :href="telHref">Вызвать специалиста</a>
            <a class="btn btn-ghost" href="#to">Регламент ТО</a>
          </div>
        </div>
      </div>
      <div class="hero-strip">
        <div class="wrap strip-row">
          <div class="strip-i"><div class="strip-k">29 лет суммарного опыта</div><div class="strip-v">Инженер-электрик и мастер по дизельным двигателям</div></div>
          <div class="strip-i"><div class="strip-k">От 15 до 1 000 кВт</div><div class="strip-v">Обслуживаем установки любой мощности</div></div>
          <div class="strip-i"><div class="strip-k">Не нашли причину — 0 ₽</div><div class="strip-v">Платите только за результат</div></div>
        </div>
      </div>
    </section>

    <!-- TEAM -->
    <section class="sec" id="team">
      <div class="wrap">
        <p class="eyebrow"><span class="eb-line"></span>Наши специалисты</p>
        <h2 class="sec-title">Кто будет работать<br />с вашим генератором</h2>
        <div class="team-grid">
          <div class="spec">
            <img class="spec-photo" src="/assets/spec-kishishyan.jpg" alt="Кишишьян Дмитрий Олегович" />
            <div class="spec-body">
              <span class="spec-role">Инженер · Электроснабжение</span>
              <h3 class="spec-name">Кишишьян<br />Дмитрий Олегович</h3>
              <p class="spec-edu"><b>Образование:</b> Кубанский Государственный Технологический Университет, 2012 г.</p>
              <p class="spec-edu"><b>Специальность:</b> инженер по специальности «Электроснабжение»</p>
              <div class="spec-exp"><span class="spec-num">14</span><span class="spec-lbl">лет опыта<br />по специальности</span></div>
            </div>
          </div>
          <div class="spec">
            <img class="spec-photo" src="/assets/spec-yankin.jpg" alt="Янкин Юрий Юрьевич" />
            <div class="spec-body">
              <span class="spec-role">Мастер · Дизельные двигатели</span>
              <h3 class="spec-name">Янкин<br />Юрий Юрьевич</h3>
              <p class="spec-edu"><b>Образование:</b> Хабаровский Автодорожный Техникум, 1986 г.</p>
              <p class="spec-edu"><b>Квалификация:</b> мастер по ремонту и обслуживанию дизельных двигателей</p>
              <div class="spec-exp"><span class="spec-num">15</span><span class="spec-lbl">лет опыта<br />по специальности</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SERVICES -->
    <section class="sec" id="services" style="background:var(--paper2);border-top:1px solid var(--line);border-bottom:1px solid var(--line)">
      <div class="wrap">
        <p class="eyebrow"><span class="eb-line"></span>Что мы делаем</p>
        <h2 class="sec-title">Полный цикл работ по ДГУ</h2>
        <p class="sec-sub">От установки «под ключ» до планового обслуживания и аварийного ремонта дизельных генераторных установок свыше 15 кВт.</p>
        <div class="svc-grid">
          <div class="svc"><div class="svc-n">01</div><h3 class="svc-t">Монтаж</h3><p class="svc-d">Установка ДГУ «под ключ»: строительные и монтажные работы, подключение к потребителю электроэнергии. Выезд на место и расчёт — бесплатно.</p></div>
          <div class="svc"><div class="svc-n">02</div><h3 class="svc-t">Обслуживание</h3><p class="svc-d">Плановое ТО по регламенту ТО-1, ТО-2 и ТО-3 с расходными материалами Исполнителя. Объём работ согласовывается под каждый генератор.</p></div>
          <div class="svc"><div class="svc-n">03</div><h3 class="svc-t">Ремонт</h3><p class="svc-d">Выезд на неработающую ДГУ, точная диагностика и устранение неисправности. Если причину не нашли — работа бесплатно.</p></div>
        </div>
      </div>
    </section>

    <!-- WORKS (toggled via NUXT_PUBLIC_SHOW_WORKS) -->
    <section v-if="showWorks" class="sec dark" id="works">
      <div class="wrap">
        <p class="eyebrow"><span class="eb-line"></span>Наши работы</p>
        <h2 class="sec-title">Смотрите, как мы работаем</h2>
        <div class="works-grid">
          <WorkVideo src="/assets/video-1.mp4" poster="/assets/video-1.jpg" />
          <WorkVideo src="/assets/video-2.mp4" poster="/assets/video-2.jpg" />
        </div>
      </div>
    </section>

    <!-- MAINTENANCE (ТО) -->
    <section class="sec dark" id="to" style="background:var(--ink2)">
      <div class="wrap">
        <div class="to-intro">
          <div>
            <p class="eyebrow"><span class="eb-line"></span>Регламент технического обслуживания</p>
            <h2 class="sec-title">Три уровня ТО<br />дизельной установки</h2>
          </div>
          <p class="sec-sub">Все работы выполняются с использованием расходных материалов Исполнителя. Объём согласовывается индивидуально под каждый генератор.</p>
        </div>
        <div class="to-grid">
          <div class="to">
            <div class="to-head"><span class="to-code">ТО-1</span><span class="to-badge">1 раз в год<br />или 250 мото-часов</span></div>
            <div class="sys"><p class="sys-h"><i></i>Система охлаждения</p><p class="sys-p">Мойка радиатора снаружи, натяжка ремня вентилятора.</p></div>
            <div class="sys"><p class="sys-h"><i></i>Масляная система</p><p class="sys-p">Прогрев двигателя, слив и замена масла, замена фильтров, протяжка всех присоединений.</p></div>
            <div class="sys"><p class="sys-h"><i></i>Топливная и воздушная системы</p><p class="sys-p">Протяжка присоединений, разборка и чистка корпуса воздушного фильтра, продувка компрессором.</p></div>
            <div class="sys"><p class="sys-h"><i></i>Генератор и система пуска</p><p class="sys-p">Протяжка силовых контактов и цепей управления, продувка обмоток, обслуживание АКБ.</p></div>
            <div class="sys"><p class="sys-h"><i></i>Наведение порядка и испытание</p><p class="sys-p">Мойка кожуха, двигателя, рамы и бака, продувка от влаги, испытание ДГУ и АВР в автоматическом режиме.</p></div>
          </div>
          <div class="to">
            <div class="to-head"><span class="to-code">ТО-2</span><span class="to-badge">1 раз в 2 года<br />или 500 мото-часов</span></div>
            <p class="to-extra">В объёме ТО-1, дополнительно:</p>
            <div class="sys"><p class="sys-h"><i></i>Топливная система</p><p class="sys-p">Разборка насоса подкачки топлива, промывка и чистка клапанов на заборе и подаче топлива.</p></div>
            <div class="sys"><p class="sys-h"><i></i>Замена узлов</p><p class="sys-p">Установка насоса подкачки с заменой уплотнительных прокладок, замена топливных шлангов.</p></div>
            <div class="sys"><p class="sys-h"><i></i>Фильтры</p><p class="sys-p">Замена топливного и воздушного фильтров.</p></div>
          </div>
          <div class="to">
            <div class="to-head"><span class="to-code">ТО-3</span><span class="to-badge">1 раз в 3 года<br />или 2 000 мото-часов</span></div>
            <p class="to-extra">В объёме ТО-2, дополнительно:</p>
            <div class="sys"><p class="sys-h"><i></i>Система охлаждения</p><p class="sys-p">Слив старого антифриза, замена шлангов подогрева антифриза.</p></div>
            <div class="sys"><p class="sys-h"><i></i>Заправка</p><p class="sys-p">Заправка системы новым антифризом.</p></div>
            <p class="to-foot"><span style="color:var(--accent)">✦</span> Полный перечень операций и стоимость рассчитываются по согласованному объёму работ.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- PRICING -->
    <section class="sec" id="price">
      <div class="wrap">
        <p class="eyebrow"><span class="eb-line"></span>Стоимость работ</p>
        <h2 class="sec-title">Честные цены<br />и оплата за результат</h2>
        <div class="price-grid">
          <div class="price feat">
            <div class="price-k">Вызов специалиста</div>
            <div class="price-amt">5 000 <small>₽</small></div>
            <p class="price-d">На неработающую ДГУ по Анапскому району. Входит выезд и устранение неисправности либо точная диагностика. Свыше 2 часов — каждый последующий час 2 000 ₽.</p>
            <div class="price-tag">Анапский район</div>
          </div>
          <div class="price">
            <div class="price-k">Техническое обслуживание</div>
            <div class="price-amt">25 000 – 200 000 <small>₽</small></div>
            <p class="price-d">Для ДГУ от 15 до 1 000 кВт. Рассчитывается индивидуально под генератор, объём работ, количество масла и антифриза, состояние шлангов и степень загрязнения.</p>
            <div class="price-tag">Осмотр и расчёт — бесплатно</div>
          </div>
          <div class="price">
            <div class="price-k">Монтаж ДГУ</div>
            <div class="price-amt">Индивидуально</div>
            <p class="price-d">Зависит от объёма строительных и монтажных работ и удалённости расположения ДГУ до потребителя электрической энергии.</p>
            <div class="price-tag">Выезд и расчёт — бесплатно</div>
          </div>
        </div>
        <div class="guarantee">
          <div class="guar-l">
            <div class="guar-num">0₽</div>
            <div><h3 class="guar-t">Не устранили — не берём денег</h3><p class="guar-p">Если мы не устраним неисправность и не сможем установить точную причину поломки — стоимость нашей работы составит 0 рублей.</p></div>
          </div>
          <a class="btn btn-dark" :href="telHref">Вызвать специалиста</a>
        </div>
      </div>
    </section>

    <!-- CONTACTS -->
    <section class="sec dark" id="contacts">
      <div class="wrap">
        <div class="contact-grid">
          <div>
            <p class="eyebrow"><span class="eb-line"></span>Контакты</p>
            <div class="c-name">Дмитрий</div>
            <a class="c-phone" :href="telHref">{{ phoneDisplay }}</a>
            <div class="c-list">
              <div class="c-item"><div class="c-ic dot"><i></i></div><div><div class="c-k">Режим работы</div><div class="c-v">Пн–Вс, 08:00 – 22:00</div></div></div>
              <div class="c-item"><div class="c-ic"><i></i></div><div><div class="c-k">Зона выезда</div><div class="c-v">Анапа и Анапский район</div></div></div>
            </div>
          </div>
          <div class="c-card">
            <h3>Нужен генератор «на ходу»?</h3>
            <p>Позвоните — выезд на место установки, осмотр и расчёт стоимости бесплатны. Точную диагностику и устранение неисправности выполним в день обращения.</p>
            <a class="btn btn-amber" :href="telHref" style="width:100%">Позвонить сейчас</a>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="foot">
    <div class="wrap foot-row">
      <div class="foot-b"><span class="brand-mark" style="width:36px;height:36px;font-size:15px">АГ</span><span class="foot-name">Анапа-Генератор</span></div>
      <div class="foot-meta">Монтаж · Обслуживание · Ремонт дизельных генераторных установок · Анапа</div>
      <div class="foot-meta">© 2026 Анапа-Генератор</div>
    </div>
  </footer>
</template>
