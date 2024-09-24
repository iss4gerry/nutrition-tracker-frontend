<script setup lang="ts"></script>

<template>
	<div
		class="container mx-auto flex flex-col items-center space-y-4 p-4 bg-gray-50 rounded-xl shadow-inner max-w-md min-h-[65vh] max-sm:min-h-[70vh]"
	>
		<div class="flex flex-col -mb-8">
			<p class="text-xl font-bold text-accent -mb-3">Food idea</p>
			<p class="text-sm mt-4 -mb-2">
				based on your remaining daily nutrition(๑ᵔ⤙ᵔ๑)
			</p>
			<div class="divider"></div>
		</div>
		<div class="card-container">
			<div
				class="card-body m-2 md:mt-1 bg-primary rounded-2xl p-6 max-h-[130px] md:max-h-[140px]"
			>
				<h2 class="card-title font-semibold text-md max-sm:-mt-3">Food Name</h2>
				<div class="flex justify-between items-start">
					<div class="text-start flex-grow">
						<p class="multiline-ellipsis text-sm max-sm:-mb-3">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
							obcaecati, officiis perferendis eveniet fugit quas dolore
							doloremque hic voluptates Lorem ipsum, dolor sit amet consectetur
							adipisicing elit. Iusto recusandae praesentium molestias quo velit
							adipisci neque? Quae maiores soluta qui illo voluptates saepe,
							maxime pariatur rem totam aliquid labore adipisci.
						</p>
					</div>
					<button class="btn btn-sm btn-accent ml-4">Detail</button>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.multiline-ellipsis {
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	line-clamp: 2;
	overflow: hidden;
	text-overflow: ellipsis;
}
</style>
