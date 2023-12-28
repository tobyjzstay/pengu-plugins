/**
 * @name lor-remover
 * @author tobyjzstay
 * @link https://github.com/tobyjzstay/pengu-plugins/tree/main/lor-remover
 */

export function load() {
    const observer = new MutationObserver(() => {
        const container = document.querySelector(".deep-links-promo");
        if (!container) return;
        container.remove();
        observer.disconnect();
    });
    observer.observe(document, { childList: true, subtree: true });
}
