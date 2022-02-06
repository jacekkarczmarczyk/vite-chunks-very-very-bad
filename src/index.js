const foo = () => import('./foo');
const bar = () => import('./bar');

(async function () {
    await foo();
    await bar();
})();
