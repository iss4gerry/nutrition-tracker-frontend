export type Response<T> = {
	status: number;
	message: string;
	data: T;
};

export type NutritionResponse = {
	dailyCalorie: number;
	dailyProtein: number;
	dailyFat: number;
	dailyCarbohydrate: number;
	dailySugar: number;
};

export type ProgressNutrition = {
	totalCalories: number;
	totalProtein: number;
	totalFat: number;
	totalCarbohydrate: number;
	totalSugar: number;
};

export type FoodResponse<T> = {
	foodInfo: {
		foodName: string;
		foodInformation: string;
		calorie: string;
		sugar: string;
		carbohydrate: string;
		fat: string;
		protein: string;
	};
	progressNutrition: T;
};
