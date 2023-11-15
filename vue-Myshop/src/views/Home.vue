<template>
  <article>
    <a href="#" aria-label="Coombes product page"
      ><img
        class="h-[257px] w-[300px]"
        src="../assets/img/coombes.webp"
        alt="Lounge"
    /></a>
    <div class="grid h-20 grid-cols-2 px-3 py-2.5">
      <div>
        <a href="#" aria-label="Coombes product page"
          ><h1 class="ml-0.5 text-[15px] font-semibold">Coombes</h1></a
        >
        <h2 class="mb-0.5 ml-0.5 mt-1.5 text-[11px] uppercase text-gray">
          Lounge
        </h2>
        <ul class="mt-1.5 flex w-fit flex-row">
          <li class="star-icon ml-0.5 h-3 w-3"></li>
          <li class="star-icon ml-0.5 h-3 w-3"></li>
          <li class="star-icon ml-0.5 h-3 w-3"></li>
          <li class="star-icon ml-0.5 h-3 w-3"></li>
          <li class="star-outline ml-0.5 h-3 w-3"></li>
        </ul>
      </div>
      <div
        class="mr-1 flex flex-col items-end justify-between justify-self-end"
      >
        <span class="text-[16px]">$2,600</span>
        <img
          class="mb-1 h-6 w-6 hover:cursor-pointer"
          src="../assets/svg/cart-add.svg"
          alt="Add to cart"
        />
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
};
</script>

<style></style>
