import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <h1 class='text-3xl font-bold underline'>Welcome 👋</h1>

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
