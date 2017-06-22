Vue.component('vue-navigation', {
    template: `
<div class="navigation">
                    <div class="nav-logo">
                        <a href="index.html"><img src="./img/taufit-logo.svg" alt=""></a>
                    </div>

                    <div class="nav-center">
                        <a href="index.html">
                            <div class="nav">ГЛАВНАЯ</div>
                        </a>
                        <a href="club.html">
                            <div class="nav">О КЛУБЕ</div>
                        </a>
                        <a href="fitness-center.html">
                            <div class="nav">ФИТНЕС ЦЕНТР</div>
                        </a>
                        <a href="reabilitation-center.html">
                            <div class="nav">РЕАБИЛИТАЦИОННЫЙ ЦЕНТР</div>
                        </a>
                        <a href="news.html">
                            <div class="nav">НОВОСТИ</div>
                        </a>
                        <a href="contacts.html">
                            <div class="nav">КОНТАКТЫ</div>
                        </a>
                    </div>

                    <div class="nav-address">
                        <p>+7 727 301 30 00</p>
                        <p>+7 708 480 60 36</p>
                        <span>заказать звонок</span>
                    </div>

                </div>
`

})

Vue.component('vue-head-icons', {
    template: `
<div class="head-icons">

                        <!-- instagram -->
                        <a href=""><svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 169.063 169.063" style="enable-background:new 0 0 169.063 169.063;" xml:space="preserve">
                <g>
                    <path d="M122.406,0H46.654C20.929,0,0,20.93,0,46.655v75.752c0,25.726,20.929,46.655,46.654,46.655h75.752
                        c25.727,0,46.656-20.93,46.656-46.655V46.655C169.063,20.93,148.133,0,122.406,0z M154.063,122.407
                        c0,17.455-14.201,31.655-31.656,31.655H46.654C29.2,154.063,15,139.862,15,122.407V46.655C15,29.201,29.2,15,46.654,15h75.752
                        c17.455,0,31.656,14.201,31.656,31.655V122.407z"/>
                    <path d="M84.531,40.97c-24.021,0-43.563,19.542-43.563,43.563c0,24.02,19.542,43.561,43.563,43.561s43.563-19.541,43.563-43.561
                        C128.094,60.512,108.552,40.97,84.531,40.97z M84.531,113.093c-15.749,0-28.563-12.812-28.563-28.561
                        c0-15.75,12.813-28.563,28.563-28.563s28.563,12.813,28.563,28.563C113.094,100.281,100.28,113.093,84.531,113.093z"/>
                    <path d="M129.921,28.251c-2.89,0-5.729,1.17-7.77,3.22c-2.051,2.04-3.23,4.88-3.23,7.78c0,2.891,1.18,5.73,3.23,7.78
                        c2.04,2.04,4.88,3.22,7.77,3.22c2.9,0,5.73-1.18,7.78-3.22c2.05-2.05,3.22-4.89,3.22-7.78c0-2.9-1.17-5.74-3.22-7.78
                        C135.661,29.421,132.821,28.251,129.921,28.251z"/>
                </g>
                </svg></a>

                        <!-- facebook-->
                        <a href=""><svg version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 96.124 96.123" style="enable-background:new 0 0 96.124 96.123;" xml:space="preserve">
                <g>
                    <path d="M72.089,0.02L59.624,0C45.62,0,36.57,9.285,36.57,23.656v10.907H24.037c-1.083,0-1.96,0.878-1.96,1.961v15.803
                        c0,1.083,0.878,1.96,1.96,1.96h12.533v39.876c0,1.083,0.877,1.96,1.96,1.96h16.352c1.083,0,1.96-0.878,1.96-1.96V54.287h14.654
                        c1.083,0,1.96-0.877,1.96-1.96l0.006-15.803c0-0.52-0.207-1.018-0.574-1.386c-0.367-0.368-0.867-0.575-1.387-0.575H56.842v-9.246
                        c0-4.444,1.059-6.7,6.848-6.7l8.397-0.003c1.082,0,1.959-0.878,1.959-1.96V1.98C74.046,0.899,73.17,0.022,72.089,0.02z"/>
                </g>
                </svg></a>

                        <!-- vk -->
                <a href=""><svg version="1.1" class="head-vk" x="0px" y="0px" viewBox="0 0 548.358 548.358" style="enable-background:new 0 0 548.358 548.358;" xml:space="preserve">
                <g>
                <path d="M545.451,400.298c-0.664-1.431-1.283-2.618-1.858-3.569c-9.514-17.135-27.695-38.167-54.532-63.102l-0.567-0.571
                    l-0.284-0.28l-0.287-0.287h-0.288c-12.18-11.611-19.893-19.418-23.123-23.415c-5.91-7.614-7.234-15.321-4.004-23.13
                    c2.282-5.9,10.854-18.36,25.696-37.397c7.807-10.089,13.99-18.175,18.556-24.267c32.931-43.78,47.208-71.756,42.828-83.939
                    l-1.701-2.847c-1.143-1.714-4.093-3.282-8.846-4.712c-4.764-1.427-10.853-1.663-18.278-0.712l-82.224,0.568
                    c-1.332-0.472-3.234-0.428-5.712,0.144c-2.475,0.572-3.713,0.859-3.713,0.859l-1.431,0.715l-1.136,0.859
                    c-0.952,0.568-1.999,1.567-3.142,2.995c-1.137,1.423-2.088,3.093-2.848,4.996c-8.952,23.031-19.13,44.444-30.553,64.238
                    c-7.043,11.803-13.511,22.032-19.418,30.693c-5.899,8.658-10.848,15.037-14.842,19.126c-4,4.093-7.61,7.372-10.852,9.849
                    c-3.237,2.478-5.708,3.525-7.419,3.142c-1.715-0.383-3.33-0.763-4.859-1.143c-2.663-1.714-4.805-4.045-6.42-6.995
                    c-1.622-2.95-2.714-6.663-3.285-11.136c-0.568-4.476-0.904-8.326-1-11.563c-0.089-3.233-0.048-7.806,0.145-13.706
                    c0.198-5.903,0.287-9.897,0.287-11.991c0-7.234,0.141-15.085,0.424-23.555c0.288-8.47,0.521-15.181,0.716-20.125
                    c0.194-4.949,0.284-10.185,0.284-15.705s-0.336-9.849-1-12.991c-0.656-3.138-1.663-6.184-2.99-9.137
                    c-1.335-2.95-3.289-5.232-5.853-6.852c-2.569-1.618-5.763-2.902-9.564-3.856c-10.089-2.283-22.936-3.518-38.547-3.71
                    c-35.401-0.38-58.148,1.906-68.236,6.855c-3.997,2.091-7.614,4.948-10.848,8.562c-3.427,4.189-3.905,6.475-1.431,6.851
                    c11.422,1.711,19.508,5.804,24.267,12.275l1.715,3.429c1.334,2.474,2.666,6.854,3.999,13.134c1.331,6.28,2.19,13.227,2.568,20.837
                    c0.95,13.897,0.95,25.793,0,35.689c-0.953,9.9-1.853,17.607-2.712,23.127c-0.859,5.52-2.143,9.993-3.855,13.418
                    c-1.715,3.426-2.856,5.52-3.428,6.28c-0.571,0.76-1.047,1.239-1.425,1.427c-2.474,0.948-5.047,1.431-7.71,1.431
                    c-2.667,0-5.901-1.334-9.707-4c-3.805-2.666-7.754-6.328-11.847-10.992c-4.093-4.665-8.709-11.184-13.85-19.558
                    c-5.137-8.374-10.467-18.271-15.987-29.691l-4.567-8.282c-2.855-5.328-6.755-13.086-11.704-23.267
                    c-4.952-10.185-9.329-20.037-13.134-29.554c-1.521-3.997-3.806-7.04-6.851-9.134l-1.429-0.859c-0.95-0.76-2.475-1.567-4.567-2.427
                    c-2.095-0.859-4.281-1.475-6.567-1.854l-78.229,0.568c-7.994,0-13.418,1.811-16.274,5.428l-1.143,1.711
                    C0.288,140.146,0,141.668,0,143.763c0,2.094,0.571,4.664,1.714,7.707c11.42,26.84,23.839,52.725,37.257,77.659
                    c13.418,24.934,25.078,45.019,34.973,60.237c9.897,15.229,19.985,29.602,30.264,43.112c10.279,13.515,17.083,22.176,20.412,25.981
                    c3.333,3.812,5.951,6.662,7.854,8.565l7.139,6.851c4.568,4.569,11.276,10.041,20.127,16.416
                    c8.853,6.379,18.654,12.659,29.408,18.85c10.756,6.181,23.269,11.225,37.546,15.126c14.275,3.905,28.169,5.472,41.684,4.716h32.834
                    c6.659-0.575,11.704-2.669,15.133-6.283l1.136-1.431c0.764-1.136,1.479-2.901,2.139-5.276c0.668-2.379,1-5,1-7.851
                    c-0.195-8.183,0.428-15.558,1.852-22.124c1.423-6.564,3.045-11.513,4.859-14.846c1.813-3.33,3.859-6.14,6.136-8.418
                    c2.282-2.283,3.908-3.666,4.862-4.142c0.948-0.479,1.705-0.804,2.276-0.999c4.568-1.522,9.944-0.048,16.136,4.429
                    c6.187,4.473,11.99,9.996,17.418,16.56c5.425,6.57,11.943,13.941,19.555,22.124c7.617,8.186,14.277,14.271,19.985,18.274
                    l5.708,3.426c3.812,2.286,8.761,4.38,14.853,6.283c6.081,1.902,11.409,2.378,15.984,1.427l73.087-1.14
                    c7.229,0,12.854-1.197,16.844-3.572c3.998-2.379,6.373-5,7.139-7.851c0.764-2.854,0.805-6.092,0.145-9.712
                    C546.782,404.25,546.115,401.725,545.451,400.298z"/>
                </g>
                </svg>
                </a>

                    </div>
`

})

