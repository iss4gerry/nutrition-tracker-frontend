<script setup lang="ts">
const { name, maxNutrition } = defineProps<{
	name: string;
	maxNutrition: number;
	progressNutrition: number;
}>();
</script>

<template>
	<div
		class="card text-neutral-content w-full bg-gray-50 rounded-lg shadow-inner py-[-30px]"
	>
		<div class="card-body items-center text-center space-y-1">
			<div class="flex flex-col items-center space-x-15 -mt-5 -mb-3">
				<p class="text-sm w-22 -mb-4 font-semibold">{{ name }}</p>
				<div class="divider lg:divider-vertical"></div>
				<div class="flex flex-col items-center space-x-15 w-full -mt-3">
					<div
						class="skeleton h-2 w-[20vh] mt-3 mb-2"
						v-if="maxNutrition === 0"
					></div>
					<p class="text-sm text-accent" v-if="maxNutrition !== 0">
						{{ progressNutrition }} /
						{{ maxNutrition }}
					</p>
					<progress
						class="progress progress-accent w-56 bg-primary"
						v-if="maxNutrition !== 0"
					>
						50
					</progress>
				</div>
			</div>
		</div>
	</div>
</template>
