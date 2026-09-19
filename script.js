/* =========================================================
   PUSHTI GANDHI PORTFOLIO
   Main JavaScript
   ========================================================= */


/* =========================================================
   CONTRIBUTIONS GALLERY
   ========================================================= */

let currentContribSlide = 0;

const contribSlidesData = [

    /* =====================================================
       SLIDE 1
       ===================================================== */

    [
        {
            title: "Kitchen Layout & Arched Vault",
            desc: "3D Modeling of 15th-century kitchen walls, stone arch, and central prep bench in Blender.",
            svg: `
                <svg class="w-full h-full" viewBox="0 0 320 200" fill="none">
                    <rect width="320" height="200" fill="#1e262c"/>
                    <path d="M 0 140 L 320 140 L 320 200 L 0 200 Z" fill="#2d3740"/>
                    <path d="M 0 140 L 120 200 M 100 140 L 190 200 M 200 140 L 270 200"
                          stroke="#1e262c"
                          stroke-width="1.5"/>
                    <path d="M 60 140 V 50 C 60 10, 200 10, 200 50 V 140 Z"
                          fill="#12181d"
                          stroke="#475569"
                          stroke-width="3"/>
                    <rect x="20" y="110" width="75" height="30" fill="#334155" rx="2"/>
                    <line x1="25" y1="140" x2="25" y2="160"
                          stroke="#1e293b"
                          stroke-width="4"/>
                    <line x1="90" y1="140" x2="90" y2="160"
                          stroke="#1e293b"
                          stroke-width="4"/>
                    <line x1="230" y1="90" x2="230" y2="140"
                          stroke="#64748b"
                          stroke-width="4"/>
                </svg>
            `
        },

        {
            title: "Alcove Racks & Storage",
            desc: "Wall alcove detailing with multi-tiered wooden shelving holding clay vessels and pottery.",
            svg: `
                <svg class="w-full h-full" viewBox="0 0 320 200" fill="none">
                    <rect width="320" height="200" fill="#1e262c"/>
                    <path d="M 120 160 V 40 C 120 10, 200 10, 200 40 V 160 Z"
                          fill="#0f172a"
                          stroke="#475569"
                          stroke-width="2.5"/>
                    <rect x="130" y="65" width="60" height="6" fill="#78350f"/>
                    <rect x="130" y="95" width="60" height="6" fill="#78350f"/>
                    <rect x="130" y="125" width="60" height="6" fill="#78350f"/>

                    <circle cx="145" cy="57" r="6" fill="#c2410c"/>
                    <circle cx="160" cy="57" r="7" fill="#ea580c"/>
                    <circle cx="175" cy="57" r="6" fill="#c2410c"/>

                    <circle cx="145" cy="87" r="7" fill="#9a3412"/>
                    <circle cx="165" cy="87" r="6" fill="#c2410c"/>

                    <circle cx="150" cy="117" r="6" fill="#ea580c"/>
                </svg>
            `
        },

        {
            title: "Side Corridor & Workstation",
            desc: "Spatial layout testing for side stone arches, cookware benches, and barrel storage.",
            svg: `
                <svg class="w-full h-full" viewBox="0 0 320 200" fill="none">
                    <rect width="320" height="200" fill="#1e262c"/>
                    <path d="M 0 160 L 320 160 L 320 200 L 0 200 Z"
                          fill="#2d3740"/>
                    <path d="M 0 160 V 50 C 0 10, 110 10, 110 50 V 160 Z"
                          fill="#0f172a"
                          stroke="#475569"
                          stroke-width="3"/>
                    <rect x="130" y="125" width="120" height="20"
                          fill="#334155"
                          rx="2"/>
                    <circle cx="145" cy="118" r="6" fill="#9a3412"/>
                    <circle cx="165" cy="118" r="7" fill="#c2410c"/>
                    <circle cx="185" cy="118" r="5" fill="#ea580c"/>
                </svg>
            `
        }
    ],


    /* =====================================================
       SLIDE 2
       ===================================================== */

    [
        {
            title: "Twin Clay Ovens",
            desc: "Sculpted twin clay ovens designed for traditional 15th-century baking and roasting.",
            svg: `
                <svg class="w-full h-full" viewBox="0 0 320 200" fill="none">
                    <rect width="320" height="200" fill="#1e262c"/>

                    <path d="M 80 130 C 80 50, 130 50, 130 130 Z"
                          fill="#475569"
                          stroke="#94a3b8"
                          stroke-width="2"/>

                    <path d="M 140 130 C 140 50, 190 50, 190 130 Z"
                          fill="#475569"
                          stroke="#94a3b8"
                          stroke-width="2"/>

                    <ellipse cx="105" cy="110" rx="12" ry="15"
                             fill="#0f172a"/>

                    <ellipse cx="165" cy="110" rx="12" ry="15"
                             fill="#0f172a"/>

                    <rect x="60" y="130" width="150" height="20"
                          fill="#334155"/>
                </svg>
            `
        },

        {
            title: "Grand Arch Perspective",
            desc: "Camera perspective pass verifying scale, depth, and proportion through the central archway.",
            svg: `
                <svg class="w-full h-full" viewBox="0 0 320 200" fill="none">
                    <rect width="320" height="200" fill="#1e262c"/>

                    <path d="M 60 180 V 70 C 60 10, 260 10, 260 70 V 180 Z"
                          fill="#0f172a"
                          stroke="#64748b"
                          stroke-width="4"/>

                    <path d="M 120 180 V 110 C 120 70, 200 70, 200 110 V 180 Z"
                          fill="#1e293b"
                          stroke="#475569"
                          stroke-width="2"/>
                </svg>
            `
        },

        {
            title: "Hanging Utensils Wall",
            desc: "Wall hooks and iron pans positioning near the main preparation table.",
            svg: `
                <svg class="w-full h-full" viewBox="0 0 320 200" fill="none">
                    <rect width="320" height="200" fill="#1e262c"/>

                    <line x1="20" y1="80" x2="20" y2="120"
                          stroke="#94a3b8"
                          stroke-width="2"/>

                    <circle cx="20" cy="130" r="10"
                            fill="#334155"
                            stroke="#94a3b8"
                            stroke-width="2"/>

                    <line x1="45" y1="80" x2="45" y2="115"
                          stroke="#94a3b8"
                          stroke-width="2"/>

                    <circle cx="45" cy="128" r="12"
                            fill="#334155"
                            stroke="#94a3b8"
                            stroke-width="2"/>

                    <rect x="120" y="120" width="80" height="30"
                          fill="#475569"/>
                </svg>
            `
        }
    ],


    /* =====================================================
       SLIDE 3
       ===================================================== */

    [
        {
            title: "Normal Map & Geometry Test",
            desc: "Checking UV mapping and surface displacement on base geometry spheres.",
            svg: `
                <svg class="w-full h-full" viewBox="0 0 320 200" fill="none">
                    <rect width="320" height="200" fill="#1e262c"/>
                    <circle cx="100" cy="100" r="35"
                            fill="#94a3b8"
                            stroke="#cbd5e1"
                            stroke-width="2"/>
                    <circle cx="170" cy="100" r="35"
                            fill="#64748b"
                            stroke="#cbd5e1"
                            stroke-width="2"/>
                </svg>
            `
        },

        {
            title: "Ladle Asset & Shader Graph",
            desc: "Iron ladle asset creation split with Blender Shader Node graph for roughness and rust procedural textures.",
            svg: `
                <svg class="w-full h-full" viewBox="0 0 320 200" fill="none">

                    <rect width="320" height="100" fill="#293540"/>

                    <path d="M 130 50 L 180 50 M 180 50 C 180 65, 200 65, 200 50"
                          stroke="#cbd5e1"
                          stroke-width="5"
                          stroke-linecap="round"/>

                    <rect y="100" width="320" height="100"
                          fill="#111827"/>

                    <rect x="20" y="120" width="60" height="40"
                          fill="#1e293b"
                          stroke="#f59e0b"
                          stroke-width="1.5"
                          rx="4"/>

                    <rect x="110" y="120" width="70" height="50"
                          fill="#1e293b"
                          stroke="#3b82f6"
                          stroke-width="1.5"
                          rx="4"/>

                    <rect x="210" y="120" width="80" height="60"
                          fill="#1e293b"
                          stroke="#10b981"
                          stroke-width="1.5"
                          rx="4"/>

                    <path d="M 80 140 L 110 145 M 180 145 L 210 150"
                          stroke="#f59e0b"
                          stroke-width="2"/>
                </svg>
            `
        },

        {
            title: "Clay Pitcher Shading",
            desc: "Terracotta ceramic jug shader setup with procedural bump maps and specular highlights.",
            svg: `
                <svg class="w-full h-full" viewBox="0 0 320 200" fill="none">

                    <rect width="320" height="100" fill="#293540"/>

                    <path d="M 150 30 C 130 50, 130 80, 150 90
                             L 170 90
                             C 190 80, 190 50, 170 30 Z"
                          fill="#c2410c"/>

                    <rect y="100" width="320" height="100"
                          fill="#111827"/>

                    <rect x="30" y="120" width="60" height="40"
                          fill="#1e293b"
                          stroke="#f59e0b"
                          stroke-width="1.5"
                          rx="4"/>

                    <rect x="120" y="120" width="70" height="50"
                          fill="#1e293b"
                          stroke="#3b82f6"
                          stroke-width="1.5"
                          rx="4"/>

                    <rect x="220" y="120" width="70" height="60"
                          fill="#1e293b"
                          stroke="#10b981"
                          stroke-width="1.5"
                          rx="4"/>

                    <path d="M 90 140 L 120 145 M 190 145 L 220 150"
                          stroke="#10b981"
                          stroke-width="2"/>
                </svg>
            `
        }
    ],


    /* =====================================================
       SLIDE 4
       ===================================================== */

    [
        {
            title: "Wooden Bucket Asset",
            desc: "Procedural wood grain material node setup applied to kitchen water bucket.",
            svg: `
                <svg class="w-full h-full" viewBox="0 0 320 200" fill="none">

                    <rect width="320" height="100" fill="#293540"/>

                    <rect x="135" y="30" width="50" height="50"
                          fill="#78350f"
                          rx="3"/>

                    <path d="M 130 30 C 130 10, 190 10, 190 30"
                          stroke="#92400e"
                          stroke-width="3"
                          fill="none"/>

                    <rect y="100" width="320" height="100"
                          fill="#111827"/>

                    <rect x="20" y="120" width="60" height="40"
                          fill="#1e293b"
                          stroke="#f59e0b"
                          stroke-width="1.5"
                          rx="4"/>

                    <rect x="110" y="120" width="70" height="50"
                          fill="#1e293b"
                          stroke="#3b82f6"
                          stroke-width="1.5"
                          rx="4"/>

                    <rect x="210" y="120" width="80" height="60"
                          fill="#1e293b"
                          stroke="#10b981"
                          stroke-width="1.5"
                          rx="4"/>
                </svg>
            `
        }
    ]
];


