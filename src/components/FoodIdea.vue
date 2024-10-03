<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from '../api';
import { FoodIdea, FoodIdeaResponse, Response } from '../types/Nutrition';

const baseUrl = import.meta.env.VITE_BACKEND_URL;
const foodIdea = ref<FoodIdeaResponse<FoodIdea>>();

const fetchData = async () => {
	const userId = localStorage.getItem('userId');
	const res = await axios.get<Response<FoodIdeaResponse<FoodIdea>>>(
		`${baseUrl}/food/recommendation/${userId}`
	);

	foodIdea.value = res.data.data;
};

onMounted(() => {
	fetchData();
});
</script>

<template>
	<div
		class="animate__animated animate__flipInY container mx-auto flex flex-col items-center space-y-4 p-4 bg-gray-50 rounded-xl shadow-inner max-w-md min-h-[65vh] max-sm:min-h-[70vh]"
	>
		<div class="flex flex-col -mb-8">
			<p class="text-xl font-bold text-accent -mb-3">Food idea</p>
			<p class="text-sm mt-4 -mb-2">
				based on your remaining daily nutrition(๑ᵔ⤙ᵔ๑)
			</p>
			<div class="divider"></div>
		</div>
		<div
			v-if="!foodIdea"
			class="flex flex-col justify-center items-center min-h-[50vh]"
		>
			<span class="loading loading-dots loading-lg -mt-10"></span>
			<h1>Please wait</h1>
		</div>
		<div v-if="foodIdea">
			<div class="card-container mt-4">
				<div
					class="card-body m-2 md:mt-1 bg-primary bg-opacity-0 p-2 max-h-[130px] max-w-[30vh] min-h-[130px] min-w-[30vh]"
				>
					<div class="flex flex-col">
						<h2
							class="card-title font-semibold text-sm max-sm:-mt-3 -mt-3 text-start"
						>
							{{ foodIdea.food1.foodName }}
						</h2>
						<p class="multiline-ellipsis text-xs max-sm:-mb-3 text-start">
							{{ foodIdea.food1.information }}
						</p>
					</div>
					<button class="btn btn-sm btn-accent mt-3">Detail</button>
				</div>
				<div
					class="card-body m-2 md:mt-1 bg-primary bg-opacity-0 p-2 max-h-[130px] max-w-[30vh] min-h-[130px] min-w-[30vh]"
				>
					<div class="flex flex-col">
						<h2
							class="card-title font-semibold text-sm max-sm:-mt-3 -mt-3 text-start"
						>
							{{ foodIdea.food2.foodName }}
						</h2>
						<p class="multiline-ellipsis text-xs max-sm:-mb-3 text-start">
							{{ foodIdea.food2.information }}
						</p>
					</div>
					<button class="btn btn-sm btn-accent mt-3">Detail</button>
				</div>
				<div
					class="card-body m-2 md:mt-1 bg-primary bg-opacity-0 p-2 max-h-[130px] max-w-[30vh] min-h-[130px] min-w-[30vh]"
				>
					<div class="flex flex-col">
						<h2
							class="card-title font-semibold text-sm max-sm:-mt-3 -mt-3 text-start"
						>
							{{ foodIdea.food3.foodName }}
						</h2>
						<p class="multiline-ellipsis text-xs max-sm:-mb-3 text-start">
							{{ foodIdea.food3.information }}
						</p>
					</div>
					<button class="btn btn-sm btn-accent mt-3">Detail</button>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.multiline-ellipsis {
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;
	line-clamp: 3;
	overflow: hidden;
	text-overflow: ellipsis;
}
</style>
