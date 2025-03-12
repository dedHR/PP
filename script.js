function showTab(tabId) {
    // Скрыть все вкладки
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.style.display = 'none';
    });

    // Показать выбранную вкладку
    const selectedTab = document.getElementById(tabId);
    if (selectedTab) {
        selectedTab.style.display = 'block';
    }
}

// По умолчанию показываем первую вкладку
document.addEventListener('DOMContentLoaded', () => {
    showTab('lab1.1');
});