/* =========================================================
   APP VIEW MANAGEMENT
   ========================================================= */

const APP_VIEWS = [
    "homeView",
    "careConnectView",
    "embodimentView",
    "vrView"
];


/* =========================================================
   SHOW / HIDE VIEW
   ========================================================= */

function setVisible(element, visible) {

    if (!element) {
        return;
    }

    element.setAttribute(
        "aria-hidden",
        visible ? "false" : "true"
    );

    element.classList.toggle(
        "hidden",
        !visible
    );

    element.style.setProperty(
        "display",
        visible
            ? (element.id === "homeView" ? "flex" : "block")
            : "none",
        "important"
    );
}


/* =========================================================
   HIDE ALL MAIN VIEWS
   ========================================================= */

function hideAllViews() {

    APP_VIEWS.forEach(function(id) {

        const element = document.getElementById(id);

        if (element) {
            setVisible(element, false);
        }

    });
}


/* =========================================================
   OPEN CASE STUDY
   ========================================================= */

function openCaseStudy(viewId) {

    const target = document.getElementById(viewId);

    if (!target) {

        console.error(
            "Portfolio view not found:",
            viewId
        );

        return;
    }

    hideAllViews();

    setVisible(
        target,
        true
    );

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant"
    });

    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}


/* =========================================================
   HOME
   ========================================================= */

