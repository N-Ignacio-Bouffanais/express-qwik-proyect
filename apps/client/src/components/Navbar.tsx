import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
    return (
        <header>
            <nav class="bg-dark-blue h-16 pt-2 flex items-center mx-auto w-full">
                <ul class="flex w-full mx-auto justify-evenly items-center">
                    <li class="text-white font-semibold">
                        <Link href="/dashboard">
                            <p class="rounded-2xl p-2 w-20 text-center text-lg hover:bg-gray-800">Inicio</p>
                        </Link>
                    </li>
                    <li class="text-white font-semibold">
                        <Link href="/profile">
                            <p class="rounded-2xl p-2 w-20 text-center text-lg hover:bg-gray-800">Profile</p>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
});
