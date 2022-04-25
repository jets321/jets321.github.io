// Jethusan Sutheswaran
// 100645837
// April 24th, 2022
"use strict";
((function () {
    let protected_routes = [
        "contact-list",
        "task-list"
    ];
    if (protected_routes.indexOf(router.ActiveLink) > -1) {
        if (!sessionStorage.getItem("user")) {
            location.href = "/login";
        }
    }
}))();
//# sourceMappingURL=authguard.js.map