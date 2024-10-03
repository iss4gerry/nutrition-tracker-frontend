<script setup lang="ts">
import FoodInfo from '../components/FoodInfo.vue';
import { Response, FoodResponse, ProgressNutrition } from '../types/Nutrition';
import { ref } from 'vue';
import axios from '../api';

const baseUrl = import.meta.env.VITE_BACKEND_URL;
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
	try {
		loading.value = true;
		const imageBase64 = await fileToBase64(imageForRequest.value);
		const data = {
			base64Image: imageBase64,
			userId: localStorage.getItem('userId'),
		};

		const response = await axios.post<
			Response<FoodResponse<ProgressNutrition>>
		>(`${baseUrl}/food/nutrition/image`, data);

		if (response.data.status === 200) {
			loading.value = false;
		}
		foodNutrition.value = response.data.data;
		emit('progress', response.data.data.progressNutrition);
	} catch (error) {
		if (error instanceof Error) {
			console.log(error.message);
		}
	} finally {
		loading.value = false;
	}
};
</script>

<template>
	<div
		class="animate__animated animate__flipInY container mx-auto flex flex-col items-center space-y-4 p-4 bg-gray-50 rounded-xl shadow-inner max-w-md animate_animated animate__flipInY min-h-[68vh] max-h-[68vh]"
	>
		<h1 class="text-lg h-[2vh] font-semibold text-gray-700">
			Upload your food image
		</h1>
		<input
			type="file"
			class="file-input file-input-bordered file-input-primary w-full max-w-xs rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-primary"
			@change="handleFileInput"
		/>
		<h1 class="text-sm text-gray-500">Supported formats: JPG, PNG</h1>
		<p
			class="text-lg font-semibold text-gray-700"
			v-if="foodNutrition === undefined"
		>
			Preview
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

		<div v-else-if="foodNutrition">
			<FoodInfo :food-nutrition="foodNutrition"></FoodInfo>
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
				:disabled="!selectedImage"
			>
				Analyze
			</button>
		</div>
		<div class="h-[5vh] invisible absolute">
			<button
				class="btn btn-wide bg-primary"
				v-if="foodNutrition === undefined"
				@click="analyzeFood"
				:disabled="!selectedImage"
			>
				Analyze
			</button>
		</div>
	</div>
</template>
