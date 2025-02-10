$('.carousel-large').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$('.carousel-small').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay: false,
    autoplayTimeout: 3000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

// const mainMenu = document.getElementById("offcanvasContent").innerHTML;
// const menus = {
//     primeVideo: { title: "Prime Video", links: ["All Videos", "Included with Prime", "Prime Video Channels", "Rent or Buy", "Your Watchlist", "Purchases and Rentals"] },
//     amazonMusic: { title: "Amazon Music", links: ["Amazon Music Unlimited", "Free Streaming Music", "Podcasts", "Open Web Player"] },
//     books: { title: "Kindle E-Readers and Books", links: ["Meet the Kindle Family", "New Kindle", "New Kindle Kids"]},
//     amazonAppstore: { title: "Amazon Appstore", links: ["Customer Service", "Settings"] }
// };

// let currentMenu = null;
// let visibleLinks = 4;

// function loadMenu(menu) {
//     currentMenu = menu;
//     const { title, links } = menus[menu];
//     document.getElementById("offcanvasContent").innerHTML = `
//         <div class="back-btn" onclick="goBack()">&larr; Back</div>
//         <h4>${title}</h4>
//         <ul class="navbar-nav">${links.slice(0, visibleLinks).map(link => `<li class="nav-item"><a class="nav-link" href="#">${link}</a></li>`).join("")}</ul>
//         ${links.length > visibleLinks ? `<button id="loadMoreBtn" class="nav-link btn btn-link" onclick="loadMore()">Load More</button>` : ''}`;
// }

// function loadMore() {
//     const { title, links } = menus[currentMenu];
//     visibleLinks = links.length;
//     document.getElementById("offcanvasContent").innerHTML = `
//         <div class="back-btn" onclick="goBack()">&larr; Back</div>
//         <h4>${title}</h4>
//         <ul class="navbar-nav">${links.map(link => `<li class="nav-item"><a class="nav-link" href="#">${link}</a></li>`).join("")}</ul>`;
// }

// function goBack() {
//     document.getElementById("offcanvasContent").innerHTML = mainMenu;
//     visibleLinks = 4; // Reset visible links when going back
// }
const menus = {
    primeVideo: { title: "Prime Video", links: ["All Videos", "Included with Prime", "Prime Video Channels", "Rent or Buy", "Your Watchlist", "Purchases and Rentals"] },
    amazonMusic: { title: "Amazon Music", links: ["Amazon Music Unlimited", "Free Streaming Music", "Podcasts", "Open Web Player"] },
    books: { title: "Kindle E-Readers and Books", links: ["Meet the Kindle Family", "New Kindle", "New Kindle Kids"] },
    amazonAppstore: { title: "Amazon Appstore", links: ["Customer Service", "Settings"] }
};

let expanded = false; // Track state

function toggleMenu() {
    expanded = !expanded;
    document.querySelectorAll(".hidden").forEach(item => {
        item.style.display = expanded ? "block" : "none";
    });
    document.getElementById("toggleBtn").textContent = expanded ? "Show Less" : "Show More";
}

function loadMenu(menu) {
    const { title, links } = menus[menu] || { title: "Not Found", links: [] };
    document.getElementById("offcanvasContent").innerHTML = `
        <div class="back-btn" onclick="goBack()">&larr; Back</div>
        <h4>${title}</h4>
        <ul class="navbar-nav">${links.map(link => `<li class="nav-item"><a class="nav-link" href="#">${link}</a></li>`).join("")}</ul>
    `;
}

const initialMenu = document.getElementById("offcanvasContent").innerHTML;

function goBack() {
    document.getElementById("offcanvasContent").innerHTML = initialMenu;
}
