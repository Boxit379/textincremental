function saveToLocalStorage(key, state) {
    try {
        localStorage.setItem(key, JSON.stringify(state));
    } catch (error) {
        console.log(error);
    }
}