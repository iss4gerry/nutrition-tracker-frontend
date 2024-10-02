<script setup lang="ts">
import { FoodResponse, ProgressNutrition } from '../types/Nutrition';

const { foodNutrition } = defineProps<{
	foodNutrition: FoodResponse<ProgressNutrition>;
}>();
</script>

<template>
	<div class="w-full h-[20vh] rounded-lg items-center flex flex-col">
		<div class="flex flex-col min-h-[20vh] justify-center items-center">
			<h1 class="text-xl font-bold text-accent max-sm:mt-2">
				FOOD INFORMATION
			</h1>
			<h1 class="text-xl font-semibold mt-2">
				{{ foodNutrition.foodInfo.foodName }}
			</h1>
			<div class="mt-4">
				<p class="text-sm">{{ foodNutrition.foodInfo.foodInformation }}</p>
			</div>
		</div>
		<div class="divider mt-0 text-sm">Nutrition</div>
		<div>
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
	</div>
</template>
