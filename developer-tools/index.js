/**
 * @name developer-tools
 * @author tobyjzstay
 * @link https://github.com/tobyjzstay/pengu-plugins/tree/main/developer-tools
 */

const DEVTOOLS_ON_LOAD_KEY = "devtools_on_load";

export function load() {
    if (DataStore.get(DEVTOOLS_ON_LOAD_KEY)) window.openDevTools();

    window.addEventListener("keydown", (e) => {
        switch (e.key) {
            case "r":
                if (!e.ctrlKey) return;
                if (e.shiftKey) restartClient();
                else reloadClient();
                break;
            case "F1":
                openCommandBar();
                break;
            default:
                break;
        }
    });

    addCommandBarAction("open-command-bar", "Open Command Bar", "F1", openCommandBar);
    addCommandBarAction("reload-client", "Reload Client", "Ctrl + R", reloadClient);
    addCommandBarAction("restart-client", "Restart Client", "Ctrl + Shift + R", restartClient);
    addCommandBarAction("toggle-devtools-on-load", "Toggle DevTools on Load", undefined, toggleDevToolsOnLoad);
}

function addCommandBarAction(id, name, legend, perform) {
    CommandBar.addAction({
        id,
        name,
        legend,
        group: "Developer Tools",
        perform,
    });
}

function openCommandBar() {
    CommandBar.show();
}

async function reloadClient() {
    await window.reloadClient();
}

async function restartClient() {
    await window.restartClient();
}

function toggleDevToolsOnLoad() {
    DataStore.set(DEVTOOLS_ON_LOAD_KEY, !DataStore.get(DEVTOOLS_ON_LOAD_KEY));
}
