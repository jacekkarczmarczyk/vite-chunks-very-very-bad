const foo = () => import('./foo.ts');
const bar = () => import('./bar.ts');

(async function () {
    await foo();
    await bar();
})();
