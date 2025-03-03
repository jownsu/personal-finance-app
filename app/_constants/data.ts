import { BudgetCategory, Color } from "./entities";

export const balance = {
    current: 4836.0,
    income: 3814.25,
    expenses: 1700.5
};

export const total_saved = 850;

export const pots_overview = [
    {
        id: 1,
        name: "Savings",
        value: 159,
        bg: "#277C78"
    },
    {
        id: 2,
        name: "Gift",
        value: 40,
        bg: "#82C9D7"
    },
    {
        id: 3,
        name: "Concert Ticket",
        value: 110,
        bg: "#626070"
    },
    {
        id: 4,
        name: "New Laptop",
        value: 10,
        bg: "#F2CDAC"
    }
];

export const transactions_overview = [
    {
        id: 1,
        avatar: "/images/avatars/emma-richardson.jpg",
        name: "Emma Richardson",
        category: "General",
        date: "2024-08-19T14:23:11Z",
        amount: 75.5,
        recurring: false
    },
    {
        id: 2,
        avatar: "/images/avatars/savory-bites-bistro.jpg",
        name: "Savory Bites Bistro",
        category: "Dining Out",
        date: "2024-08-19T20:23:11Z",
        amount: -55.5,
        recurring: false
    },
    {
        id: 3,
        avatar: "/images/avatars/daniel-carter.jpg",
        name: "Daniel Carter",
        category: "General",
        date: "2024-08-18T09:45:32Z",
        amount: -42.3,
        recurring: false
    },
    {
        id: 4,
        avatar: "/images/avatars/sun-park.jpg",
        name: "Sun Park",
        category: "General",
        date: "2024-08-17T16:12:05Z",
        amount: 120.0,
        recurring: false
    },
    {
        id: 5,
        avatar: "/images/avatars/urban-services-hub.jpg",
        name: "Urban Services Hub",
        category: "General",
        date: "2024-08-17T21:08:09Z",
        amount: -65.0,
        recurring: false
    }
];

