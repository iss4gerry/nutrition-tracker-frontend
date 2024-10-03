<script setup lang="ts">
import FoodInfo from './FoodInfo.vue';
import { FoodResponse, ProgressNutrition, Response } from '../types/Nutrition';
import axios from '../api';
import { ref, watch } from 'vue';

const baseUrl = import.meta.env.VITE_BACKEND_URL;
const foodName = ref<string>();
const foodNutrition = ref<FoodResponse<ProgressNutrition>>();
const loading = ref<boolean>(false);
const wrongPassword = ref<boolean>(false);
const alertStatus = ref<boolean>(false);
const emit = defineEmits(['progress']);

watch(wrongPassword, () => {
	setTimeout(() => {
		setTimeout(() => {
			wrongPassword.value = false;
			alertStatus.value = false;
		}, 1000);
		alertStatus.value = true;
	}, 4000);
});

const analyzeFood = async (e: Event) => {
	e.preventDefault();

	if (!foodName.value) {
		wrongPassword.value = true;
		return;
	}

	try {
		foodNutrition.value = undefined;
		loading.value = true;
		const data = {
			userId: localStorage.getItem('userId'),
			foodName: foodName.value,
		};

		const response = await axios.post<
			Response<FoodResponse<ProgressNutrition>>
		>(`${baseUrl}/food/nutrition/`, data);

		if (response.data.status === 200) {
			loading.value = false;

			foodNutrition.value = response.data.data;

			emit('progress', response.data.data.progressNutrition);
		}
	} catch (error) {
		if (error instanceof Error) {
			console.log(error.message);
		}
	}
};
</script>

<template>
	<div class="max-sm:flex max-sm:justify-center max-sm:items-center">
		<div
			role="alert"
			class="animate__animated animate__fadeInDown alert alert-error absolute -mt-12 max-sm:-mt-5 max-sm:flex max-sm:flex-row max-sm:items-center max-sm:justify-center max-sm:w-[40vh]"
			:class="{ 'animate__fadeOutUp animate__delay-s': alertStatus }"
			v-if="wrongPassword"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6 shrink-0 stroke-current"
				fill="none"
				viewBox="0 0 24 24"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>
			<span>Error! No Food Name Provided.</span>
		</div>
	</div>
	<div
		class="animate__animated animate__flipInY container mx-auto flex flex-col items-center space-y-4 p-4 bg-gray-50 rounded-xl shadow-inner max-w-md min-h-[68vh] max-h-[68vh]"
	>
		<div class="flex flex-col justify-between items-center">
			<div class="flex flex-col">
				<p class="text-lg font-semibold text-accent">Input your food name</p>
				<textarea
					class="textarea textarea-primary textarea-lg w-[50vh] max-sm:w-full max-w-xs mt-4 h-[15vh]"
					placeholder="Food name"
					v-model="foodName"
				></textarea>
			</div>
			<button class="btn btn-wide bg-primary mt-4" @click="analyzeFood">
				Analyze
			</button>
			<span
				class="loading loading-dots loading-lg flex items-center justify-center h-[35vh]"
				v-if="loading"
			></span>
			<p
				v-if="!foodNutrition && !loading"
				class="flex items-center justify-center text-gray-500 h-[35vh] max-w-[30vh] text-center]"
			>
				Your food information will be displayed here
			</p>
			<div>
				<FoodInfo
					:food-nutrition="foodNutrition"
					v-if="foodNutrition"
				></FoodInfo>
			</div>
		</div>
	</div>
</template>