function showHomeView() {

    const home = document.getElementById(
        "homeView"
    );

    hideAllViews();

    if (home) {

        setVisible(
            home,
            true
        );

    }

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant"
    });

    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}


/* =========================================================
   CARD 1
   CARE CONNECT
   ========================================================= */

function showCareConnectView() {

    openCaseStudy(
        "careConnectView"
    );

}


/* =========================================================
   CARD 2
   EMBODIMENT DESIGN
   ========================================================= */

function showEmbodimentView() {

    openCaseStudy(
        "embodimentView"
    );

}


/* =========================================================
   CARD 3
   VIRTUAL REALITY
   ========================================================= */

function showVrView() {

    openCaseStudy(
        "vrView"
    );

}


/* =========================================================
   ABOUT PAGE
   ========================================================= */

function openAboutPage() {

    const about = document.getElementById(
        "about-page-view"
    );

    if (!about) {
        return;
    }

    about.classList.remove(
        "hidden"
    );

    about.style.setProperty(
        "display",
        "block",
        "important"
    );

    about.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow = "hidden";
}


function closeAboutPage() {

    const about = document.getElementById(
        "about-page-view"
    );

    if (!about) {
        return;
    }

    about.classList.add(
        "hidden"
    );

    about.style.setProperty(
        "display",
        "none",
        "important"
    );

    about.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow = "";
}


