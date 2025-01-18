import { BudgetOption, ColorOption } from "./entities";

export const COLORS = {
    green: "#277C78",
    yellow: "#F2CDAC",
    cyan: "#82C9D7",
    navy: "#626070",
    red: "#C94736",
    purple: "#826CB0",
    turquoise: "#597C7C",
    brown: "#93674F",
    magenta: "#934F6F",
    blue: "#3F82B2",
    navy_grey: "#97A0AC",
    army_green: "#7F9161",
    pink: "#AF81BA",
    gold: "#CAB361",
    orange: "#BE6C49"
};

export const sort_options = [
    { 
        value: "1", 
        label: "Latest" 
    },
    { 
        value: "2", 
        label: "Oldest" 
    },
    { 
        value: "3", 
        label: "A to Z" 
    },
    { 
        value: "4", 
        label: "Z to A" 
    },
    { 
        value: "5", 
        label: "Highest" 
    },
    { 
        value: "6", 
        label: "Lowest" 
    }
];

export const category_options = [
    {
        value: "1",
        label: "All Transactions"
    },
    {
        value: "2",
        label: "Entertainment"
    },
    {
        value: "3",
        label: "Bills"
    },
    {
        value: "4",
        label: "Groceries"
    },
    {
        value: "5",
        label: "Dining Out"
    },
    {
        value: "6",
        label: "Transportation"
    },
    {
        value: "7",
        label: "Personal Care"
    },
    {
        value: "8",
        label: "Education"
    },
    {
        value: "9",
        label: "Lifestyle"
    },
    {
        value: "10",
        label: "Shopping"
    },
    {
        value: "11",
        label: "General"
    }
]

export const budget_options = [
    {
        value: BudgetOption.Entertainment,
        label: "Entertainment"
    },
    {
        value: BudgetOption.Bills,
        label: "Bills"
    },
    {
        value: BudgetOption.Groceries,
        label: "Groceries"
    },
    {
        value: BudgetOption.DiningOut,
        label: "Dining Out"
    },
    {
        value: BudgetOption.Transportation,
        label: "Transportation"
    },
    {
        value: BudgetOption.PersonalCare,
        label: "Personal Care"
    },
    {
        value: BudgetOption.Education,
        label: "Education"
    },
    {
        value: BudgetOption.Lifestyle,
        label: "Lifestyle"
    },
    {
        value: BudgetOption.Shopping,
        label: "Shopping"
    },
    {
        value: BudgetOption.General,
        label: "General"
    }
]

export const color_tag_options = [
    {
        value: ColorOption.Green,
        label: "Green",
        theme: COLORS.green,
        is_used: false
    },
    {
        value: ColorOption.Yellow,
        label: "Yellow",
        theme: COLORS.yellow,
        is_used: false
    },
    {
        value: ColorOption.Cyan,
        label: "Cyan",
        theme: COLORS.cyan,
        is_used: false
    },
    {
        value: ColorOption.Navy,
        label: "Navy",
        theme: COLORS.navy,
        is_used: false
    },
    {
        value: ColorOption.Red,
        label: "Red",
        theme: COLORS.red,
        is_used: false
    },
    {
        value: ColorOption.Purple,
        label: "Purple",
        theme: COLORS.purple,
        is_used: false
    },
    {
        value: ColorOption.Turquoise,
        label: "Turquoise",
        theme: COLORS.turquoise,
        is_used: false
    },
    {
        value: ColorOption.Brown,
        label: "Brown",
        theme: COLORS.brown,
        is_used: false
    },
    {
        value: ColorOption.Magenta,
        label: "Magenta",
        theme: COLORS.magenta,
        is_used: false
    },
    {
        value: ColorOption.Blue,
        label: "Blue",
        theme: COLORS.blue,
        is_used: false
    },
    {
        value: ColorOption.NavyGrey,
        label: "Grey",
        theme: COLORS.navy_grey,
        is_used: false
    },
    {
        value: ColorOption.ArmyGreen,
        label: "Army Green",
        theme: COLORS.army_green,
        is_used: false
    },
    {
        value: ColorOption.Pink,
        label: "Pink",
        theme: COLORS.pink,
        is_used: false
    },
    {
        value: ColorOption.Gold,
        label: "Gold",
        theme: COLORS.gold,
        is_used: false
    },
    {
        value: ColorOption.Orange,
        label: "Orange",
        theme: COLORS.orange,
        is_used: false
    }
]