export const transactions = [
    {
        id: 1,
        avatar: "/images/avatars/emma-richardson.jpg",
        name: "Emma Richardson",
        category: BudgetCategory.General,
        date: "2024-08-19T14:23:11Z",
        amount: 75.5,
        recurring: false
    },
    {
        id: 2,
        avatar: "/images/avatars/savory-bites-bistro.jpg",
        name: "Savory Bites Bistro",
        category: BudgetCategory.DiningOut,
        date: "2024-08-19T20:23:11Z",
        amount: -55.5,
        recurring: false
    },
    {
        id: 3,
        avatar: "/images/avatars/daniel-carter.jpg",
        name: "Daniel Carter",
        category: BudgetCategory.General,
        date: "2024-08-18T09:45:32Z",
        amount: -42.3,
        recurring: false
    },
    {
        id: 4,
        avatar: "/images/avatars/sun-park.jpg",
        name: "Sun Park",
        category: BudgetCategory.General,
        date: "2024-08-17T16:12:05Z",
        amount: 120.0,
        recurring: false
    },
    {
        id: 5,
        avatar: "/images/avatars/urban-services-hub.jpg",
        name: "Urban Services Hub",
        category: BudgetCategory.General,
        date: "2024-08-17T21:08:09Z",
        amount: -65.0,
        recurring: false
    },
    {
        id: 6,
        avatar: "/images/avatars/liam-hughes.jpg",
        name: "Liam Hughes",
        category: BudgetCategory.Groceries,
        date: "2024-08-15T18:20:33Z",
        amount: 65.75,
        recurring: false
    },
    {
        id: 7,
        avatar: "/images/avatars/lily-ramirez.jpg",
        name: "Lily Ramirez",
        category: BudgetCategory.General,
        date: "2024-08-14T13:05:27Z",
        amount: 50.0,
        recurring: false
    },
    {
        id: 8,
        avatar: "/images/avatars/ethan-clark.jpg",
        name: "Ethan Clark",
        category: BudgetCategory.DiningOut,
        date: "2024-08-13T20:15:59Z",
        amount: -32.5,
        recurring: false
    },
    {
        id: 9,
        avatar: "/images/avatars/james-thompson.jpg",
        name: "James Thompson",
        category: BudgetCategory.Entertainment,
        date: "2024-08-11T15:45:38Z",
        amount: -5.0,
        recurring: false
    },
    {
        id: 10,
        avatar: "/images/avatars/pixel-playground.jpg",
        name: "Pixel Playground",
        category: BudgetCategory.Entertainment,
        date: "2024-08-11T18:45:38Z",
        amount: -10.0,
        recurring: true
    },
    {
        id: 11,
        avatar: "/images/avatars/ella-phillips.jpg",
        name: "Ella Phillips",
        category: BudgetCategory.DiningOut,
        date: "2024-08-10T19:22:51Z",
        amount: -45.0,
        recurring: false
    },
    {
        id: 12,
        avatar: "/images/avatars/sofia-peterson.jpg",
        name: "Sofia Peterson",
        category: BudgetCategory.Transportation,
        date: "2024-08-08T08:55:17Z",
        amount: -15.0,
        recurring: false
    },
    {
        id: 13,
        avatar: "/images/avatars/mason-martinez.jpg",
        name: "Mason Martinez",
        category: BudgetCategory.Lifestyle,
        date: "2024-08-07T17:40:29Z",
        amount: -35.25,
        recurring: false
    },
    {
        id: 14,
        avatar: "/images/avatars/green-plate-eatery.jpg",
        name: "Green Plate Eatery",
        category: BudgetCategory.Groceries,
        date: "2024-08-06T08:25:44Z",
        amount: -78.5,
        recurring: false
    },
    {
        id: 15,
        avatar: "/images/avatars/sebastian-cook.jpg",
        name: "Sebastian Cook",
        category: BudgetCategory.Transportation,
        date: "2024-08-06T10:05:44Z",
        amount: -22.5,
        recurring: false
    },
    {
        id: 16,
        avatar: "/images/avatars/william-harris.jpg",
        name: "William Harris",
        category: BudgetCategory.PersonalCare,
        date: "2024-08-05T14:30:56Z",
        amount: -10.0,
        recurring: false
    },
    {
        id: 17,
        avatar: "/images/avatars/elevate-education.jpg",
        name: "Elevate Education",
        category: BudgetCategory.Education,
        date: "2024-08-04T11:15:22Z",
        amount: -50.0,
        recurring: true
    },
    {
        id: 18,
        avatar: "/images/avatars/serenity-spa-and-wellness.jpg",
        name: "Serenity Spa & Wellness",
        category: BudgetCategory.PersonalCare,
        date: "2024-08-03T14:00:37Z",
        amount: -30.0,
        recurring: true
    },
    {
        id: 19,
        avatar: "/images/avatars/spark-electric-solutions.jpg",
        name: "Spark Electric Solutions",
        category: BudgetCategory.Bills,
        date: "2024-08-02T09:25:11Z",
        amount: -100.0,
        recurring: true
    },
    {
        id: 20,
        avatar: "/images/avatars/rina-sato.jpg",
        name: "Rina Sato",
        category: BudgetCategory.Bills,
        date: "2024-08-02T13:31:11Z",
        amount: -50.0,
        recurring: false
    },
    {
        id: 21,
        avatar: "/images/avatars/swift-ride-share.jpg",
        name: "Swift Ride Share",
        category: BudgetCategory.Transportation,
        date: "2024-08-01T18:40:33Z",
        amount: -18.75,
        recurring: false
    },
    {
        id: 22,
        avatar: "/images/avatars/aqua-flow-utilities.jpg",
        name: "Aqua Flow Utilities",
        category: BudgetCategory.Bills,
        date: "2024-07-30T13:20:14Z",
        amount: -100.0,
        recurring: true
    },
    {
        id: 23,
        avatar: "/images/avatars/ecofuel-energy.jpg",
        name: "EcoFuel Energy",
        category: BudgetCategory.Bills,
        date: "2024-07-29T11:55:29Z",
        amount: -35.0,
        recurring: true
    },
    {
        id: 24,
        avatar: "/images/avatars/yuna-kim.jpg",
        name: "Yuna Kim",
        category: BudgetCategory.DiningOut,
        date: "2024-07-29T13:51:29Z",
        amount: -28.5,
        recurring: false
    },
    {
        id: 25,
        avatar: "/images/avatars/flavor-fiesta.jpg",
        name: "Flavor Fiesta",
        category: BudgetCategory.DiningOut,
        date: "2024-07-27T20:15:06Z",
        amount: -42.75,
        recurring: false
    },
    {
        id: 26,
        avatar: "/images/avatars/harper-edwards.jpg",
        name: "Harper Edwards",
        category: BudgetCategory.Shopping,
        date: "2024-07-26T09:43:23Z",
        amount: -89.99,
        recurring: false
    },
    {
        id: 27,
        avatar: "/images/avatars/buzz-marketing-group.jpg",
        name: "Buzz Marketing Group",
        category: BudgetCategory.General,
        date: "2024-07-26T14:40:23Z",
        amount: 3358.0,
        recurring: false
    },
    {
        id: 28,
        avatar: "/images/avatars/technova-innovations.jpg",
        name: "TechNova Innovations",
        category: BudgetCategory.Shopping,
        date: "2024-07-25T16:25:37Z",
        amount: -29.99,
        recurring: false
    },
    {
        id: 29,
        avatar: "/images/avatars/bytewise.jpg",
        name: "ByteWise",
        category: BudgetCategory.Lifestyle,
        date: "2024-07-23T09:35:14Z",
        amount: -49.99,
        recurring: true
    },
    {
        id: 30,
        avatar: "/images/avatars/nimbus-data-storage.jpg",
        name: "Nimbus Data Storage",
        category: BudgetCategory.Bills,
        date: "2024-07-21T10:05:42Z",
        amount: -9.99,
        recurring: true
    },
    {
        id: 31,
        avatar: "/images/avatars/emma-richardson.jpg",
        name: "Emma Richardson",
        category: BudgetCategory.General,
        date: "2024-07-20T17:30:55Z",
        amount: -25.0,
        recurring: false
    },
    {
        id: 32,
        avatar: "/images/avatars/daniel-carter.jpg",
        name: "Daniel Carter",
        category: BudgetCategory.General,
        date: "2024-07-19T12:45:09Z",
        amount: 50.0,
        recurring: false
    },
    {
        id: 33,
        avatar: "/images/avatars/sun-park.jpg",
        name: "Sun Park",
        category: BudgetCategory.General,
        date: "2024-07-18T19:20:23Z",
        amount: -38.5,
        recurring: false
    },
    {
        id: 34,
        avatar: "/images/avatars/harper-edwards.jpg",
        name: "Harper Edwards",
        category: BudgetCategory.Shopping,
        date: "2024-07-17T14:55:37Z",
        amount: -29.99,
        recurring: false
    },
    {
        id: 35,
        avatar: "/images/avatars/liam-hughes.jpg",
        name: "Liam Hughes",
        category: BudgetCategory.Groceries,
        date: "2024-07-16T10:10:51Z",
        amount: -52.75,
        recurring: false
    },
    {
        id: 36,
        avatar: "/images/avatars/lily-ramirez.jpg",
        name: "Lily Ramirez",
        category: BudgetCategory.General,
        date: "2024-07-15T16:35:04Z",
        amount: 75.0,
        recurring: false
    },
    {
        id: 37,
        avatar: "/images/avatars/ethan-clark.jpg",
        name: "Ethan Clark",
        category: BudgetCategory.DiningOut,
        date: "2024-07-14T20:50:18Z",
        amount: -41.25,
        recurring: false
    },
    {
        id: 38,
        avatar: "/images/avatars/rina-sato.jpg",
        name: "Rina Sato",
        category: BudgetCategory.Entertainment,
        date: "2024-07-13T09:15:32Z",
        amount: -10.0,
        recurring: false
    },
    {
        id: 39,
        avatar: "/images/avatars/james-thompson.jpg",
        name: "James Thompson",
        category: BudgetCategory.Bills,
        date: "2024-07-12T13:40:46Z",
        amount: -95.5,
        recurring: false
    },
    {
        id: 40,
        avatar: "/images/avatars/ella-phillips.jpg",
        name: "Ella Phillips",
        category: BudgetCategory.DiningOut,
        date: "2024-07-11T18:05:59Z",
        amount: -33.75,
        recurring: false
    },
    {
        id: 41,
        avatar: "/images/avatars/yuna-kim.jpg",
        name: "Yuna Kim",
        category: BudgetCategory.DiningOut,
        date: "2024-07-10T12:30:13Z",
        amount: -27.5,
        recurring: false
    },
    {
        id: 42,
        avatar: "/images/avatars/sofia-peterson.jpg",
        name: "Sofia Peterson",
        category: BudgetCategory.Transportation,
        date: "2024-07-09T08:55:27Z",
        amount: -12.5,
        recurring: false
    },
    {
        id: 43,
        avatar: "/images/avatars/mason-martinez.jpg",
        name: "Mason Martinez",
        category: BudgetCategory.Lifestyle,
        date: "2024-07-08T15:20:41Z",
        amount: -65.0,
        recurring: false
    },
    {
        id: 44,
        avatar: "/images/avatars/sebastian-cook.jpg",
        name: "Sebastian Cook",
        category: BudgetCategory.Transportation,
        date: "2024-07-07T11:45:55Z",
        amount: -20.0,
        recurring: false
    },
    {
        id: 45,
        avatar: "/images/avatars/william-harris.jpg",
        name: "William Harris",
        category: BudgetCategory.General,
        date: "2024-07-06T17:10:09Z",
        amount: 20.0,
        recurring: false
    },
    {
        id: 46,
        avatar: "/images/avatars/elevate-education.jpg",
        name: "Elevate Education",
        category: BudgetCategory.Education,
        date: "2024-07-05T11:15:22Z",
        amount: -50.0,
        recurring: true
    },
    {
        id: 47,
        avatar: "/images/avatars/serenity-spa-and-wellness.jpg",
        name: "Serenity Spa & Wellness",
        category: BudgetCategory.PersonalCare,
        date: "2024-07-03T14:00:37Z",
        amount: -30.0,
        recurring: true
    },
    {
        id: 48,
        avatar: "/images/avatars/spark-electric-solutions.jpg",
        name: "Spark Electric Solutions",
        category: BudgetCategory.Bills,
        date: "2024-07-02T09:25:51Z",
        amount: -100.0,
        recurring: true
    },
    {
        id: 49,
        avatar: "/images/avatars/swift-ride-share.jpg",
        name: "Swift Ride Share",
        category: BudgetCategory.Transportation,
        date: "2024-07-02T19:50:05Z",
        amount: -16.5,
        recurring: false
    }
];