Vue.component('vue-footer', {
    template: `
<footer class="footer">
            <div class="wrap">
                <div class="footation">
                    <div class="foot-left">
                        <a href=""><img src="./img/taufit-logo.svg" alt=""></a>

                        <div class="foot-icons">

                            <!-- instagram -->
                            <a href=""><svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 169.063 169.063" style="enable-background:new 0 0 169.063 169.063;" xml:space="preserve">
                        <g>
                        <path d="M122.406,0H46.654C20.929,0,0,20.93,0,46.655v75.752c0,25.726,20.929,46.655,46.654,46.655h75.752
                        c25.727,0,46.656-20.93,46.656-46.655V46.655C169.063,20.93,148.133,0,122.406,0z M154.063,122.407
                        c0,17.455-14.201,31.655-31.656,31.655H46.654C29.2,154.063,15,139.862,15,122.407V46.655C15,29.201,29.2,15,46.654,15h75.752
                        c17.455,0,31.656,14.201,31.656,31.655V122.407z"/>
                        <path d="M84.531,40.97c-24.021,0-43.563,19.542-43.563,43.563c0,24.02,19.542,43.561,43.563,43.561s43.563-19.541,43.563-43.561
                        C128.094,60.512,108.552,40.97,84.531,40.97z M84.531,113.093c-15.749,0-28.563-12.812-28.563-28.561
                        c0-15.75,12.813-28.563,28.563-28.563s28.563,12.813,28.563,28.563C113.094,100.281,100.28,113.093,84.531,113.093z"/>
                        <path d="M129.921,28.251c-2.89,0-5.729,1.17-7.77,3.22c-2.051,2.04-3.23,4.88-3.23,7.78c0,2.891,1.18,5.73,3.23,7.78
                        c2.04,2.04,4.88,3.22,7.77,3.22c2.9,0,5.73-1.18,7.78-3.22c2.05-2.05,3.22-4.89,3.22-7.78c0-2.9-1.17-5.74-3.22-7.78
                        C135.661,29.421,132.821,28.251,129.921,28.251z"/>
                        </g>
                        </svg></a>

                            <!-- facebook-->
                            <a href=""><svg version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 96.124 96.123" style="enable-background:new 0 0 96.124 96.123;" xml:space="preserve">
                        <g>
                            <path d="M72.089,0.02L59.624,0C45.62,0,36.57,9.285,36.57,23.656v10.907H24.037c-1.083,0-1.96,0.878-1.96,1.961v15.803
                        c0,1.083,0.878,1.96,1.96,1.96h12.533v39.876c0,1.083,0.877,1.96,1.96,1.96h16.352c1.083,0,1.96-0.878,1.96-1.96V54.287h14.654
                        c1.083,0,1.96-0.877,1.96-1.96l0.006-15.803c0-0.52-0.207-1.018-0.574-1.386c-0.367-0.368-0.867-0.575-1.387-0.575H56.842v-9.246
                        c0-4.444,1.059-6.7,6.848-6.7l8.397-0.003c1.082,0,1.959-0.878,1.959-1.96V1.98C74.046,0.899,73.17,0.022,72.089,0.02z"/>
                        </g>
                        </svg></a>

                            <!-- vk -->
                            <a href=""><svg version="1.1" class="head-vk" x="0px" y="0px" viewBox="0 0 548.358 548.358" style="enable-background:new 0 0 548.358 548.358;" <g>
                        <path d="M545.451,400.298c-0.664-1.431-1.283-2.618-1.858-3.569c-9.514-17.135-27.695-38.167-54.532-63.102l-0.567-0.571
                        l-0.284-0.28l-0.287-0.287h-0.288c-12.18-11.611-19.893-19.418-23.123-23.415c-5.91-7.614-7.234-15.321-4.004-23.13
                        c2.282-5.9,10.854-18.36,25.696-37.397c7.807-10.089,13.99-18.175,18.556-24.267c32.931-43.78,47.208-71.756,42.828-83.939
                        l-1.701-2.847c-1.143-1.714-4.093-3.282-8.846-4.712c-4.764-1.427-10.853-1.663-18.278-0.712l-82.224,0.568
                        c-1.332-0.472-3.234-0.428-5.712,0.144c-2.475,0.572-3.713,0.859-3.713,0.859l-1.431,0.715l-1.136,0.859
                        c-0.952,0.568-1.999,1.567-3.142,2.995c-1.137,1.423-2.088,3.093-2.848,4.996c-8.952,23.031-19.13,44.444-30.553,64.238
                        c-7.043,11.803-13.511,22.032-19.418,30.693c-5.899,8.658-10.848,15.037-14.842,19.126c-4,4.093-7.61,7.372-10.852,9.849
                        c-3.237,2.478-5.708,3.525-7.419,3.142c-1.715-0.383-3.33-0.763-4.859-1.143c-2.663-1.714-4.805-4.045-6.42-6.995
                        c-1.622-2.95-2.714-6.663-3.285-11.136c-0.568-4.476-0.904-8.326-1-11.563c-0.089-3.233-0.048-7.806,0.145-13.706
                        c0.198-5.903,0.287-9.897,0.287-11.991c0-7.234,0.141-15.085,0.424-23.555c0.288-8.47,0.521-15.181,0.716-20.125
                        c0.194-4.949,0.284-10.185,0.284-15.705s-0.336-9.849-1-12.991c-0.656-3.138-1.663-6.184-2.99-9.137
                        c-1.335-2.95-3.289-5.232-5.853-6.852c-2.569-1.618-5.763-2.902-9.564-3.856c-10.089-2.283-22.936-3.518-38.547-3.71
                        c-35.401-0.38-58.148,1.906-68.236,6.855c-3.997,2.091-7.614,4.948-10.848,8.562c-3.427,4.189-3.905,6.475-1.431,6.851
                            c11.422,1.711,19.508,5.804,24.267,12.275l1.715,3.429c1.334,2.474,2.666,6.854,3.999,13.134c1.331,6.28,2.19,13.227,2.568,20.837
                        c0.95,13.897,0.95,25.793,0,35.689c-0.953,9.9-1.853,17.607-2.712,23.127c-0.859,5.52-2.143,9.993-3.855,13.418
                        c-1.715,3.426-2.856,5.52-3.428,6.28c-0.571,0.76-1.047,1.239-1.425,1.427c-2.474,0.948-5.047,1.431-7.71,1.431
                        c-2.667,0-5.901-1.334-9.707-4c-3.805-2.666-7.754-6.328-11.847-10.992c-4.093-4.665-8.709-11.184-13.85-19.558
                        c-5.137-8.374-10.467-18.271-15.987-29.691l-4.567-8.282c-2.855-5.328-6.755-13.086-11.704-23.267
                        c-4.952-10.185-9.329-20.037-13.134-29.554c-1.521-3.997-3.806-7.04-6.851-9.134l-1.429-0.859c-0.95-0.76-2.475-1.567-4.567-2.427
                        c-2.095-0.859-4.281-1.475-6.567-1.854l-78.229,0.568c-7.994,0-13.418,1.811-16.274,5.428l-1.143,1.711
                        C0.288,140.146,0,141.668,0,143.763c0,2.094,0.571,4.664,1.714,7.707c11.42,26.84,23.839,52.725,37.257,77.659
                        c13.418,24.934,25.078,45.019,34.973,60.237c9.897,15.229,19.985,29.602,30.264,43.112c10.279,13.515,17.083,22.176,20.412,25.981
                        c3.333,3.812,5.951,6.662,7.854,8.565l7.139,6.851c4.568,4.569,11.276,10.041,20.127,16.416
                        c8.853,6.379,18.654,12.659,29.408,18.85c10.756,6.181,23.269,11.225,37.546,15.126c14.275,3.905,28.169,5.472,41.684,4.716h32.834
                        c6.659-0.575,11.704-2.669,15.133-6.283l1.136-1.431c0.764-1.136,1.479-2.901,2.139-5.276c0.668-2.379,1-5,1-7.851
                        c-0.195-8.183,0.428-15.558,1.852-22.124c1.423-6.564,3.045-11.513,4.859-14.846c1.813-3.33,3.859-6.14,6.136-8.418
                        c2.282-2.283,3.908-3.666,4.862-4.142c0.948-0.479,1.705-0.804,2.276-0.999c4.568-1.522,9.944-0.048,16.136,4.429
                        c6.187,4.473,11.99,9.996,17.418,16.56c5.425,6.57,11.943,13.941,19.555,22.124c7.617,8.186,14.277,14.271,19.985,18.274
                        l5.708,3.426c3.812,2.286,8.761,4.38,14.853,6.283c6.081,1.902,11.409,2.378,15.984,1.427l73.087-1.14
                        c7.229,0,12.854-1.197,16.844-3.572c3.998-2.379,6.373-5,7.139-7.851c0.764-2.854,0.805-6.092,0.145-9.712
                        C546.782,404.25,546.115,401.725,545.451,400.298z"/>
                        </g>
                        </svg></a>

                        </div>
                    </div>

                    <div class="foot-center">
                        <div class="foot-center-navigation">
                            <a href="index.html">
                                <div class="foot">ГЛАВНАЯ</div>
                            </a>
                            <a href="club.html">
                                <div class="foot">О КЛУБЕ</div>
                            </a>
                            <a href="fitness-center.html">
                                <div class="foot">ФИТНЕС ЦЕНТР</div>
                            </a>
                            <a href="reabilitation-center.html">
                                <div class="foot">РЕАБИЛИТАЦИОННЫЙ ЦЕНТР</div>
                            </a>
                            <a href="news.html">
                                <div class="foot">НОВОСТИ</div>
                            </a>
                            <a href="contacts.html">
                                <div class="foot">КОНТАКТЫ</div>
                            </a>
                        </div>
                        <div class="foot-center-address">
                            <p>г. Алматы, мкр. Мау Самал, 98</p>
                            <span>схема проезда</span>
                        </div>
                    </div>

                    <div class="foot-right">
                        <p>+7 727 301 30 00</p>
                        <p>+7 708 480 60 36</p>
                        <span>заказать звонок</span>
                    </div>

                </div>
            </div>

            <div class="footer-gi">
                <div class="wrap">
                    <div class="foot-gi">
                        <a href="http://www.ginnova.kz" target="_blank">
                            <span>Привели сайт в форму</span>
                            <svg class="authors-logo" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22.83px" height="25px" viewBox="0 0 612 670">
                    <path d="M275.097-0.906c41.842,1.701,78.333,4.859,117.257,9.96c11.676,1.458,30.165,6.316,32.109,13.361c4.624,16.763,3.65,36.197,0.244,53.932c-1.46,7.773-14.108,7.044-21.65,6.802c-50.601-1.458-101.201-5.345-151.8-5.831c-89.28-0.971-141.097,37.411-155.207,124.867c-14.596,90.128-15.569,182.2,1.703,272.571c15.327,79.926,66.414,117.824,148.152,117.095c30.166-0.242,61.79-0.242,94.632-0.972c0.243-12.39-0.486-19.191-0.486-26.48c0-70.937,0-141.872,0-212.81c0-27.937,5.352-33.039,33.328-33.282c54.006-0.243,54.006-0.243,54.006,54.417c0,80.896,0,161.551,0,242.447c0,38.627,0.243,43.243-38.681,46.644c-59.356,5.102-119.445,9.475-178.56,6.073c-98.524-5.83-161.774-62.919-191.21-155.234c-10.46-33.039-15.813-68.75-16.786-103.489c-1.703-63.164-2.189-126.569,3.406-189.489C17.231,88.494,96.294,9.783,214.766,0.309C217.929-0.177,258.312-0.906,275.097-0.906z"></path>
                    <path d="M613,334.1c0,99.847,0,199.449,0,299.295c0,26.479-3.894,30.123-30.896,30.366c-56.683,0.486-56.683,0.486-56.683-56.117c0-188.273,0-376.547,0-565.064c0-34.254,3.406-37.655,36.978-37.655C613,4.925,613,4.925,613,55.698C613,148.498,613,241.299,613,334.1z"></path>
                </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
`

})


