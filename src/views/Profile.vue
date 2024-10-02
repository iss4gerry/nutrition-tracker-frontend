<script setup lang="ts">
import { CreateProfileResponse } from '../types/Nutrition';
import { ref, watch } from 'vue';
import axios from 'axios';
import axiosRetry from 'axios-retry';
import { useRouter } from 'vue-router';

axiosRetry(axios, { retries: 3 });
const baseUrl = import.meta.env.VITE_BACKEND_URL;
const router = useRouter();
const loginRequest = ref<boolean>(false);
const userId = localStorage.getItem('userId');
const gender = ref<string>('Gender');
const dateOfBirth = ref<string>();
const allergies = ref<string>();
const weight = ref<number>();
const height = ref<number>();
const wrongPassword = ref<boolean>(false);
const alertStatus = ref<boolean>(false);

watch(wrongPassword, () => {
	setTimeout(() => {
		setTimeout(() => {
			wrongPassword.value = false;
			alertStatus.value = false;
		}, 1000);
		alertStatus.value = true;
	}, 4000);
});

const createProfile = async () => {
	if (gender.value && dateOfBirth.value && weight.value && height.value) {
		try {
			loginRequest.value = true;
			const [year, month, day] = dateOfBirth.value.split('-');
			const dateBirth = `${year}/${month}/${day}`;

			const { data } = await axios.post<CreateProfileResponse>(
				`${baseUrl}/profile`,
				{
					userId: userId,
					gender: gender.value,
					dateOfBirth: dateBirth,
					allergies: allergies.value ? allergies.value : 'Tidak Punya',
					weight: weight.value,
					height: height.value,
				}
			);

			if (data.status === 200) {
				router.push('/');
			} else {
				console.log(data.message);
			}
		} catch (error) {
			if (error instanceof Error) {
				console.log(error.message);
			}
		} finally {
			loginRequest.value = false;
			wrongPassword.value = true;
		}
	} else {
		wrongPassword.value = true;
	}
};
</script>

<template>
	<div
		class="flex justify-center items-center w-min-screen max-sm:w-[44vh] h-[80vh] -mt-10"
	>
		<div class="card text-primary-content h-[50vh]">
			<div
				role="alert"
				class="animate__animated animate__fadeInDown alert alert-error absolute -mt-5"
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
				<span>Please fill all field</span>
			</div>
			<div class="card-body max-sm:w-[44vh] backdrop-blur-sm mt-10">
				<div class="flex flex-col justify-center items-center space-y-4 w-full">
					<h2 class="text-2xl font-semibold">Create Profile</h2>
					<select
						class="select select-bordered w-full max-w-xs"
						v-model="gender"
					>
						<option disabled>Gender</option>
						<option>Male</option>
						<option>Female</option>
					</select>
					<label class="form-control w-full max-w-xs">
						<input
							type="date"
							class="input input-bordered w-full max-w-xs"
							v-model="dateOfBirth"
							placeholder="Date of Birth"
						/>
					</label>
					<label class="input input-bordered flex items-center gap-2">
						<input
							type="text"
							class="grow"
							placeholder="Allergies"
							v-model="allergies"
						/>
						<span class="badge badge-info">Optional</span>
					</label>
					<label class="form-control w-full max-w-xs">
						<input
							type="text"
							placeholder="Weight"
							class="input input-bordered w-full max-w-xs"
							v-model="height"
						/>
					</label>
					<label class="form-control w-full max-w-xs">
						<input
							type="text"
							placeholder="Height"
							class="input input-bordered w-full max-w-xs"
							v-model="weight"
						/>
					</label>

					<button
						class="btn w-[31vh] bg-accent text-gray-50"
						:disabled="loginRequest"
						@click="createProfile"
					>
						<p v-if="!loginRequest">Create Profile</p>
						<div
							class="flex flex-row justify-center items-center"
							v-if="loginRequest"
						>
							<span class="loading loading-spinner mr-1 -ml-2"></span>
							Loading
						</div>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>