export const budgets = [
    {
        id: 1,
        budget_option: BudgetCategory.Entertainment,
        color: Color.Green,
        maximum: 50,
        spend: 25,
        free: 25,
        latest_spending: [
            {
                id: 1,
                name: "Papa Software",
                date: "2024-08-16T14:23:11Z",
                avatar: "/images/avatars/aqua-flow-utilities.jpg",
                amount: -10
            },
            {
                id: 2,
                name: "Quebeck Service",
                date: "2024-08-12T14:23:11Z",
                avatar: "/images/avatars/buzz-marketing-group.jpg",
                amount: -5
            },
            {
                id: 3,
                name: "Romeo Cloud Service",
                date: "2024-08-05T14:23:11Z",
                avatar: "/images/avatars/bytewise.jpg",
                amount: -10
            }
        ]
    },
    {
        id: 2,
        budget_option: BudgetCategory.Bills,
        color: Color.Cyan,
        maximum: 750,
        spend: 150,
        free: 600,
        latest_spending: [
            {
                id: 1,
                name: "Spark Electric Solutions",
                date: "2024-08-16T14:23:11Z",
                avatar: "/images/avatars/ecofuel-energy.jpg",
                amount: -100
            },
            {
                id: 2,
                name: "Rina Sato",
                date: "2024-08-12T14:23:11Z",
                avatar: "/images/avatars/elevate-education.jpg",
                amount: -50
            },
            {
                id: 3,
                name: "Aqua Flow Utilities",
                date: "2024-08-05T14:23:11Z",
                avatar: "/images/avatars/flavor-fiesta.jpg",
                amount: -100
            }
        ]
    },
    {
        id: 3,
        budget_option: BudgetCategory.DiningOut,
        color: Color.Yellow,
        maximum: 75,
        spend: 133.75,
        free: 0,
        latest_spending: [
            {
                id: 1,
                name: "Savory Bites Bistro",
                date: "2024-08-16T14:23:11Z",
                avatar: "/images/avatars/green-plate-eatery.jpg",
                amount: -55.5
            },
            {
                id: 2,
                name: "Ethan Clark",
                date: "2024-08-12T14:23:11Z",
                avatar: "/images/avatars/nimbus-data-storage.jpg",
                amount: -32.5
            },
            {
                id: 3,
                name: "Ella Phillips",
                date: "2024-08-05T14:23:11Z",
                avatar: "/images/avatars/pixel-playground.jpg",
                amount: -45.5
            }
        ]
    },
    {
        id: 4,
        budget_option: BudgetCategory.PersonalCare,
        color: Color.Navy,
        maximum: 100,
        spend: 40,
        free: 60,
        latest_spending: [
            {
                id: 1,
                name: "William Harris",
                date: "2024-08-16T14:23:11Z",
                avatar: "/images/avatars/savory-bites-bistro.jpg",
                amount: -10
            },
            {
                id: 2,
                name: "Serenity Spa & Wellness",
                date: "2024-08-12T14:23:11Z",
                avatar: "/images/avatars/serenity-spa-and-wellness.jpg",
                amount: -30
            },
            {
                id: 3,
                name: "Serenity Spa & Wellness",
                date: "2024-08-05T14:23:11Z",
                avatar: "/images/avatars/spark-electric-solutions.jpg",
                amount: -30
            }
        ]
    }
];