/* =========================================================
   EXTERNAL PROJECT LINKS
   ========================================================= */

function openCareConnectLink() {

    showCareConnectPopup();

    window.open(
        "https://ounce-squid-04000269.figma.site/",
        "_blank"
    );

}


function openEmbodimentLink() {

    showEmbodimentPopup();

    window.open(
        "https://acrobat.adobe.com/id/urn:aaid:sc:AP:ad9a27ee-a81e-47e8-bb36-9d2fd3517e15",
        "_blank"
    );

}


/* =========================================================
   EMBODIMENT POPUP
   ========================================================= */

function showEmbodimentPopup() {

    const container =
        document.getElementById(
            "infoModalContent"
        );

    if (!container) {
        return;
    }

    container.innerHTML = `

        <div class="text-center py-4">

            <div class="w-12 h-12 rounded-full
                        bg-amber-500/20
                        text-amber-400
                        mx-auto
                        flex items-center
                        justify-center
                        text-xl
                        mb-3
                        border
                        border-amber-400/40">

                <i class="fa-solid fa-file-pdf"></i>

            </div>


            <h3 class="text-xl font-bold text-white mb-2">
                Opening Seat of Nature Document
            </h3>


            <p class="text-sm text-gray-300 mb-4">

                Opening Adobe Acrobat document:

                <br>

                <a
                    href="https://acrobat.adobe.com/id/urn:aaid:sc:AP:ad9a27ee-a81e-47e8-bb36-9d2fd3517e15"
                    target="_blank"
                    class="text-amber-400 underline hover:text-amber-300 font-mono text-xs break-all mt-2 inline-block"
                >
                    Adobe Acrobat Document
                </a>

            </p>


            <button
                onclick="closeInfoModal()"
                class="px-5 py-2 bg-amber-600 hover:bg-amber-500 text-white rounded-xl text-xs font-semibold transition-colors"
            >
                Close Notice
            </button>

        </div>

    `;

    const modal =
        document.getElementById(
            "infoModal"
        );

    if (modal) {

        modal.classList.remove(
            "hidden"
        );

    }

}


/* =========================================================
   CARE CONNECT POPUP
   ========================================================= */

