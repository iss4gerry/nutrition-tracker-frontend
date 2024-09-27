<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { HistoryResponse, Response } from '../types/Nutrition';

const food = ref<HistoryResponse[]>([]);
const userId: string = '81d7c4d5-1309-476b-b522-bd96feaba2fe';
onMounted(async () => {
	const { data } = await axios.get<Response<HistoryResponse[]>>(
		`http://localhost:9000/history/${userId}`
	);

	food.value = data.data;
});
</script>

<template>
	<div class="min-h-[80vh] flex flex-col items-center max-sm:w-[40vh]">
		<div class="card-container" v-if="food">
			<div
				class="card-body m-2 md:mt-5 md:mb-5 bg-slate-50 rounded-2xl p-6 max-h-[130px] md:max-h-[140px]"
				v-for="(data, index) in food"
				:key="index"
			>
				<h2 class="card-title">{{ data.foodName }}</h2>
				<div class="flex justify-between items-start">
					<div class="text-start flex-grow">
						<p class="multiline-ellipsis">
							{{ data.foodInformation }}
						</p>
					</div>
					<button class="btn btn-primary ml-4">Detail</button>
				</div>
			</div>
		</div>

		<p v-else class="flex items-center justify-center text-gray-500 h-[35vh]">
			You have no history yet
		</p>

		<div class="join mt-auto">
			<button class="join-item btn">«</button>
			<button class="join-item btn">Page 22</button>
			<button class="join-item btn">»</button>
		</div>
	</div>
</template>

<style scoped>
.multiline-ellipsis {
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	line-clamp: 2; /* Batasi jumlah baris, misalnya 3 baris */
	overflow: hidden;
	text-overflow: ellipsis;
}
</style>
