export enum BudgetCategory {
    Entertainment = "1",
    Bills = "2",
    Groceries = "3",
    DiningOut = "4",
    Transportation = "5",
    PersonalCare = "6",
    Education = "7",
    Lifestyle = "8",
    Shopping = "9",
    General = "10"
}

export enum Color {
    Green = "1",
    Yellow = "2",
    Cyan = "3",
    Navy = "4",
    Red = "5",
    Purple = "6",
    Turquoise = "7",
    Brown = "8",
    Magenta = "9",
    Blue = "10",
    NavyGrey = "11",
    ArmyGreen = "12",
    Pink = "13",
    Gold = "14",
    Orange = "15"
}

export enum SortData {
    Latest = "latest",
    Oldest = "oldest",
    AtoZ = "a-z",
    ZtoA = "z-a",
    Highest = "highest",
    Lowest = "lowest"
}

export interface Budget {
    id: number;
    budget_option: BudgetCategory;
    color: Color;
    maximum: number;
    spend: number;
    free: number;
    latest_spending: {
        id: number;
        name: string;
        date: string;
        avatar: string;
        amount: number;
    }[];
};

export interface Pot {
    id: number,
    name: string,
    target: number,
    total: number,
    color: Color
}

export interface Transaction {
    id: number,
    avatar: string,
    name: string,
    category: BudgetCategory,
    date: string,
    amount: number,
    recurring: boolean
}