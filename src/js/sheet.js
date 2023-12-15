
function sheetButton() {
    const sidebar = document.querySelector('.sidebar');
    const sidebarButton = document.querySelector('.characterSheetButton');
    const currentRight = parseInt(window.getComputedStyle(sidebar).right);

    if (currentRight === 0) {
        sidebar.style.right = '-600px';
        sidebarButton.style.right = '0';
    } else {
        sidebar.style.right = '0';
        sidebarButton.style.right = '600px';
    }
}