Vue.component('vue-modals', {
    template: `

    <div class="modal-wrapper">
        <div class="modal modal-phone">
            <!--<div class="modal-close"></div>-->

            <div class="modal-title">Заполните форму ниже и получите бесплатную консультацию от нашего специалиста</div>

            <form method="post" action="">
                <!-- Hidden Required Fields -->
                <input type="hidden" name="project_name" value="kendala.ginnova.kz">

                <input type="hidden" name="admin_email" value="tester@ginnova.kz">
                <input type="hidden" name="form_subject" value="Заявка">
                <!-- END Hidden Required Fields -->

                <div class="inputs-row">
                    <input type="text" placeholder="Имя" required>
                    <input type="tel" class="client-tel" placeholder="Телефон" required>
                    <button class="btn btn-blue">ОТПРАВИТЬ</button>
                </div>
            </form>
        </div>

        <div class="modal modal-message">
            <!--<div class="modal-close"></div>-->

            <div class="modal-title">Задайте свой вопрос и получите ответ от наших специалистов</div>

            <form method="post" action="">
                <!-- Hidden Required Fields -->
                <input type="hidden" name="project_name" value="kendala.ginnova.kz">

                <input type="hidden" name="admin_email" value="tester@ginnova.kz">
                <input type="hidden" name="form_subject" value="Заявка">
                <!-- END Hidden Required Fields -->

                <div class="modal-inputs">
                    <input type="text" placeholder="Имя" required>
                    <input type="email" placeholder="E-mail" required>
                    <button class="btn btn-blue btn-left">ОТПРАВИТЬ</button>
                </div>

                <textarea placeholder="Сообщение"></textarea>

            </form>
        </div>

        <div class="thx">
            <p>СПАСИБО! С ВАМИ СВЯЖЕТСЯ НАШ МЕНЕДЖЕР</p>
        </div>

        <div class="modal-back"></div>

    </div>
`
})

new Vue({
    el: '#vue-app'
})

// END VUE

$(document).ready(function () {

    // NAVIGATION

    $('body').on('click', '.nav-mob', function () {
        $('.navigation-row').toggleClass('nav-active');
        $(this).toggleClass('nav-active');
    });
});