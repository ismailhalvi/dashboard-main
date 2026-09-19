let sidebar = document.getElementById("sidebar");
let content = document.querySelector("#content");
let toggle_sidebar = document.querySelector("#sidebar-toggle");




toggle_sidebar.addEventListener("click", () => {
    let sidebarRight = window.getComputedStyle(sidebar).right; // الحصول على التنسيق الحالي

    if (window.innerWidth > 767) {
        // لأجهزة الحاسوب، يتم إزاحة المحتوى
        if (sidebarRight === "0px") {
            sidebar.style.right = "-250px";
            content.style.marginRight = "0";
        } else {
            sidebar.style.right = "0";
            content.style.marginRight = "250px";
        }
    } else {
        // للموبايل، لا يتم إزاحة المحتوى، فقط إظهار/إخفاء الشريط
        if (sidebarRight === "0px") {
            sidebar.style.right = "-250px";
        } else {
            sidebar.style.right = "0";
        }
    }
});
// toggle_sidebar.addEventListener("click", () => {
//   // التحويل على العرض الحالي للشريط الجانبي
//   let sidebarWidth = window.getComputedStyle(sidebar).width;

//   if (sidebarWidth === "250px") {
//     sidebar.style.width = "0";
//     content.style.marginRight = "0"; // تم تصحيح marginright إلى marginRight
//   } else {
//     sidebar.style.width = "250px";
//     content.style.marginRight = "250px"; // تم تصحيح marginright إلى marginRight
//   }
// });




let massagescontainer = document.getElementById('massages-container');
let massagesarea = document.getElementById('massages-area');

massagescontainer.addEventListener("click", function(){
    massagesarea.style.display = massagesarea.style.display === "block" ? "none" : "block";
});





// new DataTable('#example');

new DataTable('#example');
