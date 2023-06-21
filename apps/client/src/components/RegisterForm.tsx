import { component$ } from "@builder.io/qwik";

export default component$(() => {
    return (
        <>
            <form class='flex flex-col'>
                <input class='bg-slate-200 outline-none flex rounded-md h-9 w-80 px-4 font-medium my-2' type="email" />
                <input class='bg-slate-200 outline-none flex rounded-md h-9 w-80 px-4 font-medium my-2' type="password" />
                <input class='bg-slate-200 outline-none flex rounded-md h-9 w-80 px-4 font-medium my-2' type="text" />
                <input class='bg-slate-200 outline-none flex rounded-md h-9 w-80 px-4 font-medium my-2' type="text" />
                <button class="h-9 w-80 rounded-md bg-pink-700 text-slate-50 font-semibold my-4" onClick$={()=>{}}>Crear cuenta</button>
            </form>
        </>
    )
})