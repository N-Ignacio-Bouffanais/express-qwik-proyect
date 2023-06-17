import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <h1>Welcome 👋</h1>

      <button onClick$={async ()=>{
        const response =  await fetch('/api')
        const data =  response.json();
        console.log(data)
      }}>Click me</button>
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