export const budgets_overview = [
    {
        id: 1,
        name: "Entertainment",
        value: 50,
        max_value: 100,
        bg: "#277C78"
    },
    {
        id: 2,
        name: "Bills",
        value: 750,
        max_value: 1250,
        bg: "#82C9D7"
    },
    {
        id: 3,
        name: "Dining Out",
        value: 75,
        max_value: 150,
        bg: "#F2CDAC"
    },
    {
        id: 4,
        name: "Personal Care",
        value: 100,
        max_value: 450,
        bg: "#626070"
    }
];

export const budgets_overview_overall = {
    limit: 975,
    total: 338
};

export const pots = [
    {
        id: 1,
        name: "Savings",
        target: 2000.0,
        total: 159.0,
        color: Color.Green
    },
    {
        id: 2,
        name: "Concert Ticket",
        target: 150.0,
        total: 110.0,
        color: Color.Navy
    },
    {
        id: 3,
        name: "Gift",
        target: 150.0,
        total: 110.0,
        color: Color.Cyan
    },
    {
        id: 4,
        name: "New Laptop",
        target: 1000.0,
        total: 10.0,
        color: Color.Yellow
    },
    {
        id: 5,
        name: "Holiday",
        target: 1440.0,
        total: 531.0,
        color: Color.Purple
    }
];

