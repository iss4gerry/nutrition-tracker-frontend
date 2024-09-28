<script setup lang="ts">
import { Response, FoodResponse, ProgressNutrition } from '../types/Nutrition';
import { ref } from 'vue';
import axios from 'axios';

const selectedImage = ref<string | null>(null);
const imageForRequest = ref<File | null>(null);
const loading = ref<boolean>(false);
const foodNutrition = ref<FoodResponse<ProgressNutrition>>();
const emit = defineEmits(['progress']);

const handleFileInput = (event: Event) => {
	foodNutrition.value = undefined;
	const input = event.target as HTMLInputElement;
	if (input.files && input.files[0]) {
		const file = input.files[0];
		selectedImage.value = URL.createObjectURL(file);
		imageForRequest.value = file;
	} else {
		selectedImage.value = null;
	}
};

function fileToBase64(file: File | Blob | null): Promise<string> {
	return new Promise((resolve, reject) => {
		if (!file) {
			return reject(new Error('File is null'));
		}

		const reader = new FileReader();
		reader.onloadend = () => {
			const result = reader.result;
			if (typeof result === 'string') {
				resolve(result.split(',')[1]);
			} else {
				reject(new Error('Failed to convert file to base64'));
			}
		};

		reader.onerror = () => {
			reject(new Error('Failed to read file'));
		};

		reader.readAsDataURL(file);
	});
}

const analyzeFood = async (event: any) => {
	event.preventDefault();
	loading.value = true;
	const imageBase64 = await fileToBase64(imageForRequest.value);
	const data = {
		base64Image: imageBase64,
		userId: '81d7c4d5-1309-476b-b522-bd96feaba2fe',
	};

	const response = await axios.post<Response<FoodResponse<ProgressNutrition>>>(
		`http://localhost:9000/food/nutrition/image`,
		data
	);

	if (response.data.status === 200) {
		loading.value = false;
	}
	foodNutrition.value = response.data.data;
	emit('progress', response.data.data.progressNutrition);
};
</script>

<template>
	<div
		class="container mx-auto flex flex-col items-center space-y-4 p-4 bg-gray-50 rounded-xl shadow-inner max-w-md"
	>
		<p class="text-lg font-semibold text-gray-700">Upload your food image</p>
		<input
			type="file"
			class="file-input file-input-bordered file-input-primary w-full max-w-xs rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-primary"
			@change="handleFileInput"
		/>
		<p class="text-sm text-gray-500">Supported formats: JPG, PNG</p>
		<p
			class="text-lg font-semibold text-gray-700"
			v-if="foodNutrition === undefined"
		>
			Preview
		</p>
		<p class="text-xl font-bold text-gray-700" v-else-if="foodNutrition">
			Food information
		</p>
		<div
			v-if="selectedImage && foodNutrition === undefined && loading === false"
			class="w-full h-[35vh] bg-gray-200 rounded-lg overflow-hidden shadow-md"
		>
			<img
				:src="selectedImage"
				alt="Image Preview"
				class="w-full h-full object-cover"
			/>
		</div>

		<div
			v-else-if="foodNutrition"
			class="w-full h-[35vh] rounded-lg items-center flex flex-col"
		>
			<p class="text-lg md:hidden">𓎦</p>
			<h1 class="text-xl font-semibold mt-4">
				{{ foodNutrition.foodInfo.foodName }}
			</h1>
			<div class="mt-4">
				<p>{{ foodNutrition.foodInfo.foodInformation }}</p>
			</div>
			<div class="divider mt-8 text-sm">Nutrition</div>
			<div class="flex flex-row space-x-1 -mt-2">
				<div
					class="bg-primary p-2 w-[7vh] h-[9vh] rounded-xl mb-3 flex flex-col mt-3"
				>
					<p>🔥</p>
					<h1 class="text-sm font-semibold">
						{{ foodNutrition.foodInfo.calorie }}
					</h1>
					<p class="text-sm">Calorie</p>
				</div>
				<div
					class="bg-primary p-2 w-[7vh] h-[9vh] rounded-xl mb-3 flex flex-col mt-3"
				>
					<p>🥔</p>
					<h1 class="text-sm font-semibold">
						{{ foodNutrition.foodInfo.carbohydrate }}
					</h1>
					<p class="text-sm">Carbo</p>
				</div>
				<div
					class="bg-primary p-2 w-[7vh] h-[9vh] rounded-xl mb-3 flex flex-col mt-3"
				>
					<p>💪</p>
					<h1 class="text-sm font-semibold">
						{{ foodNutrition.foodInfo.protein }}
					</h1>
					<p class="text-sm">Protein</p>
				</div>
				<div
					class="bg-primary p-2 w-[7vh] h-[9vh] rounded-xl mb-3 flex flex-col mt-3"
				>
					<p>🍚</p>
					<h1 class="text-sm font-semibold">
						{{ foodNutrition.foodInfo.sugar }}
					</h1>
					<p class="text-sm">Sugar</p>
				</div>
				<div
					class="bg-primary p-2 w-[7vh] h-[9vh] rounded-xl mb-3 flex flex-col mt-3"
				>
					<p>🥓</p>
					<h1 class="text-sm font-semibold">
						{{ foodNutrition.foodInfo.fat }}
					</h1>
					<p class="text-sm">Fat</p>
				</div>
			</div>
			<p class="mt-1">-`♡´-</p>
		</div>
		<span
			class="loading loading-dots loading-lg flex items-center justify-center h-[35vh]"
			v-else-if="loading"
		></span>
		<p v-else class="flex items-center justify-center text-gray-500 h-[35vh]">
			No image selected
		</p>
		<div class="h-[5vh]">
			<button
				class="btn btn-wide bg-primary"
				v-if="foodNutrition === undefined"
				@click="analyzeFood"
			>
				Analyze
			</button>
		</div>
	</div>
</template>
