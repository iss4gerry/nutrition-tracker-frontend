<script setup lang="ts"></script>

<template>
  <div class="navbar bg-opacity-0 top-0 sticky z-30 backdrop-blur">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          <li><a>Home</a></li>
          <li><a>History</a></li>
          <li><a>Faq</a></li>
          <li>
            <a>Account</a>
            <ul class="p-2">
              <li><a>Profile</a></li>
              <li><a>Setting</a></li>
            </ul>
          </li>
          <li><a>Logout</a></li>
        </ul>
      </div>
      <a class="btn btn-ghost text-xl max-sm:ml-20">FWEEBLE</a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li><a>Home</a></li>
        <li><a>History</a></li>
        <li><a>Faq</a></li>
      </ul>
    </div>
    <div class="navbar-end mr-5 max-sm:hidden">
      <ul class="menu menu-horizontal px-1">
        <li>
          <details>
            <summary>Menu</summary>
            <ul class="bg-base-100 rounded-t-none p-2">
              <li><a>Account</a></li>
              <li><a>Setting</a></li>
              <li><a>Logout</a></li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  </div>
</template>