export const bills = [
    {
        id: 1,
        name: "Spark Electric Solutions",
        avatar: "/images/avatars/spark-electric-solutions.jpg",
        amount: 100,
        due_date: "Monthly - 2nd",
        date: "2024-08-19T14:23:11Z",
        is_due: false,
        is_paid: true
    },
    {
        id: 2,
        name: "Serenity Spa & Wellness",
        avatar: "/images/avatars/serenity-spa-and-wellness.jpg",
        amount: 30,
        due_date: "Monthly - 3rd",
        date: "2024-08-19T20:23:11Z",
        is_due: false,
        is_paid: true
    },
    {
        id: 3,
        name: "Elevate Education",
        avatar: "/images/avatars/elevate-education.jpg",
        amount: 50,
        due_date: "Monthly - 4th",
        date: "2024-08-18T09:45:32Z",
        is_due: false,
        is_paid: true
    },
    {
        id: 4,
        name: "Pixel Playground",
        avatar: "/images/avatars/pixel-playground.jpg",
        amount: 10,
        due_date: "Monthly - 11th",
        date: "2024-08-17T16:12:05Z",
        is_due: false,
        is_paid: true
    },
    {
        id: 5,
        name: "Nimbus Data Storage",
        avatar: "/images/avatars/nimbus-data-storage.jpg",
        amount: 9.99,
        due_date: "Monthly - 21st",
        date: "2024-08-17T21:08:09Z",
        is_due: true,
        is_paid: false
    },
    {
        id: 6,
        name: "ByteWise",
        avatar: "/images/avatars/bytewise.jpg",
        amount: 49.99,
        due_date: "Monthly - 23rd",
        date: "2024-08-15T18:20:33Z",
        is_due: true,
        is_paid: false
    },
    {
        id: 7,
        name: "EcoFuel Energy",
        avatar: "/images/avatars/ecofuel-energy.jpg",
        amount: 35,
        due_date: "Monthly - 29th",
        date: "2024-08-14T13:05:27Z",
        is_due: false,
        is_paid: false
    },
    {
        id: 8,
        name: "Aqua Flow Utilities",
        avatar: "/images/avatars/aqua-flow-utilities.jpg",
        amount: 100,
        due_date: "Monthly - 30th",
        date: "2024-08-13T20:15:59Z",
        is_due: false,
        is_paid: false
    }
];

export const bills_overview = [
    {
        name: "Paid Bills",
        color: Color.Green,
        amount: 190
    },
    {
        name: "Total Upcoming",
        color: Color.Yellow,
        amount: 194.98
    },
    {
        name: "Due Soon",
        color: Color.Cyan,
        amount: 59.98
    }
];
