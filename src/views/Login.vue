<script setup lang="ts"></script>

<template>
	<div
		class="flex justify-center items-center w-screen max-sm:w-[44vh] h-[80vh] -mt-10"
	>
		<div class="card text-primary-content h-[50vh]">
			<div class="card-body max-sm:w-[44vh] backdrop-blur-sm mt-10">
				<div class="flex flex-col justify-center items-center space-y-4 w-full">
					<h2 class="text-2xl font-semibold">Login</h2>
					<label class="input input-bordered flex items-center gap-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 16 16"
							fill="currentColor"
							class="h-4 w-4 opacity-70"
						>
							<path
								d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"
							/>
							<path
								d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"
							/>
						</svg>
						<input type="text" class="grow w-[25vh]" placeholder="Email" />
					</label>
					<label class="input input-bordered flex items-center gap-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 16 16"
							fill="currentColor"
							class="h-4 w-4 opacity-70"
						>
							<path
								fill-rule="evenodd"
								d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
								clip-rule="evenodd"
							/>
						</svg>
						<input
							type="password"
							class="grow w-[25vh]"
							placeholder="Password"
						/>
					</label>
					<button class="btn w-[31vh] bg-accent text-gray-50">Login</button>
					<div class="flex flex-row w-[30vh] justify-between">
						<div class="flex flex-row justify-center items-center">
							<input type="checkbox" class="checkbox w-3 h-3 mr-1" />
							<p class="text-xs">Remember me</p>
						</div>
						<a href="#" class="text-xs">Forgot Password</a>
					</div>
					<div class="flex flex-row items-center justify-center">
						<p class="text-xs mr-1">Dont have an account?</p>
						<router-link
							to="register"
							class="text-xs font-semibold text-gray-500"
							>Register</router-link
						>
					</div>
					<div class="divider text-xs">Or sign with</div>
					<div class="flex flex-row flex-wrap w-[30vh] justify-between">
						<button class="btn w-[14vh] bg-accent text-gray-50">Google</button>
						<button class="btn w-[14vh] bg-accent text-gray-50">Twitter</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
