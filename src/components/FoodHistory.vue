<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import axiosRetry from 'axios-retry';
import axios from 'axios';
import { HistoryResponse, Response, Pagination } from '../types/Nutrition';

const food = ref<HistoryResponse[]>([]);
const pagination = ref<Pagination>();
const userId = localStorage.getItem('userId');
const page = ref<number>(1);
const limit = 4;

axiosRetry(axios, { retries: 3 });
const fetchData = async () => {
	const { data } = await axios.get<Response<HistoryResponse[], Pagination>>(
		`http://localhost:9000/history/${userId}`,
		{
			params: {
				page: page.value,
				limit: limit,
			},
		}
	);

	food.value = data.data;
	pagination.value = data.pagination;
};

watch(page, async () => {
	fetchData();
});

onMounted(() => {
	fetchData();
});

const prevPage = () => {
	if (page.value > 1) {
		page.value--;
	}
};

const nextPage = () => {
	if (pagination.value && page.value <= pagination.value.totalPage - 1) {
		page.value++;
	}
};
</script>

<template>
	<div class="min-h-[80vh] flex flex-col items-center max-sm:w-[40vh] mt-5">
		<div class="card-container min-h-[66vh]" v-if="food.length > 0">
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

		<div class="join mt-4">
			<button class="join-item btn" @click="prevPage">«</button>
			<button class="join-item btn">{{ page }}</button>
			<button class="join-item btn" @click="nextPage">»</button>
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
