<template>
  <div v-if="isOpen" class="modal-overlay" @click.self="close">
    <div class="modal-content">
      <div class="my-4">
        <button class="close-button" @click="close">X</button>
      </div>

      <div class="py-2 flex items-center space-x-2 mb-8">
        <div class="flex space-x-2">
          <button
            @click="$emit('update-valuetype', 'login')"
            :class="{
              'font-bold text-green-700 underline underline-offset-8':
                valuetype === 'login',
            }"
          >
            ចុះឈ្មោះ
          </button>
          <span>/</span>
          <button
            @click="$emit('update-valuetype', 'register')"
            :class="{
              'font-bold text-green-700 underline underline-offset-8':
                valuetype === 'register',
            }"
          >
            បង្កើតគណនី
          </button>
        </div>
        <div class="flex-grow border-b-4 border-green-600 ml-2"></div>
      </div>
      <form @submit.prevent="handleSubmit">
        <div v-if="valuetype === 'login'">
          <div class="mb-5">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >អ៊ីមែល : *</label
            >
            <input
              type="email"
              id="email"
              v-model="user.useregmail"
              class="button_input"
              placeholder="name@admin.com"
              required
            />
          </div>
          <div class="mb-5 relative">
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >ពាក្យសម្ថាត់ : *</label
            >
            <input
              :type="showPassword ? 'text' : 'password'"
              id="password"
              v-model="user.userpassword"
              class="button_input"
              placeholder=". . . . . . . . . . ."
              required
            />
            <div
              class="absolute top-2/3 right-2 transform -translate-y-1/2 cursor-pointer"
              @click="togglePassword"
            >
              <svg
                v-if="showPassword"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            </div>
          </div>
          <div class="flex justify-end items-end">
            <button type="submit" class="button_submit w-1/2">ចូល</button>
          </div>
        </div>

        <div v-else>
          <div class="mb-5">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >អ៊ីមែល : *</label
            >
            <input
              type="email"
              id="email"
              v-model="user.useregmail"
              class="button_input"
              placeholder="name@admin.com"
              required
            />
          </div>
          <div class="mb-5">
            <label
              for="name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >ឈ្មោះ : *</label
            >
            <input
              type="text"
              id="name"
              v-model="user.usernames"
              placeholder="ឈ្មោះ"
              class="button_input"
              required
            />
          </div>
          <div class="mb-5 relative">
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >ពាក្យសម្ថាត់ : *</label
            >
            <input
              :type="showPassword ? 'text' : 'password'"
              id="password"
              min="8"
              v-model="user.userpassword"
              placeholder=". . . . . . . . . . ."
              class="button_input"
              required
            />
            <div
              class="absolute top-2/3 right-2 transform -translate-y-1/2 cursor-pointer"
              @click="togglePassword"
            >
              <svg
                v-if="showPassword"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            </div>
            <div
              v-if="errorMessage"
              class="text-red-500 text-sm whitespace-nowrap"
            >
              {{ errorMessage }}
            </div>
          </div>

          <div class="mb-5">
            <label
              for="repeat-password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >បញ្ជាក់ពាក្យសម្ថាត់ : *</label
            >
            <input
              id="repeat-password"
              :type="showPassword ? 'text' : 'password'"
              v-model="user.repassword"
              placeholder=". . . . . . . . . . ."
              class="button_input"
              required
            />
          </div>
          <div
            v-if="errorMessage"
            class="text-red-500 text-sm mt-2 whitespace-nowrap"
          >
            {{ errorMessage }}
          </div>
          <div class="flex justify-end items-end">
            <button type="submit" class="button_submit w-1/2">បង្កើត</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// Import axios
import axios from "axios";

export default {
  props: {
    isOpen: Boolean,
    valuetype: {
      type: String,
      default: "login",
    },
  },

  data() {
    return {
      user: {
        usernames: "",
        userpassword: "",
        useregmail: "",
        repassword: "",
      },
      showPassword: false,
      errorMessage: "",
    };
  },

  methods: {
    close() {
      this.$emit("close");
    },

    togglePassword() {
      this.showPassword = !this.showPassword;
    },

    setError(message) {
      this.errorMessage = message;
    },

    async loginUser() {
      try {
        const response = await axios.post("http://localhost:6900/authlogin", {
          email: this.user.useregmail,
          password: this.user.userpassword,
        });
        console.log("User Login Successful:", response.data);
        alert("Login successful.");
      } catch (error) {
        console.error("Login Error:", error);
        alert("An error occurred during login.");
      }
    },

    async registerUser() {
      if (this.user.userpassword.length < 8) {
        this.setError("ពាក្យសម្ថាត់ត្រូវតែមានយ៉ាងហោចណាស់ 8 តួអក្សរ!");
        return;
      }

      if (this.user.userpassword !== this.user.repassword) {
        this.setError("សូមលោកអ្នកបញ្ជាក់លេខសម្ថាត់សាជាថ្មី​ !");
        return;
      }

      try {
        alert("Registration successful.");
        // const response = await axios.post(
        //   "http://localhost:6900/authregister",
        //   {
        //     email: this.user.useregmail,
        //     name: this.user.usernames,
        //     password: this.user.userpassword,
        //   }
        // );
        // console.log("User Registration Successful:", response.data);
        // alert("Registration successful.");
      } catch (error) {
        console.error("Registration Error:", error);
        alert("An error occurred during registration.");
      }
    },

    handleSubmit() {
      if (this.valuetype === "login") {
        this.loginUser();
      } else {
        this.registerUser();
      }
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  position: relative;
  max-width: 500px;
  width: 100%;
}
.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}
.font-bold {
  font-weight: bold;
}
</style>