function showCareConnectPopup() {

    const container =
        document.getElementById(
            "infoModalContent"
        );

    if (!container) {
        return;
    }

    container.innerHTML = `

        <div class="text-center py-4">

            <div class="w-12 h-12 rounded-full
                        bg-cyan-500/20
                        text-cyan-400
                        mx-auto
                        flex items-center
                        justify-center
                        text-xl
                        mb-3
                        border
                        border-cyan-400/40">

                <i class="fa-solid fa-arrow-up-right-from-square"></i>

            </div>


            <h3 class="text-xl font-bold text-white mb-2">
                Opening Care Connect
            </h3>


            <p class="text-sm text-gray-300 mb-4">

                Opening live prototype website:

                <br>

                <a
                    href="https://ounce-squid-04000269.figma.site/"
                    target="_blank"
                    class="text-cyan-400 underline hover:text-cyan-300 font-mono text-xs break-all mt-2 inline-block"
                >
                    Care Connect Prototype
                </a>

            </p>


            <button
                onclick="closeInfoModal()"
                class="px-5 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl text-xs font-semibold transition-colors"
            >
                Close Notice
            </button>

        </div>

    `;

    const modal =
        document.getElementById(
            "infoModal"
        );

    if (modal) {

        modal.classList.remove(
            "hidden"
        );

    }

}


/* =========================================================
   KEY LEARNINGS TOGGLE
   ========================================================= */

function toggleKeyLearnings(
    toggleId,
    listId
) {

    const toggle =
        document.getElementById(
            toggleId
        );

    const list =
        document.getElementById(
            listId
        );

    if (!toggle || !list) {
        return;
    }

    toggle.classList.toggle(
        "active"
    );

    list.classList.toggle(
        "show"
    );

}


/* =========================================================
   ABOUT MODAL
   ========================================================= */

function openAboutModal() {

    const container =
        document.getElementById(
            "infoModalContent"
        );

    if (!container) {
        return;
    }

    container.innerHTML = `

        <div class="text-center py-4">

            <div
                class="w-20 h-20 rounded-full
                       bg-gradient-to-tr
                       from-purple-600
                       to-teal-400
                       mx-auto
                       flex items-center
                       justify-center
                       font-bold
                       text-2xl
                       text-white
                       mb-4
                       shadow-lg"
            >
                PG
            </div>


            <h3 class="text-2xl font-bold text-white">
                Pushti Gandhi
            </h3>


            <p class="text-sm text-purple-400 mt-1 font-medium">
                Interaction & Embodiment Designer
            </p>


            <p class="text-gray-300 text-sm mt-4 leading-relaxed text-left">

                Passionate designer crafting intuitive digital
                interactions, physical embodiment design,
                and immersive spatial experiences.

            </p>

        </div>

    `;

    const modal =
        document.getElementById(
            "infoModal"
        );

    if (modal) {

        modal.classList.remove(
            "hidden"
        );

    }

}


/* =========================================================
   CONTACT MODAL
   ========================================================= */

function openContactModal() {

    const container =
        document.getElementById(
            "infoModalContent"
        );

    if (!container) {
        return;
    }

    container.innerHTML = `

        <div class="py-2">

            <h3 class="text-xl font-bold text-white mb-2">
                Get In Touch
            </h3>


            <p class="text-sm text-gray-400 mb-6">
                Have a project or opportunity in mind?
                Feel free to reach out!
            </p>


            <div class="space-y-4">

                <div
                    class="flex items-center gap-3
                           text-gray-300
                           bg-gray-900/60
                           p-3
                           rounded-xl
                           border
                           border-gray-800"
                >

                    <i class="fa-solid fa-envelope text-purple-400"></i>

                    <span class="text-sm">
                        pushti.gandhi@example.com
                    </span>

                </div>


                <div
                    class="flex items-center gap-3
                           text-gray-300
                           bg-gray-900/60
                           p-3
                           rounded-xl
                           border
                           border-gray-800"
                >

                    <i class="fa-brands fa-linkedin text-purple-400"></i>

                    <span class="text-sm">
                        linkedin.com/in/pushtigandhi
                    </span>

                </div>

            </div>

        </div>

    `;

    const modal =
        document.getElementById(
            "infoModal"
        );

    if (modal) {

        modal.classList.remove(
            "hidden"
        );

    }

}


/* =========================================================
   CLOSE INFORMATION MODAL
   ========================================================= */

function closeInfoModal() {

    const modal =
        document.getElementById(
            "infoModal"
        );

    if (modal) {

        modal.classList.add(
            "hidden"
        );

    }

}


