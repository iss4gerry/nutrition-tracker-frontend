<script setup lang="ts">
import { ref } from 'vue';
import Switcher from '../components/Switcher.vue';
import ImageTracker from '../components/ImageTracker.vue';
import Nutrition from '../components/Nutrition.vue';
import History from '../components/History.vue';
import TextTracker from '../components/TextTracker.vue';
import FoodIdea from '../components/FoodIdea.vue';
import axios from 'axios';
import {
	Response,
	NutritionResponse,
	ProgressNutrition,
} from '../types/Nutrition';
import { onMounted } from 'vue';

const active = ref<string>('image');

const getStatus = (activeTab: string) => {
	active.value = activeTab;
};

const dailyNutrition = ref<NutritionResponse>();
const progressNutrition = ref<ProgressNutrition>();
const userId: string = '81d7c4d5-1309-476b-b522-bd96feaba2fe';

const requestNutrition = async () => {
	return await axios.get<Response<NutritionResponse>>(
		`http://localhost:9000/profile/nutrition/${userId}`
	);
};

const requestProgress = async () => {
	return await axios.get<Response<ProgressNutrition>>(
		`http://localhost:9000/profile/nutrition/progress/${userId}`
	);
};

onMounted(async () => {
	const nutrition = await requestNutrition();

	const progress = await requestProgress();

	dailyNutrition.value = nutrition.data.data;
	progressNutrition.value = progress.data.data;
});
</script>

<template>
	<div
		class="container mx-auto flex flex-col md:flex-row justify-center space-x-0 md:space-x-0 space-y-45 md:space-y-0 mt-10"
	>
		<div class="card text-neutral-content w-full md:w-[50vh] -mt-3 md:mt-0">
			<div class="card-body items-center text-center">
				<Switcher @active="getStatus"></Switcher>
				<ImageTracker v-if="active === 'image'"></ImageTracker>
				<TextTracker v-if="active === 'text'"></TextTracker>
				<FoodIdea v-if="active === 'idea'"></FoodIdea>
			</div>
		</div>
		<div class="card text-neutral-content w-full md:w-[50vh] -mt-20">
			<div class="card-body items-center text-center">
				<h1 class="text-xl mb-3 h-7"></h1>
				<Nutrition
					name="Calorie"
					:maxNutrition="dailyNutrition ? dailyNutrition.dailyCalorie : 0"
					:progressNutrition="
						progressNutrition ? progressNutrition.totalCalories : 0
					"
				></Nutrition>
				<Nutrition
					name="Carbohydrate"
					:maxNutrition="dailyNutrition ? dailyNutrition.dailyCarbohydrate : 0"
					:progressNutrition="
						progressNutrition ? progressNutrition.totalCarbohydrate : 0
					"
				></Nutrition>
				<Nutrition
					name="Sugar"
					:maxNutrition="dailyNutrition ? dailyNutrition.dailySugar : 0"
					:progressNutrition="
						progressNutrition ? progressNutrition.totalSugar : 0
					"
				></Nutrition>
				<Nutrition
					name="Fat"
					:maxNutrition="dailyNutrition ? dailyNutrition.dailyFat : 0"
					:progressNutrition="
						progressNutrition ? progressNutrition.totalFat : 0
					"
				></Nutrition>
				<Nutrition
					name="Protein"
					:maxNutrition="dailyNutrition ? dailyNutrition.dailyProtein : 0"
					:progressNutrition="
						progressNutrition ? progressNutrition.totalProtein : 0
					"
				></Nutrition>
			</div>
		</div>
	</div>
	<div
		class="container mx-auto flex flex-col md:flex-row justify-center space-x-0 md:space-x-0 space-y-45 md:space-y-0 md:mt-20 -mt-10"
	>
		<div class="card text-neutral-content w-full md:w-[105vh] -mt-3 md:mt-0">
			<div class="card-body items-center text-center">
				<History></History>
			</div>
		</div>
	</div>
</template>
