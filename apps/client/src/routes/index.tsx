import { component$, useStore, } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import LoginForm from '~/components/LoginForm';
import RegisterForm from '~/components/RegisterForm';

export default component$(() => {
  const option = useStore({ toggle: true });
  return (
    <>
      <main class="flex min-h-screen flex-col items-center bg-slate-400">
        <div class="w-96 flex flex-col items-center mt-12 m-auto bg-slate-50 h-2/4 rounded-lg p-10 ">
          <h1 class='text-xl font-semibold my-2'>Bienvenido!</h1>
          {option.toggle && <>
            <RegisterForm /><button class='my-2' onClick$={() => option.toggle = !option.toggle}>Ya tienes una cuenta? <span class='text-blue-600 font-semibold'>Ingresar</span></button></>}
          {option.toggle == false && <>
            <LoginForm /><button class='my-2' onClick$={() => option.toggle = !option.toggle}>No tienes una cuenta? <span class='text-blue-600 font-semibold'>Registrarme</span></button></>}

        </div>
      </main>

    </>
  );
});

export const head: DocumentHead = {
  title: 'Full Stack Pro',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