/* =========================================================
   CONTRIBUTIONS GALLERY
   ========================================================= */

function openContributionsGallery() {

    currentContribSlide = 0;

    const modal =
        document.getElementById(
            "contributionsModal"
        );

    if (!modal) {
        return;
    }

    modal.classList.remove(
        "hidden"
    );

    renderContributionsSlide();

}


/* =========================================================
   CLOSE CONTRIBUTIONS GALLERY
   ========================================================= */

function closeContributionsGallery() {

    const modal =
        document.getElementById(
            "contributionsModal"
        );

    if (modal) {

        modal.classList.add(
            "hidden"
        );

    }

}


/* =========================================================
   RENDER CONTRIBUTIONS SLIDE
   ========================================================= */

function renderContributionsSlide() {

    const content =
        document.getElementById(
            "contributionsSlideContent"
        );

    if (!content) {
        return;
    }

    const cards =
        contribSlidesData[
            currentContribSlide
        ];

    if (!cards) {
        return;
    }

    content.innerHTML = cards.map(
        function(card) {

            return `

                <div
                    class="group
                           bg-gray-900/70
                           border
                           border-gray-800
                           rounded-2xl
                           overflow-hidden
                           cursor-pointer
                           hover:border-purple-500/50
                           transition-all
                           duration-300"
                    onclick="openImageZoom(${currentContribSlide}, ${cards.indexOf(card)})"
                >

                    <div
                        class="aspect-video
                               bg-gray-950
                               overflow-hidden"
                    >

                        ${card.svg}

                    </div>


                    <div class="p-4">

                        <h3
                            class="text-white
                                   font-bold
                                   text-sm
                                   mb-2"
                        >
                            ${card.title}
                        </h3>


                        <p
                            class="text-gray-400
                                   text-xs
                                   leading-relaxed"
                        >
                            ${card.desc}
                        </p>

                    </div>

                </div>

            `;

        }
    ).join("");


    updateContributionsNavigation();

}


/* =========================================================
   NEXT CONTRIBUTIONS SLIDE
   ========================================================= */

function nextContributionsSlide() {

    if (
        currentContribSlide
        <
        contribSlidesData.length - 1
    ) {

        currentContribSlide++;

        renderContributionsSlide();

    }

}


/* =========================================================
   PREVIOUS CONTRIBUTIONS SLIDE
   ========================================================= */

function previousContributionsSlide() {

    if (
        currentContribSlide
        >
        0
    ) {

        currentContribSlide--;

        renderContributionsSlide();

    }

}


/* =========================================================
   UPDATE SLIDE NAVIGATION
   ========================================================= */

function updateContributionsNavigation() {

    const counter =
        document.getElementById(
            "contribSlideCounter"
        );

    if (counter) {

        counter.textContent =
            `${currentContribSlide + 1} / ${contribSlidesData.length}`;

    }


    const previous =
        document.getElementById(
            "prevContribSlide"
        );

    const next =
        document.getElementById(
            "nextContribSlide"
        );


    if (previous) {

        previous.disabled =
            currentContribSlide === 0;

        previous.style.opacity =
            currentContribSlide === 0
                ? "0.4"
                : "1";

    }


    if (next) {

        next.disabled =
            currentContribSlide ===
            contribSlidesData.length - 1;

        next.style.opacity =
            currentContribSlide ===
            contribSlidesData.length - 1
                ? "0.4"
                : "1";

    }

}


/* =========================================================
   IMAGE ZOOM
   ========================================================= */

function openImageZoom(
    slideIndex,
    cardIndex
) {

    const card =
        contribSlidesData[
            slideIndex
        ]?.[cardIndex];

    if (!card) {
        return;
    }


    const modal =
        document.getElementById(
            "imageZoomModal"
        );

    const content =
        document.getElementById(
            "imageZoomContent"
        );


    if (!modal || !content) {
        return;
    }


    content.innerHTML = `

        <div class="max-w-5xl w-full">

            <div
                class="bg-gray-950
                       rounded-2xl
                       overflow-hidden
                       border
                       border-gray-800
                       shadow-2xl"
            >

                <div class="aspect-video">

                    ${card.svg}

                </div>


                <div class="p-6">

                    <h2
                        class="text-2xl
                               font-bold
                               text-white
                               mb-2"
                    >
                        ${card.title}
                    </h2>


                    <p
                        class="text-gray-400
                               leading-relaxed"
                    >
                        ${card.desc}
                    </p>

                </div>

            </div>

        </div>

    `;


    modal.classList.remove(
        "hidden"
    );

}


