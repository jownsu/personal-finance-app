import { BudgetOption, ColorOption } from "./entities";

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

export const BUDGET_OPTIONS = [
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

export const BUDGET_LABELS: Record<BudgetOption, string> = {
    [BudgetOption.Entertainment]: "Entertainment",
    [BudgetOption.Bills]: "Bills",
    [BudgetOption.Groceries]: "Groceries",
    [BudgetOption.DiningOut]: "Dining Out",
    [BudgetOption.Transportation]: "Transportation",
    [BudgetOption.PersonalCare]: "Personal Care",
    [BudgetOption.Education]: "Education",
    [BudgetOption.Lifestyle]: "Lifestyle",
    [BudgetOption.Shopping]: "Shopping",
    [BudgetOption.General]: "General"
}

export const COLORS_VALUE: Record<ColorOption, string> = {
    [ColorOption.Green]: "#277C78",
    [ColorOption.Yellow]: "#F2CDAC",
    [ColorOption.Cyan]: "#82C9D7",
    [ColorOption.Navy]: "#626070",
    [ColorOption.Red]: "#C94736",
    [ColorOption.Purple]: "#826CB0",
    [ColorOption.Turquoise]: "#597C7C",
    [ColorOption.Brown]: "#93674F",
    [ColorOption.Magenta]: "#934F6F",
    [ColorOption.Blue]: "#3F82B2",
    [ColorOption.NavyGrey]: "#97A0AC",
    [ColorOption.ArmyGreen]: "#7F9161",
    [ColorOption.Pink]: "#AF81BA",
    [ColorOption.Gold]: "#CAB361",
    [ColorOption.Orange]: "#BE6C49"
};

export const COLOR_TAG_OPTIONS = [
    {
        value: ColorOption.Green,
        label: "Green",
        theme: COLORS_VALUE[ColorOption.Green],
        is_used: false
    },
    {
        value: ColorOption.Yellow,
        label: "Yellow",
        theme: COLORS_VALUE[ColorOption.Yellow],
        is_used: false
    },
    {
        value: ColorOption.Cyan,
        label: "Cyan",
        theme: COLORS_VALUE[ColorOption.Cyan],
        is_used: false
    },
    {
        value: ColorOption.Navy,
        label: "Navy",
        theme: COLORS_VALUE[ColorOption.Navy],
        is_used: false
    },
    {
        value: ColorOption.Red,
        label: "Red",
        theme: COLORS_VALUE[ColorOption.Red],
        is_used: false
    },
    {
        value: ColorOption.Purple,
        label: "Purple",
        theme: COLORS_VALUE[ColorOption.Purple],
        is_used: false
    },
    {
        value: ColorOption.Turquoise,
        label: "Turquoise",
        theme: COLORS_VALUE[ColorOption.Turquoise],
        is_used: false
    },
    {
        value: ColorOption.Brown,
        label: "Brown",
        theme: COLORS_VALUE[ColorOption.Brown],
        is_used: false
    },
    {
        value: ColorOption.Magenta,
        label: "Magenta",
        theme: COLORS_VALUE[ColorOption.Magenta],
        is_used: false
    },
    {
        value: ColorOption.Blue,
        label: "Blue",
        theme: COLORS_VALUE[ColorOption.Blue],
        is_used: false
    },
    {
        value: ColorOption.NavyGrey,
        label: "Grey",
        theme: COLORS_VALUE[ColorOption.NavyGrey],
        is_used: false
    },
    {
        value: ColorOption.ArmyGreen,
        label: "Army Green",
        theme: COLORS_VALUE[ColorOption.ArmyGreen],
        is_used: false
    },
    {
        value: ColorOption.Pink,
        label: "Pink",
        theme: COLORS_VALUE[ColorOption.Pink],
        is_used: false
    },
    {
        value: ColorOption.Gold,
        label: "Gold",
        theme: COLORS_VALUE[ColorOption.Gold],
        is_used: false
    },
    {
        value: ColorOption.Orange,
        label: "Orange",
        theme: COLORS_VALUE[ColorOption.Orange],
        is_used: false
    }
]