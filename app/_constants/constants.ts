import { BudgetCategory, Color, SortData } from "./entities";

export const SORT_OPTIONS = [
    { 
        value: SortData.Latest, 
        label: "Latest" 
    },
    { 
        value: SortData.Oldest, 
        label: "Oldest" 
    },
    { 
        value: SortData.AtoZ, 
        label: "A to Z" 
    },
    { 
        value: SortData.ZtoA, 
        label: "Z to A" 
    },
    { 
        value: SortData.Highest, 
        label: "Highest" 
    },
    { 
        value: SortData.Lowest, 
        label: "Lowest" 
    }
];

export const BUDGET_OPTIONS = [
    {
        value: BudgetCategory.Entertainment,
        label: "Entertainment"
    },
    {
        value: BudgetCategory.Bills,
        label: "Bills"
    },
    {
        value: BudgetCategory.Groceries,
        label: "Groceries"
    },
    {
        value: BudgetCategory.DiningOut,
        label: "Dining Out"
    },
    {
        value: BudgetCategory.Transportation,
        label: "Transportation"
    },
    {
        value: BudgetCategory.PersonalCare,
        label: "Personal Care"
    },
    {
        value: BudgetCategory.Education,
        label: "Education"
    },
    {
        value: BudgetCategory.Lifestyle,
        label: "Lifestyle"
    },
    {
        value: BudgetCategory.Shopping,
        label: "Shopping"
    },
    {
        value: BudgetCategory.General,
        label: "General"
    }
]

export const BUDGET_LABELS: Record<BudgetCategory, string> = {
    [BudgetCategory.Entertainment]: "Entertainment",
    [BudgetCategory.Bills]: "Bills",
    [BudgetCategory.Groceries]: "Groceries",
    [BudgetCategory.DiningOut]: "Dining Out",
    [BudgetCategory.Transportation]: "Transportation",
    [BudgetCategory.PersonalCare]: "Personal Care",
    [BudgetCategory.Education]: "Education",
    [BudgetCategory.Lifestyle]: "Lifestyle",
    [BudgetCategory.Shopping]: "Shopping",
    [BudgetCategory.General]: "General"
}

export const COLORS_VALUE: Record<Color, string> = {
    [Color.Green]: "#277C78",
    [Color.Yellow]: "#F2CDAC",
    [Color.Cyan]: "#82C9D7",
    [Color.Navy]: "#626070",
    [Color.Red]: "#C94736",
    [Color.Purple]: "#826CB0",
    [Color.Turquoise]: "#597C7C",
    [Color.Brown]: "#93674F",
    [Color.Magenta]: "#934F6F",
    [Color.Blue]: "#3F82B2",
    [Color.NavyGrey]: "#97A0AC",
    [Color.ArmyGreen]: "#7F9161",
    [Color.Pink]: "#AF81BA",
    [Color.Gold]: "#CAB361",
    [Color.Orange]: "#BE6C49"
};

export const COLOR_TAG_OPTIONS = [
    {
        value: Color.Green,
        label: "Green",
        theme: COLORS_VALUE[Color.Green],
        is_used: false
    },
    {
        value: Color.Yellow,
        label: "Yellow",
        theme: COLORS_VALUE[Color.Yellow],
        is_used: false
    },
    {
        value: Color.Cyan,
        label: "Cyan",
        theme: COLORS_VALUE[Color.Cyan],
        is_used: false
    },
    {
        value: Color.Navy,
        label: "Navy",
        theme: COLORS_VALUE[Color.Navy],
        is_used: false
    },
    {
        value: Color.Red,
        label: "Red",
        theme: COLORS_VALUE[Color.Red],
        is_used: false
    },
    {
        value: Color.Purple,
        label: "Purple",
        theme: COLORS_VALUE[Color.Purple],
        is_used: false
    },
    {
        value: Color.Turquoise,
        label: "Turquoise",
        theme: COLORS_VALUE[Color.Turquoise],
        is_used: false
    },
    {
        value: Color.Brown,
        label: "Brown",
        theme: COLORS_VALUE[Color.Brown],
        is_used: false
    },
    {
        value: Color.Magenta,
        label: "Magenta",
        theme: COLORS_VALUE[Color.Magenta],
        is_used: false
    },
    {
        value: Color.Blue,
        label: "Blue",
        theme: COLORS_VALUE[Color.Blue],
        is_used: false
    },
    {
        value: Color.NavyGrey,
        label: "Grey",
        theme: COLORS_VALUE[Color.NavyGrey],
        is_used: false
    },
    {
        value: Color.ArmyGreen,
        label: "Army Green",
        theme: COLORS_VALUE[Color.ArmyGreen],
        is_used: false
    },
    {
        value: Color.Pink,
        label: "Pink",
        theme: COLORS_VALUE[Color.Pink],
        is_used: false
    },
    {
        value: Color.Gold,
        label: "Gold",
        theme: COLORS_VALUE[Color.Gold],
        is_used: false
    },
    {
        value: Color.Orange,
        label: "Orange",
        theme: COLORS_VALUE[Color.Orange],
        is_used: false
    }
]