/* =========================================================
   CLOSE IMAGE ZOOM
   ========================================================= */

function closeImageZoom() {

    const modal =
        document.getElementById(
            "imageZoomModal"
        );

    if (modal) {

        modal.classList.add(
            "hidden"
        );

    }

}


/* =========================================================
   KEYBOARD CONTROLS
   ========================================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeInfoModal();

            closeAboutPage();

            closeContributionsGallery();

            closeImageZoom();

        }


        if (
            !document
                .getElementById(
                    "contributionsModal"
                )
                ?.classList.contains(
                    "hidden"
                )
        ) {

            if (
                event.key === "ArrowRight"
            ) {

                nextContributionsSlide();

            }


            if (
                event.key === "ArrowLeft"
            ) {

                previousContributionsSlide();

            }

        }

    }
);


/* =========================================================
   INITIALISE PORTFOLIO
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        /* -----------------------------------------
           Main views
           ----------------------------------------- */

        APP_VIEWS.forEach(
            function(id) {

                const element =
                    document.getElementById(
                        id
                    );

                if (!element) {
                    return;
                }


                const isHome =
                    id === "homeView";


                element.setAttribute(
                    "aria-hidden",
                    isHome
                        ? "false"
                        : "true"
                );


                element.style.setProperty(
                    "display",
                    isHome
                        ? "flex"
                        : "none",
                    "important"
                );


                if (isHome) {

                    element.classList.remove(
                        "hidden"
                    );

                } else {

                    element.classList.add(
                        "hidden"
                    );

                }

            }
        );


        /* -----------------------------------------
           About page
           ----------------------------------------- */

        const about =
            document.getElementById(
                "about-page-view"
            );


        if (about) {

            about.setAttribute(
                "aria-hidden",
                "true"
            );

            about.style.setProperty(
                "display",
                "none",
                "important"
            );

        }


        /* -----------------------------------------
           Contributions modal
           ----------------------------------------- */

        const contributionsModal =
            document.getElementById(
                "contributionsModal"
            );


        if (contributionsModal) {

            contributionsModal.classList.add(
                "hidden"
            );

        }


        /* -----------------------------------------
           Image zoom modal
           ----------------------------------------- */

        const imageZoomModal =
            document.getElementById(
                "imageZoomModal"
            );


        if (imageZoomModal) {

            imageZoomModal.classList.add(
                "hidden"
            );

        }

    }
);


/* =========================================================
   BACKDROP CLICK
   ========================================================= */

window.addEventListener(
    "click",
    function(event) {

        const infoModal =
            document.getElementById(
                "infoModal"
            );


        if (
            infoModal &&
            event.target === infoModal
        ) {

            closeInfoModal();

        }


        const contributionsModal =
            document.getElementById(
                "contributionsModal"
            );


        if (
            contributionsModal &&
            event.target === contributionsModal
        ) {

            closeContributionsGallery();

        }


        const imageZoomModal =
            document.getElementById(
                "imageZoomModal"
            );


        if (
            imageZoomModal &&
            event.target === imageZoomModal
        ) {

            closeImageZoom();

        }

    }
);


/* =========================================================
   IMAGE ERROR HANDLER
   ========================================================= */

document.addEventListener(
    "error",
    function(event) {

        const image =
            event.target;


        if (
            !(
                image instanceof
                HTMLImageElement
            )
        ) {

            return;

        }


        if (
            !image.classList.contains(
                "portfolio-card-image"
            )
        ) {

            return;

        }


        image.classList.add(
            "is-broken"
        );


        const card =
            image.closest(
                ".portfolio-card"
            );


        if (card) {

            card.classList.add(
                "image-missing"
            );

        }

    },
    true
);