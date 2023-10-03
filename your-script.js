// 当导航链接被点击时，平滑滚动到对应的部分
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a.nav-link");

    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const offsetTop = targetSection.getBoundingClientRect().top;
                const offset = window.pageYOffset;
                const duration = 1000; // 滚动持续时间（以毫秒为单位）
                const startTime = performance.now();

                function scroll() {
                    const elapsed = performance.now() - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    window.scrollTo(0, offset + offsetTop * easeInOutQuad(progress));

                    if (progress < 1) {
                        requestAnimationFrame(scroll);
                    }
                }

                function easeInOutQuad(t) {
                    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
                }

                requestAnimationFrame(scroll);
            }
        });
    });
});
