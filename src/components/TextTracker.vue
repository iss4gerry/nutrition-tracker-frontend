<script setup lang="ts">
import FoodInfo from './FoodInfo.vue';
import { FoodResponse, ProgressNutrition, Response } from '../types/Nutrition';
import axios from 'axios';
import axiosRetry from 'axios-retry';
import { ref } from 'vue';

const foodName = ref<string>();
const foodNutrition = ref<FoodResponse<ProgressNutrition>>();
const loading = ref<boolean>(false);
const emit = defineEmits(['progress']);

axiosRetry(axios, { retries: 3 });
const analyzeFood = async (e: Event) => {
	e.preventDefault();
	try {
		foodNutrition.value = undefined;
		loading.value = true;
		const data = {
			userId: '81d7c4d5-1309-476b-b522-bd96feaba2fe',
			foodName: foodName.value,
		};

		const response = await axios.post<
			Response<FoodResponse<ProgressNutrition>>
		>(`http://localhost:9000/food/nutrition/`, data);

		if (response.data.status === 200) {
			loading.value = false;

			foodNutrition.value = response.data.data;

			emit('progress', response.data.data.progressNutrition);
		}
	} catch (error) {}
};
</script>

<template>
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
				v-else
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
