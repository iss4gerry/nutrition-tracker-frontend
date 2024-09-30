export type Response<T, P = undefined> = {
	status: number;
	message: string;
	data: T;
	pagination?: P;
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

export type HistoryResponse = {
	id?: string;
	userId?: string;
	foodName: string;
	foodInformation: string;
	totalCalorie: number;
	totalCarbohydrate: number;
	totalSugar: number;
	totalFat: number;
	totalProtein: number;
	date: Date;
};

export type Pagination = {
	currentPage: number;
	pageSize: number;
	totalItems: number;
	totalPage: number;
};

export type LoginResponse = {
	id: string;
	name: string;
	email: string;
	password: string;
	role: string;
	createdAt: string;
	updatedAt: string;
	isEmailVerified: boolean;
};

export type FoodIdeaResponse<T> = {
	food1: T;
	food2: T;
	food3: T;
	food4: T;
};

export type FoodIdea = {
	foodName: string;
	information: string;
	calorie: string;
	sugar: string;
	carbohydrate: string;
	fat: string;
	protein: string;
};

export type ProfileResponse = {
	id: string;
	userid: string;
	gender: string;
	dateOfBirth: Date;
	allergies: string;
	weight: number;
	height: number;
	createdAt: Date;
	updatedAt: Date;
	user: {
		name: string;
		email: string;
	};
};

export interface Profile {
	id: string;
	userId: string;
	gender: string;
	dateOfBirth: string;
	allergies: string;
	weight: number;
	height: number;
	createdAt: string;
	updatedAt: string;
}

export interface DailyNutrition {
	id: string;
	userId: string;
	dailyCalorie: number;
	dailyCarbohydrate: number;
	dailySugar: number;
	dailyFat: number;
	dailyProtein: number;
	createdAt: string;
	updatedAt: string;
}

export interface CreateProfileData {
	profile: Profile;
	dailyNutrition: DailyNutrition;
}

export interface CreateProfileResponse {
	status: number;
	message: string;
	data: CreateProfileData;
}
