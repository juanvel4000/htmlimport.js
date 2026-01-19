(function() {
    async function processImport(tag, parentURL = document.baseURI) {
        const src = tag.getAttribute('src');
        if (!src)
            return;

        const url = new URL(src, parentURL);

        try {
            const res = await fetch(src);

            if (!res.ok)
                throw new Error(`failed to fetch ${src}`);

            const html = await res.text();
            const tmp = document.createElement('div');
            tmp.innerHTML = html;

            tag.replaceWith(...tmp.childNodes);

            tmp.querySelectorAll('import').forEach(ct => processImport(ct, url));
        } catch (err) {
            console.error(`error: ${err}`);
        }

    }

    async function init() {
        document.querySelectorAll('import').forEach(tag => processImport(tag));
    }

    if (document.readyState == 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();