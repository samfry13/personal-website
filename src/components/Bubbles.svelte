<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import { sineIn } from 'svelte/easing';
  import { fly, type TransitionConfig } from 'svelte/transition';

  type Bubble = {
    id: number;
    size: number;
    startX: number;
    endY: number;
    delay: number;
    duration: number;
    rotation: number;
  };

  const createBubble = (id: number): Bubble => {
    const size = Math.floor((Math.random() * 16 + 1) * 10);
    const startX = Math.floor(Math.random() * 100) + 1;
    const endY = Math.floor(Math.random() * 30) + 1;
    const delay = Math.floor(Math.random() * 10) + 1;
    const duration = Math.floor(Math.random() * 5000) + 5000;
    const rotation =
      (Math.floor(Math.random() * 360) + 360) *
      (Math.round(Math.random()) ? 1 : -1); // between 360 and 720

    return {
      id,
      size,
      startX,
      endY,
      delay,
      duration,
      rotation,
    };
  };

  let bubbles: Bubble[] = [];

  const animate = (node: HTMLElement, bubble: Bubble): TransitionConfig => {
    const style = getComputedStyle(node);
    const transform = style.transform === 'none' ? '' : style.transform;
    const target_opacity = +style.opacity;

    fly;
    return {
      delay: bubble.delay,
      duration: bubble.duration,
      easing: sineIn,
      css: (t, u) => `
        transform:  ${transform} 
                    translate(0px, ${(1 - t) * 1200}px) 
                    rotate(${bubble.rotation * t}deg);
        opacity: ${u}
      `,
    };
  };

  let intervalId: number = 0;

  onMount(() => {
    let id = 0;
    intervalId = setInterval(() => {
      bubbles = [...bubbles, createBubble(id++)];
    }, 600);
  });

  onDestroy(() => {
    clearInterval(intervalId);
  });
</script>

<div class="fixed inset-0 -z-10">
  <ul id="bg-bubbles" class="relative h-full w-full">
    {#each bubbles as bubble (bubble.id)}
      <div
        in:animate={bubble}
        class="absolute bg-white bg-opacity-20"
        style={`
          height: ${bubble.size}px; 
          width: ${bubble.size}px;
          top: ${bubble.endY}%;
          left: ${bubble.startX}%;
        `}
        on:introend={() => {
          bubbles = bubbles.filter((bub) => bub.id !== bubble.id);
        }}
      />
    {/each}
  </ul>
</div>
