<template>
  <main class="w-full min-h-[calc(100svh-5rem)] flex justify-center text-white">
    <div class="mb-6 w-4/5 flex bg-[#2E2E2E] rounded-lg">
      <div class="mb-4 mr-3 py-16 w-2/10 h-150 flex flex-col items-center gap-4">
        <a href="/" class="px-4 py-2 w-50 bg-[#3E3E3E]">Overview</a>
        <a class="px-4 py-2 w-50 bg-[#3E3E3E] rounded-lg cursor-pointer">Servers</a>
        <div>
          <a v-for="n in 4" href="/server/8320" class="px-4 py-2 w-50 flex rounded-lg"
            ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M8 15.423q1.412 0 2.418-1.006T11.423 12t-1.006-2.418T8 8.578T5.582 9.583T4.578 12t1.006 2.418T8 15.423m0 1q-1.843 0-3.133-1.29t-1.29-3.135t1.29-3.132T8 7.577q1.73 0 2.97 1.127t1.416 2.796h8.537v1h-8.536q-.178 1.67-1.417 2.796Q9.73 16.423 8 16.423M8 12"
              /></svg
            >Server #832{{ n }}</a
          >
        </div>
        <!-- <a class="px-4 py-2 w-50 bg-[#3E3E3E] rounded-lg cursor-pointer"> </a> -->
      </div>
      <div class="mb-4 ml-3 w-8/10 h-150 bg-[#2E2E2E] rounded-lg"></div>
    </div>
  </main>
</template>
