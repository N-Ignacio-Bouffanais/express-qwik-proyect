import { component$ } from "@builder.io/qwik";

export default component$(() => {
    return (
        <>
            <form class='flex flex-col'>
                <label class="text-slate-300 text-xl font-semibold" for="inicio_tarea">Ingrese hora de inicio</label>
                <input type="datetime-local" id="inicio_tarea" name="inicio_tarea"/>
            </form>
        </>
    )
})