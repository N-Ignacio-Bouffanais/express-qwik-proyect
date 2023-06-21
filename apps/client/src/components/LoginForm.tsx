import { component$ } from "@builder.io/qwik";

export default component$(() => {
    return (
        <>
            <form class='flex flex-col'>
                <input class='outline-none flex rounded-md h-9 w-80 px-4 font-medium my-2' type="email" />
                <input class='outline-none flex rounded-md h-9 w-80 px-4 font-medium my-2' type="password" />
                <button class="h-9 w-80 rounded-md bg-blue-600 text-slate-50 font-semibold my-4" onClick$={() => { }}>Crear cuenta</button>
            </form>
        </>
    )
})


